require('./bootstrap')

window.Vue = require('vue')

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from './routes.js'
import MainApp from './components/MainApp.vue'
import storeData from './store'
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(storeData)

const router  = new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to, from, next)=>{
    const requireAuth = to.matched.some(record=>
        record.meta.requireAuth
    )
    const currentUser = store.state.currentUser
    if(requireAuth && !currentUser){
        next('/login')
    }
    else if (to.path === '/login' && currentUser){
        next('/')
    }
    else{
        next('/dashboard')
    }
    next()
})

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp
    }
});
