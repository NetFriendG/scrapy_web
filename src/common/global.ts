import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";

import App from "@/App.vue";
// 样式文件
import "element-plus/dist/index.css";

const app: any = createApp(App);
const pinia = createPinia;

app.use(pinia);
app.use(ElementPlus);

export default app;
