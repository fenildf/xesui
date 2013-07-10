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
 * @name xue.ajax.js
 * @description 封装ajax公共方法
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 */

// xue.ajax = xue.ajax || $.ajax || function( option ){};
module.ajax = module.ajax || function( opt ){ 

	module.ajax.options = opt || null; 

	return $.ajax(opt); 
};

(function(){
	var ajax = module.ajax;
	var options = ajax.options || {
		timeout    : 7000,
		beforeSend : function(){},
		error      : function(){},
		success    : function(){},
		complete   : function(){}

	};

	ajax.setup = function(opt){
		var opt = opt || options;

		$.ajaxSetup( opt );

		return 2222;
	};

	ajax.get = function(opt){

		return $.get(opt);
	};

	ajax.post = function(opt){
		return $.post(opt)
	};

	ajax.load = function(opt){
		return $.load(opt);
	};

	ajax.success = function(opt){
		return $.ajaxSuccess(opt);
	};

})();


xue.extend('ajax', module.ajax);
