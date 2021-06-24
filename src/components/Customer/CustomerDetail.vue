<template>
   <div>
        <h2>Customer Detail {{$route.params.id}}</h2>
        <!-- <router-link
        tag="button"
        :to="'/customer/'+$route.params.id+'/edit'"
        >
        Edit User
        </router-link> -->
    <router-link
        tag="button"
        :to="{name:'customerEdit',params:{id:$route.params.id}}"
        >
        Edit User
        </router-link>
   </div>
</template>