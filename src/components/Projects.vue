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
.container {
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
}

/* .container {
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.happyImage {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide-image {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
}

.slider-nav {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.slider-nav a {
  display: block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  text-indent: -9999px;
  transition: background-color 0.3s;
}

.slider-nav a.active,
.slider-nav a:hover {
  background-color: #0073e6;
}

.footer {
  margin-top: 20px;
}

/* Mobile Styles */
/* @media (max-width: 768px) {
  .title {
    font-size: 20px;
  }

  .happyImage {
    width: 30px;
    height: 30px;
  }

  .slide-image {
    max-width: 80%;
  }

  .slider-nav a {
    width: 8px;
    height: 8px;
  }

  .footer h2 {
    font-size: 16px;
  }
}  */
</style>