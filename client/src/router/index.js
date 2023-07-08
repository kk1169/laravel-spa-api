import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
// import AboutView from '../views/AboutView.vue'
// import MainLayout from '../components/layouts/MainLayout.vue'

// Todo
import TaskPage from '../pages/TaskPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/tasks',
            name: 'TaskPage',
            component: TaskPage
        }
    ]
})

export default router


// {
//     path: '/',
//     name: 'MainLayout',
//     component: MainLayout,
//     children: [
//       {
//         path: '/',
//         name: 'HomeView',
//         component: HomeView
//       },
//       {
//         path: '/about',
//         name: 'AboutView',
//         component: AboutView
//       },
//       {
//         path: '/todo',
//         name: 'TodoList',
//         component: TodoList
//       }
//     ]
//   }
