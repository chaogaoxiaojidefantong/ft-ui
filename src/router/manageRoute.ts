/*
 * @Author: your name
 * @Date: 2019-12-04 12:26:51
 * @LastEditTime : 2020-01-12 17:54:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\router\manageRoute.ts
 */
//此路由放置pc端客户端的页面
import {getToken} from '../libs/util'
const manageRoute=
[
    {
        path: '/mg',
        name: 'mgindexHome',
        component:()=>import('../views/manage/index.vue'),
        beforeEnter: (to:any, from:any, next:any)=> {        
            if(!getToken()){
              next({name:'login'});
            }
            else{
                next();
            }
          }
    }
]
export default manageRoute;