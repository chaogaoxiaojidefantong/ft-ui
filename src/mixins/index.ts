/*
 * @Author: your name
 * @Date: 2019-12-04 14:24:16
 * @LastEditTime : 2019-12-30 15:34:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\mixins\index.ts
 */
import Vue from 'vue';
import {StringUtil} from '../components/ft/index'
import {systemUtil} from '../components/ft/index'
import {deepCopy} from '../components/ft/index'
import { createNamespacedHelpers } from 'vuex'
import userUtil from '../libs/userUtil';
const stringUtil=new StringUtil();
const {  mapActions:userActions } = createNamespacedHelpers('user')
Vue.mixin({
    data(){
        return{  
            user:''        
        }
    },
    created(){
        //如果手机端打开则重定向
         if(systemUtil.isMobile()&&!(stringUtil.indexofRes(location.href,'h5'))){    
             let hash=location.hash.substring(2);    
            location.replace('#/h5/' + hash);           
        }
        this.user=userUtil.getUser();
    },
    mounted(){       
    },
    methods:{
        ...userActions(['loginActions']),
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
        filterCodeArr(arr:Array<any>){
            let arrRes:Array<any>=[]
               arr.forEach(str=>{
               arrRes.push(str.split(/\n/));
               }) 
               return arrRes;
        },
        filterCodeString(str:string):Array<string>{
            return str.split(/\n/);
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
        /**
         * 暂停2秒后执行
         */
        timeOutGo(fuc){
            
        },
        /**
         * 页面跳转
         * @param routerName 页面的路由名
         */
        pushPage(routerName:string){
            this.$router.push({name:routerName});
        }
    }
})