import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import SquirrelBrand from '../views/SquirrelBrand.vue'
import MosesTrail from '../views/MosesTrail.vue'
import MoreGames from '../views/MoreGames.vue'
import MeasureEverything from '../views/MeasureEverything.vue'

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
    {
        path:'/more-games',
        name: 'MoreGames',
        component: MoreGames,
    },
    {
        path:'/measure-everything',
        name: 'MeasureEverything',
        component: MeasureEverything,
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
    scrollBehavior() {
        window.scrollTo(0,0);
      }
})

export default router