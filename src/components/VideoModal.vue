<template>
    <div v-if="show" class="modal-overlay">
      <div class="modal">
        <button class="close-btn" @click="close">Close</button>
        <video controls :src="videoSrc" class="video-player"></video>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    show: Boolean,
    videoSrc: String
  });
  
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 90%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25%;
    margin-top: 70px;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .close-btn {
   
    cursor: pointer;
  }
  
  .video-player {
    width: 100%;
    height: auto;
  }

  @media (max-width: 800px) {
  .modal-overlay {
    width: 100%;
    margin-left: 0;
  }
}
  </style>
  