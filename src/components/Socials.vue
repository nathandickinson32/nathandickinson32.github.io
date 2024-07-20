<template>
   <div class="social-links">
        <router-link to="/resume"
          ><button class="resume-btn">Résumé</button></router-link
        >

        <a href="https://www.linkedin.com/in/nathangdickinson/"
          ><img src="../assets/images/linkedin.png" alt="LinkedIn"
        /></a>
        <a href="https://github.com/nathandickinson32"
          ><img src="../assets/images/github.png" alt="GitHub"
        /></a>
      </div>
</template>

<script>
export default {
name: "Socials"
}
</script>

<style scoped>
.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-links a {
  margin: 10px;
}

.social-links img {
  width: 40px;
  height: 40px;
}

.resume-btn {
  background-color: #2a5d84; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>