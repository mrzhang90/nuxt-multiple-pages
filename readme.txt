## nuxt
	nuxt
		启动一个热加载-开发模式
	nuxt generate
		编译应用，并依据路由配置生成对应的HTML文件 (用于静态站点的部署)
	nuxt build
		利用webpack编译应用，压缩JS和CSS资源-发布用
	nuxt start
		生成模式启动一个Web服务器
## vue默认nuxt命令是是开发环境
	当使用 nuxt 命令时，dev 会被强制设置成 true
	当使用 nuxt build， nuxt start 或 nuxt generate 命令时，dev 会被强制设置成 false
	或者：
		配置了线上环境，就会是线上环境
			NODE_ENV=production
 ## 环境变量
 	设置：
	 	env: {
	    	baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	  	}
  	获取：
  		1.通过 process.env.baseUrl
		2.通过 context.baseUrl，请参考 context api