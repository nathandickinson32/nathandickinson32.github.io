<template>
  <div class="heading-container">
    <h1>Project Gallery</h1>
  </div>
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
      <h4 class="btn-header"><span>Click&Pick Vending </span></h4>
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
  color:black;
  transition: transform 0.3s ease;

}
.project-btns:hover{
  transform: scale(1.13);
}
h4 {
  text-align: center;
  margin-top: 3px;
  color: white
}
h1{
  color:black
}
.project-container{
 display: flex;
 flex-direction: column;
 align-items: center;
}
.second-nature-btn{
  background-image: url('../assets/images/second-nature.png');
  background-size: cover;
  justify-content: center;
}
.foodie-friend-btn{
  background-image: url('../assets/images/cook-book.png');
  background-size: cover;
  justify-content: center;
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


.tenmo-btn{
  background-image: url('../assets/images/money-exchange.png');
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
.heading-container {
  text-align: center;
  margin: 2rem 0;
}


.heading-container h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: aliceblue;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  letter-spacing: 1px; 
  position: relative;
}

.heading-container h1::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px; 
 
  background: linear-gradient(
    90deg,
    aliceblue 0%, 
    black 50%, 
    aliceblue 100%
  );
  margin: 0.5rem auto 0;
  position: absolute;
  left: 0;
  bottom: -0.5rem;
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