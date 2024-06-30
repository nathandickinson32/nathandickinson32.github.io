<template>
  <section class="about-me">
    <div class="container">
      <h1>About Me</h1>

      <div class="section">
        <h2>Who I Am</h2>
        <p>Hello! My name is Nathan Dickinson, and I'm a passionate web developer based in Youngstown, Ohio. Recent grad from Tech Elevator's National Live Remote program, I now hone the skills of full-stack development. I thrive on creating user-friendly applications, always eager to learn and embrace new challenges.</p>
      </div>
 
      <div class="section">
        <h2>My Journey</h2>
        <p>My journey began over a decade ago when I started my career in landscaping. During these years, I honed my skills in design, project management, and client relations, transforming outdoor spaces into beautiful and functional environments. My work ranged from residential gardens to large commercial projects, each requiring a unique blend of creativity and technical expertise.</p>

<p>While I found immense satisfaction in landscaping, I discovered a deep-seated passion for technology that had always been with me. I started exploring programming and quickly realized the parallels between designing landscapes and writing code. Both require a meticulous attention to detail, problem-solving skills, and the ability to envision a project from start to finish.</p>

<p>Driven by this new interest, I decided to pivot my career towards software development. I enrolled in online courses and bootcamps, gaining proficiency in various programming languages and frameworks such as JavaScript, Python, and Vue.js. My background in landscaping has given me a unique perspective on user experience and design, which I now apply to creating intuitive and efficient software solutions.</p>

<p>This transition has been challenging yet incredibly rewarding. I'm excited to combine my creative background with my technical skills to develop innovative software that solves real-world problems. Whether working on web applications, mobile apps, or other projects, I bring a fresh perspective and a dedicated work ethic to the tech industry.</p>
      </div>

      <div class="section">
        <h2>What I Do</h2>
        <ul>
          <!-- <li><strong>Front-End Development:</strong> Crafting responsive and interactive websites using the latest technologies.</li>
          <li><strong>UI/UX Design:</strong> Designing user-centric interfaces that are both visually appealing and intuitive to use.</li>
          <li><strong>JavaScript Frameworks:</strong> Proficient in Vue.js, React, and Angular, bringing dynamic functionalities to web applications.</li> -->
        </ul>
      </div>

      <div class="section">
        <h2>My Work Philosophy</h2>
        <p>I believe in creating seamless and engaging user experiences. Whether working on a personal project or collaborating with a team, I always strive for excellence, innovation, and collaboration. My goal is to create work that not only meets but exceeds client expectations.</p>
      </div>

      <div class="section">
        <h2>Outside of Work</h2>
        <!-- <p>When I'm not coding, you can find me hiking the trails of California, experimenting with new recipes in the kitchen, and exploring the world of photography. These activities keep me inspired and balanced, fueling my creativity and drive.</p> -->
      </div>

      <div class="section">
        <h2>Get in Touch</h2>
        <span>I'm always open to new opportunities and collaborations. Feel free to reach out to me at nathandickinson32@gmail.com or connect with me on</span> <a href="https://www.linkedin.com/in/nathangdickinson/">LinkedIn</a> <span>Let's create something amazing together!</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
.about-me {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: lightblue;
  margin-left: 50px
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  text-align: center;
}

.section {
  margin-bottom: 2em;
}

h2 {
  font-size: 2em;
  color: darkblue;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.1em;
  margin-bottom: 1em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1.1em;
  margin-bottom: 0.5em;
}

strong {
  color: #007BFF;
}
</style>