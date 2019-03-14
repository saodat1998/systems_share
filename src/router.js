import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/views/home/HomePage";
import Mail from "@/views/home/Mail";
import Index from "@/views/home/Index";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Index,

      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: 'mail',
          name: 'mail',
          component: Mail
        },
      ]

    }
  ]
})
