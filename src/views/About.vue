<template>
  <section class="about-me">
    <div class="container">
      <div class="heading-container">
        <h1>Nathan Dickinson</h1>
      </div>
      <div class="AboutImages">
        <div class="divImg FirstImage"></div>
      </div>

      <div class="section">
        <h2 class="title whoAmI">Who I Am</h2>
        <p class="details">
          Hello! My name is Nathan Dickinson, and I'm currently a
          Software Craftsman at Clean Coders Studio. I’ve
          developed my skills in Clojure, practicing Test-Driven Development
          (TDD), and following the SOLID principles to write clean, maintainable
          code.
        </p>
      </div>

      <div class="section">
        <h2 class="title">My Journey</h2>
        <p class="details">
          My journey began over a decade ago when I started my career in
          landscaping. During these years, I honed my skills in design, project
          management, and client relations, transforming outdoor spaces into
          beautiful and functional environments. My work ranged from residential
          gardens to large commercial projects, each requiring a unique blend of
          creativity and technical expertise.
        </p>
        <p class="details">
          While I found immense satisfaction in landscaping, I discovered a
          deep-seated passion for technology that had always been with me. I
          started exploring programming and quickly realized the parallels
          between designing landscapes and writing code. Both require a
          meticulous attention to detail, problem-solving skills, and the
          ability to envision a project from start to finish.
        </p>
        <p class="details">
          Driven by this new interest, I decided to pivot my career towards
          software development. I enrolled in online courses and bootcamps,
          gaining proficiency in various programming languages and frameworks
          such as Java, JavaScript, and Vue.js. My background in landscaping has
          given me a unique perspective on user experience and design, which I
          now apply to creating intuitive and efficient software solutions.
        </p>
        <p class="details">
          This transition has been challenging yet incredibly rewarding. I'm
          excited to combine my creative background with my technical skills to
          develop innovative software that solves real-world problems. Whether
          working on web applications, mobile apps, or other projects, I bring a
          fresh perspective and a dedicated work ethic to the tech industry.
        </p>
      </div>

     <div class="section">
  <h2 class="title">What I Do</h2>
  <ul class="list">
    <li><strong>Production Development:</strong> Contributing features to live platforms at Clean Coders Studio</li>
    <li><strong>Languages:</strong> Java, Clojure, ClojureScript, JavaScript, HTML, CSS, Go</li>
    <li><strong>Frameworks & Libraries:</strong> Spring Boot, Vue.js</li>
    <li><strong>Real-time Technologies:</strong> WebSockets, Redis for live data synchronization</li>
    <li>
      <strong>Database Development:</strong> PostgreSQL, SQL, JDBC, table design, E/R diagrams
    </li>
    <li>
      <strong>Test-Driven Development:</strong> JUnit, Speclj, unit testing, integration testing
    </li>
    <li><strong>Clean Code Practices:</strong> SOLID principles, refactoring, design patterns</li>
    <li>
      <strong>Development Methodologies:</strong> Agile workflows, TDD, pair programming
    </li>
    <li>
      <strong>Development Tools:</strong> Git, GitHub, IntelliJ, Leiningen, version control
    </li>
  </ul>
</div>

<!-- 
      <div class="section">
        <h2 class="title">My Work Philosophy</h2>
        <p class="details">
          I believe in creating seamless and engaging user experiences. Whether
          working on a personal project or collaborating with a team, I always
          strive for excellence, innovation, and collaboration. My goal is to
          create work that not only meets but exceeds client expectations.
        </p>
      </div> -->

      <div class="section">
        <h2 class="title">Outside of Work</h2>
        <p class="details">
          Outside of software development, I love unwinding with my wife,
          especially on our movie nights. We recently welcomed a kitten into our
          home, adding even more warmth and excitement to our days together.
        </p>
        <p class="details">
          Over the past couple of years, I've developed a new love for golf. It has been an
          exhilarating journey learning the game, and I find it to be a great
          way to unwind and challenge myself.
        </p>
        <p class="details">
          I also enjoy playing video games with my friends, providing a perfect
          balance of fun and competition. Additionally, I love fishing with my
          parents as they step into retirement, creating memorable moments and
          enjoying the serenity of the outdoors.
        </p>
        <!-- <p class="details">
          Being a proud uncle to three nephews and a niece brings me immense
          joy. Watching them grow and spending time with them is incredibly
          fulfilling. These moments outside of work help keep me inspired,
          balanced, and ready for new challenges in my professional life.
        </p> -->
      </div>

      <div class="section">
        <h2 class="title">Get in Touch</h2>
        <p class="details">
          I am currently seeking new opportunities If you are 
          looking for a dedicated software engineer1
          who is ready to tackle new challenges and contribute to meaningful
          projects, I would love to connect with you. Please feel free to reach
          out to me at nathandickinson32@gmail.com or connect with me on
          <a
            href="https://www.linkedin.com/in/nathangdickinson/"
            class="linkedIn-btn"
            >LinkedIn</a
          >.
        </p>
      </div> 
    </div>
  </section>
</template>

<script>
import fianceeImage from "../assets/images/fiencee.jpg";

import meTomImage from "../assets/images/me-Tom.jpg";
import bugSmileyImage from "../assets/images/bugSmiley.jpg";
import cleBugImage from "../assets/images/cleBug.jpg";
import golfImage from "../assets/images/golf.png";
import meMowImage from "../assets/images/me&mow.jpg";
import fiencee2Image from "../assets/images/fiencee2.jpg";
import famImage from "../assets/images/fam.jpg";

export default {
  name: "About",
  data() {
    return {
      images: [
        fianceeImage,
        meTomImage,
        bugSmileyImage,
        cleBugImage,
        golfImage,
        meMowImage,
        famImage,
        fiencee2Image,
      ],
      randomIndex1: 0,
      randomIndex2: 0,
      intervalId: null,
    };
  },
  computed: {
    randomImage1() {
      this.randomIndex1 = Math.floor(Math.random() * this.images.length);
      return this.images[this.randomIndex1];
    },
    randomImage2() {
      this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      while (this.randomIndex2 === this.randomIndex1) {
        this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      }
      return this.images[this.randomIndex2];
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.randomIndex1 = Math.floor(Math.random() * this.images.length);
      this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      while (this.randomIndex2 === this.randomIndex1) {
        this.randomIndex2 = Math.floor(Math.random() * this.images.length);
      }
    }, 5000);
  },
};
</script>

<style scoped>
.details {
  text-align: start;
}

.title {
  color: white;
}

.about-me {
  color: aliceblue;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

.list {
  padding-left: 20px;
}

.list li {
  margin-bottom: 10px;
}

.linkedIn-btn {
  color: #0073e6;
  text-decoration: none;
  font-weight: bold;
}

/* img {
  max-width: 300px;
  height: auto;
} */
.heading-container {
  text-align: center;
  margin: 2rem 0;
}

.heading-container h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: aliceblue;
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
.FirstImage {
  background-image: url("../assets/images/fiencee.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 150px;
  border-radius: 5px;
}
.AboutImages {
  display: inline-block;
  justify-content: space-between;
  align-items: center;
}
.divImg {
  display: flex;
}

@media (max-width: 768px) {
  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .list {
    list-style: none;
  }
}
</style>


