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
body{  background-image: url('/src/assets/images/port-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;}
</style>
