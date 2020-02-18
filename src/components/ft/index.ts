
import FtInput from './component/ft-input.vue'
import FtButton from './component/ft-button.vue'
import FtTopBar from './component/ft-top-bar.vue'
import FtTopBar2 from './component/ft-top-bar2.vue'
import {FtContainer,FtContainer2,FtContainer3,FtContainer4} from './component/ft-container/'
import {FtCard,FtCard2,FtCard3,FtCard4} from './component/ft-card/'
import {FtDivider} from './component/ft-divider/'
import {FtLine,FtLine2} from './component/ft-form/'
import {FtCopy} from './component/ft-copy/'
import {FtSubmenu} from './component/ft-submenu/'
import {FtCascader} from './component/ft-cascader'
import objUtil from './utils/objUtil'
export * from './utils/common/stringUtil'
import systemUtil from './utils/common/systemUtil'
import arrUtil from './utils/common/arrUtil'
import {FtCaptcha} from './component/ft-captcha'
import {deepCopy} from './utils/assist'
import commonUtil from './utils/commonUtil'
import numberUtil from './utils/common/numberUtil'
import fileUtil from './utils/fileUtil'
import EleTableUtil from './utils/ele/EleTableUtil';
import {FtHeader} from './component/ft-header/index'
import {FtP1,FtP2,FtP3,FtP4,FtP5,FtP6} from './component/ft-p/index'
const ftComponents = [
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
    FtP6
]

const ftui = function(Vue:any, opts = {}) {
  ftComponents.map(component => {
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