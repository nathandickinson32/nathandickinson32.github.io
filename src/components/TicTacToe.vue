<template>
  <div class="heading-container">
    <h1 class="projectTitle">Tic-Tac-Toe Evolution</h1>
  </div>

  <div class="projectDescription">
    <p>
      A multi-language implementation that chronicles my growth as a software engineer. 
      Starting as my apprenticeship application project after bootcamp, this evolved through 
      my apprenticeship into a comprehensive demonstration of professional development practices 
      across Java, Clojure, and Go. Each version represents a new milestone in my journey toward 
      software craftsmanship.
    </p>
  </div>

  <div class="feature-section">
    <h3>Java Version - The Application</h3>
    <p>
      Built after completing bootcamp as my submission for the Clean Coders apprenticeship. 
      This console-based game features an unbeatable AI using the minimax algorithm and 
      demonstrates solid object-oriented programming fundamentals. It was created before I 
      learned the deeper principles of TDD, SOLID, and Clean Code that would define my work 
      during the apprenticeship.
    </p>
  </div>

  <div class="feature-section">
    <h3>Clojure Version - Mastering the Craft</h3>
    <p>
      During my apprenticeship, I rebuilt the game from scratch in Clojure following Test-Driven 
      Development, SOLID principles, and Clean Code practices. Developed using true Agile 
      methodology, I conducted weekly iterations with my mentors serving as product owners, 
      estimating stories and planning features collaboratively. This version expands dramatically 
      with multiple board sizes (3x3, 4x4, and 3x3x3), configurable AI difficulty levels, dual 
      interfaces (terminal and GUI), and persistent storage using PostgreSQL or EDN format. 
      Players can save and replay games, showcasing the power of functional programming combined 
      with professional development practices and real-world Agile workflows.
    </p>
  </div>

  <div class="feature-section">
    <h3>Web-Deployed Version</h3>
    <p>
      To demonstrate full-stack capabilities, I built a Java backend server and integrated it 
      with the Clojure frontend, then deployed the application to my personal blog. This shows 
      the ability to bridge different languages and technologies in a production environment.
    </p>
  </div>

  <div class="feature-section">
    <h3>Go Version - Week-Long Challenge</h3>
    <p>
      As part of a challenging week where I also wrote a 10-minute blog post and delivered a
      10-minute presentation on separate topics, I implemented another complete version in Go.
      This demonstrates rapid language acquisition while maintaining TDD, SOLID, and Clean Code
      standards—proving that solid engineering principles transcend any specific programming language.
    </p>
  </div>

  <div class="feature-section">
    <h3>Tic-Tac-Zoo - Claude Code Experiment</h3>
    <p>
      A zoo-themed version built entirely through AI-assisted development using Claude Code.
      The game runs in the browser with no server — Python handles the game logic and minimax AI
      via Pyodide (CPython compiled to WebAssembly), while JavaScript manages a safari-themed UI
      with animal emoji tokens. Players pick from five animal avatars and face off against the
      Bunny (easy), Fox (medium), or Lion (hard, unbeatable). The entire game lives in a single
      HTML file, and the project explores what it's like to build a complete application with
      an AI coding assistant.
    </p>
  </div>
</template>

<script>
</script>

<style scoped>
.heading-container {
  text-align: center;
  margin: 2rem 0;
}

.heading-container h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: aliceblue;
  margin: 0;
  padding: 0;
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

.projectDescription {
  margin: 2rem auto;
  max-width: 800px;
}

.projectDescription p {
  color: aliceblue;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.feature-section {
  margin: 2rem auto;
  max-width: 800px;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 4px solid aliceblue;
}

.feature-section h3 {
  color: aliceblue;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature-section p {
  color: aliceblue;
  line-height: 1.6;
  margin: 0;
}
</style>