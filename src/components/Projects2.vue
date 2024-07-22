<template>
  <h1>Click on a project to learn more</h1>
  <div class="container">
    <router-link class="project-btns" to="/secondNature"><h3>Second Nature App</h3></router-link>

    <router-link class="project-btns" id="foodieFriend-btn" to="/foodieFriend"
      ><h3>My Foodie Friend</h3></router-link
    >
   
    <router-link class="project-btns" to="/connect4"><h3>Connect 4</h3></router-link>
    <router-link class="project-btns" to="/whackAMole"><h3>Whack-A-Mole</h3></router-link>
    <router-link class="project-btns" to="/memory"><h3>Classic Memory Game</h3></router-link>

    <router-link class="project-btns" to="/tenmo"
      ><h3>TEnmo</h3></router-link
    >
    <router-link class="project-btns" to="/vendingMachine"><h3>Virtual Vending Machine</h3></router-link>

    <router-link class="project-btns" to="/dungeonGame"><h3>Dungeon Adventure Game</h3></router-link>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.project-btns {
  display: flex;
  border: 1px solid black;
  width: 80px;
  height: 80px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;

}
h3 {
  text-align: center;
}


/* @media only screen and (min-width: 600px) {
  .container {
    margin-right: 30px;
    margin-left: 30px;
  }
}

@media only screen and (min-width: 800px) {
  #project-btns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

  }

} */
</style>