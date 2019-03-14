import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import FullCalendar from "vue-full-calendar";
import "fullcalendar/dist/fullcalendar.css";


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuex);
Vue.use(FullCalendar);
Vue.config.productionTip = false;

new Vue({
  el:"#app",
  router,
  template: "<App/>",
  components: { App },
  render: h => h(App)
}).$mount('#app')
