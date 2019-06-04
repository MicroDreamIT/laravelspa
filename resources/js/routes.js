export const routes = [
    {
        path:'/',
        name:'home',
        component:require('./components/Home.vue').default
    },
    {
        path:'/login',
        name:'login',
        component:require('./components/auth/Login.vue').default
    }

]