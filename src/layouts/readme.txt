布局目录 layouts 用于组织应用的布局组件。

该目录名为Nuxt.js保留的，不可更改

默认情况下，布局页加载default.vue
也可支持自定义布局，使用方法：
	在pages页面里引入layouts
		export default {
			layout: 'user'//即可加载user组件
		}