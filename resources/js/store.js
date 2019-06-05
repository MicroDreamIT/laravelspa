import {getLocalUser} from "./helpers/auth";

const user = getLocalUser()

export default {
    state:{
        currentUser: user,
        isLoggedIn:!!user,
        loading:false,
        auth_error:null
    },
    getters:{
        isLoading(state){
            return state.loading
        },
        isLoggedIn(state){
            return state.isLoggedIn
        },
        currentUser(state){
            return state.currentUser
        },
        authError(state){
            return state.auth_error
        },


    },
    mutations:{
        login(state){
            state.loading = true
            state.auth_error = null
        },
        loginSuccess(state){

        }
    },
    actions:{}
}