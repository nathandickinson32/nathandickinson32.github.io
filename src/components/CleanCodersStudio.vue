<template>
  <div class="heading-container">
    <h1 class="projectTitle">Clean Coders Studio</h1>
  </div>

  <div class="projectDescription">
    <p>
      As a Software Engineer at Clean Coders Studio, I contribute production features to 
      cleancoders.com and epic.cleancoders.com. Working with Clojure and ClojureScript,
      I build features that enhance platform reliability, improve user engagement, and
      streamline operations. Every feature I develop follows Test-Driven Development
      and Clean Code principles, ensuring readable and maintainable code.
    </p>
  </div>

  <div class="feature-section">
    <h3>Automated Database Migrations</h3>
    <p>
      The automated migrations-as-a-service feature ensures database schema consistency across 
      all server deployments. This eliminates manual deployment errors and provides a reliable, 
      repeatable process for keeping production environments in sync.
    </p>
  </div>

  <div class="feature-section">
    <h3>Real-Time Leaderboards</h3>
    <p>
      Real-time leaderboard charts on Epic provide instant feedback on user progress and 
      rankings. Built with WebSockets, the feature updates live as users complete 
      challenges, creating an engaging and competitive learning experience.
    </p>
  </div>

  <div class="feature-section">
    <h3>Velocity Reports</h3>
    <p>
      The velocity report page tracks user progress over time, helping learners visualize their 
      journey and stay motivated. The dashboard aggregates completion data and presents it in 
      an intuitive, actionable format.
    </p>
  </div>

  <div class="feature-section">
    <h3>Standardized Contact Forms</h3>
    <p>
      Standardized contact forms across the main platform provide a consistent user experience 
      and streamline support requests. This improvement reduced support tickets and improved 
      response rates by making it easier for users to get help when they need it.
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