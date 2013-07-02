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


var ui = ui || {};


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
 * 准备增加几个别名：
 *
 * x / X : 基础类
 * e / E : 事件类（event）
 * s / S : 
 * u / U : UI组件
 * r / R : 
 * m / M : 方法 / 模块
 */

