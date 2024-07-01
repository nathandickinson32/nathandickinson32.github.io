import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Connect4 from '../components/Connect4.vue';
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
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;