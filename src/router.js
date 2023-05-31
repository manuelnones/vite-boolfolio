import path from "path";
import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppIndex from './pages/AppIndex.vue';
import AppShow from './pages/AppShow.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/contact',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/posts',
            name: 'index',
            component: AppIndex,
        },
        {
            path: '/posts/:slug',
            name: 'show',
            component: AppShow,
        }
    ]
});

export { router };