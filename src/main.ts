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
console.log(import.meta.env)

app.mount('#app')
