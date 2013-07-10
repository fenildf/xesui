/**
 * XESUI 
 * Copyright 2013 xueersi.com All rights reserved.
 *
 * @description 
 *
 * @author Marco (marco@xesui.com)
 * @modify 2013-06-26 21:41:15
 * @version $Id$
 * 
 * @links http://xesui.com
 */


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

