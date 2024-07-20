<script>
import NavBar from "./components/Navigation.vue";
import Socials from "./components/Socials.vue";

export default {
  components: {NavBar, Socials}
  
};


</script>

<template>

<div id="app" class="nav">

    <NavBar class="navBar"/>
 
    
    <div class="content">
      <router-view />
    </div>
  </div>

<div>
  <div class="social-links">
        <!-- <router-link to="/resume"
          ><button class="resume-btn">Résumé</button></router-link
        >

        <a href="https://www.linkedin.com/in/nathangdickinson/"
          ><img src="../assets/images/linkedin.png" alt="LinkedIn"
        /></a>
        <a href="https://github.com/nathandickinson32"
          ><img src="../assets/images/github.png" alt="GitHub"
        /></a> -->

        <socials class="socials"/>
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
