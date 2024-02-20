import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components'
// svg依赖
import 'virtual:svg-icons-register'
// 引入模版的全局样式
import '@/styles/index.scss'
// 配置国际化
import { zhCn } from 'element-plus/es/locales.mjs'
// 引入路由
import router from './router'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn, // element-plus国际化的配置
})

app.use(router)
// 引入全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 安装自定义插件  这里的use会触发globalComponent对象中的install方法，所以对象中的方法名称必须是install
app.use(globalComponent)

app.mount('#app')
