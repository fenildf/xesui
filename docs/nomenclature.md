#三、命名及书写规则   

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
