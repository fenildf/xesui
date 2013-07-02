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
/*
	
	
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
	
	------------------------------

	1. 首页：page = first

	2. 前五：page + 2 <= 5

	3. 前六：page + 2 <= 6

	4. 中五：6 < page + 2 <= length - 3
	   		3 < page - 2 < length - 6

	5. 后六：page - 2 >= length - 6

	6. 后五：page - 2 >= length - 5

	7. 尾页：page = length






 */
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

	pg.config = function(o){
		if(typeof(o) === 'object' && o.length === undefined){
			$.each(o, function(k, v){
				opt[k] = v;
			});	
		}

		this.fn = opt.callback;

		// 根据连续页数的长度计算出左右的位移数：如果length = 7 则 bitwise = 3
		opt.bitwise = opt.length >> 1;

		// if(opt.fn != null){
		opt.handle.on('click', opt.item, function(){
			var num = Number($(this).text());
			pg.go(num);
		});

		opt.handle.on('click', opt.prev, function(){
			opt.current--;
			pg.go(opt.current);
		});

		opt.handle.on('click', opt.next, function(){
			opt.current++;
			pg.go(opt.current);
		});

		// }
		 
		if(opt.current > 0){
			// $(opt.handle).
		}

		if(opt.go > 0){

			this.go(opt.go);
		}

		return this;
		// this.go(opt.current, opt.pages);
	};
	/**
	 * 通过外部的设置来修改内部的配置；
	 */
	


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
		if(opt.isMore){
			return tpl.more;
		}else{
			return '';
		}
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
			opt.current = current;
		}else{
			opt.current = 1;
		}

		//只有1页的时候只显示1
		if(pages === 1){
			return pg.createItem(1);
		}

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
		
		var start, more, items, end, prev, next, length, first, last, html;

		// 上一页节点：第一页只读
		prev  = this.createBtn('prev', (current === 1 ? true : false));
		
		// 下一页节点：最后一页只读
		next  = this.createBtn('next', (current === pages ? true : false));
		
		// “...” 节点
		more  = this.createMore();
		
		// 第一个：前五个不显示
		first = (end <= opt.length) ? '' : this.createItem(1);
		
		// 最后一个：后五个不显示
		last  = (start >= (pages - opt.length)) ? '' : this.createItem(pages);

		// 连续页数的：起始页数
		start = Number(current - opt.bitwise);
		
		// 连续页数的：结束页数
		end   = Number(current + opt.bitwise);

		// pages < 10 全显示
		if(pages <= 10){
			html = prev;
			for(var i = 0; i < pages ; i++){
				html += this.createItem(Number(i+1));
			}
			html += next;
			return html;
		}

		

		// 第一个：前五个不显示
		// first = (end <= opt.length) ? '' : first;

		// 最后一个：后五个不显示
		// last = (start >= (pages - 5)) ? '' : last;

		// 连续的页数
		items = '';
		for(var i = start; i <= end; i++){
			items += this.createItem(i);
		}

		// 前五
		// if(end <= opt.length){
		// 	html = prev + items + more + last + next;
		// }
		
		// 前六
		// if(end <= opt.length + 1){
		// 	html = prev + first + items + more + last + next;
		// }

		// 中间： 6 < page + 2 <= length - 3
		// if(end > 6 && end <= (pages - 3)){
		// 	html = prev + first + more + items + more + last + next;
		// }

		// 后六：page - 2 >= length - 6
		// if(start >= (pages - 6)){
		// 	html = prev + first + more + items + last + next;
		// }


		// 后五：page - 2 >= length - 5
		// if(start >= (pages - 5)){
		// 	html = prev + first + more + items + next;
		// }
		

		html += prev + first;

		html += (end <= opt.length + 1) ? '' : more;

		html += items;

		html += (start >= (pages - 6)) ? '' : more;

		html += last + next;

		// html += prev + first + ((end <= opt.length + 1) ? '' : more) + items + more + last + next;

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
		var list = this.createPages(current, pages);
		var wrap = $(tpl.wrap);
		var html = wrap.html(list);
		if(this.fn != null){
			this.fn(num, pages);
		}
		$(opt.handle).html(html);
	};
























	// var pg = ui.pages;
	// pg.config = {};
	// // pg.option = pg.config;
	// var option = {
	// 	id : 'ui_pages',
	// 	handle: '#ui_pages',
	// 	prevText : '上一页',
	// 	nextText : '下一页',
	// 	prevCls  : 'pages_prev',
	// 	nextCls  : 'next_prev',
	// 	callback : null
	// };

	// $.each(pg.config, function(k, v){
	// 	option[k] = v;
	// });


	// pg.fn = option.callback;
	
	/**
	 * 计算分页列表
	 * @param  {Number} current 当前页码
	 * @param  {Number} pages   分页总数
	 * @return {HTML}       	生成后的页面元素
	 */
	pg.list = function (current, pages){
		//只有一页,直接显示1
		if(pages <= 1){
			this.current = 1;
			this.pages = 1;
			return this.createCurrent(1);
		}
		if (pages < current) {
			current = pages;
		};
		var re = '<ol class="ui_pages">';

		//第一页
		if(current <= 1){
			current = 1;
		}else{
			//非第一页
			re += this.createPage(current - 1, pages, option.prevText, 'prev');
			//总是显示第一页页码
			re += this.createPage(1, pages, '1');
		}
		//校正页码
		this.current = current;
		this.pages = pages;

		//开始页码
		var start = 2;
		var end = (pages < 7) ? pages : 7;
		//是否显示前置省略号,即大于10的开始页码
		if (current >= 5) {
			re += '<li class="pages_more"><span>...</span></li>';
			start = current - 2;
			var e = current + 2;
			end = (pages < e) ? pages : e;
		}
		for (var i = start; i < current; i++) {
			re += this.createPage(i, pages);
		};
		re += this.createCurrent(current);
		for (var i = current + 1; i <= end; i++) {
			re += this.createPage(i, pages);
		};
		if (end < pages) {
			re += '<li class="pages_more"><span>...</span></li>';
			//显示最后一页页码,如不需要则去掉下面这一句
			re += this.createPage(pages, pages);
		};
		if (current < pages) {
			re += this.createPage(current + 1, pages, option.nextText, 'next');
		};
		re += '</ol>';
		return re;
	};
	//显示非当前页
	/**
	 * 创建页数标签（非当前页）
	 * @param  {Number} current     当前页数
	 * @param  {Number} pages       总页数
	 * @param  {String} currentText 当前页数显示的内容
	 * @param  {String} btn         上一页、下一页按钮标识
	 * @return {HTML}               页码的HTML标签
	 */
	pg.createPage = function(current, pages, currentText, btn) {
		currentText = currentText || current;

		var cls = '', btnCls = '';

		btnCls = (btn == 'prev' || btn == 'next') ? 'class="btn btn_gray "' : '';

		cls = (btn == 'prev') ? 'class="' + option.prevCls + '"' 
			: (btn == 'next') ? 'class="' + option.nextCls + '"' 
			: '';

		var _html = '<li ' + cls + '> <a href="javascript:xue.pages.go(' + current + ',' + pages + ');" ' + btnCls + '>' + currentText + '</a> </li>';
		
		return _html;

	};
	//显示当前页
	pg.createCurrent = function(current) {
		var _html = '<li class="pages_current"> <span class="cPageNum">' + current + '</span> </li>';
		return _html;
	};
	//输出页码,可根据需要重写此方法
	pg.go = function(current, pages) {
		if(current > 0){

		}
		//$("#pageNav").html(this.nav(p,pages)); //如果使用jQuery可用此句
		document.getElementById(option.id).innerHTML = this.list(current, pages);
		if (this.fn != null) {
			this.fn(this.current, this.pages);
		};
	};
})();

xue.extend('pages', ui.pages);
// xue.pages = ui.pages || {};


