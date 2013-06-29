#模块组件

## 模块

> 没有前缀，直接挂接到xue方法下
> 
> 小的功能模块


|                 name              |  feature  | description
|:---------------------------------:| --------- |--------------------------
| [cookie](interactive.md#cookie)   | Cookie操作 | set / get / del 方法
| [form](interactive.md#form)       | 表单操作   | 全选/反选，获取or设置单选/多选框的值…
| [button](interactive.md#button)   | 按钮操作   | disible 效果 / 下拉等...
| [verify](interactive.md#verify)   | 表单验证   | 类型判断：数字、日期、邮箱、中文、手机号等...
| [date](interactive.md#date)       | 日期扩展   | 比较、日历、格式化、统计、
| [time](interactive.md#time)       | 时间扩展   | 倒计时、格式化、比较
| [img](interactive.md#img)         | 图像操作   | 旋转、反转、裁剪、resize、
| [browser](interactive.md#browser) | 浏览器类   | 类型、检测
| dom                               | DOM操作   | 创建、修改、拖拽等
| [number](interactive.md#number)   | 数字扩展   | 随机数、整数、价格等
| [string](interactive.md#string)   | 字符串扩展 | 格式化、去除空格、取长度、去除HTML标签、编码……
| [array](interactive.md#array)     | 数组扩展   | 包含、循环、去重、排序、清空、筛选、
| [object](interactive.md#object)   | 对象扩展   | 拷贝、获取键名列表、遍历、合并、获取键值
| element                           | 元素操作   | 
| [url](interactive.md#url)         | URL操作   | 转义、根据参数名获取参数值、json转化为URL字符串、字符串转json
| event       | 事件处理   | 获取按键、获取鼠标坐标、获取触发元素、事件监听、阻止默认行为、阻止冒泡……
| [json](interactive.md#json)       | JSON数据  | decode / encode / parse / stringify
| [data](interactive.md#data)       | 数据操作   | 
| [ajax](interactive.md#ajax)       | 异步请求   | get / post / jsonp ...
| [fn](interactive.md#fn)           | 功能扩展   | 扩展、静态函数转为对象方法
| [dragdrop](interactive.md#dd)     | 拖拽      | 放到xes.dom里面
| [position](interactive.md#pos)    | 定位      | fiex / static / 宽高、距离等
| [page](interactive.md#page)       | 页面操作   | 创建样式表、页面尺寸、滚动距离、延时加载图片、加载资源、加载外部CSS/JS
| [win](interactive.md#win)         | 窗口扩展   | 
| [scroll](interactive.md#scroll)   | 滚动      | 滚动距离
| [localstorage](interactive.md#ls) | 本地存储   | get / set / del
| [tools](interactive.md#tools)     | 工具集合   | 



## 组件

> 挂接到xue.ui下面（以ui前缀命名）
> 
> 根据功能模块加上效果拼凑出来的组件

|                name               | feature |    description
|:---------------------------------:| ------- | -----------------------------
| [loading](interactive#loading)    | 加载状态 | 公用的模块、组件、页面加载loading状态
| [dialog](interactive#dialog)      | 模拟弹窗 | 弹层封装，可扩展：alert、popover、
| [tips](interactive#tips)          | 信息提示 | 信息提示，可以是鼠标划过，可以是页面加载等，分为：error、success、info
| [button](interactive#button)      | 按钮组件 | 
| [nav](interactive#nav)            | 导航组件 | 导航：tabs、pills、list、text等
| breadcrumb                        | 面包屑类 | 
| [tab](interactive#tab)            | 页签切换 | tab页签切换效果，可以放到nav-tab中
| [userinfo](interactive#userinfo)  | 用户信息 | 用户信息展示：ui_userinfo / ui_username / ui_avatar 
| [calendar](interactive#calendar)  | 日历组件 | 封装后的日历控件，在请假中会有体现
| [resizable](interactive#resizable)| 调整尺寸 | 给指定元素增加调节尺寸的方法，依赖于dragdrop模块
| [preview](interactive#preview)    | 预览组件 | 整站的图片预览模块：如果设置外框则宽度不能超过外框，高度成比例自适应
| [pages](interactive#pages)        | 页面操作 | 
| [scrollspy](interactive#scrollspy)| 滚动监听 | 根据滚动的位置自动更新导航条中相应的导航项。
| [collapse](interactive#collapse)  | 折叠效果 | 手风琴折叠效果
| [carousel](interactive#carouse)   | 图片轮播 | 会封装几种情况：带有缩略图、带数字、带上下一张按钮等
| [grid](interactive#grid)          | 列表操作 | 列表排序、拖拽、可编辑等
| [dropdown](interactive#dropdown)  | 下拉列表 | 模拟下拉框
| [win](interactive#win)            | 窗体相关 | window窗体操作
| [mask](interactive#mask)          | 公用遮罩 | 公共的遮罩层，可提供几种背景：白色、黑色、半透明、带斜线等



## 插件

> 挂接到xue.plus下面（以plus前缀命名）
> 
> 根据模块、组件编写出来的插件；
> 
> 需要注册到xue.plus类中

