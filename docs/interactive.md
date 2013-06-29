#交互

## 1. 模块

### 1.1 模块概览

> 没有前缀，直接挂接到xue方法下
> 
> 小的功能模块


|     name     |  feature  |                  status                 | description
|:------------:| --------- |:---------------------------------------:|:-----------:
| cookie       | 相关操作   | ![checked icon](../src/img/checkbox.png) | [查看](#cookie)
| form         | 表单操作   | ![checked icon](../src/img/checkbox.png) | [查看](#form)
| button       | 按钮操作   | ![checked icon](../src/img/checkbox.png) | [查看](#button)
| verify       | 表单验证   | ![checked icon](../src/img/checkbox.png) | [查看](#verify)
| date         | 日期扩展   | ![checked icon](../src/img/checkbox.png) | [查看](#date)
| time         | 时间扩展   | ![checked icon](../src/img/checkbox.png) | [查看](#time)
| img          | 图像操作   | ![checked icon](../src/img/checkbox.png) | [查看](#img)
| browser      | 浏览器类   | ![checked icon](../src/img/checkbox.png) | [查看](#browser)
| number       | 数字扩展   | ![checked icon](../src/img/checkbox.png) | [查看](#number)
| string       | 字符串类   | ![checked icon](../src/img/checkbox.png) | [查看](#string)
| array        | 数组扩展   | ![checked icon](../src/img/checkbox.png) | [查看](#array)
| object       | 对象扩展   | ![checked icon](../src/img/checkbox.png) | [查看](#object)
| url          | 地址操作   | ![checked icon](../src/img/checkbox.png) | [查看](#url)
| json         | 数据操作   | ![checked icon](../src/img/checkbox.png) | [查看](#json)
| data         | 数据操作   | ![checked icon](../src/img/checkbox.png) | [查看](#data)
| ajax         | 异步请求   | ![checked icon](../src/img/checkbox.png) | [查看](#ajax)
| fn           | 功能扩展   | ![checked icon](../src/img/checkbox.png) | [查看](#fn)
| dragdrop     | 拖拽操作   | ![checked icon](../src/img/checkbox.png) | [查看](#dd)
| position     | 定位操作   | ![checked icon](../src/img/checkbox.png) | [查看](#pos)
| page         | 页面操作   | ![checked icon](../src/img/checkbox.png) | [查看](#page)
| win          | 窗口扩展   | ![checked icon](../src/img/checkbox.png) | [查看](#win)
| scroll       | 滚动操作   | ![checked icon](../src/img/checkbox.png) | [查看](#scroll)
| localstorage | 本地存储   | ![checked icon](../src/img/checkbox.png) | [查看](#ls)
| tools        | 工具集合   | ![checked icon](../src/img/checkbox.png) | [查看](#tools)


### 1.2 模块详情

#### [cookie](id:cookie)

> set / get / del 方法

#### [form](id:form)

> 全选/反选，获取or设置单选/多选框的值…

#### [button](id:button)

> disible 效果 / 下拉等...

#### [verify](id:verify)

> 类型判断：数字、日期、邮箱、中文、手机号等...

#### [date](id:date)

> 比较、日历、格式化、统计、

#### [time](id:time)

> 倒计时、格式化、比较

#### [img](id:img)

> 旋转、反转、裁剪、resize、

#### [browser](id:browser)

> 类型、检测

#### [number](id:number)

> 随机数、整数、价格等

#### [string](id:string)

> 格式化、去除空格、取长度、去除HTML标签、编码……

#### [array](id:array)

> 包含、循环、去重、排序、清空、筛选、

#### [object](id:object)

> 拷贝、获取键名列表、遍历、合并、获取键值

#### [url](id:url)

> 转义、根据参数名获取参数值、json转化为URL字符

#### [json](id:json)

> decode / encode / parse / stringify

#### [data](id:data)



#### [ajax](id:ajax)

> get / post / jsonp ...

#### [fn](id:fn)

> 扩展、静态函数转为对象方法

#### [dragdrop](id:dd)

> 拖拽效果放到xes.dom里面

#### [position](id:pos)

> fiex / static / 宽高、距离等

#### [page](id:page)

> 创建样式表、页面尺寸、滚动距离、延时加载图片、加载资源、加载外部CSS/JS

#### [win](id:win)

> window窗口尺寸等

#### [scroll](id:scroll)

> 滚动距离

#### [localstorage](id:ls)

> get / set / del

#### [tools](id:tools)

> base64转换




## 2. 组件

### 2.1 组件概览

> 挂接到xue.ui下面（以ui前缀命名）
> 
> 根据功能模块加上效果拼凑出来的组件

name       | feature |                  status                  |    description
-----------| ------- |:---------------------------------------: |:-------------------:
dialog     | 模拟弹窗 | ![checked icon](../src/img/checkbox.png) | [查看](#dialog)
tips       | 信息提示 | ![checked icon](../src/img/checkbox.png) | [查看](#tips)
nav        | 导航组件 | ![checked icon](../src/img/checkbox.png) | [查看](#nav)
message    | 消息提醒 | ![checked icon](../src/img/checkbox.png) | [查看](#message)
tab        | 页签切换 | ![checked icon](../src/img/checkbox.png) | [查看](#tab)
userinfo   | 用户信息 | ![checked icon](../src/img/checkbox.png) | [查看](#userinfo)
calendar   | 日历组件 | ![checked icon](../src/img/checkbox.png) | [查看](#calendar)
preview    | 预览组件 | ![checked icon](../src/img/checkbox.png) | [查看](#preview)
pages      | 页面操作 | ![checked icon](../src/img/checkbox.png) | [查看](#pages)
scrollspy  | 滚动监听 | ![checked icon](../src/img/checkbox.png) | [查看](#scrollspy)
collapse   | 折叠效果 | ![checked icon](../src/img/checkbox.png) | [查看](#collapse)
carousel   | 图片轮播 | ![checked icon](../src/img/checkbox.png) | [查看](#carousel)
dropdown   | 下拉列表 | ![checked icon](../src/img/checkbox.png) | [查看](#dropdown)
win        | 窗体相关 | ![checked icon](../src/img/checkbox.png) | [查看](#win)
resizable  | 调整尺寸 | ![checked icon](../src/img/checkbox.png) | [查看](#resizable)
grid       | 列表操作 | ![checked icon](../src/img/checkbox.png) | [查看](#grid)
mask       | 公用遮罩 | ![checked icon](../src/img/checkbox.png) | [查看](#mask)
loading    | 加载状态 | ![checked icon](../src/img/checkbox.png) | [查看](#loading)
button     | 按钮组件 | ![checked icon](../src/img/checkbox.png) | [查看](#button)

 
### 2.2 详细情况


#### [模拟弹窗](id:dialog) : ui.dialog

> 弹层封装，可扩展：alert、popover、

#### [信息提示](id:tips)  : ui.tips

> 信息提示，可以是鼠标划过，可以是页面加载等，分为：error、success、info

#### [导航组件](id:nav)  : ui.nav

> 导航：tabs、pills、list、text等

#### [消息提示](id:message)  : ui.message

#### [页签切换](id:tab)  : ui.tab

> tab页签切换效果，可以放到nav-tab中

#### [用户信息](id:userinfo)  : ui.userinfo

> 用户信息展示：ui_userinfo / ui_username / ui_avatar 

#### [日历组件](id:calendar)  : ui.calendar

> 封装后的日历控件，在请假中会有体现

#### [预览组件](id:preview)  : ui.preview

> 整站的图片预览模块：如果设置外框则宽度不能超过外框，高度成比例自适应

#### [页面操作](id:pages)  : ui.pages

#### [滚动监听](id:scrollspy)  : ui.scrollspy

> 根据滚动的位置自动更新导航条中相应的导航项。

#### [折叠组件](id:collapse)  : ui.collapse

> 手风琴折叠效果

#### [图片轮播](id:carousel)  : ui.carousel

> 会封装几种情况：带有缩略图、带数字、带上下一张按钮等

#### [下拉列表](id:dropdown)  : ui.dropdown

> 模拟下拉框

#### [窗口操作](id:win)  : ui.win

> window窗体操作

#### [调整尺寸](id:resizable)  : ui.resizable

> 给指定元素增加调节尺寸的方法，依赖于dragdrop模块

#### [列表操作](id:grid)  : ui.grid

> 列表排序、拖拽、可编辑等

#### [背景遮罩](id:mask)  : ui.mask

> 公共的遮罩层，可提供几种背景：白色、黑色、半透明、带斜线等

#### [加载状态](id:loading) : ui.loading

> 公用的模块、组件、页面加载loading状态


#### [按钮组件](id:button)  : ui.button


### [](id:) 

### [](id:) 