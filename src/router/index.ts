// 通过vue-route插件实现模板路由配置
import { createRouter, createWebHistory } from 'vue-router';
import { constantRoute } from './routes';
// 创建路由器
let router = createRouter({
    // 路由模式hash
    history: createWebHistory(),
    routes: constantRoute,
    // 滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})

export default router