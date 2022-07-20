import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import SquirrelBrand from '../views/SquirrelBrand.vue'
import MosesTrail from '../views/MosesTrail.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: MosesTrail,
    },
    {
        path:'/about',
        name: 'About',
        component: About,
    },
    {
        path:'/squirrel-brand',
        name: 'SquirrelBrand',
        component: SquirrelBrand,
    },
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
    scrollBehavior() {
        window.scrollTo(0,0);
      }
})

export default router