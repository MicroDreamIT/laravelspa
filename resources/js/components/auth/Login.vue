<template>
    <div>
        <div class="login row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">login</div>
                    <div class="card-body">
                        <form @submit.prevent="authenticate">
                            <div class="form-group">
                                <label>email</label>
                                <input type="text" v-model="form.email">
                            </div>
                            <div class="form-group">
                                <label>password</label>
                                <input type="password" v-model="form.password">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-default">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                form:{
                    email:'',
                    password:''
                }
            }
        },
        methods:{
                authenticate(){

                }
        }
    }
</script>

<style scoped>


</style>