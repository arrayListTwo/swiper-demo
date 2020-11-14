import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/flipDemo',
    name: 'flipDemo',
    component: () => import('../views/flip-demo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
