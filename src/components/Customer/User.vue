<template>
   <div>
    <h2>Customer</h2>
    <p>Loaded Id: {{loadedId}}</p>
    <button @click="navigateToHome">Go to Home</button>
   </div>
</template>

<script>
export default {
    data(){
   return{
       loadedId:this.$route.params.id
   }
    },
    watch:{
  '$route'(to){
      this.loadedId=to.params.id
  }
    },
methods:{
    navigateToHome(){
        this.$router.push('/')
    }
}
}
</script>