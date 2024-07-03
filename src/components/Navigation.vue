<template>
  <div class="sidebar">
    <div class="logo">
      <span>ND</span>
    </div>
    <div class="off-screen-menu">
        <label id="profile"></label>
        <ul class="list">
<!-- 
          <a href="/">
            <li id="home">Home</li>
          </a>
          <a href="/about">
            <li id="about">About</li>
          </a>
            
          <a href="/projects">
            <li id="Projects">Projects</li>
          </a> -->
    
          <li>
            <router-link class="home-btn" to="/" @click="closeMenu">Home</router-link><br>
          <router-link class="abt-btn" to="/about" @click="closeMenu">About</router-link><br>
          <router-link class="projects-btn" to="/projects" @click="closeMenu">Projects</router-link>
       
  </li>
         
        </ul>
      </div>
    <nav>
        <div class="ham-menu"  >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    <!-- <nav>
      <ul>
        <div class="nav-image">

        
          <li>
    <router-link class="home-btn" to="/">
      <img src="../assets/images/home.png" alt="Home"/>
    </router-link>
  </li>

          <li>
    <router-link class="about-btn" to="/about">
      <img src="../assets/images/information.png" alt="About"/>
    </router-link>
  </li> 

        <li>
          <router-link class="projects-btn" to="/projects">
            <img src="../assets/images/invention.png" alt="Projects" />
          </router-link>
        </li> 
        </div>
      </ul>
    </nav> -->
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  mounted() {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  
  
  
    hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    })
  
  
  },

  methods: {
 
    closeMenu() {
      this.isMenuOpen = false;
      const hamMenu = document.querySelector('.ham-menu');
      const offScreenMenu = document.querySelector('.off-screen-menu');
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
    },
  },
}
</script>

<style scoped>
.sidebar {
  width: 60px;
  height: 125px;
  background-color: #2A5D84;
  color: white;
  position: fixed;
  display: flex;
    flex-direction: column;
  align-items: center;
 
  
  border-radius: 10px;
  

  
}

.logo {
  font-size: 24px;
  margin-bottom: 40px;
}

/* .sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
} */

.sidebar nav ul li {
  width: 100%;
  margin: 20px 0;

  justify-content: center;
}

.sidebar nav ul li a {
  
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
}

.sidebar nav ul li a img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
} 
/* body{
  background-image: url('/src/assets/images/port-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
} */
.off-screen-menu {
  z-index: 100;
  background-color: #87CEEB;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  position: fixed;
  top: 50px;
  right: -450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 2.5rem;
  transition: .7s ease;
  border-radius: 10px;
  

}
.off-screen-menu.active{
  left: 0;
}
.ham-menu {
  display: flex;
  height: 50px;
  width: 50px;
  position: relative;
  top: -25px;
  cursor: pointer;
  margin-left: 20px;

}

.ham-menu span {
  z-index: 100;
  height: 5px;
  width: 100%;
  background-color: black;
  border-radius: 25px;
  position: absolute;
  top: 50%;
  right: 20%;
  bottom: 50%;
  transform: translate (-50%, -50%);
  transition: .7s ease;


}

.ham-menu span:nth-child(1) {
  top: 25%;
}

.ham-menu span:nth-child(3) {
  top: 75%;
}

.ham-menu.active span:nth-child(1) {
  top: 50%;
  transform: translate (50%, -50%) rotate(90deg);
  
}

.ham-menu.active span:nth-child(2) {
  opacity: 0;
}
.ham-menu.active span:nth-child(3) {
  top: 50%;
  transform: translate(50%, -50%) rotate(90deg);
  
}

.list{
  list-style: none;
}

/* @media (max-width: 600px) {
  .off-screen-menu {
  z-index: 100;
  background-color: #87CEEB;
  height: 100vh;
  width: 100%;
  max-width: 200px;
  position: fixed;
  top: 50px;
  left: -450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 2.5rem;
  transition: .7s ease;
  border-radius: 10px;
  

}

.off-screen-menu.active{
  right: 0;
}



} */
</style>