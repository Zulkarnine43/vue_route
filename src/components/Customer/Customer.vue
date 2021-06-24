<template>
   <div>
    <h2>Customer</h2>
    <hr>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
methods:{
    navigateToHome(){
        this.$router.push('/')
    }
}
}
</script>