import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "about" */ '../views/Carrinho.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  },
  {
    path: '/obrigado',
    name: 'obrigado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Obrigado.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
