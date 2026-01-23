import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import About from '../views/About.vue';
import Projects from '../components/Projects.vue';
import Connect4 from '../components/Connect4.vue';
import whackAMole from '../components/whackAMole.vue';
import Memory from '../components/Memory.vue';
import resume from '../components/resume.vue';
import FoodieFriend from '../components/FoodieFriend.vue';
import DungeonGame from '../components/DungeonGame.vue';
import TEnmo from '../components/TEnmo.vue';
import SecondNature from '../components/SecondNature.vue';
import VendingMachine from '../components/VendingMachine.vue';
import ProjectsGallery from '../views/ProjectGallery.vue';
import OhIRemember from '../components/OhIRemember.vue'
import TicTacToe from '../components/TicTacToe.vue';
import CleanCodersStudio from '../components/CleanCodersStudio.vue';
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/connect4',
        name: 'connect4',
        component: Connect4
    },
    {
        path: '/whackAMole',
        name: 'whackAMole',
        component: whackAMole
    },
    {
        path: '/memory',
        name: 'memory',
        component: Memory
    },
    {
        path: '/resume',
        name: 'resume',
        component: resume
      },
        {
            path: '/foodieFriend',
            name: 'foodieFriend',
            component: FoodieFriend
          },
          {
              path: '/dungeonGame',
              name: 'dungeonGame',
              component: DungeonGame
            },
            {
                path: '/tenmo',
                name: 'tenmo',
                component: TEnmo
              },
              {
                  path: '/secondNature',
                  name: 'secondNature',
                  component: SecondNature
                },
                {
                    path: '/oh-I-remember',
                    name: 'ohIremember',
                    component: OhIRemember
                  },
                {
                    path: '/vendingMachine',
                    name: 'vendingMachine',
                    component: VendingMachine
                  },
                  {
                      path: '/project-gallery',
                      name: 'project-gallery',
                      component: ProjectsGallery
                    },
                    {
                      path: '/tic-tac-toe',
                      name: 'ticTacToe',
                      component: TicTacToe
                    },
                     {
                      path: '/clean-coders',
                      name: 'cleanCoders',
                      component: CleanCodersStudio
                    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;