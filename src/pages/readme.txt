页面目录 pages 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。

该目录名为Nuxt.js保留的，不可更改

## 动态路由
	定义带参数的动态路由，创建以下划线为前缀的Vue文件或目录
	动态文件夹
		_slug
			slug-comments
				_slug/comments.vue
	动态目录
		users/_id.vue
			pages/users/_id.vue
##嵌套路由
	文件夹名字和同级目录下的文件.vue相同，就会生成嵌套理由
		例如：
			a
				a1.vue
				a2.vue
			a.vue
			生成
				a.vue
					a1.vue
					a2.vue
## Nuxt.js 为页面提供的特殊配置项
	export default {
	  asyncData (context) {
	    //支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象
	    return { name: 'World' }
	  },
	  fetch () {
		  // 与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据
	  },
	  head () {},
	  layout(){},
	  transition(){}
	  scrollToTop(){}//默认false,用于判定渲染页面前是否需要将当前页面滚动至顶部
	  validate(){}
	  middleware(){}//指定页面的中间件，中间件会在页面渲染之前被调用
	}
## 个性化设置页面标题和meta
	head () {
		return {
		title: this.title,
		meta: [
			{ hid: 'description', name: 'description', content: 'My custom description' }
		]
		}
	}