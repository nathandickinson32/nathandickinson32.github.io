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
  background: linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%);


}
.navBar{
  z-index: 100;

}
</style>
