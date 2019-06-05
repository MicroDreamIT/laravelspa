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

    },
    mutations:{},
    actions:{}
}