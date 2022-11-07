import { routes } from './AsyncRouters';
import { createRouter, createWebHistory, type Router } from 'vue-router';

const router: Router = createRouter({
    // process.env.BASE_URL
    history: createWebHistory('/vains3-admin-template-ts/'),
    routes,
});

export default router;
