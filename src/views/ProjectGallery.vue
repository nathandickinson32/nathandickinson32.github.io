<template>
  <div class="heading-container">
    <h1>Project Gallery</h1>
  </div>

  <div class="learnMore">
    <h4>Click on each project to learn more</h4>
  </div>
  
  <div class="container">
    <div class="project-container">
      <router-link class="project-btns tic-tac-toe-btn" to="/tic-tac-toe"></router-link>
      <h4 class="btn-header">Tic-Tac-Toe</h4>
    </div>

    <div class="project-container">
      <router-link class="project-btns clean-coders-btn" to="/clean-coders">
        <span class="c-logo">C</span>
      </router-link>
      <h4 class="btn-header">Clean Coders</h4>
    </div>

    <div class="project-container">
      <router-link class="project-btns second-nature-btn" to="/secondNature"></router-link>
      <h4 class="btn-header">Second Nature<br/>App</h4>
    </div>

    <div class="project-container">
      <router-link class="project-btns oh-I-remember-btn" to="/oh-I-remember"></router-link>
      <h4 class="btn-header">Oh I<br/>Remember!</h4>
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
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.project-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
}

.project-btns {
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  transition: transform 0.3s ease;
}

.project-btns:hover {
  transform: scale(1.13);
}

.btn-header {
  text-align: center;
  margin-top: 10px;
  color: white;
  font-size: 0.9rem;
  line-height: 1.3;
  min-height: 40px;
}

h1 {
  color: black;
}

.second-nature-btn {
  background-image: url('../assets/images/second-nature.png');
  background-size: cover;
  background-position: center;
}

.tic-tac-toe-btn {
  background-image: url('../assets/images/Tic_tac_toe.svg.png');
  background-size: cover;
  background-position: center;
}

.clean-coders-btn {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.c-logo {
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  font-family: 'Arial', sans-serif;
}

.oh-I-remember-btn {
  background-image: url('../assets/images/Remember_Logo.png');
  background-size: cover;
  background-position: center;
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
  padding-bottom: 1rem;
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
  bottom: 0;
}

.learnMore {
  text-align: center;
  margin-bottom: 30px;
}

.learnMore h4 {
  color: black;
  margin: 0;
}
</style>