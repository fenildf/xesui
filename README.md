![XESUI icon](src/img/xesui_logo_120.png)

#XESUI v0.4.6.29

[XESUI](http://xesui.com/) 是学而思网校的前端框架。其中包括网校的样式解决方案，UI组件的交互效果，技术文档，以及一整套学而思网校前端架构解决方案。目前还处于测试阶段，仅供内部使用。

* 当前版本：v0.4
* 最后更新：2013-06-25


## 目录结构


## 使用帮助

1. [文件结构](https://github.com/xueersi/xesui/blob/master/docs/structures.md)：文档目录结构 
    - html: [../html/](https://github.com/xueersi/xesui/tree/master/source/html)  
    - less: [../less/](https://github.com/xueersi/xesui/tree/master/source/less) 
    - css:  [../css/](https://github.com/xueersi/xesui/tree/master/source/css)   
    - img:  [../img/](https://github.com/xueersi/xesui/tree/master/source/img)   
    - js:   [../js/](https://github.com/xueersi/xesui/tree/master/source/js)     
       
2. [命名规则](https://github.com/xueersi/xesui/blob/master/docs/nomenclature.md)：CSS、JS命名规则
3. [结构文档](https://github.com/xueersi/xesui/blob/master/docs/DOM.html)：DOM结构
4. [模块组件](https://github.com/xueersi/xesui/blob/master/docs/module.md)：模块组件组件介绍
5. [加载方式](https://github.com/xueersi/xesui/blob/master/docs/loader.md)：文件加载方式
6. [在线演示]
7. [压缩工具]
8. on [github](https://github.com/xueersi/xesui)


## 版本更新日志

* **v0.4.0629** ：

    - 制作xesui的LOGO
        
        ![XESUI icon](src/img/xesui_logo_100.png)
        ![XESUI icon](src/img/xesui_logo_120.png)
        
    - 页面完成情况：14 / 46
    - 模块、组件、方法说明文档及状态


* **v0.4.0628** ：

    - 静态页面：
        > 个人设置
        > 
        > 学习中学
        
    - 交互部分：
        > 分页代码
        > 


* **v0.4.0627** ：

    - 增加组件说明
    - 完成“加关注”：ui_follow
    - 完成背景整合；
    - 开始根据做好的样式套静态页面


* **v0.4.0626** ：

    - 完成整站ICON的编写
    - 完成布局：layout
    - 完成课程列表：ui_courses
    - 完成教师列表：ui_teacher、avatar(用户头像)、ui_username；
    - 交互部分：完成模块文件、命名、注释文档；
    - 声明xesui包：改名字为 `xue`，增加别名“ `_` ”


* **v0.4.0625** ：

    - 完成公共样式：reset、base、button、table、form、list、tips、sprites……
    - 完成基本结构：
    
        > 前台：首页、帮助中心、课程列表、教师列表、搜索页、404
        >
        > 学习中心：我的网校、我的课程、我的关注、我的通知、我的网校（新鲜事）、Ta的介绍、Ta的新鲜事、Ta的课程、购物车
        >
        > 个人设置：充值记录、金币换礼、银行充值、我的订单、修改密码、学习卡充值、银行汇款


* **v0.4.0622** ：

    - 重新规划加载方式：初步采用模块后面跟JS标签的方式，（测试过头部轮询DOM节点、onload事件监听等方式，都不理想）；
    - 更新docs文档目录：拆分出《加载方式》、《目录结构》、《命名书写规范》；


* **v0.4.0621** ：

    - 公用样式
    - 表单样式
    - 首页结构
    - 弹窗思路整理

* **v0.4.0620** (2013-06-20) ：完成80%DOM结构文档、组件命名，及样式方案；
    
    - 表格
    - 表单
    - step
    - 内容发表框
    - 金币换礼
    - 课程咨询列表
    - 增加模块组件文档
    
* **v0.4.0619** (2013-06-19) ：完成60%DOM结构及CSS UI命名；
    
    - 列表排序功能条、
    - 文章页面、
    - 404错误、
    - 排名列表、
    - 广告位、
    - 底部、
    - 银行、
    - 搜索工具条、
    - nav导航、
    - 二级标题（side_header、main_header）、
    - 最新访客、
    - 用户顶部信息、
     
* **v0.4.0618** (2013-06-18) ：完成30%DOM结构及CSS UI命名；

    - 文章列表、
    - 动态列表、
    - 有序无序列表、
    - 列表页顶部筛选、
    - 课程列表、
    - 老师排序、
    - 关注按钮
 
* **v0.4.0617** (2013-06-17) ：规范目录结构，新增Readme文档，提交github；
    
    - 规范目录结构；
    - 增加命名规范、注释规则、JS书写规范等；
    - 确定页面结构：整站盒模型、顶部菜单、LOGO、首页轮播、首页登录框、用户头像组件


* **v0.4.0616** (2013-06-15) ：规范目录结构，编写README文档；
    
    - 规划文件加载方式：1. 按需加载； 2. 合并加载


## 团队介绍

* [@Marco](http://weibo.com/wjay): 负责xesui整体架构
* [@Alex](http://weibo.com/12kbs): 四年WEB前端重构经验，负责结构以及模块组件的样式编写
* [@bluebird](http://weibo.com/u/2209651391): 四年WEB前端重构经验，负责模块组件编写及Less文件组织
* [@D.Star](http://weibo.com/u/3280573484): 负责xesui交互模块组件的维护


## 版权及许可

