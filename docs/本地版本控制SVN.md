#本地版本控制 (SVN)

> 以后本地调试和开发都可以用这个版本来控制


## 1. 版本地址

    svn://192.168.9.163/xesui_v04
    

## 2. SVN帐号

帐号      |        密码      | 备注
---------|------------------|--------
marco    | wujie1234        | 武杰
alex     | liuyanbin1234    | 艳宾
bluebird | shijiangang1234  | 建刚


## 3. 本地检出路径

    E:/server/xampp/htdoc/xesui_v04
    

## 4. 本地HOST

    127.0.0.1    js04.xesimg.com
    127.0.0.1    css04.xesimg.com
    127.0.0.1    img04.xesimg.com
    127.0.0.1    pic04.xesimg.com
    127.0.0.1    html04.xesimg.com


## 5. 本地服务器配置

1. JS：调用地址（`http://js04.xesimg.com/`）

        <VirtualHost *:80>
            DocumentRoot "E:\server\xampp\htdocs\xesui_v04\source\script"
            ServerName js04.xesimg.com
        </VirtualHost>
    
2. CSS：调用地址（`http://css04.xesimg.com/`）

        <VirtualHost *:80>
            DocumentRoot "E:\server\xampp\htdocs\xesui_v04\source\css"
            ServerName js04.xesimg.com
        </VirtualHost>

3. IMG：调用地址（`http://img04.xesimg.com/`）

        <VirtualHost *:80>
            DocumentRoot "E:\server\xampp\htdocs\xesui_v04\source\img"
            ServerName js04.xesimg.com
        </VirtualHost>
        
4. HTML：调用地址（`http://html04.xesimg.com/`） 
       
        <VirtualHost *:80>
            DocumentRoot "E:\server\xampp\htdocs\xesui_v04\source\html"
            ServerName js04.xesimg.com
        </VirtualHost>

5. PIC：调用地址（`http://pic04.xesimg.com/`）

        <VirtualHost *:80>
            DocumentRoot "E:\server\xampp\htdocs\xesui_v04\source\pic"
            ServerName js04.xesimg.com
        </VirtualHost>
        
        
