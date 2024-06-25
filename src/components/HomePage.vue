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
      <a href="../../public/Resume 1 (1).pdf">
        <button>Résumé</button>
      </a>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/nathangdickinson/"><img src="../assets/images/linkedin.png" alt="LinkedIn" /></a>
        <a href="https://github.com/nathandickinson32"><img src="../assets/images/github.png" alt="GitHub" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.main-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}

.profile img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid #e6e6e6;
  margin-left: 20px;
}

.info {
  text-align: center;
  margin-left: 30px;
}

.info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.info h1 span {
  color: #2A5D84;
}

.info p {
  font-size: 18px;
  margin-bottom: 20px;
}

.info p span {
  color: #2A5D84;
}

.info button {
  background-color: #2A5D84;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}

.social-links a img {
  width: 48px;
  height: 48px;
  margin: 0 10px;
}

li img {
  width: 50px;
}
</style>