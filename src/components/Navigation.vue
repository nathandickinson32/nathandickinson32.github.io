<template>
  <!-- <div class="sidebar">
    <div class="logo">
      <span>ND</span>
    </div>
    <div class="off-screen-menu">
        <label id="profile"></label>
        <ul class="list">
    
          <li>
            <router-link class="ham-btns" to="/" @click="closeMenu">Home</router-link><br>
          <router-link class="ham-btns" to="/about" @click="closeMenu">About</router-link><br>
          <router-link class="ham-btns" to="/projects" @click="closeMenu">Projects</router-link>
       
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
  
  </div> -->
  <div class="header">
    <router-link class="header-btns" id="home-btn" to="/"
      ><h3>Home</h3></router-link
    >
    <router-link class="header-btns" to="/about"><h3>About</h3></router-link>
    <router-link class="header-btns" to="/projects"
      ><h3>Projects</h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  mounted() {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  },

  methods: {
    closeMenu() {
      this.isMenuOpen = false;
      const hamMenu = document.querySelector(".ham-menu");
      const offScreenMenu = document.querySelector(".off-screen-menu");
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
}

.header-btns {
  color: white;
  flex: 1;
  text-align: center;
  margin-right: 10px;
}

@media (max-width: 600px) {
  .header-btns {
   margin-right: 20px;
  }
}
/* 
.sidebar {
  width: 60px;
  height: 120px;
  background-color: #2A5D84;
  color: white;
  position: fixed;
  display: flex;
    flex-direction: column;
  align-items: center;
  margin-top: -5px;
  margin-left: -60px;
 
  
  border-radius: 10px;
  

  
}

.logo {
  font-size: 24px;
  margin-bottom: 40px;
}


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

.off-screen-menu {
  
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
  z-index: 100;

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
.ham-btns{
  color:black
} */
</style>