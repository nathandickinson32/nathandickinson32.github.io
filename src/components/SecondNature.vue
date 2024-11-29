<template>
  <div class="heading-container">
    <h1 class="projectTitle">Second Nature App</h1>
  </div>

  <div class="secondNatureDescription">
    <p>
      In its conceptual phase, this forthcoming app aims to revolutionize
      communication and operational efficiency within a landscape company.
      Planned to leverage Java Object-Oriented Programming (OOP) principles for
      its robust backend, the application will ensure secure data management and
      scalability using PostgreSQL for reliable storage of employee records,
      time-off requests, and communication logs.
    </p>
    <p>
      Vue.js is envisioned to power the frontend, providing a dynamic and
      user-friendly interface essential for enhancing employee engagement and
      workflow management. A key feature in the app's roadmap will enable
      employees to digitally request time off, streamlining administrative
      processes and promoting transparency in scheduling and resource
      allocation.
    </p>
    <p>
      The project's journey began with an inaugural meeting with the product
      owner to define requirements and sketch comprehensive diagrams for both
      the app's interface and database structure. Embracing an Agile approach,
      the development roadmap includes iterative cycles to refine
      functionalities based on user feedback and evolving business needs.
    </p>
  </div>

  <div class="divImg Second-Nature1"></div>
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
  height: 410px;
  background-image: url('../assets/images/PortfolioEquipment.png');
  justify-self: center;

}

.Second-Nature2 {
  width: 280px;
  height: 410px;
  background-image: url('../assets/images/PortfolioKudosBoard.png');
  justify-self: center;

}

.Second-Nature3 {
  width: 280px;
  height: 450px;
  background-image: url('../assets/images/PortfolioTimeOffRequest.png');
  justify-self: center;

}

.Second-Nature4 {
  width: 280px;
  height: 450px;
  background-image: url('../assets/images/PortfolioMaintenance.png');
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