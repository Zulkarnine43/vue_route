<template>
  <ul class="nav nav-pills bg-primary">
 
   <router-link active-class="active" tag="li" exact class=" nav-item nav-link text-white" to="/">Home</router-link>
 
 
    <router-link active-class="active" tag="li" exact class=" nav-item nav-link text-white" to="/user/1">Users</router-link>
 


    <router-link active-class="active" tag="li" exact class="nav-item nav-link text-white" to="/customer/1">Customer</router-link>


    <router-link active-class="active" tag="li" exact class="nav-item nav-link text-white" to="/about">About</router-link>
</ul>
</template>

<style scoped>
ul .active{
    color: red !important;
}
</style>