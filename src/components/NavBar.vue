<template>
  <div class="sidebar">
    <div class="logo">
      <span>ND</span>
    </div>
    <nav>
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
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  
  
}
</script>

<style scoped>
.sidebar {
  width: 60px;
  height: 325px;
  background-color: #2A5D84;
  color: white;
  position: fixed;
  display: flex;
    flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin: 15px 0 10px 0;
 
  
}

.logo {
  font-size: 24px;
  margin-bottom: 40px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
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
body{
  background-image: url('/src/assets/images/port-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}



</style>