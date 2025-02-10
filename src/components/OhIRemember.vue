<template>
    <div class="heading-container">
      <h1 class="projectTitle">Oh I Remember!</h1>
    </div>
  
    <div class="appDescription">
        <p>
      Oh, I Remember! is a messaging app designed to help users recall forgotten thoughts. Whether it's an old memory,
       a lost idea, or an unanswered question, this app allows users to ask and receive answers whenever the recipient 
       remembers. With real-time notifications and seamless communication, it ensures that no thought goes unnoticed.
    </p>
    <div class="divImg OIR-Home"></div>
    </div>
    <p>
    The Questions feature allows users to send inquiries to friends, giving them the freedom to respond
     whenever they recall the answer.
  </p>
  <div class="divImg OIR-Questions"></div>

    <p>
    The Answers feature enables users to provide responses at their convenience, making it easy to share 
    knowledge and memories without pressure.
  </p>
  <div class="divImg OIR-Answers"></div>
  <p>
    Real-time Notifications ensure users never miss a new question, response, or friend request, 
    keeping conversations flowing effortlessly.
  </p>
  <div class="divImg OIR-Notifications"></div>
  <p>
    The Friends system allows users to connect with people they trust, ensuring a personalized and meaningful 
    messaging experience.
  </p>
  <div class="divImg OIR-Friends"></div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
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
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, aliceblue 0%, black 50%, aliceblue 100%);
    margin: 0.5rem auto 0;
    position: absolute;
    left: 0;
    bottom: -0.5rem;
  }
  
  .appDescription p {
    color: aliceblue;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .divImg {
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .OIR-Home {
    width: 280px;
    height: 400px;
    background-image: url("../assets/images/OIR_Home.png");
    justify-self: center;
  }
  
  .OIR-Questions {
    width: 280px;
    height: 400px;
    background-image: url("../assets/images/OIR_Answers.png");
    justify-self: center;
  }
  
  .OIR-Answers {
    width: 280px;
    height: 450px;
    background-image: url("../assets/images/OIR_Questions.png");
    justify-self: center;
  }
  
  .OIR-Friends {
    width: 280px;
    height: 460px;
    background-image: url("../assets/images/OIR_Friends.png");
    justify-self: center;
  }
  
  .OIR-Notifications {
    width: 280px;
    height: 450px;
    background-image: url("../assets/images/OIR_Notifications.png");
    justify-self: center;
  }
  
  
  @media (min-width: 768px) {
    .image-grid {
      flex-wrap: nowrap; 
      height: 100vh;
      justify-content: center;
      align-items: center; 
    }
  
    .divImg {
      width: 350px; 
      height: 500px;
    }
  }
  </style>