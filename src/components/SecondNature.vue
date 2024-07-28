<template>
  <div class="heading-container">
        <h1 class="projectTitle">Second Nature App</h1>
      </div>

      <div class="secondNatureDescription">
        <p>
          In its conceptual phase, this forthcoming app aims to revolutionize communication
           and operational efficiency within a landscape company. Planned to leverage
            Java Object-Oriented Programming (OOP) principles for its robust backend, the
             application will ensure secure data management and scalability using PostgreSQL 
             for reliable storage of employee records, time-off requests, and communication logs.
        </p>
        <p>
          Vue.js is envisioned to power the frontend, providing a dynamic and user-friendly
         interface essential for enhancing employee engagement and workflow management. A key
          feature in the app's roadmap will enable employees to digitally request time off, 
          streamlining administrative processes and promoting transparency in scheduling and 
          resource allocation.
        </p>
        <p>
          The project's journey began with an inaugural meeting with the product owner to define 
          requirements and sketch comprehensive diagrams for both the app's interface and database
           structure. Embracing an Agile approach, the development roadmap includes iterative 
           cycles to refine functionalities based on user feedback and evolving business needs.
        </p>
      </div>
</template>

<script>
export default {

}
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
  content: '';
  display: block;
  width: 100%;
  height: 3px; 
 
  background: linear-gradient(
    90deg,
    aliceblue 0%, 
    black 50%, 
    aliceblue 100%
  );
  margin: 0.5rem auto 0;
  position: absolute;
  left: 0;
  bottom: -0.5rem;
}
p{
  color: aliceblue;
}
</style>