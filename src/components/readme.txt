组件目录 components 用于组织应用的 Vue.js 组件。
Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性

## 引入组件
    import Header from '~/components/Header'
    export default{
        components: { Header }
    }	