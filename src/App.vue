<script>
import NavBar from "./components/Navigation.vue";

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

body{ 
  /* background: linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%); */
  /* background: radial-gradient(circle, rgba(5, 111, 146, 0.8), rgba(6, 57, 84, 0.4)); */
  background: linear-gradient(to bottom, rgb(1, 179, 201) 0%, rgb(40, 48, 68) 97.6%);
  font-family:Verdana, Geneva, Tahoma, sans-serif

}
.navBar{
  z-index: 100;

}
</style>
