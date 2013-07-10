/*
 * XESUI 
 * Copyright 2013 xueersi.com All rights reserved.
 *
 * @description 
 *
 * @author Marco (marco@xesui.com)
 * @modify 2013-06-26 21:21:50
 * @version $Id$
 * 
 * @links http://xesui.com
 */


/**
 * @name xesui.js
 * @description 声明 xue 包：增加别名“X”
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 */

var X, xue = X = xue || function(expr, fn) { return xue.dom ? xue.dom(expr, fn) : {}; };
// var X, xue = X = xue || function(expr, fn) { 
// 	xue.expr = expr || null;
// 	return xue;
// };

xue.version = '0.4.7';

xue.id = 'xesui';
xue.guid = '$XESUI$';
xue.team = {
	Marco  : 'Marco@xesui.com',
	Alex   : 'Alex@xesui.com',
	Sam    : 'Sam@xesui.com',
	Star   : 'W.Star@xesui.com'
}

xue.expr = '';
/* ========================== 公共方法 =========================== */

/**
 * @name xue.extend.js
 * @description 扩展
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 */

xue.extend = xue.extend || function(className, fn, constructor){
	var _name = className;

	var _class = xue[_name] = xue[_name] || fn;

	return _class;
};



xue.check = function(obj){

	// 还差日期类型判断
	
	// if(typeof obj === 'object' && typeof(obj.length) === 'number'){
	// 	return 'array';
	// }
	// if(typeof obj === 'string' && typeof(obj.length) === 'number'){
	// 	return 'string';
	// }
	// if(typeof obj === 'function' && typeof(obj.length) === 'number'){
	// 	return 'function';
	// }
	// if(typeof obj === 'number' && typeof(obj.length) === 'undefined'){
	// 	return 'number';
	// 	// 还差日期类型判断 return 'date'
	// }
	// if(typeof obj === 'object' && typeof(obj.length) === 'undefined'){
	// 	return '{}';
	// }
	
};
/**
 * 加载script文件
 * @param {String} 		url
 * @param {sting}		place: 加载文件的位置：head or body
 * @param {Function}	callback
 */
xue.loader = xue.loader || function(url, callback, isBody) {

	// 如果没有url则返回；
	if(!url) { return; }

	var _call = callback ? callback : function(){};

	// 声明一个“检查文件是否已经存在”的函数，返回布尔值；
	var _isLoad = function() {
		var _scripts = document.getElementsByTagName('script');
		for(var i = 0, len = _scripts.length; i < len; i++) {
			if(_scripts[i].src.indexOf(url) > -1) {
				return true;
			}
		}
		return false;
	}();

	// 检测文件是否存在，不存在则加载，否则直接返回callback
	if(!_isLoad) {
		var script = document.createElement('script');
		script.type = 'text/javascript';

		if(script.readyState) {// IE
			script.onreadystatechange = function() {
				if(script.readyState == 'loaded' || script.readyState == 'complete') {
					script.onreadystatechange = null;
					_call(true);
				}
			};
		} else {
			script.onload = function() { _call(true); };
		}
		script.src = url;
		// 文件加入的位置：如果 isBody = true 则在body后面追加，否则追加到head后面
		var _place = (isBody) ? 'body' : 'head';
		document.getElementsByTagName(_place)[0].appendChild(script);
	} else {
		_call(false);
	}
	return this;
};


/**
 * 模块添加
 * @param  {string}   moduleName  模块名称
 * @param  {Function} callback    回调函数
 * @param  {Boolean}  isQueue  	  是否加入队列：在队列中的文件逐个加载（非异步）
 * @return {[type]}         	  加载完成后返回xue对象，可直接链式调用，
 *
 * @example:
 *
 * 			xue.add('pages', function(){
 * 			
				// 将分页扩展到xue对象下；
				xue.extend('pages', ui.pages);

 * 			}).use('pages', function(){
 * 				xue.pages.config({
 * 					...
 * 				});
 * 			});
 *
 * 还没想好：如何让链式调用需要放在异步加载成功之后再执行；
 */
// xue.add = xue.add || function(moduleName, callback, isQueue){};

/**
 * 模块调用方法
 *
 * 
 * @param  {string}   moduleName 模块名称
 * @param  {Function} callback   模块加载完成的回调，回调函数中会返回模块对象，方便内部调用
 * @param  {Boolean}  isQueue  	 是否加入队列：在队列中的文件逐个加载（非异步）
 * @param  {date}     timeout    延时加载的时间以毫秒为单位
 * 
 * @return {[type]}              不管模块是否加载成功，都会返回跟对象，便于链式调用 ; 
 *                               链式调用与模块的加载情况是异步的，没有依赖关系，所以在链式调用中不能确保能够调用到模块中的方法
 * @example
 
	  	window.onload = (function(){
	  			
				xue.use('pages', function(module){
					// 根据模块名称进行调用
					xue.pages.config({
						pages : 22,
						current : 1
					}).go(3);

					// 根据返回的对象进行调用
					module('page2').config({
						pages: 10,
						current: 3
					});
				}, true, 1000).test();
		});
 */
xue.use = xue.use || function(moduleName, callback, isQuequ, timeout){ 
	
	/**
	 * 声明内部变量，用于存放传入的参数
	 *
	 * n  [moduleName] : 模块名称
	 * f  [callback]   : 回调函数
	 * q  [isQueue]    : 是否加入队列
	 * t  [timeout]    : 延迟执行回调的时间
	 * tp [typeof]     : 存放参数类型
	 * 
	 * @type {[type]}
	 */
	var n = null, f = false, q = false, t = false, tp = null;

	/**
	 * 循环参数对象
	 *
	 * 根据参数的类型存入相应的变量中
	 * 如果类型不匹配则返回变量的原始值，防止变量被重复赋值
	 */
	$.each(arguments, function(k, v){
		tp = typeof v;
		n = (tp === 'string')   ? v : n;
		f = (tp === 'function') ? v : f;
		q = (tp === 'boolean')  ? v : q;
		t = (tp === 'number')   ? v : t;
	});

	// 如果没有传入模块名称，则直接返回xue对象，并提示错误；
	if(n === null || n === ''){
		alert('方法调用错误，没有模块名称');
		return xue;
	}

	/**
	 * 回调函数
	 * @return {object}   xue[n]  返回模块对象
	 */
	var callback = function(){ if(f){ return f(xue[n]); } };

	/**
	 * 模块状态判断
	 *
	 * 如果已经存在，则直接调用回调函数
	 * 如果不存在，则通过异步加载模块文件，
	 * 文件加载成功之后根据传入的timeout情况来确定是否延时触发回调函数
	 */
	if(xue[n]){
		callback();
	}else{
		// 调用异步加载方法，默认线上JS模块文件放到 sript/下面，文件名：xue.[模块名].min.js
		xue.loader('../script/xue.' + n + '.min.js', function(){
			if(t){
				setTimeout(function(){
					callback();
				}, t);
			}else{
				callback();
			}
		});	
		
	}
	return this;
};


xue.test = function(d){
	console.log(d);
}


/* ========================== UI 组件 =========================== */

var ui = ui || {};


ui.tabs = ui.tabs || function(id, fn){ 
	if(id === undefined){
		return ui.tabs;
	}
	
	ui.tabs.id = id || 'ui_tabs'; 
	ui.tabs.handle = $('#' + ui.tabs.id);

	if(ui.tabs.handle.length == 0){
		return ui.tabs;
	}

	ui.tabs.handle.on('click', 'li', function(){
		$(this).addClass('current').siblings('.current').removeClass('current');
		if(typeof fn === 'function'){
			return fn(this);
		}else{
			return false;
		}
	});

	return ui.tabs; 
};

xue.extend('tabs', ui.tabs);

/* ========================== module =========================== */

var m, module = m = module || {};

module.ajax = module.ajax || function(expr, opt, fn){
	
	if(expr === undefined){
		return module.ajax;
	}
	
	var handle = expr ? $(expr) : $(document);

	var opt = (typeof opt === 'object' && opt.length === undefined) ? opt : false;

	var defult = {
		dataType : 'json',
		timeout  : 7000,
		beforeSend : function(a, b, c){
			handle.html('<span class="ui_loading">Loading...</span>');
		},
		error      : function(a, b, c){
			alert(c);
		},
		complete   : function(){
			handle.find('.ui_loading').remove();
		}
	};
	var options = {};

	$.extend(options, defult, opt);
	
	$.ajax(options);

	if(typeof fn === 'function'){
		handle.ajaxSuccess(function(d){
			return fn(d);
		});
	}
	

};

(function(){
	var ajax = module.ajax;

	ajax.loading = function(expr){
		var handle = expr ? $(expr) : $(document);
		handle.html('<span class="ui_loading">Loading...</span>');
	};

	ajax.loaded = function(expr){
		var handle = expr ? $(expr) : $(document);
		handle.find('.ui_loading').remove();
	};

})();

xue.extend('ajax', module.ajax);



/**
 * 准备增加几个别名：
 *
 * x / X : 基础类
 * e / E : 事件类（event）
 * s / S : 
 * u / U : UI组件
 * r / R : 
 * m / M : 方法 / 模块
 */

