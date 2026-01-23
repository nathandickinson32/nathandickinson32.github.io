<template>
  <div class="resume">
    <header>
      <h1>Nathan Dickinson</h1>
      <p>
        Youngstown, OH |
        <a href="mailto:nathandickinson32@gmail.com"
          >nathandickinson32@gmail.com</a
        ><br />
        (330) 314-6043 |
        <a href="https://www.linkedin.com/in/nathangdickinson">LinkedIn</a>
        |
        <a href="https://github.com/nathandickinson32">GitHub</a>
      </p>
    </header>
    <section>
      <p>
        Software Engineer proficient in clean code principles, SOLID design
        patterns, TDD, and modern development practices. Brings 10+ years of
        leadership and customer-facing experience to technical problem-solving
        and team collaboration.
      </p>
    </section>
    <section>
      <h2>TECHNICAL SKILLS</h2>
      <p>
        Java, HTML, CSS, JavaScript, Go, Clojure, Spring Boot, Vue.js,
        WebSockets, Redis, JDBC, Table Design, SQL, PostgreSQL, E/R diagrams,
        Clean Code, SOLID Principles, TDD, Agile, Unit Testing (JUnit),
        Integration Testing, Git, IntelliJ
      </p>
    </section>
    <section>
      <h2>TECHNICAL EXPERIENCE</h2>
      <div>
        <h3>Clean Coders</h3>
        <p>
          Contributed production features across Clean Coders platforms
          (cleancoders.com and epic.cleancoders.com). Developed an automated
          migrations-as-a-service feature ensuring database schema consistency
          across server deployments. Implemented standardized contact forms
          throughout the main platform. Built a real-time leaderboard chart and
          velocity report page for tracking user progress on Epic. Developed
          using Clojure and ClojureScript following TDD and Clean Code
          principles, with WebSockets and Redis for real-time functionality.
        </p>
      </div>

      <div>
        <h3>Tic-Tac-Toe Evolution</h3>
        <p>
          Multi-language implementation demonstrating software engineering
          principles. Java version with minimax algorithm for unbeatable AI.
          Advanced Clojure version with multiple board sizes (3x3, 4x4, 3x3x3),
          configurable AI difficulty, dual interfaces (terminal/GUI), persistent
          storage (PostgreSQL/EDN), game replay, and web-deployed version with
          Clojure frontend and Java backend hosted on personal blog. Go version
          showcasing rapid language acquisition while maintaining TDD, SOLID
          principles, and Clean Code practices.
        </p>
      </div>

      <div>
        <h3>Second Nature Landscape</h3>
        <p>
          Full-stack employee communications app built with Java, PostgreSQL,
          and Vue.js following Agile principles. Features time tracking, leave
          requests, peer recognition, equipment inventory, and maintenance
          ticketing.
        </p>
      </div>
    </section>
    <section>
      <h2>EDUCATION</h2>
      <div>
        <h3>Tech Elevator, Remote</h3>
        <p>March 2024 – June 2024</p>
        <p>
          Full-stack web development boot camp designing software systems and
          solutions with 800+ hours of education and application.
        </p>
      </div>
    </section>
    <section>
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div>
        <h3>Clean Coders Studio, Remote</h3>
        <p>April 2025 – Present</p>
        <p>
          <strong>Software Engineer</strong>
        </p>
        <ul>
          <li>
            Enhanced platform reliability by implementing automated database
            migration system, eliminating manual deployment errors across
            production environments
          </li>
          <li>
            Improved user engagement through development of real-time features
            including interactive leaderboards and progress tracking dashboards
          </li>
          <li>
            Streamlined user experience by standardizing contact forms across
            multiple platforms, reducing support tickets and improving response
            rates
          </li>
        </ul>
      </div>
      <div>
        <h3>Second Nature, Austintown, Ohio</h3>
        <p>July 2020 – April 2025</p>
        <p>
          <strong>Supervisor</strong>
        </p>
        <ul>
          <li>
            Optimized team efficiency by 20% through strategic scheduling and
            resource management using GPS tracking and inventory tools
          </li>
          <li>
            Expanded client base by 50+ accounts through personalized
            relationship-building and consistent service quality
          </li>
        </ul>
      </div>
      <div>
        <h3>Wilms Bros, Columbiana, Ohio</h3>
        <p>June 2013 – July 2020</p>
        <p>
          <strong>Supervisor</strong>
        </p>
        <ul>
          <li>
            Trained 10+ employees using hands-on demonstrations, technique
            workshops, and safety protocol drills
          </li>
          <li>
            Increased productivity by 20% by leveraging time-tracking systems to
            optimize workload distribution
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.resume {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  color: black;
}

header {
  text-align: center;
}

header h1 {
  margin: 0;
}

header p {
  margin: 5px 0;
}

header a {
  margin-left: 5px;
  text-decoration: none;
  color: #0073b1;
}

section {
  margin-bottom: 20px;
}

section h2 {
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

section h3 {
  margin: 10px 0 5px;
}

section ul {
  list-style-type: disc;
  margin: 0;
  padding-left: 20px;
}
p {
  color: black;
}
</style>