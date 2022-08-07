<template>
  <nav>
    <router-link to="/">HOME</router-link> |
    <div style="display:inline-block" v-if="user">
      <router-link to="/products">PRODUCTS</router-link> |
    </div>
    <router-link to="/login">LOGIN</router-link> |
    <router-link to="/register">REGISTER</router-link> |
    <div style="display:inline-block" v-if="user">
      <router-link to="/account">ACCOUNT</router-link> |
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.state.user;
    }
  }
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
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  min-height:100vh;
  color: white;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
