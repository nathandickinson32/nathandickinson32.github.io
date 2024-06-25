<script setup>
import HomePage from "./components/HomePage.vue";
import NavBar from "./components/NavBar.vue"



</script>

<template>

<div class="grid1">
  <nav-bar/>
  
  <home-page/>
</div>


</template>

<style>
.grid1{
  display: grid;
  grid-template-columns: 1fr 100%;

}

body{
  background-image: url('/src/assets/images/port-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
