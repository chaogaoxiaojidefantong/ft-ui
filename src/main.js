import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";
import "iview/dist/styles/iview.css";
import config from "./config/config";
import messages from "@/lang/index";
import VueI18n from 'vue-i18n';
import {camelize} from './libs/string';
// import iView from "iview";
let st="sty-ob";
let g=camelize(st);
debugger
Vue.config.productionTip = false;
// Vue.use(iView);
// 全局注册应用配置
Vue.prototype.$config = config;
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages, // 设置地区信息
})
new Vue({
  i18n,
  router,
  store,
  config,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
