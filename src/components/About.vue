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

<p>Driven by this new interest, I decided to pivot my career towards software development. I enrolled in online courses and bootcamps, gaining proficiency in various programming languages and frameworks such as Java, JavaScript, and Vue.js. My background in landscaping has given me a unique perspective on user experience and design, which I now apply to creating intuitive and efficient software solutions.</p>

<p>This transition has been challenging yet incredibly rewarding. I'm excited to combine my creative background with my technical skills to develop innovative software that solves real-world problems. Whether working on web applications, mobile apps, or other projects, I bring a fresh perspective and a dedicated work ethic to the tech industry.</p>
      
    </div>
      <div class="section">
        <h2>What I Do</h2>
        <div class="list">
        <ul>
          <li><strong>Object-Oriented Programming:</strong> Java </li>
          <li><strong>Web Application Development:</strong> HTML, CSS, JavaScript, Spring Boot, Vue.js </li>
          <li><strong>Database Programming:</strong> JDBC, Table Design, SQL, PostgreSQL, E/R diagrams</li>
          <li><strong>Development tools and techniques:</strong>  Agile, Unit Testing (JUnit), Integration Testing, Git, IntelliJ</li> 

        </ul>
      </div>
      </div>

      <div class="section">
        <h2>My Work Philosophy</h2>
        <p>I believe in creating seamless and engaging user experiences. Whether working on a personal project or collaborating with a team, I always strive for excellence, innovation, and collaboration. My goal is to create work that not only meets but exceeds client expectations.</p>
      </div>

      <div class="section">
        <h2>Outside of Work</h2>
            <p>
              When I'm not diving into the world of software development, I cherish spending quality time with my fiancée, especially enjoying movie nights together. 
              We're excitedly planning our wedding, which will take place this September. 
              <strong>Fun fact: My future wife is in the Smiley Costume!</strong>
            </p>

            <p>
              In the past year, I've developed a new love for golf. It has been an exhilarating journey learning the game, and I find it to be a great way to unwind and challenge myself.
            </p>

            <p>
              I also enjoy playing video games with my friends, providing a perfect balance of fun and competition.
               Additionally, I love fishing with my parents as they step into retirement, creating memorable moments and enjoying the serenity of the outdoors.
            </p>

            <p>
              Being a proud uncle to two nephews, a niece, and a fourth little one on the way brings me immense joy.
               Watching them grow and spending time with them is incredibly fulfilling. 
               These moments outside of work help keep me inspired, balanced, and ready for new challenges in my professional life.
            </p>

      </div>

      <div class="section">
        <h2>Get in Touch</h2>
        <span>I am currently seeking my first opportunity in the tech industry and am eager to bring my unique background and skills to a dynamic team.
     If you are looking for a dedicated and enthusiastic software developer who is ready to tackle new challenges and contribute to meaningful projects, 
     I would love to connect with you. Please feel free to reach out to me at nathandickinson32@gmail.com or connect with me on </span> 
     <a href="https://www.linkedin.com/in/nathangdickinson/" class="linkedIn-btn">LinkedIn</a>
     
     <p>Let's create something amazing together!</p>
     <img :src="randomImage1" class="top-right-image">
    <img :src="randomImage2" class="bottom-left-image">

      </div>
    </div>
  </section>
</template>

<script>
import fianceeImage from '../assets/images/fiencee.jpg';
import dadFishImage from '../assets/images/me&dadfish.jpg';
import momFishImage from '../assets/images/me&momfish.jpg';
import meTomImage from '../assets/images/me-Tom.jpg';
import bugSmileyImage from '../assets/images/bugSmiley.jpg';
import cleBugImage from '../assets/images/cleBug.jpg';
import golfImage from '../assets/images/golf.png'
import meMowImage from '../assets/images/me&mow.jpg'
import fiencee2Image from '../assets/images/fiencee2.jpg'
import famImage from '../assets/images/fam.jpg'




export default {
  name: 'About',
  data() {
    return {
      images: [
        fianceeImage,
        dadFishImage,
        momFishImage,
        meTomImage,
        bugSmileyImage,
        cleBugImage,
        golfImage,
        meMowImage,
        famImage,
        fiencee2Image
        
        // Add more image variables as needed
      ],
      randomIndex1: 0,
      randomIndex2: 0,
      intervalId: null
    };
  },
  computed: {
    randomImage1() {
      this.randomIndex1 = Math.floor(Math.random() * this.images.length);
      return this.images[this.randomIndex1];
    },
    randomImage2() {
      this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      // Ensure the second image is different from the first one
      while (this.randomIndex2 === this.randomIndex1) {
        this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      }
      return this.images[this.randomIndex2];
    }
  },
  mounted() {
    // Optional: Set interval logic for changing images
    // Uncomment and modify as needed
    
    this.intervalId = setInterval(() => {
      this.randomIndex1 = Math.floor(Math.random() * this.images.length);
      this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      // Ensure the second image is different from the first one
      while (this.randomIndex2 === this.randomIndex1) {
        this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      }
    }, 5000); 
    
  },

};
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
  color: darkblue;
}

.linkedIn-btn{
 
 text-decoration: none;
  color: darkblue;

}

.top-right-image, .bottom-left-image {
  position: fixed;
  width: 230px;
  height:300px;
  object-fit: cover;
}

.top-right-image {
  top: 10px;
  right: 10px;
}

.bottom-left-image {
  bottom: 10px;
  left: 10px;
}
</style>


