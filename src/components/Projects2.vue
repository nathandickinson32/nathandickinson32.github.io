<template>
  <h1>Click on a project to learn more</h1>
  <div class="container">
    <div class="project-container">
      <router-link class="project-btns second-nature-btn" to="/secondNature"></router-link>
      <h4 class="btn-header"> <span>Second Nature</span><br/>App</h4>
    </div>

    <div class="project-container">
      <router-link class="project-btns foodie-friend-btn" to="/foodieFriend"></router-link>
    <h4 class="btn-header">My Foodie Friend</h4>
    </div>
    


    <div class="project-container">
      <router-link class="project-btns connect4-btn" id="connet4-btn" to="/connect4"></router-link>
      <h4 class="btn-header">Connect 4</h4>
    </div>
  
    <div class="project-container">

      <router-link class="project-btns whack-a-mole-btn" to="/whackAMole"></router-link>
      <h4 class="btn-header">Whack-A-Mole</h4>
    </div>

    <!-- <router-link class="project-btns" to="/memory"><h3>Classic Memory Game</h3></router-link> -->

    <div class="project-container">

      <router-link class="project-btns tenmo-btn" to="/tenmo"
      ></router-link
    >
    <h4 class="btn-header">TEnmo</h4>
    </div>
   
    <div class="project-container">
      <router-link class="project-btns vending-machine-btn" to="/vendingMachine"></router-link>
      <h4 class="btn-header"><span>Virtual Vending </span><br/>Machine</h4>
    </div>

    <div class="project-container">
      <router-link class="project-btns dungeon-game-btn" to="/dungeonGame"></router-link>
      <h4 class="btn-header"> <span>Dungeon Adventure</span><br/> Game</h4>
    </div>

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
  justify-content: space-between;
  align-items: center;
}
.project-btns {
  display: flex;
  width: 80px;
  height: 80px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color:black

}
h4 {
  text-align: center;
  margin-top: 3px;
  color: white
}
.connect4-btn {
  background-image: url('../assets/images/connect-four.png');
  background-size: cover;
  justify-content: center;
}
.whack-a-mole-btn{
  background-image: url('../assets/images/mole.png');
  background-size: cover;
  justify-content: center;
}

.second-nature-btn{
  background-image: url('../assets/images/second-nature.png');
  background-size: cover;
  justify-content: center;
}
.tenmo-btn{
  background-image: url('../assets/images/money-exchange.png');
  background-size: cover;
  justify-content: center;
  
}
.foodie-friend-btn{
  background-image: url('../assets/images/cook-book.png');
  background-size: cover;
  justify-content: center;
}
.vending-machine-btn{
  background-image: url('../assets/images/vending-machine.png');
  background-size: cover;
  justify-content: center;
}
.dungeon-game-btn{
  background-image: url('../assets/images/dungeon.png');
  background-size: cover;
  justify-content: center;
}

h1{
  color:black
}
.project-container{
 display: flex;
 flex-direction: column;
 align-items: center;
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