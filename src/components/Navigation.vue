<template>

  <div class="header">
    <router-link class="header-btns" id="home-btn" to="/"
      ><h3>Home</h3></router-link
    >
    <router-link class="header-btns" to="/about"><h3>About</h3></router-link>
    <router-link class="header-btns" to="/projects"
      ><h3>Projects</h3></router-link
    >
    <router-link class="header-btns" to="/projects2"><h3>Projects 2</h3></router-link>

  </div>
</template>

<script>
export default {
  name: "NavBar"
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

</style>