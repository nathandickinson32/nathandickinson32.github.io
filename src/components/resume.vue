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
        Software Developer with over 10+ years of experience in leadership and
        customer-facing roles. Successful track record of management,
        innovation, self-drive, and project leadership. Seeking roles as a
        junior software developer to work in collaborative environments where
        innovation and creativity are valued.
      </p>
    </section>
    <section>
      <h2>TECHNICAL SKILLS</h2>
      <ul>
        <li>Object-Oriented Programming: Java</li>
        <li>
          Web Application Development: HTML, CSS, JavaScript, Spring Boot,
          Vue.js
        </li>
        <li>
          Database Programming: JDBC, Table Design, SQL, PostgreSQL, E/R
          diagrams
        </li>
        <li>
          Development tools and techniques: Agile, Unit Testing (JUnit),
          Integration Testing, Git, IntelliJ
        </li>
      </ul>
    </section>
    <section>
      <h2>TECHNICAL EXPERIENCE</h2>
      <div>
        <h3>Second Nature App</h3>
        <p>
          A communications app designed for employees to streamline their daily
          tasks. The app allows users to clock in/out, request time off, give
          kudos to coworkers, and view equipment inventory and maintenance
          history. Additionally, employees can submit maintenance tickets for
          equipment. This full-stack application was developed by a team
          following Agile principles, incorporating Java OOP fundamentals,
          PostgreSQL for database management, and Vue.js for the front-end.
        </p>
      </div>

      <div>
        <h3>Oh, I Remember!</h3>
        <p>
          A messaging app designed to help users recall forgotten thoughts. The
          app allows users to ask questions and receive answers whenever the
          recipient remembers. It features real-time notifications for new
          questions, answers, and friend requests. Built with Java for backend
          logic, PostgreSQL for database management, and Vue.js for the
          front-end, the app prioritizes accessibility and seamless
          communication.
        </p>
      </div>

      <div>
        <h3>Portfolio</h3>
        <p>
          Sleek, responsive personal portfolio website to effectively showcase
          my professional skills, projects, and accomplishments. Leveraged
          Vue.js for a dynamic, interactive interface, ensuring optimal
          performance across all devices. The project reflects my proficiency in
          front-end development and design, emphasizing clean aesthetics and
          user-centric design principles.
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
        <h3>Second Nature, Austintown, Ohio</h3>
        <p>July 2020 – Present</p>
        <p>
          <strong>Supervisor</strong>
        </p>
        <ul>
          <li>
            Increased landscaping job efficiency 20% through expertly operating
            lawn mowers, trimmers, & pruning tools to optimize productivity
          </li>
          <li>
            Boosted client acquisition growth through strategic
            relationship-building between Human Resources & potential clientele,
            leveraging proven quality work & tailored in-person communication
            approaches
          </li>
          <li>
            Prioritized team schedules and enhanced team productivity 20%
            through delegating trucks, trailers, & machines with GPS tracking
            systems & inventory management tools(Temeda)
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
            Trained over 15+ employees with hands-on training through on-site
            demonstrations, equipment usage tutorials, landscaping techniques
            workshops, safety protocol drills, and real-world landscaping
            projects
          </li>
          <!-- <li>
            Enhanced productivity by 20% through meticulous time tracking using
            time tracking software to optimize workload capacity
          </li> -->
          <li>
            Diagnosed & repaired an average of 5 mechanical issues weekly using
            wrenches & socket set
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
  