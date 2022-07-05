<template>

 <router-link :to="{ name: 'createContacts', params: { email:this.loggedemail }}" >CREATE CONTACTS</router-link>
       
</template>
<script>

  export default{
        name:"creatComponet",
  }
</script>
<style>
</style>