import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const initRouter = (routes: Array<RouteRecordRaw>) => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  return router;
};

export default initRouter