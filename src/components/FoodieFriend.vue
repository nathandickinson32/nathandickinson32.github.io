<template>
    <div class="container">
      <div class="heading-container">
        <h1 class="projectTitle">My Foodie Friend</h1>

      </div>
<div class="myFoodieFriendDescription">
      <p>
        My Foodie Friend is an intuitive meal planning application designed for
        culinary enthusiasts. It offers a diverse collection of recipes
        categorized by cuisine and dietary preferences, empowering users to
        discover, customize, and organize meals effortlessly. Registered users
        can favorite recipes, customize ingredients, and generate grocery lists
        tailored to their selections, facilitating efficient meal preparation
        and reducing food waste.
      </p>
      

      <p>
        Developed using Agile practices, My Foodie Friend utilizes Java OOP for
        robust backend functionality, ensuring secure data management and
        seamless feature integration. PostgreSQL supports scalable data storage,
        while Vue.js enhances the frontend with dynamic interfaces and
        interactive user experiences. This innovative platform combines
        usability with culinary creativity, redefining meal planning for users
        seeking convenience and personalization.
      </p>

     
    </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
p{
  color: aliceblue;
}
.projectTitle{
  color: aliceblue;
}
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

</style>