const webpack=require('webpack');
module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),
  srcDir: 'src/',
  //在任何页面里面引入 axios 而不用担心它会被重复打包
  build: {
    vendor: ['axios']
  },
  head: {
    titleTemplate: 'Camplink-%s',
    //设置应用的源码目录
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  //想让每一个页面的切换都有淡出 (fade) 效果，创建一个所有路由共用的 CSS 文件
  css: [
    'assets/main.css'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
      [
        '/api', 
        { 
          target: 'http://localhost:3000', // api主机
          pathRewrite: { '^/api' : '/' }
        }
    ]
  ],
  build:{
    vendor:['jquery'],
    plugins:[
      new webpack.ProvidePlugin(
        {
          $:'jquery',
          jQuery:'jquery',
          'window.jQuery':'jquery'
        }
      )
    ]
  }
}