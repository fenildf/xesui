/**
 * XESUI 
 * Copyright 2013 xueersi.com All rights reserved.
 *
 * @description 
 *
 * @author Marco (marco@xesui.com)
 * @modify 2013-07-12 16:52:31
 * @version $Id$
 * 
 * @links http://xesui.com
 */


/**
 * @name xue.page.index.js
 * @description 首页文件
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 */

var dyn_btn = $('#index_dyn_tab'),
    dyn_box = $('#index_dyn');

dyn_btn.off('click', 'li');
dyn_btn.on('click', 'li', function(){
    var d = $(this).data();
    $.ajax({
        url : d.url,
        type:'GET',
        data : d.params,
        dataType:'html',
        success: function(d){
            dyn_box.html(d);
        }
    });
});

$(function(){

});