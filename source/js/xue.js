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

xue.version = '0.4.7';

xue.id = 'xesui';
xue.guid = '$XESUI$';
xue.team = {
	Marco  : 'Marco@xesui.com',
	Alex   : 'Alex@xesui.com',
	Sam    : 'Sam@xesui.com',
	Star   : 'W.Star@xesui.com',
}
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
	var tpLen = typeof(obj.length),
		tp = typeof obj;
	
	if(tpLen === 'number'){
		if(tp === 'object'){
			return 'array';
		}
		if(tp === 'string'){
			return 'string';
		}
		if(tp === 'function'){
			return 'function';
		}
	}else{
		if(tp === 'number'){
			return 'number';
			//有可能是date或者是number
		}else{
			return 'object';
		}
	}

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

	// 检查是否存在函数，返回布尔值；
	var _isLoad = function() {
		var _scripts = document.getElementsByTagName('script');
		for(var i = 0, len = _scripts.length; i < len; i++) {
			if(_scripts[i].src.indexOf(url) > -1) {
				return true;
			}
		}
		return false;
	}();

	// 检测是否存在，不存在则加载，否则直接返回callback
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
 */
// xue.add = xue.add || function(moduleName, callback, isQueue, timeout){
// 	var fn = (typeof callback === 'function') ? callback : false;

// 	if(xue[moduleName]){
// 		if(fn){
// 			fn();
// 		}
// 		return this;
// 	}else{
// 		xue.loader('../script/xue.' + moduleName + '.min.js', function(){
// 			if(fn){
// 				fn();
// 			}
// 			return xue;
// 		});
// 	}
// };

/**
 * 模块调用
 * @param  {string}   moduleName 模块名称
 * @param  {Function} callback   模块加载完成的回调
 * @param  {Boolean}  isQueue  	 是否加入队列：在队列中的文件逐个加载（非异步）
 * @param  {date}     timeout    延时加载的时间以毫秒为单位
 * @return {[type]}              [description]
 */
xue.use = xue.use || function(moduleName, callback, isQuequ, timeout){ 
	
	var agr = arguments;

	var n = null, f = false, q = false, t = false, tp = null;

	$.each(agr, function(k, v){
		tp = typeof v;
		n = (tp === 'string')   ? v : n;
		f = (tp === 'function') ? v : f;
		q = (tp === 'boolean')  ? v : q;
		t = (tp === 'number')   ? v : t;
	});

	if(n === null){
		alert('没有填写模块名称');
		return;
	}
	
	var callback = function(module){ if(f){ return f(module); } };

	if(xue[n]){
		callback(xue[n]);
	}else{
		xue.loader('../js/ui/ui.' + n + '.js', function(){
			if(t){
				setTimeout(function(){
					callback(xue[n]);
				}, t);
			}else{
				callback(xue[n]);
			}
		});	
		
	}
	return this;
};


xue.test = function(){
	console.log(1111);
}


/* ========================== UI 组件 =========================== */

var ui = ui || {};






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

