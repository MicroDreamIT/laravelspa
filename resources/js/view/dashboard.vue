<template>
    <div>
        <form @submit.prevent="post" class="form-horizontal">

            <div class="form-group">
                <label>title</label>
                <input type="text" class="form-control">
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
        methods:{
            post(){

            }
        }
    }
</script>

<style scoped>

</style>