
import FtInput from './component/input.vue'
import FtButton from './component/button.vue'
import FtTopBar from './component/top-bar.vue'
import FtTopBar2 from './component/top-bar2.vue'
import {FtContainer,FtContainer2,FtContainer3,FtContainer4} from './component/container/'
import {FtCard,FtCard2,FtCard3,FtCard4} from './component/card/'
import {FtDivider} from './component/divider/'
import {FtLine,FtLine2} from './component/form/'
import {FtCopy} from './component/copy/'
import {FtSubmenu} from './component/submenu/'
import {FtCascader} from './component/cascader'
import objUtil from './utils/objUtil'
export * from './utils/common/stringUtil'
import systemUtil from './utils/common/systemUtil'
import arrUtil from './utils/common/arrUtil'
import {FtCaptcha} from './component/captcha'
import {deepCopy} from './utils/assist'
import commonUtil from './utils/commonUtil'
import numberUtil from './utils/common/numberUtil'
import fileUtil from './utils/fileUtil'
import EleTableUtil from './utils/ele/EleTableUtil';
import {FtHeader} from './component/header/index'
import {FtP1,FtP2,FtP3,FtP4,FtP5,FtP6,FtP7} from './component/p/index'
const Components = [
    FtInput,
    FtButton,
    FtTopBar,
    FtTopBar2,
    FtContainer,
    FtContainer2,
    FtContainer3,
    FtContainer4,
    FtCard,
    FtCard3,
    FtCard4,
    FtDivider,
    FtLine,
    FtCopy,
    FtSubmenu,
    FtCascader,
    FtCaptcha,
    FtCard2,
    FtLine2,
    FtHeader,
    FtP1,
    FtP2,
    FtP3,
    FtP4,
    FtP5,
    FtP6,
    FtP7
]

const ftui = function(Vue:any, opts = {}) {
  Components.map(component => {
      Vue.component(component.name, component);
    })
  }

  /* 支持使用标签的方式引入 */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }
export  {
  FtButton,//按需引入
  ftui,
  FtCascader,
  objUtil,
  systemUtil,
  arrUtil,
  deepCopy,
  commonUtil,
  fileUtil,
  EleTableUtil,
  FtLine2,
  numberUtil
}