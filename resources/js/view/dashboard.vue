<template>
    <div class="container">
        <form @submit.prevent="post" class="form-horizontal">

            <div class="form-group">
                <label>title</label>
                <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
                <button @submit.prevent="submit" class="btn btn-success">submit</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        data(){
            return {
                name:''
            }
        },
        methods:{
            post(){
                axios.post('/api/post', this.name)
                    .then(res=>{

                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>

</style>