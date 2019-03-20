import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/home/HomePage";
import Mail from "@/components/home/Mail";
import Settings from "@/components/home/Settings";
import Login from "./components/Login";
import Resolution from "./components/home/MailComponents/Resolution";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/mail',
      name: 'mail',
      component: Mail,

    },
    {
      path: '/resolution',
      name: 'resolution',
      component: Resolution,

    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },


    ]
})
