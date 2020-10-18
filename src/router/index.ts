import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const home = () => import('../views/Home/Home.vue')
// const newItemPage = () => import('../views/NewItemPage.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    component: home,
  },
  // {
  //   path: '/new',
  //   component: newItemPage,
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
