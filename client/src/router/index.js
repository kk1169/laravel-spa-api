import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth.store'

import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import NotFoundPage from '../pages/errors/NotFoundPage.vue'

// Task
import TaskPage from '../pages/TaskPage.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage,
            meta: {
                guest: true
            }
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: RegisterPage,
            meta: {
                guest: true
            }
        },
        {
            path: '/tasks',
            name: 'TaskPage',
            component: TaskPage,
            meta: {
                auth: true
            }
        },
        {
            path: '/:notFound(.*)',
            name: 'error.404',
            component: NotFoundPage
        }
    ],
    history: createWebHistory(),
})


router.beforeEach(async (to, from) => {
    const store = useAuthStore();
    await store.fetchUser();
    console.log(store.isLoggedIn);
    if (to.meta.auth && !store.isLoggedIn) {
        return { name: 'LoginPage', query: { redirect: to.fullPath } }
    } else if (to.meta.guest && store.isLoggedIn) {
        return { name: 'TaskPage' }
    }

})

export default router
