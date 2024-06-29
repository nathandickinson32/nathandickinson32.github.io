import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue'
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
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;