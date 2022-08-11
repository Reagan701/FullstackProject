<template>
  <nav class="">
    <a class="navbar-brand" href="/about">
      <img src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png" alt="" width="50" height="50">
    </a>
    <router-link to="/">HOME</router-link> |
    <router-link to="/about">ABOUT</router-link> |
    <div id="inline" v-if="user">
      <router-link to="/products">PRODUCTS</router-link> |
    </div>
    <router-link to="/login"> LOGIN</router-link> |
    <router-link to="/register">REGISTER</router-link> |
    <router-link to="/contact">CONTACT</router-link> |
    <div id="inline" v-if="user">
      <router-link to="/account">ACCOUNT</router-link> |
    </div>
    <div class="bi bi-bag" id="inline" v-if="user">
      <button class="btn btn-danger fa-solid fa-basket-shopping" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartCanvas" aria-controls="cartCanvas"></button>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="cartCanvas" aria-labelledby="cartCanvasLabel">
      <div class="offcanvas-header">
        <h5 id="cartCanvasLabel">Cart</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <CartCard v-for="product in cart" :key="product.id" :product="product"/>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import CartCard from './components/CartCard.vue'
export default {
  components: {CartCard},
  computed:{
    user(){
      return this.$store.state.user;
    },
    cart(){
      return this.$store.state.cart;
    }
  },
};
</script>

<style>
#main {
  background-image: url(https://i.postimg.cc/Hj1L1Wvb/wp9306523-football-pc-4k-wallpapers.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

.card {
  border:none;
}

#basket{
  text-decoration: none;
}

#inline{
  display: inline-block;
}

#app {
  /* font-family: New Century Schoolbook, TeX Gyre Schola, serif; */
  font-size: 21px;
  text-align: center;
  color: red;
  background: navy;
}

.offcanvas{
  width: 600px !important;
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

.navbar-brand{
}
</style>
