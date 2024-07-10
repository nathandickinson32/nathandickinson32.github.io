<template>
  <div class="main-content">
    <div class="profile">
      <img src="../assets/images/headshot.png" alt="Nathan Dickinson" />
    </div>
    <div class="info">
      <h1>Hi There! I'm <span>Nathan Dickinson</span></h1>
      <p>
        A <span>Full Stack Web Developer</span> dedicated to developing robust
        and scalable web applications across the stack
      </p>

      <div class="social-links">
        <router-link to="/resume"
          ><button class="resume-btn">Résumé</button></router-link
        >

        <a href="https://www.linkedin.com/in/nathangdickinson/"
          ><img src="../assets/images/linkedin.png" alt="LinkedIn"
        /></a>
        <a href="https://github.com/nathandickinson32"
          ><img src="../assets/images/github.png" alt="GitHub"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
/* .main-content {
  display: flex;
  align-items: flex-start;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
}

.profile {
  margin-right: 20px;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #e6e6e6;
}

.info {
  flex: 1;
  text-align: center;
  margin-top: 20px;
}

.info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.info h1 span {
  color: #2a5d84;
}

.info p {
  font-size: 22px;
  margin-bottom: 20px;
}

.info p span {
  color: #2a5d84;
}

.resume-btn {
  background-color: #2a5d84;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
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
.link-btns {
  margin-block-end: auto;
}

@media (max-width: 600px) {
  .main-content {
    flex-direction: column;
  }

  .profile img {
    width: 200px;
    height: 200px;
  }

  .info {
    text-align: left;
    margin-top: 0;
  }

  .info h1 {
    font-size: 24px;
  }

  .info p {
    font-size: 18px;
} }*/


.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  color:aliceblue;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.info {
  max-width: 600px;
}

.info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.info h1 span {
  color: darkblue; 
}

.info p {
  font-size: 18px;
  margin-bottom: 20px;
}

.info p span {
  font-weight: bold;
  color: darkblue; 
}

.social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links a {
  margin: 10px;
}

.social-links img {
  width: 30px;
  height: 30px;
}

.resume-btn {
  background-color: #2a5d84; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

/* Mobile Styles */
@media (min-width: 768px) {
  .main-content {
    flex-direction: row;
    text-align: left;
  }

  .profile {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile img {
    margin-bottom: 0;
  }

  .info {
    flex: 2;
    margin-left: 20px;
  }

  .social-links {
    flex-direction: row;
    justify-content: flex-start;
  }

  .social-links a {
    margin: 0 10px;
  }

  .resume-btn {
    margin-bottom: 0;
    margin-right: 10px;
  }
}
</style>