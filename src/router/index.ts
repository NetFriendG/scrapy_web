//路由文件
import { createRouter, createWebHistory } from 'vue-router'  //将createRouter、createWebHistory引入vue
const routes = [
    {
        path: '/',  //配置默认路由
        name: 'home', //路由名
        component: () => import("@/modules/Management/index.vue"), //引入该路由使用的组件
    }
]
const router = createRouter({ //设置为history模式
    history: createWebHistory(),
    routes
})


export default router