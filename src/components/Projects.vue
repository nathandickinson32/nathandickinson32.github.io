<template>
  <div class="container">
    <h1 class="title">Play a game I Made <img src="../assets/images/happiness.png" class="happyImage"></h1>

    <div class="slider-wrapper">
      <div class="slider">
        <router-link id="slide-1" :to="{ path: '/connect4' }">
          <img class="slide-image" src="../assets/images/connect4boardCover.png" alt="connectSS"/>
        </router-link>
        <router-link id="slide-2" :to="{ path: '/whackAMole' }">
          <img class="slide-image" src="../assets/images/whackamolegamecover.png" alt="whackAmoleSS"/>
        </router-link>
        <router-link id="slide-3" :to="{ path: '/memory' }">
          <img class="slide-image" src="../assets/images/memoryboardcover.png" alt="memorySS"/>
        </router-link>
      </div>

      <div class="slider-nav">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </div>
    <footer class="footer"><h2>Videos of my other projects coming soon!</h2></footer>
  </div>
</template>
<script>
export default {
  name: 'projects',
  methods: {
    changeRoute(e) {
      this.$router.push(e.target.value);
    },
  }
}
</script>

 <style scoped>

/* .container {
  max-width: 800px;
  margin: 0 auto;

}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: -150px;

}

.slider-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-left: 25px;

  
}

.slider {
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 10px;
}

.slider a {
  scroll-snap-align: center;
  flex: 0 0 100%;
}

.slide-image {
  width: 100%;
  height: auto;
  object-fit: cover;
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

.title {
  color: white;
}

.footer {
  color: white;
  margin-left: -100px;
}

.happyImage {
  width: 5%;
  height: auto;
}
@media (min-width: 600px) {
  .container {
   margin-left: 40px;
    
  }

  .footer{
    margin-left: 8px;
  }  
}  */

.container {
  padding: 1rem;
  text-align: center;
  background-color: #f9f9f9;
  color: #333;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.happyImage {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
}

.slider-wrapper {
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.5s ease;
}

.slider-nav {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.slider-nav a {
  width: 1rem;
  height: 1rem;
  margin: 0 0.25rem;
  background-color: #ddd;
  border-radius: 50%;
  display: inline-block;
  text-indent: -9999px;
}

.slider-nav a.active,
.slider-nav a:hover {
  background-color: #333;
}

.slide-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

/* Footer styling */
.footer {
  margin-top: 2rem;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
}

.footer h2 {
  font-size: 1rem;
  margin: 0;
}

/* Larger screen adjustments */
@media (min-width: 600px) {
  .title {
    font-size: 2rem;
  }

  .happyImage {
    width: 2rem;
    height: 2rem;
  }

  .slide-image {
    width: 80%;
    margin: 0 auto;
  }

  .footer h2 {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .happyImage {
    width: 2.5rem;
    height: 2.5rem;
  }

  .slide-image {
    width: 60%;
  }

  .footer h2 {
    font-size: 1.5rem;
  }
}
</style>