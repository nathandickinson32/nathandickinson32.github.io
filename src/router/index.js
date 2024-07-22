import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Connect4 from '../components/Connect4.vue';
import whackAMole from '../components/whackAMole.vue';
import Memory from '../components/Memory.vue';
import resume from '../components/resume.vue';
import Projects2 from '../components/Projects2.vue';
import FoodieFriend from '../components/FoodieFriend.vue';
import DungeonGame from '../components/DungeonGame.vue';
import TEnmo from '../components/TEnmo.vue';
import SecondNature from '../components/SecondNature.vue';
import VendingMachine from '../components/VendingMachine.vue';

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
          path: '/projects2',
          name: 'projects2',
          component: Projects2
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
                    path: '/vendingMachine',
                    name: 'vendingMachine',
                    component: VendingMachine
                  }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;