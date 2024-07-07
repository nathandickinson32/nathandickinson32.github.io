<template>
   <div class="container">
    <h1 class="title">Have a look at some of the projects I've built with team members or play a game I made</h1>

    <div class="slider-wrapper">
      <div class="slider">
        <router-link  id="slide-1" :to="{ path: '/connect4' }">
          <img class="slide-image" src="../assets/images/connect4boardCover.png" alt="connectSS"/>
        </router-link>
        <router-link id="slide-2"  :to="{ path: '/whackAMole' }">
          <img class="slide-image" src="../assets/images/whackamolegamecover.png" alt="whackAmoleSS"/>
        </router-link>
        <router-link id="slide-3"  :to="{ path: '/memory' }">
          <img class="slide-image" src="../assets/images/memoryboardcover.png" alt="memorySS"/>
        </router-link>
      </div>

      <div class="slider-nav">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </div>
  </div>


<!-- <div class="dropdown">
      <label for="projects"></label>
        <select name="projects" id="categories" v-on:change="changeRoute($event)">
          <option value="">Pick a Game!</option>
          <option value="/connect4">Connect-4</option>
          <option value="/whackAMole">Whack-A-Mole</option>
          <option value="/memory">Memory</option>
          <option value="/project4">project4</option>
          
        </select>
      </div> -->
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


.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-left: 50px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.slider-wrapper {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  max-width: 400px;
}

.slider {
  display: flex;
  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */
  scroll-behavior:smooth;
  box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
  border-radius: 0.5rem;
}

.slide-image {
  flex: 0 0 auto;
  width: 400px;
  height: auto;
  object-fit: cover;
  scroll-snap-align: start;
}

.slider-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.slider-nav a {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.75;
  transition: opacity 250ms ease;
}

.slider-nav a:hover {
  opacity: 1;
}
.title{
  color:white
}
</style>