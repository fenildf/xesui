/**
 * XESUI 
 * Copyright 2013 xueersi.com All rights reserved.
 *
 * @description 
 *
 * @author Marco (marco@xesui.com)
 * @modify 2013-07-01 16:36:35
 * @version $Id$
 * 
 * @links http://xesui.com
 */


/**
 * @name ui.pages.js
 * @description 分页组件
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 *
 * @example
 
   1. 默认ID的调用方式：如果不写ID则直接调用ui_pages默认ID
   		<div id="ui_pages"></div>
   		xue.pages.config({
			pages : 30
   		}).go(1);

   2. 非默认ID(ui_pages)的调用方式：size为当前页左右共显示的页码的节点数
 		<div id="pages"></div>
 		xue.pages('pages').config({
			pages   : 20,
			current : 2,
			size    : 5,
			callback: function(current, pages){
				xue.pages('pages').go(current);
			}
 		});

   3. ajax分页，在配置参数中设置callback回掉函数，返回点击的页码和总页数
   		<div id="ajax_pages"></div>
   		xue.pages('ajax_pages').config({
			pages     : 10,
			callback  : function(pageNumber, allPages){
				$.ajax({
					url : '',
					success : function(data){
						if(data.message === 'success'){
							xue.pages('ajax_pages').go(pageNumber);
						}
					}
				});
			}
   		});
 *
 *
 *
 * 
 */


/**
 * 分页构造
 * @param  {string}    id       要渲染分页的容器ID
 * @return {Object}  ui.pages   设置完ID之后返回分页对象
 */
ui.pages = ui.pages || function(id){ ui.pages.id = id || 'ui_pages'; return ui.pages; };

(function(){

	var pg = ui.pages;

	/* ========================== 属性  =============================== */

	/**
	 * 用于存储多个分页内容
	 * @type {Object}
	 *
	 * {
		'pages_id': {
			id:'',
			. -----
			.     |
			.      > opt里面的所有内容
			.     |
			. -----
			fn :{},
			callback : null
		}
	};
	 */
	pg.queue = {};
	
	/**
	 * 分页设置
	 * @type {Object}
	 *
	 * 全局初始化参数，会根据不同ID存入到队列中：pd.queue[id]
	 */
	var opt = {
		id  	 : 'ui_pages',
		handle   : '#ui_pages',		// 存放分页内容的容器：初始化之后是jquery对象
		size 	 : 5,				// 连续显示的页码节点数
		bitwise  : 2,				// 当前页码左右要显示页数的长度
		current  : 1,				// 当前页数
		pages    : 20,				// 总页数
		prevText : '上一页',			// 上一页显示的文字
		nextText : '下一页',			// 下一页显示的文字
		prev 	 : '.pages_prev',	// 上一页的样式
		next  	 : '.pages_next',	// 下一页的样式
		item     : '.pages_item',	// 分页节点
		html     : '',				// 存放分页HTML内容
		fn       : {},				// 事件绑定
		firstText: null,			// 第一页显示的文本: 默认显示 1
		lastText : null,			// 最后一页显示的文本：默认显示 总页数
		isMore   : true,			// 是否显示“...”,
		callback : false 			// 点击页数时的回掉函数，返回2个参数：当前页数和总页数
	};

	/**
	 * 分页模板
	 * 
	 * @type {Object}
	 * 
	 * wrap   : 分页外围容器
	 * page   : 分页节点
	 * more   : 省略号节点
	 * current: 当前页码节点
	 * prev   : 上一页节点
	 * next   : 下一页节点
	 */
	var tpl = {
		wrap 	: '<ol class="ui_pages"></ol>',
		page    : '<li class="pages_item" data-page="$pageData$"><a href="javascript:void(0);">$pageText$</a></li>',
		more    : '<li class="pages_more"><span>...</span></li>',
		current : '<li class="pages_current"><span>$pageText$</span></li>',
		prev 	: '<li class="pages_prev"><a href="javascript:void(0);" class="btn btn_gray $disable$">' + opt.prevText + '</a></li>',
		next 	: '<li class="pages_next"><a href="javascript:void(0);" class="btn btn_gray $disable$">' + opt.nextText + '</a></li>'
	};

	/* ========================== 方法 =============================== */
	
	/**
	 * 通过外部的设置来修改内部的配置；
	 */
	pg.config = function(o){

		/**
		 * 如果没有传入ID(直接调用：xue.pages.config，而非：xue.pages('id').config)
		 * 则直接调用默认ID(opt.id);
		 */
		this.id = this.id === undefined ? opt.id : this.id;

		// 给队列中增加ID标识
		o.id = o.id || this.id;

		// 给队列中增加分页容器
		o.handle = o.handle || $('#'+o.id);

		// 声明将要放置到队列中的配置参数
		var oo = { opt : {} };

		// 如果传入的配置参数是{}对象，则合并到队列中，否则把全局配置参数合并到队列中
		if(typeof(o) === 'object' && o.length === undefined){
			$.extend(oo, opt, o);
		}else{
			$.extend(oo, opt);
		}
		
		// 根据连续页数的长度计算出左右的位移数：如果length = 7 则 bitwise = 3
		oo.bitwise = oo.size >> 1;

		// 配置参数存入到队列当中
		this.queue[this.id] = oo;

		/**
		 * 事件绑定
		 *
		 * 将传入的参数中对应的点击事件存储到队列配置参数当中
		 */
		var fn = undefined;
		if(oo.pageClick || oo.prevClick || oo.nextClick){
			fn = {};
		}
		if(typeof(oo.pageClick) === 'function'){
			oo.fn['pageClick'] = oo.pageClick;
		}

		if(typeof(oo.prevClick) === 'function'){
			oo.fn['prevClick'] = oo.prevClick;
		}
		
		if(typeof(oo.nextClick) === 'function'){
			oo.fn['nextClick'] = oo.nextClick;
		}
		
		// 执行事件绑定
		this.fn(this.id, oo.fn);
		
		// 如果配置参数中的当前页数大于0，且总页数大于0时，执行分页
		if(oo.current > 0 && oo.pages > 0){
			pg(this.id).go(oo.current);
		}

		// 设置完成后 重置变量，防止污染
		o = oo = fn = this.id = undefined;

		return this;

	};

	/**
	 * 返回分页节点
	 * @param  {Number} page 页数
	 * @param  {string} text 显示的文字：如果不传则直接调用页数
	 * @param  {String} tp   节点类型：当前页(current) / 普通页(page)
	 * @return {HTML}        节点HTML
	 */
	pg.createItem = function(page, text, tp){
		var tp = tp === 'current' ? 'current' : 'page';
		var text = text || page;
		var html = tpl[tp].replace('$pageText$', text);

		// 将页数存入到节点中的"data-page"属性中
		html = html.replace('$pageData$', page);

		return html;
	};

	/**
	 * 返回按钮节点
	 * @param  {string}  tp        按钮类型：prev / next
	 * @param  {Boolean} isDisable 是否不可点击
	 * @return {HTML}              按钮节点
	 */
	pg.createBtn = function(tp, isDisable){
		var _tp = tp === 'prev' ? 'prev' : 'next',
			disableCls = isDisable ? 'btn_disable' : '';
		var btn = tpl[_tp].replace('$disable$', disableCls);
		return btn;
	};

	/**
	 * 返回更多节点
	 * 
	 * @return {[type]} 如果设置中禁用更多节点，则返回空值；否则返回HTML节点
	 */
	pg.createMore = function(){
		// 获取队列中的配置
		var opt = this.queue[this.id];

		var btn = opt.isMore ? tpl.more : '';
		return btn;
	};

	/**
	 * 返回所有分页HTML结构
	 * @param  {Number} current 当前页数
	 * @param  {Number} pages   总页数
	 * @return {HTML}           所有分页HTML
	 */
	pg.createPages = function(current, pages){
		// 获取队列中的配置
		var opt = this.queue[this.id];

		/**
		 * 校验分页数
		 * @type {[type]}
		 *
		 * 如果参数中没有总页数，则取配置中的
		 * 如果总也是 <= 0 则取 1；
		 */
		var pages = pages || opt.pages;
		opt.pages = (pages > 0) ? pages : 1;

		
		/**
		 * 校验当前页数
		 * @type {[type]}
		 *
		 * 如果当前页面大于0，则为当前页；
		 * 如果当前页大于总页数，则为总页数；
		 * 如果当前页 <= 0时，则为1；
		 */
		var current = current || opt.current;
		opt.current = (current > 0) 
					? (current > pages ? pages : current) 
					: 1;

		//只有1页的时候只显示1
		if(pages === 1){
			return this.createItem(1, 1, 'current');
		}

		/* 
			----------------------\  开始计算分页  /----------------------
                                   \_____  _____/
                                         \/
		*/
		
		var start, more, items, end, prev, next, length, first, last, html;

		/**
		 * 上一页节点：第一页只读
		 */
		prev  = this.createBtn('prev', (current === 1 ? true : false));
		
		/**
		 * 下一页节点：最后一页只读
		 */
		next  = this.createBtn('next', (current === pages ? true : false));
		
		/**
		 * 连续页码的起始页数
		 */
		start = Number(current - opt.bitwise);
		start = start < 1 ? 1 : start;
		
		/**
		 * 连续页码的结束页数
		 */
		end   = Number(current + opt.bitwise);
		end = end > pages ? pages : end;
		
		/**
		 * “...” 节点
		 */
		more  = this.createMore();
		
		/** 
		 * 第一页：前五个不显示
		 */
		first = (end <= opt.size) ? '' : this.createItem(1, opt.firstText);
		
		/** 
		 * 最后一页：后五个不显示
		 */
		last  = (start > (pages - opt.size)) ? '' : this.createItem(pages, opt.lastText);

		/**
		 * pages(总页数) <= 10 全显示
		 */
		if(pages <= 10){
			html = prev;
			for(var i = 1; i <= pages ; i++){
				var tp = i === current ? 'current' : false;
				html += this.createItem(i, i, tp);
			}
			html += next;
			return html;
		}

		/**
		 * 前五：连续页码的结束数大于等于连续页码数，
		 * 连续页码数具体是多少，按照配置中的连续页码数(opt.size)值确定，默认为连续的5个
		 */
		if(end <= opt.size){
			start = 1;
			end = opt.size;
		}

		/**
		 * 后五：连续页码的起始数大于总页数减去连续页码数
		 */
		if(start > (pages - opt.size)){
			start = (pages - opt.size) + 1;
			end = pages;
		}

		/**
		 * 连续的页数
		 */
		items = '';
		for(var i = start; i <= end; i++){
			var tp = i === current ? 'current' : false;
			items += this.createItem(i, i, tp);
		}

		/* ------------ 开始拼凑分页节点内容 ------------ */
	
		// 上一页 + 首页
		html = prev + first;

		// 前置省略号：如果前面的长度是（连续页数 + 1） 则不显示；
		html += (end <= opt.size + 1) ? '' : more;

		// 分页节点
		html += items;

		// 后置省略号：如果最后剩余的是长度是（连续页数）则不显示；
		html += (start >= (pages - (opt.size))) ? '' : more;

		// 尾页 + 下一页
		html += last + next;

		return html;

	};


	/**
	 * 向页面加入HTML分页代码
	 * @param  {HTML} html [description]
	 * @return {[type]}      [description]
	 */
	pg.append = function(html){
		// 获取队列中的配置
		var opt = this.queue[this.id];

		// 如果没有传入参数，则直接从队列中取出
		var html = html || opt.html;
		
		// 用jquery方法将内容插入到页面中
		$(opt.handle).html(html);
	};

	/**
	 * 返回整个分页的HTML内容
	 * @return {[type]} [description]
	 */
	pg.getPagesHTML = function(){
		// 获取队列中的配置
		var opt = this.queue[this.id];

		// 通过分页计算获取分页内容
		var list = this.createPages(opt.current, opt.pages);
		
		// 将分页外围容器转换为jquery对象
		var wrap = $(tpl.wrap);
		
		// 在外围中插入分页内容
		var html = wrap.html(list);
		
		// 将分页内容存储到队列中
		opt.html = html;

		return html;
	};

	/**
	 * 页面跳转
	 * @param  {Number} currnet 当前页数
	 * @param  {Number} pages   总页数，可选
	 * @return {[type]}         [description]
	 */
	pg.go = function(current, pages){
		// 获取队列中的配置
		var opt = this.queue[this.id];

		/**
		 * 当前页、总页数校准
		 * @type {[type]}
		 */
		opt.current = (current > 0) ? current : opt.current;
		opt.pages = pages || opt.pages;

		var html = this.getPagesHTML()

		// 向页面中插入分页内容
		this.append(html);

		return this;
	};

	/* ========================== 事件 =============================== */

	/**
	 * 事件绑定
	 * @param  {Object} option 支持3种事件：{
	 *                         				pageClick : function(){},
	 *                         				prevClick : function(){},
	 *                         				nextClick : function(){}
	 * 										}
	 * @return {Number}    opt.current    每个事件都会返回点击后的当前页数
	 */
	pg.fn = function(id, option){
		// 获取队列中的配置
		var opt = this.queue[id];

		// 声明默认的点击事件：直接执行go方法；
		var _click = function(num, all){
			pg(id).go(num, opt.pages);
		};

		/**
		 * 检查配置中的事件绑定
		 *
		 * 如果配置中有回掉，则直接绑定回掉函数；
		 * 否则判断在队列中是否配置节点的点击事件，如果有则绑定
		 * 
		 * @param  {Number} num 当前页数
		 * @param  {String} tp  事件类型
		 * @return {[type]}     调用后的返回值： 如果存在回调则会返回 undefined 否则返回 'default'
		 */
		var _checkFn = function(num, tp){
			var tp = tp || 'page';

			// 如果有回调则直接返回回调
			if(opt.callback){
				return opt.callback(num, opt.pages);
			}

			// 如果有：pageClick / parvClick / nextClick则直接返回
			if(opt.fn[ tp + 'Click' ]){
				return opt.fn[ tp + 'Click' ](num, opt.pages);
			}

			// 如果以上检查后都无效，则直接返回，用于点击事件判断
			return 'default';
			
		};

		/**
		 * 声明在点击事件中用到的变量
		 *
		 * currentNumber   : 存储点击页码
		 * checkValue      : 存储检测是否有回调函数的返回值，如果有回调则返回 undefined，否则返回 default 可以直接执行默认事件
		 * i               : 为了防止回调中不执行go方法仍然累计的问题，增加临时存储当前页码的变量，用于点击上/下一页按钮时的页码累计，而非修改真实的当前页码
		 * 
		 * @type {Number}
		 */
		var currentNumber = 1, checkValue = false, i = 1;

		/**
		 * 分页节点点击事件
		 * @return {[type]} [description]
		 */
		opt.handle.on('click', opt.item, function(){

			// 通过节点的data-page属性获取页数
			currentNumber = $(this).data('page');

			checkValue = _checkFn(currentNumber, 'page');

			// 当以上2种情况都没有时，绑定默认的点击事件
			if(checkValue !== undefined){
				return _click(currentNumber);
			}
		});

		/**
		 * 上一页点击事件
		 */
		opt.handle.on('click', opt.prev, function(){

			i = opt.current; i--;

			// 页码校准：上一页不能 < 1;
			currentNumber = (i > 0) ? i : 0;
			
			checkValue = _checkFn(currentNumber, 'prev');
			
			if(checkValue !== undefined){
				return _click(currentNumber);
			}
		});

		/**
		 * 下一页点击事件
		 * @return {[type]} [description]
		 */
		opt.handle.on('click', opt.next, function(){

			i = opt.current; i++;

			// 页码校准：下一页不能 > 总页数
			currentNumber = (i > opt.pages) ? opt.pages : i;
			
			checkValue = _checkFn(currentNumber, 'next');

			if(checkValue !== undefined){
				return _click(currentNumber);
			}
		});
	};

	/**
	 * 自定义点击节点的回掉函数
	 * @param  {Function}    fn             回掉函数
	 * @return {Number}      opt.current    当前页数
	 * @return {jQuery DOM}  data 		    返回jquery构造的分页节点HTML
	 */
	pg.click = function(fn){
		// 获取队列中的配置
		var opt = this.queue[this.id];

		if(typeof fn === 'function'){
			var html = pg(this.id).getPagesHTML();
			return fn(opt.current, html);
		}
	};

})();


// 将分页扩展到xue对象下；
xue.extend('pages', ui.pages);


