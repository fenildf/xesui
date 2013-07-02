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
 */

ui.pages = ui.pages || {};
/* --------------------------------------

	1. 首页：上一页  |1|  2   3   4   5  ... 10  下一页

	2. 前五：上一页   1  |2|  3   4   5  ... 10  下一页
		    上一页   1   2  |3|  4   5  ... 10  下一页

	3. 前六：上一页   1   2   3  |4|  5   6  ...  10  下一页

	4. 中五：上一页   1  ...  3   4  |5|  6   7  ...   10  下一页
			上一页   1  ...  4   5  |6|  7   8  ...   10  下一页

	5. 后六：上一页   1  ...  5   6  |7|  8   9   10  下一页

	6. 后五：上一页   1  ...  6   7  |8|  9   10  下一页
			上一页   1  ...  6   7   8  |9|  10  下一页

	7. 尾页：上一页   1  ...  6   7   8   9  |10|  下一页

	-------------------------------------

	1. 首页：page = first

	2. 前五：page + 2 <= 5

	3. 前六：page + 2 <= 6

	4. 中五：6 < page + 2 <= length - 3
	   		3 < page - 2 < length - 6

	5. 后六：page - 2 >= length - 6

	6. 后五：page - 2 >= length - 5

	7. 尾页：page = length

 --------------------------------------- */







(function(){

	var pg = ui.pages || {};

	/**
	 * 分页设置
	 * @type {Object}
	 */
	var opt = {
		id  	 : 'ui_pages',
		handle   : '#ui_pages',
		length 	 : 5,				// 连续显示的长度
		bitwise  : 2,				// 当前页码左右要显示页数的长度
		current  : 1,				// 当前页数
		pages    : 20,				// 总页数
		prevText : '上一页',			// 上一页显示的文字
		nextText : '下一页',			// 下一页显示的文字
		prev 	 : '.pages_prev',	// 上一页的样式
		next  	 : '.pages_next',	// 下一页的样式
		item     : '.pages_item',
		isMore   : true,			// 是否显示“...”
		callback : null 			// 点击页数时的会掉函数，返回2个参数：当前页数和总页数
	};

	/**
	 * 通过外部的设置来修改内部的配置；
	 */
	pg.config = function(o){
		if(typeof(o) === 'object' && o.length === undefined){
			$.each(o, function(k, v){
				opt[k] = v;
			});	
		}

		this.fn = opt.callback;

		// 根据连续页数的长度计算出左右的位移数：如果length = 7 则 bitwise = 3
		opt.bitwise = opt.length >> 1;

		opt.handle.on('click', opt.item, function(){
			var num = Number($(this).text());
			// pg.go(num);
		});

		opt.handle.on('click', opt.prev, function(){
			opt.current--;
			// pg.go(opt.current);
		});

		opt.handle.on('click', opt.next, function(){
			opt.current++;
			// pg.go(opt.current);
		});

		return this;
	};

	/**
	 * 分页模板
	 * @type {Object}
	 */
	var tpl = {
		wrap 	: '<ol class="ui_pages"></ol>',
		page    : '<li class="pages_item"><a href="javascript:void(0);">$pageText$</a></li>',
		more    : '<li class="pages_more"><span>...</span></li>',
		current : '<li class="pages_current"><span>$pageText$</span></li>',
		prev 	: '<li class="pages_prev"><a href="javascript:void(0);" class="btn btn_gray $disable$">' + opt.prevText + '</a></li>',
		next 	: '<li class="pages_next"><a href="javascript:void(0);" class="btn btn_gray $disable$">' + opt.nextText + '</a></li>'
	};

	/**
	 * 返回分页节点
	 * @param  {Number} page 页数
	 * @param  {String} tp   节点类型：当前页(current) / 普通页(page)
	 * @return {HTML}        节点HTML
	 */
	pg.createItem = function(page, tp){
		var tp = tp === 'current' ? 'current' : 'page';
		var page = tpl[tp].replace('$pageText$', page);
		return page;
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

		var pages = pages || opt.pages;
		var current = current || opt.current;

		// 校验分页数
		if(pages > 0){
			opt.pages = pages;
		}else{
			opt.pages = 1;
		}
		// 校验当前页数
		if(current > 0){
			current = current > pages ? pages : current;
			opt.current = current;
		}else{
			opt.current = 1;
		}

		//只有1页的时候只显示1
		if(pages === 1){
			return pg.createItem(1);
		}

		/* 
			----------------------\  开始计算分页  /----------------------
								   \_____  _____/
								         \/
		*/
		
		var start, more, items, end, prev, next, length, first, last, html;


		// 上一页节点：第一页只读
		prev  = this.createBtn('prev', (current === 1 ? true : false));
		
		// 下一页节点：最后一页只读
		next  = this.createBtn('next', (current === pages ? true : false));
		
		// 连续页数的：起始页数
		start = Number(current - opt.bitwise);
		start = start < 1 ? 1 : start;
		
		// 连续页数的：结束页数
		end   = Number(current + opt.bitwise);
		end = end > pages ? pages : end;
		
		// “...” 节点
		more  = this.createMore();
		
		// 第一个：前五个不显示
		first = (end <= opt.length) ? '' : this.createItem(1);
		
		// 最后一个：后五个不显示
		last  = (start > (pages - opt.length)) ? '' : this.createItem(pages);

		// pages < 10 全显示
		if(pages <= 10){
			html = prev;
			for(var i = 1; i <= pages ; i++){
				var tp = i === current ? 'current' : false;
				html += this.createItem(i, tp);
			}
			html += next;
			return html;
		}

		// 前五：
		if(end <= opt.length){
			start = 1;
			end = opt.length;
		}

		// 后五：page - 2 >= length - 5
		if(start > (pages - opt.length)){
			start = (pages - opt.length) + 1;
			end = pages;
		}

		// 连续的页数
		items = '';
		for(var i = start; i <= end; i++){
			var tp = i === current ? 'current' : false;
			items += this.createItem(i, tp);
		}

		// ------------ 开始拼凑分页 ------------
	
		html = prev + first;

		// 前置省略号：如果前面的长度是（连续页数 + 1） 则不显示；
		html += (end <= opt.length + 1) ? '' : more;

		html += items;

		// 后置省略号：如果最后剩余的是长度是（连续页数）则不显示；
		html += (start >= (pages - (opt.length))) ? '' : more;

		html += last + next;

		return html;

	};


	/**
	 * 页面跳转
	 * @param  {Number} currnet 当前页数
	 * @param  {Number} pages   总页数，可选
	 * @return {[type]}         [description]
	 */
	pg.go = function(currnet, pages){
		var pages = pages || opt.pages;
		var list = this.createPages(currnet, pages);
		var wrap = $(tpl.wrap);
		var html = wrap.html(list);
		// if(this.fn != null){
		// 	// this.fn(num, pages);
		// }
		$(opt.handle).html(html);
	};

})();


// 将分页扩展到xue对象下；
xue.extend('pages', ui.pages);


