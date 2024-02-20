import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'

// 全局对象
const allGloablComponent = { SvgIcon, Pagination }

// 对外暴露一个插件对象
export default {
  // 必须叫install
  install(app: any) {
    Object.keys(allGloablComponent).forEach((key) => {
      // 注册全局组件
      app.component(key, allGloablComponent[key])
    })
  },
}
