<template>
  <div class="main-content">
    <div class="profile">
      <img src="../assets/images/headshot.png" alt="Nathan Dickinson" />
    </div>
    <div class="info">
      <h1>Hi There! I'm <span>Nathan Dickinson</span></h1>
      <p>
        A <span>Full Stack Web Developer</span> dedicated to developing robust and scalable web applications across the stack
      </p>
      <div class="resume">
        <!-- <a href="assets/docs/myResumeForNow.pdf">
          <button class="resume-btn">Résumé</button>
        </a> -->

  <div>
    <router-link to="/resume">Open PDF</router-link>
  </div>

        <div class="social-links">
          <a href="https://www.linkedin.com/in/nathangdickinson/"><img src="../assets/images/linkedin.png" alt="LinkedIn" /></a>
          <a href="https://github.com/nathandickinson32"><img src="../assets/images/github.png" alt="GitHub" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
  margin-left: 75px;
  margin-top: -5px


}
body{
  background-image: url('/src/assets/images/port-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #e6e6e6;
}

.info {
  text-align: center;
  margin-top: 20px;
}

.info h1 {
  font-size: 20px;
  margin-bottom: 10px;
}

.info h1 span {
  color: #2A5D84;
}

.info p {
  font-size: 16px;
  margin-bottom: 20px;
}

.info p span {
  color: #2A5D84;
}

.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.resume-btn {
  background-color: #2A5D84;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-links a img {
  width: 36px;
  height: 36px;
}

@media (min-width: 600px) {
  .main-content {
    flex-direction: row;
    padding: 40px;
    
  }

  .profile img {
    width: 200px;
    height: 200px;
  }

  .info {
    text-align: left;
    margin-left: 30px;
    margin-top: 0; 
  }

  .info h1 {
    font-size: 24px;
  }

  .info p {
    font-size: 18px;
  }

  .resume {
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
  }

  .resume-btn {
    margin-bottom: 0; 
  }
}
</style>