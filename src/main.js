import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import FullCalendar from "vue-full-calendar";
import "fullcalendar/dist/fullcalendar.css";

import axios from './backend/vue-axios'

import BootstrapVue from 'bootstrap-vue'


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuex);
Vue.use(FullCalendar);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  el:"#app",
  router,
  axios,
  template: "<App/>",
  components: { App },
  render: h => h(App)
}).$mount('#app')
