<template>
  <div class="heading-container">
    <h1 class="projectTitle">Second Nature App</h1>
  </div>

  <div class="content-wrapper">
    <div class="secondNatureDescription">
      <p>
        The Second Nature app is designed to streamline communication and enhance
        productivity within a landscaping team. Built using Java Object-Oriented
        Programming and Vue.js, the app features tools like the Kudos Board for
        employee recognition, equipment management for tracking resources, a
        robust maintenance ticketing system, and an easy-to-use time-off request
        process. Our team has been collaborating closely with the product owner to
        ensure the app meets the needs of the workforce. These features work
        together to improve daily operations, foster a collaborative work
        environment, and keep the team connected and efficient.
      </p>
      <div class="divImg Second-NatureHome"></div>
    </div>

    <div class="feature-section">
      <p>
        The Time Off feature simplifies leave requests by letting employees submit,
        track, and manage their time off. This ensures easy approval processes and
        clear visibility for both employees and managers.
      </p>
      <div class="divImg Second-Nature1"></div>
    </div>

    <div class="feature-section">
      <p>
        The Kudos Board lets employees easily recognize and celebrate each other's
        achievements. This feature fosters a positive work environment by allowing
        real-time shoutouts and appreciation posts.
      </p>
      <div class="divImg Second-Nature2"></div>
    </div>

    <div class="feature-section">
      <p>
        The Equipment feature tracks inventory and maintenance history, helping
        employees view and manage tools efficiently. It ensures up-to-date records
        for better resource allocation and equipment readiness.
      </p>
      <div class="divImg Second-Nature3"></div>
    </div>

    <div class="feature-section">
      <p>
        Maintenance Tickets streamline issue reporting by allowing employees to
        submit and track service requests. The system supports multiple services per
        ticket, ensuring thorough and organized maintenance management.
      </p>
      <div class="divImg Second-Nature4"></div>
    </div>
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
  padding: 0 0 1rem 0;
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
  position: absolute;
  left: 0;
  bottom: 0;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.secondNatureDescription {
  margin-bottom: 3rem;
}

.secondNatureDescription p {
  color: aliceblue;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: left;
}

.feature-section {
  margin-bottom: 3rem;
}

.feature-section p {
  color: aliceblue;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
}

.divImg {
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin: 0 auto 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: block;
}

.Second-NatureHome {
  width: 280px;
  height: 600px;
  background-image: url("../assets/images/PortfolioSecondNatureHome.png");
}

.Second-Nature1 {
  width: 280px;
  height: 450px;
  background-image: url("../assets/images/PortfolioTimeOffRequest.png");
}

.Second-Nature2 {
  width: 280px;
  height: 410px;
  background-image: url("../assets/images/PortfolioKudosBoard.png");
}

.Second-Nature3 {
  width: 280px;
  height: 410px;
  background-image: url("../assets/images/PortfolioEquipment.png");
}

.Second-Nature4 {
  width: 280px;
  height: 450px;
  background-image: url("../assets/images/PortfolioMaintenance.png");
}

@media (min-width: 768px) {
  .content-wrapper {
    max-width: 1000px;
  }

  .divImg {
    width: 350px;
  }
  
  .Second-NatureHome {
    width: 350px;
    height: 750px;
  }

  .Second-Nature1 {
    width: 350px;
    height: 560px;
  }

  .Second-Nature2 {
    width: 350px;
    height: 510px;
  }

  .Second-Nature3 {
    width: 350px;
    height: 510px;
  }

  .Second-Nature4 {
    width: 350px;
    height: 560px;
  }
}
</style>