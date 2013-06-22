#加载方式

## 1. 按需加载

### 1.1 轮询DOM节点

在页面头部加入种子文件，进行DOM节点的轮询；

当带有标识符的DOM节点全部加载完成后，取消轮询；

如：

    function getStatus(dom){
    
        // 将要轮询的选择器
    	var d = dom;               

	    var arr = dom.split(','); 
	
    	// 要轮询的节点数量
	    var len = arr.length;      

    	// 计数器
	    var i = 0;                 

        // 取消轮询的方法
	    var c = clearInterval(a);  
	
    	var a = setInterval(function(){
	
	        // 计数
		    i++;                   
		
    		// 当检查到实际存在的节点数量与，要检索的数量相同时，退出轮询
	    	if($(dom).length == len){
		    	alert('loaded');
			    i = 0;
    			clearInterval(a);
	    		return false;
		    }else{
			    console.log(i);
    		}
	    },500);

    }
    
    // 调用轮询
    getStatus('#img3,#img4,#img5');


### 1.2 模块代码中增加加载的标识符

每个模块结构的下面都有一段JS配置文件，用来标识该模块的文件及加载顺序；
UI.add()是异步加载模块文件的方法；可支持链式调用
UI.use()是调用模块的方法；

如：

    <!-- 用户头像组件（结构） -->
	<div class="avatar">
		<a href="" class="prev"></a>
		<ul>
			<li><img src="" alt=""><a href="" class="ui_username"></a></li>
			<li><img src="" alt=""><a href="" class="ui_username"></a></li>
			<li><img src="" alt=""><a href="" class="ui_username"></a></li>
			<li><img src="" alt=""><a href="" class="ui_username"></a></li>
			<li><img src="" alt=""><a href="" class="ui_username"></a></li>
		</ul>
		<a href="" class="next"></a>
	</div>
	<!-- 用户头像组件 （JS模块）-->
	<script>
		// 先加载模块文件
		UI.add('avatar, username')
		// 调用模块
		.use('avatar, username', function(){
			
			// 用户头像鼠标划过加载用户信息
		    ui.username.init();
		    
			// 多用户可左右切换
			ui.avatar.init();
			
		});
	</script>
    


### 1.3 load事件监听

> 还没想好怎么处理


## 2. 合并加载

### 2.1 本地合并

### 2.2 线上合成