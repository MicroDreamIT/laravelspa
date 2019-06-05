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
                                <input type="text" v-model="form.email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>password</label>
                                <input type="password" v-model="form.password" class="form-control">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../../helpers/auth'

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login')
                login(this.form)
                    .then(res => {
                        this.$store.commit('loginSuccess', res)
                        this.$router.push({name: 'home'})
                    })
                    .catch(err => {
                        this.$store.commit('loginFailed', {err})
                    })
            }
        }
    }
</script>

<style scoped>


</style>