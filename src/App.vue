<template>
  <div id="app">
    <navigation v-if="$route.name != 'Login'"></navigation>
    <router-link to="/"></router-link>
    <router-link to="/home"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import Navigation from "./components/home/Navigation";
export default {
  name: 'app',
  components: {
    Navigation

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
