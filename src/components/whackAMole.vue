<template>
<div class="heading-container">
        <h1 class="projectTitle">Whack-A-Mole</h1>
      </div>

      <div class="whackAMoleDescription">
        <p>
          Step into the whimsical world of the Whack-A-Mole game, a lively web adaptation of 
          the beloved arcade classic. Crafted initially in JavaScript and transformed into a 
          dynamic Vue.js component, this game invites players to test their reflexes and agility.
           Psyducks pop up unpredictably from their burrows, challenging players to swiftly click
            or "whack" them before they retreat. The goal is to accumulate points by hitting as 
            many psyducks as possible within a set time, while avoiding penalties for missed clicks.

        </p>
        <p>
          Built on Vue.js, the game features responsive design elements that ensure seamless 
          gameplay across various devices. Vibrant visuals and smooth animations enhance the 
          player experience, capturing the whimsy and excitement of the arcade original. 
          The Whack-A-Mole game exemplifies the fusion of retro gaming nostalgia with modern web
           technology, delivering a delightful and engaging experience for players of all ages.
        </p>
        
      </div>


    <div class="container">
        <div class="scoreboard">
      <h2 style="color: black;">Your score: </h2>
      <h2 style="color: black;" id="score">{{ result }}</h2>
  
      <h3 style="color: black;">Seconds Left: <span id="time-left">{{ currentTime }}</span></h3>
      <h3 style="color: black;">High Score: <span id="high-score">{{ highScore }}</span></h3>

    </div>
      <div class="grid">
        <div
          v-for="square in squares"
          :key="square.id"
          :id="square.id"
          :class="['square', { mole: square.id === hitPosition }]"
          @mousedown="hitMole(square.id)"
        ></div>
      </div>
      <button @click="resetGame">Play Again</button>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        squares: Array.from({ length: 9 }, (_, i) => ({ id: i + 1 })),
        result: 0,
        hitPosition: null,
        currentTime: 30,
        timerId: null,
        countDownTimerId: null,
        highScore: localStorage.getItem('highScore') || 0
      };
    },
    methods: {
      randomSquare() {
        this.squares.forEach((square) => {
          square.isMole = false;
        });
  
        const randomIndex = Math.floor(Math.random() * 9);
        this.squares[randomIndex].isMole = true;
        this.hitPosition = this.squares[randomIndex].id;
      },
      hitMole(squareId) {
        if (squareId === this.hitPosition) {
          this.result++;
          this.hitPosition = null;
        }
      },
      moveMole() {
        this.timerId = setInterval(this.randomSquare, 640);
      },
      countDown() {
        this.currentTime--;
        if (this.currentTime === 0) {
          clearInterval(this.countDownTimerId);
          clearInterval(this.timerId);
       
          if (this.result > this.highScore) {
          this.highScore = this.result;
          localStorage.setItem('highScore', this.highScore);
        }
        }
      },

      resetGame() {
      this.result = 0;
      this.currentTime = 30;
      this.hitPosition = null;
      clearInterval(this.timerId);
      clearInterval(this.countDownTimerId);
      this.moveMole();
      this.countDownTimerId = setInterval(this.countDown, 1000);
    }
    },
    mounted() {
      this.moveMole();
      this.countDownTimerId = setInterval(this.countDown, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timerId);
      clearInterval(this.countDownTimerId);
    }
  };
  </script>
  
  <style scoped>
 .container{
  display: flex;
  flex-direction: column;
  align-items: center;


 }
 .scoreboard{
  color: black;
 }
  .grid {
    display: flex;
    flex-wrap: wrap;
    height: 300px;
    width: 300px;
    border: 1px solid white;
    border-radius: 10px;
   
  }
  
  .square {
    height: 100px;
    width: 100px;
    border: 1px solid white;
    box-sizing: border-box;
    border-radius: 10px;
  }
  
  .mole {
    background-image: url('/src/assets/images/psyduck.png');
    background-size: cover;
    
  }
  
 .scoreboard{
  color:aliceblue
 }
  
  button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: grey;
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
p{
  color: aliceblue;
}

  </style>