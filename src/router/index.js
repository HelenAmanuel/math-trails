import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SquirrelBrand from '../views/SquirrelBrand.vue'
import MosesTrail from '../views/MosesTrail.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/about',
        name: 'About',
        component: About,
    },
    {
        path:'/moses-trail',
        name: 'MosesTrail',
        component: MosesTrail,
    },
    {
        path:'/moses-trail/squirrel-brand',
        name: 'SquirrelBrand',
        component: SquirrelBrand,
    },
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router