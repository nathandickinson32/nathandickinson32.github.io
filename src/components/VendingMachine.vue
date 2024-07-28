<template>
  <div class="heading-container">
        <h1 class="projectTitle"><span>Click&Pick</span><br/>Virtual Vending Machine</h1>
      </div>

      <div class="vendingMachineDescription">
        <p>
          Click&Pick is an object-oriented vending machine program developed in Java using 
          IntelliJ. This project was a collaborative effort with a small team, focusing on 
          creating a user-friendly and efficient vending system. The program accepts user input
           for depositing money, calculates change, and actively tracks and displays inventory,
            ensuring accurate transaction processing and stock management.
        </p>
        <p>
          Click&Pick showcases robust object-oriented design principles, featuring
           well-structured classes and methods to handle various functionalities such as
            user interactions, financial transactions, and inventory updates. This project
             highlights the practical application of Java programming in developing real-world
              solutions, providing a seamless experience for users to purchase items from the
               vending machine.
        </p>
        <div class="VendingImages">

<div class="divImg Click-Pick1"></div>
<div class="divImg Click-Pick2"></div>
<div class="divImg Click-Pick3"></div>
<div class="divImg Click-Pick4"></div>


</div>
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

.Click-Pick1{
  background-image: url('../assets/images/Click-Pick1.png');
  object-fit: cover;
  width: 282px;
  
  height: 640px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content:center;
  margin-bottom: 5px;
}
.Click-Pick2{
  background-image: url('../assets/images/Click-Pick2.png');
  object-fit: cover;
  width: 282px;
  
  height: 430px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

}
.Click-Pick3{
  background-image: url('../assets/images/Click-Pick3.png');
  object-fit: cover;
  width: 281px;
  
  height: 390px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;

}
.Click-Pick4{
  background-image: url('../assets/images/Click-Pick4.png');
  object-fit: cover;
  width: 281px;
  
  height: 220px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

}
.VendingImages {
  display: inline-block;
  justify-content: space-between;
  align-items: center;
}
.divImg{
  display: flex;
 
}

</style>