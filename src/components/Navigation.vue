<template>

  <div class="header">
    <router-link class="header-btns" id="home-btn" to="/"
      ><h3>Home</h3></router-link
    >
    <router-link class="header-btns" to="/about"><h3>About</h3></router-link>
    <router-link class="header-btns" to="/projects"
      ><h3>Projects</h3></router-link
    >
    <!-- <router-link class="header-btns" to="/projects2"><h3>Projects 2</h3></router-link> -->

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
  position: relative;
  overflow: hidden;
  transition: text-shadow 0.3s ease;
}
.header-btns:hover{
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

}
@media (max-width: 600px) {
  .header-btns {
   margin-right: 20px;
  }
}

</style>