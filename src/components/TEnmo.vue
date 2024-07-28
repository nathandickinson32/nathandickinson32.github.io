<template>
 <div class="heading-container">
        <h1 class="projectTitle">TEnmo</h1>
      </div>

      <div class="tenmoDescription">
        <p>
          TEnmo is a versatile money exchange application designed to facilitate seamless
           financial transactions between users. The platform enables users to manage account 
           balances, deposit funds, and initiate money transfers and requests securely within 
           a centralized database. Every transaction, whether deposit, transfer, or request, is 
           logged for transparency and accountability.
        </p>
        <p>
          Developed collaboratively with a small team, TEnmo utilizes Java for its object-oriented
           programming paradigm, ensuring robust data handling and efficient algorithmic operations.
            The application is built on Spring Boot, leveraging its framework for rapid development
             and seamless integration of backend services. PostgreSQL serves as the relational 
             database management system, providing scalable and reliable data storage. 
             TEnmo exemplifies innovation in financial technology solutions, combining user-friendly
              design with secure transaction management to meet the evolving needs of modern digital
               banking.
        </p>
      </div>
</template>

<script>
export default {

}
</script>

<style>
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