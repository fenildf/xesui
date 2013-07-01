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
 * @name xue.string.js
 * @description 操作string
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 */

xue.string = xue.string || {};

xue.string.trim = function(){
    var trimer = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g');
    return function(){
        return this.replace(trimer, '');
    }
};

// xue.string.