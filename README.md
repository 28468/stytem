#考试管理系统
<h2>1.项目简介</h2>

````
此项目为考试平台管理系统，有管理员，出题者，和浏览者三个角色，每个角色的路由权限各不相同，是RBAC的典型案例。
````
<h2>2.技术栈</h2>

````
主框架为React，结合Dva和hooks的一套较为前潮的模式请求后台的数据。
大量运用Ant DesiGn的From 和Message  Table 
结合getFieldDecorator高阶函数实现表单验证
通过react-intl实现国际化 多语言切换
使用xlsx 实现Excel导入导出
````
<h2>3.项目运行</h2>

````
# 克隆项目
git@github.com:28468/stytem.git

# 进入考试平台下载依赖
npm install

# 启动服务
npm start 

# 前端项目打包
npm run build
````
<h2>4.项目结构</h2>

````
├── exam //目录
 ├── mock // 
 ├── dist // 源代码编译后的生成线上环境代码
 ├── node_modules // 依赖的第三方包
 ├── src                // 生产目录
 │   ├── assets         //配置所有接口
 │   ├── components     //各种组件
 |   ├── lang           //语言国际化
 |   ├── models         //命名空间
 |   ├── pages          //静态资源目录
 |   ├── routes         //路由
 |   ├── services       //接口
 |   ├── utils          //视图
 │   ├── index.css      //公共样式
 │   ├── index.js       //封装的方法
 |   ├── router.js      //配置国际化字典
 ├── .babelrc // babel 配置
 ├── .editorconfig // 编辑器 code format 配置
 ├── .eslintrc.js // eslint 配置
 ├── .gitignore // 不纳入 git 版本控制的 /文件夹?/ 列表
 ├── package.json // 项目信息文件
└── README.md // 说明
````
<h2>5.小结</h2>

````
项目简结
难度：简单
开发时长：编码两周
关键字：移动端，出行，可视化，高德地图，Echart图表
````
<h2>5.项目截图</h2>

````

````
