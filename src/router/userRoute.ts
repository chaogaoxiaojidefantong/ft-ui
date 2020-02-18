//此路由放置pc端客户端的页面
const userRoute =
[      
    {
    path: '/',
    name: 'index',
    component: ()=>import('../views/home/index.vue'),
    redirect: { name: 'installIndex' },
    children:[
        {
        path: '/install/index',
        name: 'installIndex',
        component: ()=>import('../views/home/install/index.vue'),
        },
        {
            path: '/install/start',
            name: 'installStart',
            component: ()=>import('../views/home/install/start.vue'),
        },
        {
            path: '/component/cascader',
            name: 'componentCascader',
            component: ()=>import('../views/home/component/cascader.vue'),
        },
        {
            path: '/component/container3',
            name: 'componentContainer3',
            component: ()=>import('../views/home/component/container3.vue'),
        },
        {
            path: '/component/line',
            name: 'componentLine',
            component: ()=>import('../views/home/component/line.vue'),
        },
    ]
},
]

export default userRoute;