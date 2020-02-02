
import Vue from 'vue'
import userUtil from '../libs/userUtil'
import {arrUtil} from '../components/ft/index'
const level1=['媒体发布','财务管理','我要推广','帮助中心']
const level2=['媒体发布','财务管理','我要推广','帮助中心','推广广场']
const level3=['媒体发布','财务管理','我要推广','帮助中心','推广发布']
const level4=['媒体发布','财务管理','我要推广','帮助中心','推广发布']
let levelArr=[level1,level2,level3,level4]
Vue.directive('level',{
    bind:function(el:any){    
        const level=userUtil.getLevel()
        if(!arrUtil.oneOf(el.dataset.name,levelArr[level-1])){
            el.hidden=true   
        }   
        
    }
})

