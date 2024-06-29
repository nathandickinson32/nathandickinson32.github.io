<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {NavBar}
};


</script>

<template>

<div id="app" class="nav">
  
    <NavBar />
 
    
    <div class="content">
      <router-view />
    </div>
  </div>

</template>

<style>
/* body{
  background-image: url('/src/assets/images/port-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.nav{
  display: flex;

  
}

.content {
  flex-grow: 1;
  padding: 20px;
 
} */
</style>
