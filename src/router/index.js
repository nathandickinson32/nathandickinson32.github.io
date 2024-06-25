import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import About from '../components/About.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;