用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置

##  Nuxt.js 会尝试找到应用根目录下的 store 目录，如果该目录存在，它将做以下的事情：
	1.引用 vuex 模块
	2.将 vuex 模块 加到 vendors 构建配置中去
	3.设置 Vue 根实例的 store 配置项
## nuxtServerInit
	Nuxt.js 调用它的时候会将页面的上下文对象作为第2个参数传给它（服务端调用时才会酱紫哟）
	当我们想将服务端的一些数据传到客户端时，这个方法是灰常好用的