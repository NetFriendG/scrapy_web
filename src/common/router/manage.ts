import { RouteRecordRaw } from "vue-router";
// 类型
const route: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/scrapyManage",
  },
  {
    path: "/scrapyManage",
    name: "scrapyManage",
    component: (): Promise<any> => import("@/modules/Index.vue"),
    children: [
      {
        path: "task",
        component: () => import("@/modules/Task/Index.vue"),
      },
    ],
  },
];

export default route;
