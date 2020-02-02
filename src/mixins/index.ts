/*
 * @Author: your name
 * @Date: 2019-12-04 14:24:16
 * @LastEditTime : 2019-12-30 15:34:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\mixins\index.ts
 */
import Vue from 'vue';
import {stringUtil} from '../components/ft/index'
import {systemUtil} from '../components/ft/index'
import {deepCopy} from '../components/ft/index'
Vue.mixin({
    data(){
        return{
        }
    },
    created(){
        //如果手机端打开则重定向
         if(systemUtil.isMobile()&&!(stringUtil.indexofRes(location.href,'h5'))){    
             let hash=location.hash.substring(2);    
            location.replace('#/h5/' + hash);           
        }
    },
    mounted(){
    },
    methods:{
        /**
         * 成功的提示
         * @param mes 
         */
        successNotify(mes:string){
            this.$message({
                message: mes,
                type: "success"
            })
        },
        /**
         * 深拷贝
         * @param obj 
         */
        deepCopy(obj:any){
            return deepCopy(obj);
        },
        /**
         * 将对象里的值全部清为空字符串
         */
        resetObject(obj:any){
            Object.keys(obj).forEach((item)=>{
                obj[item]=''
              })
        },
        /**
         * 结果的通知，200显示成功，其他显示失败
         */
        notifyResult(code:number,msg:string){
            if(code==200){
                this.$message({
                    type:'success',
                    message:msg
                  })               
            }
            else{
                  this.$message.error(msg);    
            }
        },
    }
})