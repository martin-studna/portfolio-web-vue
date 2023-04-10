import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior, RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
  }
]



const scrollBehavior: RouterScrollBehavior =  (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition: any): any  => {
    return { x: 0, y: 0 }
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
})

export default router
