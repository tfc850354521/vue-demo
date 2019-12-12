import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/movie.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
  {
    path: '/cinema',
    name: 'cinema',
   
    component: () => import('../views/cinema.vue')
  },
  {
    path: '/information',
    name: 'information',
   
    component: () => import('../views/information.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('../views/userinfo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/particulars',
    name: 'particulars',
    component: () => import('../views/particulars.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/cinemaDetails.vue')
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass:'navStyle'
})

export default router
