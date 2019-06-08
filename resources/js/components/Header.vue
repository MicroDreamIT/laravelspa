<template>

    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link :to="{name:'login'}" class="nav-link" v-if="!currentUser">
                        login
                    </router-link>
                    <a href="#" @click.prevent="logout" class="nav-link" v-else>
                        logout
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        name:'app-header',
        computed:{
           currentUser(){
               return this.$store.getters.currentUser
           }
        },
        methods:{
            logout(){
                this.$store.commit('logout')
                this.$router.push('/login')
            }
        }
    }
</script>