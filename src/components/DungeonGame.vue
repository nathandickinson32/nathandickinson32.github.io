<template>

  <div class="heading-container">
        <h1 class="projectTitle">Dungeon Adventure Game</h1>
      </div>

      <div class="dungeonGameDescription">
        <p>
          Dungeon Adventure is an immersive text-based adventure game that challenges players with a 
          series of strategic choices. Set in a richly detailed world, players must navigate 
          through encounters where they decide to fight random enemies, run, or heal themselves. 
          The game offers a variety of weaponry and armor, allowing players to craft their own 
          unique approach to combat.
        </p>
        <p>
          A distinctive feature of Dungeon Adventure is the emphasis on decision 
          permanence—players must live with the choices they make, which influence the game's 
          outcome. The journey includes solving a challenging riddle, leading up to a
           climactic boss battle that tests the skills and decisions of the player. 
           Developed during the early weeks of programming, TextQuest is a testament to the 
           capabilities of Java, showcasing fundamental principles of object-oriented programming.
            The game combines classic elements of interactive storytelling with strategic 
            gameplay, offering a compelling experience that emphasizes the weight of choice 
            and consequence.
        </p>

        <div class="video-container">
          <h4 style="color: black;">Click below to watch a video presentation</h4>
    <video controls>
      <source src="../assets/videos/DungeonPresentationFinal.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
    
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

.video-container {
  max-width: 100%;
  margin: auto;
  text-align: center;
}

video {
  width: 100%;
  height: auto;
}
</style>