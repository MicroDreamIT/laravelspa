<template>
    <div id="main">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './Header.vue'
    export default {
        name: "MainApp",
        components:{
            Header
        }
    }
</script>

<style scoped>

</style>