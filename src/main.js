import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";
import "iview/dist/styles/iview.css";
import config from "./config/config";
// import iView from "iview";
Vue.config.productionTip = false;
// Vue.use(iView);
// 全局注册应用配置
Vue.prototype.$config = config;
new Vue({
  router,
  store,
  config,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
