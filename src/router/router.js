import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/Home/index.vue')
const About = () => import('../pages/About/index.vue')


const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default  router