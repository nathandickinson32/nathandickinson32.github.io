<template>
    <div class="container">
      <div class="sidebar">
        <div class="logo">
          <span>ND</span>
        </div>
        <nav>
          <ul>
            <li><router-link to="/"><img src="images/home.png" alt="Home" /></router-link></li>
            <li><router-link to="/about"><img src="images/information.png" alt="About" /></router-link></li>
            <li><router-link to="/projects"><img src="images/invention.png" alt="Projects" /></router-link></li>
          </ul>
        </nav>
      </div>
      <div class="main-content">
        <div class="profile">
          <img src="images/headshot.png" alt="Nathan Dickinson" />
        </div>
        <div class="info">
          <h1>Hi There! I'm <span>Nathan Dickinson</span></h1>
          <p>
            A <span>Full Stack Web Developer</span> dedicated to developing robust and scalable web applications across the stack.
          </p>
          <a href="NathanDickinson.pdf">
            <button>Résumé</button>
          </a>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/nathangdickinson/"><img src="images/linkedin.png" alt="LinkedIn" /></a>
            <a href="https://github.com/nathandickinson32"><img src="images/github.png" alt="GitHub" /></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.container {
    display: flex;
    width: 100%;
}

.sidebar {
    width: 60px;
    background-color: #8a2be2;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
}

.logo {
    font-size: 24px;
    margin-bottom: 40px;
}

.sidebar nav ul {
    list-style: none;
}

.sidebar nav ul li {
    margin: 20px 0;
}

.sidebar nav ul li a img {
    width: 48px;
    height: 48px;
}

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
    color: #8a2be2;
}

.info p {
    font-size: 18px;
    margin-bottom: 20px;
}

.info p span {
    color: #8a2be2;
}

.info button {
    background-color: #8a2be2;
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
  </style>