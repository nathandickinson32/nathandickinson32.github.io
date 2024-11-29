<template>
  <div class="heading-container">
    <h1 class="projectTitle">Second Nature App</h1>
  </div>

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
  </div>

  <div class="divImg Second-Nature1"></div>
  <p>
    The Time Off feature simplifies leave requests by letting employees submit,
    track, and manage their time off. This ensures easy approval processes and
    clear visibility for both employees and managers.
  </p>
  <div class="divImg Second-Nature2"></div>
  <div class="divImg Second-Nature3"></div>
  <div class="divImg Second-Nature4"></div>
</template>

<script>
export default {};
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

.secondNatureDescription p {
  color: aliceblue;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.divImg {
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.Second-Nature1 {
  width: 280px;
  height: 450px;
  background-image: url("../assets/images/PortfolioTimeOffRequest.png");
  justify-self: center;
}

.Second-Nature2 {
  width: 280px;
  height: 410px;
  background-image: url("../assets/images/PortfolioKudosBoard.png");
  justify-self: center;
}

.Second-Nature3 {
  width: 280px;
  height: 410px;
  background-image: url("../assets/images/PortfolioEquipment.png");
  justify-self: center;
}

.Second-Nature4 {
  width: 280px;
  height: 450px;
  background-image: url("../assets/images/PortfolioMaintenance.png");
  justify-self: center;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .image-grid {
    flex-wrap: nowrap; /* Prevent wrapping on larger screens */
    height: 100vh; /* Take full screen height */
    justify-content: center; /* Center images horizontally */
    align-items: center; /* Center images vertically */
  }

  .divImg {
    width: 350px; /* Larger size for bigger screens */
    height: 500px;
  }
}
</style>