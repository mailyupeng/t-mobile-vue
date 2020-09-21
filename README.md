# news-mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 文档目录结构
````
├── node_modules              第三方包存储目录
├── public                    任何放置在 public 文件夹的静态资源都会被简单的复制，而不经过 webpack。
│   ├── favicon.ico           浏览器收藏夹图标
│   └── index.html            单页面 HTML 文件
├── src
│   ├── assets                公共资源目录，放图片等资源
│   ├── components            公共组件目录
│   ├── router                Vue Router 路由模块
│   ├── store                 Vue 容器模块
│   ├── views                 视图组件存储目录，所有的路由页面都存储到这里
│   ├── App.vue               根组件，最终被替换渲染到 index.html 页面中 #app 入口节点
│   └── main.js               整个项目的启动入口模块
├── .browserslistrc           指定了项目的目标浏览器的范围。这个值会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀
├── .editorconfig             EditorConfig 帮助开发人员定义和维护跨编辑器（或IDE）的统一的代码风格，详情参考这里：https://editorconfig.org/。
├── .eslintrc.js              ESLint 的配置文件
├── .gitignore                Git 的忽略配置文件，告诉Git项目中要忽略的文件或文件夹
├── README.md                 说明文档
├── babel.config.js           Babel 的配置文件
├── package-lock.json         记录安装时的包的版本号，以保证自己或其他人在 npm install 时大家的依赖能保证一致
└── package.json              包说明文件，记录了项目中使用到的第三方包依赖信息等内容
````