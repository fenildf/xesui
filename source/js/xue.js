/**
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
 * @description 声明 xue 包：增加别名“_”
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 */


var _, xue = _ = xue || function(expr, fn) { return xue.dom ? xue.dom(expr, fn) : null; };

xue.version = '0.4.0626';
xue.id = 'xesui';
