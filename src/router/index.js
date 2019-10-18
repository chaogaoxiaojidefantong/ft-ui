import routes from "./routers";
import Vue from "vue";
import Router from "vue-router";
import { getToken } from "@/libs/util";
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// const LOGIN_PAGE_name = "login";
// router.beforeEach((to, from, next) => {
//   const token = getToken();
//   if (!token && to.name != LOGIN_PAGE_name) {
//     next({ name: LOGIN_PAGE_name });
//   }
//   next();
// });
export default router;
