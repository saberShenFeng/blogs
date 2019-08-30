(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{328:function(e,r,t){"use strict";t.r(r);var n=t(9),o=Object(n.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"前端常用解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端常用解决方案","aria-hidden":"true"}},[e._v("#")]),e._v(" 前端常用解决方案")]),e._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://my.oschina.net/stefanzhlg/blog/529403",target:"_blank",rel:"noopener noreferrer"}},[e._v("git 配置多个SSH-Key"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000009084576",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Visual Studio Code对Node.js进行断点调试"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("iframe刷新，单页应用保持当前路由 - "),t("code",[e._v("sessionStorage")])])]),e._v(" "),t("li",[t("p",[e._v("pc兼容性，safari底部莫名有个横条 - 禁用/卸载"),t("code",[e._v("迅雷")]),e._v("插件")])]),e._v(" "),t("li",[t("p",[e._v("npm查看全局安装过的包 - "),t("code",[e._v("npm list -g --depth 0")])])]),e._v(" "),t("li",[t("p",[e._v("npm管理员彻底删除包 - "),t("code",[e._v("npm unpublish <package-name> --force")])])]),e._v(" "),t("li",[t("p",[e._v("svg-icon - css能控制svg颜色等，但内部fill属性优先级大于外层fill或css属性")])]),e._v(" "),t("li",[t("p",[e._v("跳页锚点 - 考虑兼容性，使用"),t("code",[e._v("隐藏的a标签作为暗锚")]),e._v("即可")])]),e._v(" "),t("li",[t("p",[e._v("长文字只能控制在n行内 - "),t("a",{attrs:{href:"https://github.com/Justineo/vue-clamp",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-clamp"),t("OutboundLink")],1),e._v(",原理使用"),t("code",[e._v("Element.getClientRects()")]),e._v("这个API")])]),e._v(" "),t("li",[t("p",[e._v("span包含长文字不换行 - 块级元素自动换行，内联元素分两种："),t("code",[e._v("全英文内联元素不会自动换行")]),e._v("，包含中文过长会换行")])]),e._v(" "),t("li",[t("p",[e._v("'abc'[0] = 'a' - "),t("a",{attrs:{href:"https://segmentfault.com/a/1190000005076858",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解JavaScript类数组"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("git命令删除远程分支 - git push origin --delete branchName")])]),e._v(" "),t("li",[t("p",[e._v("axios get请求参数，要么带在url，要么设置到config.params中，不能设置到config.data（该选项会设置在body中，post请求才这样做）。 -- "),t("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[e._v("github axios"),t("OutboundLink")],1),e._v(" / "),t("a",{attrs:{href:"https://github.com/axios/axios/issues/787",target:"_blank",rel:"noopener noreferrer"}},[e._v("GET request does not send data (JSON)"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("统一的项目开发环境，检验node版本 -- package.json中engines字段配置即可。"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/FroImJAuAO05BY1rZAhMkQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript工程项目的一系列最佳实践策略"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("部署代码报错："),t("a",{attrs:{href:"https://github.com/geowarin/friendly-errors-webpack-plugin/issues/69",target:"_blank",rel:"noopener noreferrer"}},[e._v("cannot read property 'startsWith' of undefined"),t("OutboundLink")],1),e._v(" -- 使用了动态导入（如import或requext.context等API），但没有创建对应的路径。")])]),e._v(" "),t("li",[t("p",[e._v("function(...args){ console.log(args)} -- 解构后，args是个数组对象")])]),e._v(" "),t("li",[t("p",[e._v("后台302重定向一定需要是在页面上（window.location.href） -- 不能通过ajax请求让后端页面重定向，ajax只接收json/txt/stream等格式")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000009506097",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue后台权限方案"),t("OutboundLink")],1),e._v(" - 原理通过登录获得用户拥有的roles，然后根据整个前端路由表（meta包含这个路由项是哪些roles有权限访问），最后根据两者交集得到routers并通过"),t("code",[e._v("router.addRoutes")]),e._v("动态添加")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Breadcrumb/index.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("面包屑导航"),t("OutboundLink")],1),e._v(" - $route.matched，这个API完美解决")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://stackoverflow.com/questions/38077164/es6-export-from-import/38077264",target:"_blank",rel:"noopener noreferrer"}},[e._v("export * from './child'"),t("OutboundLink")],1),e._v(" - ES6模块导入，重构将大文件拆分成多个小文件")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://www.alloyteam.com/2014/01/use-js-file-download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("当前页下载文件"),t("OutboundLink")],1),e._v(" 通过H5中，给a标签加download属性")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/bokuweb/re-resizable",target:"_blank",rel:"noopener noreferrer"}},[e._v("拖拽动态改变宽度"),t("OutboundLink")],1),e._v(" 依赖原生mousedown/move/up事件")])]),e._v(" "),t("li",[t("p",[e._v("拖拽事件 - dragenter、dragleave")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"noopener noreferrer"}},[e._v("webworker"),t("OutboundLink")],1),e._v(" 可用于拆分出一些复杂逻辑，比如大文件上传、文件批量下载、轮询等。- "),t("a",{attrs:{href:"https://github.com/developit/workerize-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("实用的封装webpack worker loader - workerize-loader"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("electron的render进程也可以直接使用nodejs api")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000018038749",target:"_blank",rel:"noopener noreferrer"}},[e._v("debug vue源码"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.zhihu.com/question/28676261",target:"_blank",rel:"noopener noreferrer"}},[e._v("github fork后同步源更新"),t("OutboundLink")],1),e._v(" 提pr必会")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://gist.github.com/cobyism/4730490",target:"_blank",rel:"noopener noreferrer"}},[e._v("github 把子目录发布到远程gh-pages"),t("OutboundLink")],1),e._v(" 发布个人项目必会")])]),e._v(" "),t("li",[t("p",[e._v("解决git pull/push每次都需要输入密码问题，一行命令：git config --global credential.helper store")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000019522911",target:"_blank",rel:"noopener noreferrer"}},[e._v("jest 报错 SyntaxError: Unexpected string"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/u014175572/article/details/50773536",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS样式使HTML标签占满父容器的方法"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"技术选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术选型","aria-hidden":"true"}},[e._v("#")]),e._v(" 技术选型")]),e._v(" "),t("ul",[t("li",[e._v("svg图标: "),t("a",{attrs:{href:"https://github.com/MMF-FE/vue-svgicon",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-svgicon"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("日期选择: "),t("a",{attrs:{href:"https://github.com/weifeiyue/vue-datepicker-local",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-datepicker-local"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("表单验证: "),t("a",{attrs:{href:"https://github.com/monterail/vuelidate",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuelidate"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("node中客户端http请求库选择 "),t("a",{attrs:{href:""}},[e._v("superagent")]),e._v(" "),t("ul",[t("li",[e._v("建议选择"),t("code",[e._v("superagent")]),e._v(",支持链式调用以及post json数据解析。node环境中不建议axios，因为axios请求需要qs等第三方库进行post数据stringfy，而且不支持发送嵌套的object数据。")])])]),e._v(" "),t("li",[e._v("富文本编辑器 "),t("a",{attrs:{href:"https://github.com/surmon-china/vue-quill-editor/blob/master/src/editor.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-quill-editor"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("底层使用"),t("a",{attrs:{href:"https://github.com/quilljs/quill",target:"_blank",rel:"noopener noreferrer"}},[e._v("quill"),t("OutboundLink")],1),e._v("，较好的界面和扩展性")])])]),e._v(" "),t("li",[e._v("markdown编辑器 "),t("a",{attrs:{href:"https://github.com/nhnent/tui.editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("tui.editor"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("复制到剪切板 "),t("a",{attrs:{href:""}},[e._v("clipboard.js")])])]),e._v(" "),t("h2",{attrs:{id:"工具集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具集","aria-hidden":"true"}},[e._v("#")]),e._v(" 工具集")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://30-seconds.github.io/30-seconds-of-css/#transform-centering",target:"_blank",rel:"noopener noreferrer"}},[e._v("css代码片段"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/justinfrankel/licecap",target:"_blank",rel:"noopener noreferrer"}},[e._v("licecap"),t("OutboundLink")],1),e._v(" - 录屏gif工具")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.processon.com/organizations/5c653312e4b0f0908a940a64#diagrams",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProcessOn"),t("OutboundLink")],1),e._v(" - 在线画图")]),e._v(" "),t("li",[t("a",{attrs:{href:""}},[e._v("Charles")]),e._v(" - 抓包工具"),t("a",{attrs:{href:"https://blog.csdn.net/windy135/article/details/79086270",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置教程"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/mailgun/transactional-email-templates",target:"_blank",rel:"noopener noreferrer"}},[e._v("transactional-email-templates"),t("OutboundLink")],1),e._v(" 响应式html邮件模板")]),e._v(" "),t("li",[e._v("在线图片压缩工具\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://squoosh.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("squoosh"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://tinypng.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tinypng"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[e._v("在线svg\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/amio/badgen-service",target:"_blank",rel:"noopener noreferrer"}},[e._v("badgen-service"),t("OutboundLink")],1),e._v(" 在线图标生成服务")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jaywcjlove/sb",target:"_blank",rel:"noopener noreferrer"}},[e._v("sb"),t("OutboundLink")],1),e._v(" 在线多种svg图标")])])])]),e._v(" "),t("h2",{attrs:{id:"github优秀源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github优秀源码","aria-hidden":"true"}},[e._v("#")]),e._v(" Github优秀源码")]),e._v(" "),t("ul",[t("li",[e._v("Vue\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-element-admin"),t("OutboundLink")],1),e._v(" 完整的项目案例，界面精良，较多的第三方组件方案（icon、permission...）")])])]),e._v(" "),t("li",[e._v("React\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://codesandbox.io/s/9on71rvnyo",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-redux-todo"),t("OutboundLink")],1),e._v(" 经典的react-redux TodoList示例")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/bailicangdu/react-pxq",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-pxq"),t("OutboundLink")],1),e._v(" 清晰易懂的react入门项目")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/pomber/git-history/blob/master/src/slide.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("git-history"),t("OutboundLink")],1),e._v(" react hooks实例")])])]),e._v(" "),t("li",[e._v("JS\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/30-seconds/30-seconds-of-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("30-seconds-of-code"),t("OutboundLink")],1),e._v(" 短小精悍的js代码片段")])])]),e._v(" "),t("li",[e._v("Common\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/GoogleChromeLabs/quicklink",target:"_blank",rel:"noopener noreferrer"}},[e._v("quicklink"),t("OutboundLink")],1),e._v(" 兼容性好的页面资源预加载解决方案")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/labs42io/clean-code-typescript",target:"_blank",rel:"noopener noreferrer"}},[e._v("clean-code-typescript"),t("OutboundLink")],1),e._v(" ts最佳实践")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jkchao/typescript-book-chinese",target:"_blank",rel:"noopener noreferrer"}},[e._v("《深入理解TypeScript》"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books-zh.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("free-programming-books"),t("OutboundLink")],1),e._v(" 学习加油站")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/stephentian/33-js-concepts",target:"_blank",rel:"noopener noreferrer"}},[e._v("33-js-concepts"),t("OutboundLink")],1),e._v(" js必须知道的33个概念")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/yeasy/docker_practice",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker_practice"),t("OutboundLink")],1),e._v(" /  "),t("a",{attrs:{href:"https://github.com/twtrubiks/docker-tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-tutorial"),t("OutboundLink")],1),e._v(" docker学习")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/creeperyang/blog/blob/master/codes/minipack/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("minipack"),t("OutboundLink")],1),e._v(" 极简版webpack打包，对webpack模块原理非常有帮助")])])])]),e._v(" "),t("h2",{attrs:{id:"优秀文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优秀文章","aria-hidden":"true"}},[e._v("#")]),e._v(" 优秀文章")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/XdOPPay8fpNBiH2ExW_EyQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 中的依赖管理"),t("OutboundLink")],1),e._v("\n介绍npm依赖、版本号规则、npm vs yarn")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.zybuluo.com/yangfch3/note/671516",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器内核、JS 引擎、页面呈现原理及其优化"),t("OutboundLink")],1),e._v("\n介绍渲染引擎和JS引擎（V8/JavaScriptCore等），以及它们如何“画”一张网页")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://juejin.im/post/5bd07377e51d457a58075974",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端解读控制反转(IOC)"),t("OutboundLink")],1),e._v("\n最容易理解的前端控制反转，案例清晰")])]),e._v(" "),t("li",[t("p",[e._v("React")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25990883",target:"_blank",rel:"noopener noreferrer"}},[e._v("setState为什么不会同步更新组件状态"),t("OutboundLink")],1),e._v(" 为什么setState不同步")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/20346379",target:"_blank",rel:"noopener noreferrer"}},[e._v("React 源码剖析系列 － 不可思议的 react diff"),t("OutboundLink")],1),e._v(" 详细说了react diff细节以及注意点")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/20295971",target:"_blank",rel:"noopener noreferrer"}},[e._v("Immutable 详解及 React 中实践"),t("OutboundLink")],1),e._v(" imuutable在react中实践")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26027085",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Fiber对现有代码的影响"),t("OutboundLink")],1),e._v(" 浅显易懂的讲述了fiber来由以及影响")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/38030418",target:"_blank",rel:"noopener noreferrer"}},[e._v("React v16.3之后的组件生命周期函数"),t("OutboundLink")],1),e._v(" 说明了fiber架构给生命周期带来的影响")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://hellogithub2014.github.io/2018/07/17/vue-i18n-source-code/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueI18n源码解析"),t("OutboundLink")],1),e._v(" 原理跟vuex异曲同工，都是创建监听对象data，并watch变动，更新view。建议阅读")])])])])},[],!1,null,null,null);o.options.__file="record-solution.md";r.default=o.exports}}]);