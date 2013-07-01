*
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

var X, xue = X = xue || function(expr, fn) { return xue.dom ? xue.dom(expr, fn) : null; };

xue.version = '0.4.7';

xue.id = 'xesui';
xue.guid = '$XESUI$';
xue.team = {
	Marco  : 'Marco@xesui.com',
	Alex   : 'Alex@xesui.com',
	Sam    : 'Sam@xesui.com',
	Star   : 'W.Star@xesui.com',
}

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

