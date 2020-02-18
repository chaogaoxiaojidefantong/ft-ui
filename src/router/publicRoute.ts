const publicRoute:Array<any>=[
    {
        path: '/login',
        name: 'login',
        component: ()=>import('../views/public/login.vue')
    }
]
export default publicRoute;