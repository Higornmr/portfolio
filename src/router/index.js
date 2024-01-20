import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefault from '../layouts/LayoutDefault.vue'

const Home = () => import('../views/Home/index.vue')

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            layout: LayoutDefault
        }
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router

