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
.card {
  border:none;
}
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
  background-image: url(https://lh3.googleusercontent.com/Ir5UWTuFEL-VkIwohYr4wWL9-Wlck-8Wb2GgiXS8KYbSjPuwt-ExC8AH664s70xyD5ySznfnpVgmiBvx4QSsl9JnaIcnaZBTeAdDQqX_c0v9XwGnDiKpsIfjus7CLwkreVw8XeUv1pQoP0Gv_xdbpVIWS7skbxHUu-HGM9B-PCYwE16_niLDG9B2phke3mnYFMMgITlOaCISUNFgAeU0Qu4Nu3_0-mgdIHgZr6xj2Tzt6R_cKFq1RkWbWpnuy5rfc4K3idSSfLQ6M623EYS0-BqFQ7F9OQfHbKh6NbpPbpOW_M4qZWw-IHkby_x-PVKWzJGyo-AuCGAPtaGkQPTO--d0w0C85XxVrQJSfFrIHrthYrkLNDc4qESNw8NZh04M8lE56nnsnH5x8NoQM6kmQG8Sc6Prvgr9KKHT0RUhyrrv_iXOwthj-wQKoFtLGq54md8-xFVZRMj0NJ3BKaWRcQrLQyMtAIosSEQoxKZIjBy01u79PqEfYQ8XtMn_19Ok2XDjYUA-z6kknmX1vvp0CwIbGTK09avBiMCS5_FwJtqnH75ttwJ7PSMSOLPjEdxhnX7CRdnJi3a3NpRlWS6QWe3agV8zzl4JlvfYiARFb8KURQLf-jJY3XTHQzZKYXaGuAiGEoRk_gmEv_tj6juW3YltYCig_6XOplVS8Bm4187_tM7fe7AamXBVWnjS9KtMXv2YkChjlA14f2xGrjuliXEPbxui2XLDwXX9W-k4jeZbwAavtiJIjQ=w1429-h893-no?authuser=0);
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  height:100vh;
  color: white;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
