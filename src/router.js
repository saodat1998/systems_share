import Vue from 'vue'
import Router from 'vue-router'
import Home from './login/LoginPage.vue'
import Calendar from "./views/HomePage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./login/LoginPage.vue')
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('./views/Mail.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/HomePage.vue')
    }
  ]
})
