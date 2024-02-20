import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置国际化
import { zhCn } from 'element-plus/es/locales.mjs'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn, // element-plus国际化的配置
})

// 获取环境变量
// console.log(import.meta.env)

// svg依赖
import 'virtual:svg-icons-register'

// 引入全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components'
console.log(globalComponent)
// 安装自定义插件  这里的use会触发globalComponent对象中的install方法，所以对象中的方法名称必须是install
app.use(globalComponent)
// 引入模版的全局样式
import '@/styles/index.scss'

// 测试模拟接口能否使用
// import axios from 'axios';
// 登陆接口
// axios({
//   url:'/api/user/login',
//   method:'post',
//   data:{
//     username:'admin',
//     password:'111111'
//   }
// })

app.mount('#app')
