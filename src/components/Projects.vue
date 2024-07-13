<template>
  <div class="container">
    <h1 class="title">My Games and <br />Video Presentations</h1>

    <div class="dropdown">
      <label for="projects"></label>
      <select name="projects" id="projects" v-on:change="changeRoute($event)">
        <option value="">--Pick a Project--</option>
        <!-- keep this value empty, select can't be selected-->
        <option value="/connect4">Connect 4</option>
        <option value="/whackAMole">Whack-A-Mole</option>
        <option value="/my_foodie_friend">My Foodie Friend</option>
        <option value="/tenmo">TEnmo</option>
        <option value="/second_nature">Second Nature</option>
      </select>
    </div>

 <div class="connect4Description">
<h2>Connect 4</h2>
<p>
  description
</p>
 </div> 
 <div class="whackAMoleDescription">
<h2>Whack-A-Mole</h2>
<p>
  description
</p>
 </div> 

 <div class="myFoodieFriendDescription">
<h2>My Foodie Friend</h2>
<p>
  description
</p>
 </div> 

 <div class="tenmoDescription">
<h2>TEnmo</h2>
<p>
  description
</p>
 </div> 

 <div class="secondNatureDescription">
<h2>Second Nature</h2>
<p>
  description
</p>
 </div> 

    <footer class="footer">
      <h2>
        I'm always updating projects and adding more so be sure to come back to
        see what's new!
      </h2>
    </footer>
  </div>
</template>
<script>
export default {
  name: "projects",
  methods: {
    changeRoute(e) {
      this.$router.push(e.target.value);
    },
  },
};
</script>

 <style scoped>
.container {
  padding: 1rem;
  text-align: center;
  background-color: #f9f9f9;
  color: #333;
  border-radius: 10px;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.happyImage {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
}

.footer {
  margin-top: 2rem;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
}

.footer h2 {
  font-size: 1rem;
  margin: 0;
}

.dropdown {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: center;
}

#projects {
  text-align: left;
  background-color: #84c7fa;
  font-size: 20px;
  border-radius: 10px;
  color: black;
}

@media (min-width: 600px) {
  .title {
    font-size: 2rem;
  }

  .happyImage {
    width: 2rem;
    height: 2rem;
  }

  .footer h2 {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .happyImage {
    width: 2.5rem;
    height: 2.5rem;
  }

  .footer h2 {
    font-size: 1.5rem;
  }
}
</style>