/*
 * @Author: your name
 * @Date: 2019-11-18 09:44:04
 * @LastEditTime : 2020-01-09 10:49:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './types/index.ts'
import router from './router'
import store from './store'
import './libs/util';
import './mixins/index';
import i18n from './lang/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import plugins from './plugins/index'
import VueClipboard from 'vue-clipboard2'
import './directives'
import VueQr from 'vue-qr'
import {ftui} from 'ftui'
import "ftui/dist/ftui.css"
Vue.use(ftui);
Vue.use(VueQr);
import VueAppend from 'vue-append'
Vue.use(VueAppend)
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.use(plugins);
Vue.use(ElementUI);
Vue.config.productionTip = false
const vue=new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vue;
