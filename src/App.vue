<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {NavBar}
};


</script>

<template>

<div id="app" class="nav">
  
    <NavBar class="navBar"/>
 
    
    <div class="content">
      <router-view />
    </div>
  </div>

</template>

<style>

</style>
