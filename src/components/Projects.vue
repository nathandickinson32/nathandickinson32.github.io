<template>
  <div class="container">
  The Start of my Projects Page
  <!-- <router-link class="connect4" to="/connect4">
Connect4
</router-link>
<router-link class="whackAMole" to="/whackAMole">
  Whack A Mole
</router-link> -->
</div>


<div class="dropdown">
      <label for="projects"></label>
        <select name="projects" id="categories" v-on:change="changeRoute($event)">
          <option value="">Pick a Game!</option> <!-- keep this value empty, select can't be selected-->
          <option value="/connect4">Connect-4</option>
          <option value="/whackAMole">Whack-A-Mole</option>
          <!-- <option value="/project3">project3</option>
          <option value="/project4">project4</option> -->
          
        </select>
      </div>
</template>

<script>
export default {
name: 'projects',
methods : {
    changeRoute(e) {
      this.$router.push(e.target.value);
    },

  
  }
}
</script>

<style scoped>
.container{
  margin-left: 100px;
}
.dropdown{
  display: flex;
  margin-left: 100px;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  
  
  
}

#categories {
  text-align: left;
  background-color: #87CEEB;
  font-family: 'Montserrat', serif;
  font-size: 20px;
}
</style>