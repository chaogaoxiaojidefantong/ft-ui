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
import 'view-design/dist/styles/iview.css';
import './libs/util';
import './mixins/index';
import i18n from './lang/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mavon-editor/dist/css/index.css'
import {ftui} from './components/ft/index'
import VueLazyload from 'vue-lazyload'
import plugins from './plugins/index'
import VueClipboard from 'vue-clipboard2'
import './directives'
import moment from 'moment'
import VueQr from 'vue-qr'
Vue.use(VueQr);
import VueAppend from 'vue-append'
Vue.use(VueAppend)
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.use(plugins);
Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'http://47.106.172.81:7795/common/loadding.gif',
  loading: 'http://47.106.172.81:7795/common/loadding.gif',
  attempt: 1
})
Vue.use(ElementUI);
Vue.use(ftui);

// 时间过滤器
Vue.filter('dateFilter', (input:any, format:any = 'YYYY/MM/DD') => {
  return moment(input*1000).format(format)
})
Vue.filter('timeFilter', (input:any, format:any = 'YYYY/MM/DD HH:mm:ss') => {
  return moment(input * 1000).format(format)
})
Vue.filter('hoursFilter', (input:any, format:any = ' HH:mm') => {
  return moment(input * 1000).format(format)
})
Vue.filter('yearFilter', (input:any, format:any = 'YYYY年MM月DD') => {
  return moment(input * 1000).format(format)
})
Vue.config.productionTip = false
const vue=new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vue;
