<template>
  <div id="app">
    <router-link class="myRouter" to="/"></router-link>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto"  id="nav">
            <li class="nav-item active">
              <router-link class="myRouter" to="/home"><a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mail"><a class="nav-link" href="#">Mail</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login"><a class="nav-link" href="#">Report</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/"><a class="nav-link" href="#">Settings</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/"><a class="nav-link" href="#">Help desk</a></router-link>
            </li>
          </ul>
          <span class="navbar-text">
            <a href="#" class="icons"><img src="../public/images/design/user.png" alt="..."> Abdullaev J.A </a>
            <a href="#" class="icons"><img src="../public/images/design/log-out.png" alt="..."> Log Out</a>
        </span>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

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
a:hover{
  text-decoration: none!important;
}
.navbar{
  padding: 0;
  height: 55px;
}
.navbar-expand-lg .navbar-nav, .nav-link{
  height: 55px;
}
.navbar-nav .nav-link{
  padding-top: 6px;
}
.bg-light{
  background: #F3F3F3;
  border: 1px solid #E7E7E7;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

}
.navbar-expand-lg .navbar-nav .nav-item .nav-link, .myRouter a{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 17px;
  text-align: center;
  padding-top: 17px;
  color: #666666;
  display: block;
  padding-right: 20px;
  padding-left: 20px;
  text-decoration: none;
}
.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav  .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show>.nav-link {
  display: block;
  background-color: #008cba;

  padding-top: 17px;
  color: #FFFFFF;
}
.navbar-light .navbar-nav .nav-link:focus, .myRouter a:focus, .myRouter a:hover, .navbar-light .navbar-nav .nav-link:hover {
  background-color: #008cba;
  color: #FFFFFF!important;
  text-decoration: none!important;
}
.icons {
  padding-right: 10px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;

  color: #666666!important;
}
.icons:hover{
  text-decoration: none;
}
.myRouter a:hover {
  text-decoration: none;
}
a:-webkit-any-link {
  text-decoration: none;
}

</style>
