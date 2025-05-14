<template>
  <div class="main-content">
    <div class="profile">
      <img src="../assets/images/headshot.png" alt="Nathan Dickinson" />
    </div>
    <div class="info">
      <h1>Hi There! I'm <span>Nathan Dickinson</span></h1>
      <p>
        An <span>Apprentice Software Craftsman</span> at Clean Coders Studio. Through
         this apprenticeship I'll be learning Clean Code, Clojure and TDD.
      </p>
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
  padding: 20px;
  text-align: center;
  color:aliceblue;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
 
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
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