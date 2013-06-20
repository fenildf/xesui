#XESUI

>v0.4.0617

>upload: 2013-06-17


##一、文件加载方式

### 1.1 按需加载

####1.1.1 方式：
    
    * 每个模块对应一个JS；
    * 每个模块都有一个标识符；
    * JS通过标识符进行模块文件的加载；
    * 模块加载的时候直接把对应的JS加入到页面底部，可以是外链也可以是直接写到页面当中；
    * 或者每个模块有个配置对象，加载后通过全局方法根据配置对象进行模块加载；

####1.1.2 好处：

    * 文件与模块一一对应，不会出现冗余；
    * 模块加载后即调用JS文件，可以实时交互，不用等到页面都加载完才能操作；

####1.1.3 缺点：

    * JS文件请求过多，过于零碎；
    * 配置对象要非常灵活，便于公用；
    

### 1.2 本地合并

####1.2.1 方式：

    * 本地服务器列出所有的模块，按照页面所需模块进行筛选后压缩合并，生成一个静态的JS文件；
    * 每个页面对应一个单独的JS文件；
    * 压缩合并是在本地进行，线上只有合并后的JS文件；

####1.2.2 好处：

    * 页面加载的JS文件请求减少；
    * 保证代码的安全性，原始模块代码只存储在本地服务器，线上的只是合并后的；
    
####1.2.3 缺点：
   
    * JS文件需要放到页面底部，只能等待页面全部加载完成后才能执行交互效果；
    
   
   
##二、文件结构

    xesui/
        |---- build/                  // 编译后的文件
        |    |---- v0.1.0228
        |    |---- v0.1.1225
        |
        |---- src/                    // 具体的文件(外部引入的公用文件)
        |    |---- js/
        |    |    |---- jquery-min.js
        |    |  
        |    |---- img/               // 所需样式图片
        |    |    |---- bg.png
        |    |
        |    |---- css/               // 生成后的静态样式文件以及公用样式
        |    |    |---- xesui.css     // base.css
        |    |
        |    |---- pic/               // 临时的广告图、占位图
        |
        |---- source/                 // 源文件
        |    |---- less/              // 模块样式文件，按照模块命名
        |    |    |---- dialog.less
        |    |    |---- tabs.less
        |    |
        |    |---- css/
        |    |
        |    |----- theme/            // 模板风格，每种风格一个文件夹，里面的文件名都一样
        |    |    |---- default/
        |    |    |   |---- img/
        |    |    |   |---- style.css
        |    |    |
        |    |    |---- blue/
        |    |        |---- img/
        |    |        |---- style.css
        |    |
        |    |---- img/
        |    |
        |    |---- js/                // 按照模块命名
        |    |    |---- dialog/
        |    |
        |    |---- json/              // JSON模拟数据文件
        |    |    |---- course_list.json
        |
        |---- adapter/                // 适配器/路由
        |---- docs/                   // 文档
        |---- tools/                  // 工具
        |    |---- online/            // 线上调试工具？
        |    |---- builder/           // 构建工具
        |    |---- combination/       // 合并工具
        |    |---- lint/              // CCS、JS校验工具
        |    |---- test/              // 测试工具
        |
        |---- test/                   // 测试（单元测试）
        |---- examples/               // 演示/事例
        |---- export|import/          // 输出压缩后的（可选）
        

        
##三、命名及书写规则   

### 3.1 变量/函数/方法名


#### 3.1.1 变量名称以小写字母开头

        如：var myName = 'Marco';

#### 3.1.2 构造器的首字母大写。如：

		function Dialog (config) {
			statement;
		}
		var win = new Dialog({...});
		
		
#### 3.1.3 对象的属性或方法名采用小驼峰式(lower camel-case)。

> 如 `init` , `bindEvent` , `updatePosition` ：

		Dialog.prototype = {
			init: function () {},
			bindEvent: function () {},
			updatePosition: function () {}
            ...
		};
		
		
#### 3.1.4 私有变量名用下划线开头。

> 如：`_current` , `_defaultConfig`


#### 3.1.5 常量名全部大写，单词间用下划线分隔。

> 如：`CSS_BTN_CLOSE` ,  `TXT_LOADING`


#### 3.1.6 引号的使用：

* 规则：在JS中全部采用单引号方式，只有单引号中的引用采用双引号

        alert('这是一个测试：“hello world!”');
        

* 好处：可以直接将HTML结构放入JS变量中，如：

        var a = '<div class="header">'；


#### 3.1.7 语句中的必要空格和缩进


* `=`前后需要跟空格：

    > 如：`var a = 'abc';`
    
    > 不好：`var a='abc';`


* 运算符前后加空格：

        var i = 0;
        var n = i - 1;

        if(i < 0){
            i++;
        }

* 字符串链接附`+`前后加空格：

        var id = 'header', title = '头部信息';
        var dom = '<div id="' + id + '">' + title + '</div>';

* 数组成员间的`,`后面需要跟空格：

        var array = [1, 2, 3, 4];
        var a = 1, b = 'test', c = {};
        

* **[可选]** 用来包含语句的"()"前后需要跟空格：

    > 如： `if` / `for` / `while` / `switch ( statements ) { … }` 等


    不好：

        for (t in selected) { if (!hash[t]) deselect(t) }

    好：

        for ( t in selected ) { 
            if ( !hash[t] ) {
                deselect(t); 
            }
        }




### 3.2 CSS / 选择器

#### 3.2.1 统一用UTF-8编码

> CSS 文件第一行加入：`@charset "UTF-8";`


#### 3.2.2 单条CSS规则的书写格式要求

* 单行形式适用于直接写在页面中和长文件的情况。声明写在一行。需要在`{`和`}`前后加空格。 （注：在很长的文件中，单行形式有利于检索选择器）

        .selector{property:value;property:value;}

* 简短规则声明（1或2个）也适用单行形式。
	
	    .selector{property:value;}
	
* 格式化书写形式。适用于不是很长的模块文件或CSS3语法。冒号后加空格。

	    .selector{property:value;property:value;}

* 多个(>2)selector每个占一行：

	    .selector1,.selector2,.selector3{...}

* 规则声明的顺序：
    a. 定位、
    b. 盒模型（`width`/`height`/`padding`/`border`/`margin`）、
    c. 行高、
    d. 字体 / 字号 / 颜色、
    e. 背景、
    f. CSS3效果等

* 兼容多个浏览器时，将标准规则声明写在后面，如：

	    -webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;


#### 3.2.3 ID和Class命名。

* 命名不要用缩写，单词间用 `_` 做为连接符

   * ID是用来标识具体模块，命名必须具体且唯一，由前缀和名字组成。不要滥用ID。
       
       > 如：`#db_video_list`、`#group_member_list`等。
   
   * id是唯一的并是父级的, class是可以重复的并是子级的, 
     所以id仅使用在大的模块上, class可用在重复使用率高及子级中; 
     id原则上都是由框架文件时命名的, 为JavaScript预留钩子的除外;
   
   * JS预留钩子命名，以`J-`开头，如：`J-list`；
   
   * Class是用来标识某一类型的对象，命名简洁表意清楚。如：`.list`；
   
   * class 命名单词之间用下划线连接，如：`.top_list`；
   
   * 命名示例：

        > 坏：`#rec.gray-link.broadsmr.pl`

        > 好：`#db-nav-main.infobox.item`
	
	
 
### 3.3 注释

#### 3.3.1 工具：

> 采用YUIDoc：[查看官网](http://yui.github.io/yuidoc/syntax/index.html) (英文)

#### 3.3.2 格式：

* 块级采用 /**/方式：

        /**
         * {方法名}
         *
         * @param  {[类型]}     a    [描述]
         * @param  {[类型]}     b    [描述]
         *
         * @return {[type]}     [description]
		 *
         */
         function init(a, b){
             return a+b;
         }
         
* (JS)单行注释采用 //：需要写在注释内容的上一行，尽量不要放到注释内容的右侧

        // 这里是注释的内容
        var a = {};
        

#### 3.3.3 规则：

|    注释名    |                 描述            |
|-------------|---------------------------------
|@param       | 指定参数名和说明来描述一个函数参数。
|@return      | 描述函数的返回值。
|@author      | 指示代码的作者。
|@version     | 指定发布版本。
|@upload      | 最后更新日期。
|@type        | 指定函数的返回类型。
|@class       | 提供类的有关信息，用在构造函数的文档中。
|@constructor | 明确一个函数是某个类的构造函数。




### 3.4 文件/文件夹




    
##附：站点管理工具

### 1. 主要功能

* 负责文件的部署：合并、压缩等
* 负责版本控制
* 提供统一的模块管理
* 支持在线编辑
* 提供代码校验:jlint/jhint
* 生成API文档
* 提供单元测试
* 整个站点上线前的文档构建：builder
    