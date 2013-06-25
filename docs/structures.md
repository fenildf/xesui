#文件结构

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
        |    |---- html/              // HTML结构
        |    |
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
        

