<template>
    <div>
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
  
      <div v-if="gameWon" class="overlay">
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
  
  const pokeballImage = '/assets/images/pokeball.png'
  const blankImage = '/src/assets/images/blank.png'
  const transparentImage = '/src/assets/images/blank.png'
  
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
    }
  }
  
  const flipCard = index => {
    cardsChosen.value.push(cardArray.value[index].name)
    cardsChosenIds.value.push(index)
    cardArray.value[index].src = cardArray.value[index].img
  
    if (cardsChosen.value.length === 2) {
      setTimeout(checkMatch, 700)
    }
  }
  
  onMounted(() => {
    createBoard()
  })
  </script>
  
  <style scoped>
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
  </style>
  