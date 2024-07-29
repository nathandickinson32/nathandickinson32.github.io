<template>
<div class="heading-container">
        <h1 class="projectTitle">Pokémon Memory Match</h1>
      </div>

      <div class="memoryDescription">
        <p>
         
Pokémon Memory Match is a charming and interactive web-based game designed to delight Pokémon fans and challenge memory skills. 
Created using HTML, CSS, and JavaScript, the game presents a grid of cards featuring various Pokémon characters. 
Players flip two cards at a time to reveal the images, with the objective of finding and matching pairs. 
The gameplay encourages players to use their memory and concentration to recall the locations of previously revealed cards, 
aiming to complete the game in as few moves as possible.

        </p>
      
        
      </div>


    <div class="big-grid">
      <h1 class="score">Score: <span>{{ result }}</span>/6</h1>
      <div id="grid">
        <img
          v-for="(card, index) in cardArray"
          :key="index"
          :src="card.src"
          :data-id="index"
          @click="flipCard(index)"
        />
      </div>
  
      <div v-if="showOverlay" class="overlay">
        <div class="overlay-content">
          <img :src="winImage" alt="You Win" class="win-image" />
          <div class="message" v-if="message"><h2>{{ message }}</h2></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const cardArray = ref([
    { name: 'charmander', img: '/assets/images/charmander.png' },
    { name: 'pikachu', img: '/assets/images/pikachu.png' },
    { name: 'squirtle', img: '/assets/images/squirtle.png' },
    { name: 'eevee', img: '/assets/images/eevee.png' },
    { name: 'bulbasaur', img: '/assets/images/bulbasaur.png' },
    { name: 'psyduck', img: '/assets/images/psyduck.png' },
    { name: 'charmander', img: '/assets/images/charmander.png' },
    { name: 'pikachu', img: '/assets/images/pikachu.png' },
    { name: 'squirtle', img: '/assets/images/squirtle.png' },
    { name: 'eevee', img: '/assets/images/eevee.png' },
    { name: 'bulbasaur', img: '/assets/images/bulbasaur.png' },
    { name: 'psyduck', img: '/assets/images/psyduck.png' }
  ])
  
  const result = ref(0)
  const cardsChosen = ref([])
  const cardsChosenIds = ref([])
  const cardsWon = ref([])
  const message = ref('')
  const gameWon = ref(false)
  const winImage = '/assets/images/ash.png'
  const showOverlay = ref(false)
  
  const pokeballImage = '/assets/images/pokeball.png'
  const blankImage = '/assets/images/blank.png'
  const transparentImage = '/assets/images/blank.png'
  
  cardArray.value.sort(() => 0.5 - Math.random())
  
  const createBoard = () => {
    cardArray.value = cardArray.value.map(card => ({
      ...card,
      src: pokeballImage
    }))
  }
  
  const checkMatch = () => {
    const optionOneId = cardsChosenIds.value[0]
    const optionTwoId = cardsChosenIds.value[1]
  
    if (optionOneId === optionTwoId) {
      message.value = 'You have clicked the same image!'
    } else if (cardsChosen.value[0] === cardsChosen.value[1]) {
      message.value = 'You found a match!'
      cardArray.value[optionOneId].src = transparentImage
      cardArray.value[optionTwoId].src = transparentImage
      cardsWon.value.push(cardsChosen.value)
    } else {
      message.value = 'Sorry, try again!'
      cardArray.value[optionOneId].src = pokeballImage
      cardArray.value[optionTwoId].src = pokeballImage
    }
  
    result.value = cardsWon.value.length
    cardsChosen.value = []
    cardsChosenIds.value = []
  
    if (cardsWon.value.length === cardArray.value.length / 2) {
      message.value = 'Congratulations! You caught them all!'
      gameWon.value = true 
      showOverlay.value = true
      setTimeout(() => {
      showOverlay.value = false
      resetGame();
    }, 5000)
    }
  }
  
  const flipCard = index => {
    if (cardArray.value[index].src === pokeballImage && !gameWon.value) {
    cardsChosen.value.push(cardArray.value[index].name);
    cardsChosenIds.value.push(index);
    cardArray.value[index].src = cardArray.value[index].img;

    if (cardsChosen.value.length === 2) {
      setTimeout(checkMatch, 700);
    }
  }
  }
  const resetGame = () => {
  // Shuffle and reset the card array
  cardArray.value = cardArray.value.map(card => ({
    ...card,
    src: pokeballImage
  })).sort(() => 0.5 - Math.random());
  
  result.value = 0;
  cardsChosen.value = [];
  cardsChosenIds.value = [];
  cardsWon.value = [];
  message.value = '';
  gameWon.value = false;
};
  
  onMounted(() => {
    createBoard()
  })
  </script>
  
  <style scoped>
  .big-grid{
    display: inline-block;
  }
  #grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 10px;
    justify-items: center;
    align-items: center;
    position: relative;
  }
  
  #grid img {
    width: 100%;
    height: auto;
    max-width: 100px;
    cursor: pointer;
  }
  
  .message {
    margin-top: 20px;
    font-size: 1.2em;
    color: white;
  }
  
  .score {
    color: white;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay-content {
    text-align: center;
  }
  
  .win-image {
    max-width: 35%;
    max-height: 35%;
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
  