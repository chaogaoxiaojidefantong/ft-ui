/*
 * @Author: your name
 * @Date: 2019-12-04 12:24:44
 * @LastEditTime : 2019-12-22 10:36:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\router\userRoute.ts
 */
//此路由放置pc端客户端的页面
const userRoute =
[      
    {
    path: '/',
    redirect: '/engine',
    name: 'index',
    component: ()=>import('../views/home/index.vue'),
},
]

export default userRoute;