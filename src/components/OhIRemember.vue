<template>
  <div class="heading-container">
    <h1 class="projectTitle">Oh I Remember!</h1>
  </div>

  <div class="content-wrapper">
    <div class="appDescription">
      <p>
        Oh, I Remember! is a messaging app designed to help users recall forgotten thoughts. Whether it's an old memory,
        a lost idea, or an unanswered question, this app allows users to ask and receive answers whenever the recipient 
        remembers. With real-time notifications and seamless communication, it ensures that no thought goes unnoticed.
        <!-- Click the link to make an account and check it out! <a href="https://fluffy-ganache-b4021a.netlify.app/" class="OIRememberLink">Oh, I Remember!</a> -->
      </p>
      <div class="divImg OIR-Home"></div>
    </div>

    <div class="feature-section">
      <p>
        The Questions feature allows users to send inquiries to friends, giving them the freedom to respond
        whenever they recall the answer.
      </p>
      <div class="divImg OIR-Questions"></div>
    </div>

    <div class="feature-section">
      <p>
        The Answers feature enables users to provide responses at their convenience, making it easy to share 
        knowledge and memories without pressure.
      </p>
      <div class="divImg OIR-Answers"></div>
    </div>

    <div class="feature-section">
      <p>
        Real-time Notifications ensure users never miss a new question, response, or friend request, 
        keeping conversations flowing effortlessly.
      </p>
      <div class="divImg OIR-Notifications"></div>
    </div>

    <div class="feature-section">
      <p>
        The Friends system allows users to connect with people they trust, ensuring a personalized and meaningful 
        messaging experience.
      </p>
      <div class="divImg OIR-Friends"></div>
    </div>
  </div>
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
  padding: 0 0 1rem 0;
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
  position: absolute;
  left: 0;
  bottom: 0;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.appDescription {
  margin-bottom: 3rem;
}

.appDescription p {
  color: aliceblue;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: left;
}

.feature-section {
  margin-bottom: 3rem;
}

.feature-section p {
  color: aliceblue;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
}

.divImg {
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin: 0 auto 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: block;
}

.OIR-Home {
  width: 280px;
  height: 500px;
  background-image: url("../assets/images/OIR_Home1.png");
}

.OIR-Questions {
  width: 280px;
  height: 400px;
  background-image: url("../assets/images/OIR_Answers.png");
}

.OIR-Answers {
  width: 280px;
  height: 450px;
  background-image: url("../assets/images/OIR_Questions.png");
}

.OIR-Friends {
  width: 280px;
  height: 500px;
  background-image: url("../assets/images/OIR_Friends.png");
}

.OIR-Notifications {
  width: 280px;
  height: 450px;
  background-image: url("../assets/images/OIR_Notifications.png");
}

.OIRememberLink {
  color: black;
}

@media (min-width: 768px) {
  .content-wrapper {
    max-width: 1000px;
  }

  .OIR-Home {
    width: 350px;
    height: 625px;
  }

  .OIR-Questions {
    width: 350px;
    height: 500px;
  }

  .OIR-Answers {
    width: 350px;
    height: 560px;
  }

  .OIR-Friends {
    width: 350px;
    height: 625px;
  }

  .OIR-Notifications {
    width: 350px;
    height: 560px;
  }
}
</style>