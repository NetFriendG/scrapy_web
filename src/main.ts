import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import App from "./App.vue";
// 路由
import initRouter from "@/common/router/Index"
import route from "@/common/router/manage"
// 样式文件
import "element-plus/dist/index.css"
// 类型

const router = initRouter(route);
const app: any = createApp(App);
const pinia = createPinia;

app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
export default app;
