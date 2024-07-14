<template>
  <div class="container">
    <h1 class="title">My Games and <br />Video Presentations</h1>

    <div class="dropdown">
      <label for="projects"></label>
      <select name="projects" id="projects" @change="handleSelectChange">
        <option value="">--Pick a Project--</option>
        <!-- keep this value empty, select can't be selected-->
        <optgroup label="Works In Progress">
          <option value="">Second Nature App</option>
        </optgroup>
        <optgroup label="Video Presentations">
          <option value="myFoodieFriendVideo">My Foodie Friend</option>
          <option value="tenmoVideo">TEnmo</option>
        </optgroup>
        <optgroup label="Games">
          <option value="/connect4">Connect 4</option>
          <option value="/whackAMole">Whack-A-Mole</option>
        </optgroup>
      </select>
    </div>

    <VideoModal :show="showModal" :videoSrc="videoSrc" @close="closeModal" />

    <div class="secondNatureDescription">
      <h2 class="projectTitle">Second Nature App</h2>
      <p>
        In its conceptual phase, this forthcoming app aims to revolutionize
        communication and operational efficiency within a landscape company.
        Planned to leverage Java Object-Oriented Programming (OOP) principles
        for its robust backend, the application will ensure secure data
        management and scalability using PostgreSQL for reliable storage of
        employee records, time-off requests, and communication logs.
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

    <div class="myFoodieFriendDescription">
      <h2 class="projectTitle">My Foodie Friend</h2>
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

    <div class="tenmoDescription">
      <h2 class="projectTitle">TEnmo</h2>
      <p>
        TEnmo is a versatile money exchange application designed to facilitate
        seamless financial transactions between users. The platform enables
        users to manage account balances, deposit funds, and initiate money
        transfers and requests securely within a centralized database. Every
        transaction, whether deposit, transfer, or request, is logged for
        transparency and accountability.
      </p>

      <p>
        Developed collaboratively with a small team, TEnmo utilizes Java for its
        object-oriented programming paradigm, ensuring robust data handling and
        efficient algorithmic operations. The application is built on Spring
        Boot, leveraging its framework for rapid development and seamless
        integration of backend services. PostgreSQL serves as the relational
        database management system, providing scalable and reliable data
        storage. TEnmo exemplifies innovation in financial technology solutions,
        combining user-friendly design with secure transaction management to
        meet the evolving needs of modern digital banking.
      </p>
    </div>

    <div class="connect4Description">
      <h2 class="projectTitle">Connect 4</h2>
      <p>
        The Connect 4 game is a classic strategy board game brought to life in a
        modern web application format. Originally developed in JavaScript and
        later migrated to a Vue.js component, this rendition of Connect 4 offers
        players an engaging and intuitive gameplay experience. Players take
        turns dropping colored discs into a vertical grid with the goal of
        connecting four discs of their color horizontally, vertically, or
        diagonally before their opponent.
      </p>

      <p>
        Implemented as a Vue.js component, the game leverages Vue's reactive
        data binding and component-based architecture to ensure smooth and
        interactive gameplay. The frontend interface is designed to be
        responsive and user-friendly, allowing players to enjoy the game
        seamlessly across various devices. The Connect 4 game showcases the
        integration of classic gaming mechanics with modern web development
        technologies, offering both nostalgic appeal and contemporary usability.
      </p>
    </div>

    <div class="whackAMoleDescription">
      <h2 class="projectTitle">Whack-A-Mole</h2>
      <p>
        Step into the whimsical world of the Whack-A-Mole game, a lively web
        adaptation of the beloved arcade classic. Crafted initially in
        JavaScript and transformed into a dynamic Vue.js component, this game
        invites players to test their reflexes and agility. Psyducks pop up
        unpredictably from their burrows, challenging players to swiftly click
        or "whack" them before they retreat. The goal is to accumulate points by
        hitting as many psyducks as possible within a set time, while avoiding
        penalties for missed clicks.
      </p>
      <p>
        Built on Vue.js, the game features responsive design elements that
        ensure seamless gameplay across various devices. Vibrant visuals and
        smooth animations enhance the player experience, capturing the whimsy
        and excitement of the arcade original. The Whack-A-Mole game exemplifies
        the fusion of retro gaming nostalgia with modern web technology,
        delivering a delightful and engaging experience for players of all ages.
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

<script setup>
import { ref } from 'vue';
import VideoModal from './VideoModal.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showModal = ref(false);
const videoSrc = ref('');

const openModal = (src) => {
  videoSrc.value = src;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handleSelectChange = (event) => {
  const value = event.target.value;
  if (value === "myFoodieFriendVideo") {
    openModal(new URL('../assets/videos/Meal-Planner.mp4', import.meta.url).href);
  } else if (value === "tenmoVideo") {
    openModal(new URL('../assets/videos/TEnmo-Presentation.mp4', import.meta.url).href);
  } else if (value) {
    router.push(value);
  }
};
</script>

<style scoped>
.container {
  padding: 1rem;
  text-align: center;
  color: aliceblue;
  border-radius: 10px;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

.happyImage {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
}

.footer {
  margin-top: 2rem;
  background-color: white;
  color: black;
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
  background-color: aliceblue;
  font-size: 20px;
  border-radius: 10px;
  color: black;
}

.projectTitle {
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
