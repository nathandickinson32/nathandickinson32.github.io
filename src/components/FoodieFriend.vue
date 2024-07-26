<template>
    <div class="container">
        <h1 class="projectTitle">My Foodie Friend</h1>
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
<div class="images">
    <div class="firstImage"></div>
      <div class="firstImage"></div>

      <div class="firstImage"></div>
      <div class="firstImage"></div>

</div>
     
    </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    display: flex;;
  text-align: center;
  color: aliceblue;
  border-radius: 10px;
}

.projectTitle {
  color: black;
}
.firstImage{
    display: flex;
   
  width: 200px;
  height: 200px;
  border-radius: 10px;
    background-image: url('../assets/images/connect4Pic.png');
  background-size: cover;
}
.images{
    display:flex;
    
}

</style>