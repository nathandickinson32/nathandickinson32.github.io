<template>
  <section class="container">
    <div class="currentPlayer">
      <h1>The current Player is:</h1> 
      <h1>Player <span>{{ currentPlayer }}</span></h1>
      <h1>{{ result }}</h1>
    </div>
    <div class="bigGrid">
      <div class="grid">
        <div
          v-for="(square, index) in squares"
          :key="index"
          class="cell"
          :class="{
            'player-one': square.player === 1,
            'player-two': square.player === 2,
            'taken': square.taken
          }"
          @click="makeMove(index)"
        ></div>
      </div>
    </div>

    <div class="scoreboard">
      <h2>Player 1 Wins: {{ playerOneWins }}</h2>
      <h2>Player 2 Wins: {{ playerTwoWins }}</h2>
    </div>

    <button class="clear-board-btn" @click="clearBoard">Clear Board</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentPlayer: 1,
      result: '',
      squares: Array.from({ length: 42 }, () => ({ player: 0, taken: false })),
      playerOneWins: 0,
      playerTwoWins: 0,
      winningArrays: [
        [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31],
        [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24], [20, 19, 18, 17],
        [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
        [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], [40, 33, 26, 19],
        [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17],
        [4, 11, 18, 25], [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
        [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
        [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3],
        [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
        [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23],
        [37, 31, 25, 19], [4, 10, 16, 22], [2, 10, 18, 26], [39, 31, 23, 15],
        [1, 9, 17, 25], [40, 32, 24, 16], [9, 17, 25, 33], [8, 16, 24, 32],
        [11, 17, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11],
        [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], [26, 25, 24, 23],
        [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
        [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33],
        [13, 20, 27, 34],
      ],
    };
  },
  methods: {
    clearBoard() {
      this.squares = Array.from({ length: 42 }, () => ({ player: 0, taken: false }));
      this.currentPlayer = 1;
      this.result = '';
    },
    makeMove(index) {
      for (let row = 5; row >= 0; row--) {
        const squareIndex = row * 7 + index % 7;
        if (!this.squares[squareIndex].taken) {
          this.squares[squareIndex].player = this.currentPlayer;
          this.squares[squareIndex].taken = true;
          this.checkBoard();
          this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
          return;
        }
      }
      alert('Cannot go there!');
    },
    checkBoard() {
      for (let i = 0; i < this.winningArrays.length; i++) {
        const [a, b, c, d] = this.winningArrays[i];
        const squares = this.squares;

        if (
          squares[a].player !== 0 &&
          squares[a].player === squares[b].player &&
          squares[a].player === squares[c].player &&
          squares[a].player === squares[d].player
        ) {
          this.result = `Player ${squares[a].player} Wins!`;
          if (squares[a].player === 1) {
            this.playerOneWins++;
          } else {
            this.playerTwoWins++;
          }
          setTimeout(() => {
            this.clearBoard();
          }, 2000);
          return;
        }
      }

      const isGridFull = this.squares.every(square => square.taken);
      if (isGridFull && !this.result) {
        this.result = 'It\'s a tie!';
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px 20px;
  border-radius: 10px;
  width: 100%;
}

.bigGrid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

}

.grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px; 
  height: 80vw; 
  max-height: 400px; 
  border: 1px solid white;
  border-radius: 10px;
  width: 100%;
 

}

.cell {
  width: calc(100% / 7);
  height: calc(100% / 6);
  box-sizing: border-box;
  border-color: white;
}

.player-one {
  background-color: red;
  border-radius: 50%;
}

.player-two {
  background-color: yellow;
  border-radius: 50%;
}

.scoreboard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
}

.clear-board-btn {
  margin-top: 10px;
}

@media (max-width: 600px) {
 


  h1 {
    font-size: 24px;
  }
}
</style>