<template>
    <div class="container">
        <div class="scoreboard">
      <h1>Your score: </h1>
      <h1 id="score">{{ result }}</h1>
  
      <h3>Seconds Left: <span id="time-left">{{ currentTime }}</span></h3>
      <h3>High Score: <span id="high-score">{{ highScore }}</span></h3>

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
  .grid {
    display: flex;
    flex-wrap: wrap;
    height: 300px;
    width: 300px;
    border: 1px solid white;
    margin-left: 50px;
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
  
  body {
    background-color: black;
    color: white;
  }
  .scoreboard {
    background-color: aliceblue;
    border-radius: 10px;
    margin-left: 65px;
    margin-right: 30px;
   
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
  </style>