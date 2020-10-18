import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const home = () => import('../views/Home/Home.vue')
const newItemPage = () => import('../views/NewItemPage/NewItemPage.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: home,
  },
  {
    path: '/new',
    name: 'New Item Page',
    component: newItemPage,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
