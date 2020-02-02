/*
 * @Author: your name
 * @Date: 2019-11-25 16:37:50
 * @LastEditTime : 2020-01-03 09:00:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\store\index.ts
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
const storeContext = require.context('./module', true, /\.ts$/)
storeContext.keys().forEach((modules) => {
	store.registerModule(modules.replace(/(^\.\/)|(\.ts$)/g, ''), storeContext(modules).default)
})
Vue.prototype.$store = store
export default store;
