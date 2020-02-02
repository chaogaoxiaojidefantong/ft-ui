/*
 * @Author: your name
 * @Date: 2020-01-12 17:55:46
 * @LastEditTime : 2020-01-14 12:23:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\components\ft\directives\append.ts
 */
import Vue from 'vue'
Vue.directive('append',{
    bind:(el:any,binding:any)=>{   
        let div = document.createElement('span')
        div.innerHTML = binding.value
        el.appendChild(div);
    },
    // componentUpdated:(el:any,binding:any)=>{
    //     let div = document.createElement('span')
    //     div.innerHTML = binding.value
    //     el.appendChild(div);
    // }
})