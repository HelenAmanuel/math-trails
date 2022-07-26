import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import SquirrelBrand from '../views/SquirrelBrand.vue'
import MosesTrail from '../views/MosesTrail.vue'
import MoreGames from '../views/MoreGames.vue'
import MeasureEverything from '../views/MeasureEverything.vue'

const routes = [
    {
        path:'/',
        name: 'MosesTrail',
        component: MosesTrail,
        // component: () => import('../views/MosesTrail.vue')
    },
    {
        path:'/about',
        name: 'About',
        // component: () => import('../views/About.vue')
        component: About
    },
    {
        path:'/squirrel-brand',
        name: 'SquirrelBrand',
        // component: () => import('../views/SquirrelBrand.vue')
        component: SquirrelBrand
    },
    {
        path:'/more-games',
        name: 'MoreGames',
        component: MoreGames
        // component: () => import('../views/MoreGames.vue')
    },
    {
        path:'/measure-everything',
        name: 'MeasureEverything',
        // component: () => import('../views/MeasureEverything.vue')
        component: MeasureEverything
    }
]

const currentRoute = import.meta.env.BASE_URL
const router = createRouter({
    history: createWebHistory(currentRoute), 
    routes,
    scrollBehavior() {
        window.scrollTo(0,0);
      }
})

export default router