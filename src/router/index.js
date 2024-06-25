import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    }
]