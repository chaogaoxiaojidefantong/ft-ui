import en from './en'
import zh from './zh'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
const messages={...en,...zh}
const i18n = new VueI18n({
    locale: 'zh', // 设置地区
    messages, // 设置地区信息
  })
export default i18n;
//this.$i18n.locale='zh'切换语言