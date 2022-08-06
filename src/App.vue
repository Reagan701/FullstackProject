<template>
  <nav>
    <router-link to="/">HOME</router-link> |
    <router-link to="/products">PRODUCTS</router-link> |
    <router-link to="/product">PRODUCT</router-link> |
    <router-link to="/login">LOGIN</router-link> |
    <router-link to="/register">REGISTER</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {

};
</script>

<style>
#app {
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 21px;
  text-align: center;
  color: red;
  background: navy;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none
}

#main {
  background-image: url(https://i.postimg.cc/Hj1L1Wvb/wp9306523-football-pc-4k-wallpapers.jpg);
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  height:100%;
  color: white;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
