<template>
  <div class="sidebar">
    <div class="logo">
      <span>ND</span>
    </div>
    <nav>
      <ul>
        <div class="nav-image">
          <li>
  <router-link :to="{name: home}">
    <button>
      <img src="../assets/images/home.png" alt="Home"/>
    </button>
  </router-link>
</li>
<li>
  <router-link :to="{name: about}">
    <button>
      <img src="../assets/images/information.png" alt="About"/>
    </button>
  </router-link>
</li>
          <li><router-link to="/projects"><img src="../assets/images/invention.png" alt="Projects"/></router-link></li>
          <li><a class="about-btn" href="/about" img src="../assets/images/information.png"></a></li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style>
.sidebar {
  width: 60px;
  background-color: #2A5D84;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
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
  display: flex;
  justify-content: center;
}

.sidebar nav ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
}

.sidebar nav ul li a img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.about-btn{

}
</style>