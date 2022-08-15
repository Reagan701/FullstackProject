<template>
  <nav id="nav" class="p-0 navbar text center fixed-top navbar-expand-lg navbar-light">
    <div class="container p-3 mt-1">
        <router-link class="navbar-brand" to="/about">
            <img src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png" width="50" height="50">
        </router-link>
        <button class="mx-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCol" aria-controls="navbarCol" aria-expanded="false" aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCol">
            <div class="navbar-nav mx-auto">
                <div class="navbar-nav d-flex align-items-center">
                    <router-link class="me-2" to="/">Home</router-link>
                    <router-link class="mx-2" to="/about">About</router-link>
                    <router-link v-if="user" class="mx-2" to="/products">Products</router-link>
                    <router-link v-if="!user" class="mx-2" to="/login">Login</router-link>
                    <router-link v-if="!user" class="mx-2" to="/register">Register</router-link>
                    <router-link class="mx-2" to="/contact">Contact</router-link>
                    <router-link v-if="user" class="mx-2" to="/account">Account</router-link>
                    <router-link v-if="currentUser" class="mx-2" to="/admin">Admin</router-link>
                    <button v-if="cart" class="position-relative ms-2 btn btn-grad btn-danger fa-solid fa-cart-shopping" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartCanvas" aria-controls="cartCanvas">
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{{cart.length}}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="cartCanvas" aria-labelledby="cartCanvasLabel">
      <div class="offcanvas-header">
        <h5 id="cartCanvasLabel">Cart</h5>
        <h5 class="m-0">Total: R{{cartTotal}}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">

        </button>
      </div>
      <div class="offcanvas-body">
        <div v-if="cart">
          <div v-if="cart.length>0">
            <CartCard v-for="product in cart" :key="product.id" :product="product" />
          </div>
          <div v-else>
            You have no items in your cart
          </div>
        </div>
        <div v-else>
          <Loader />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

window.addEventListener('scroll',changeBg);

function changeBg(){
    if(window.scrollY !=0){
        document.getElementById('nav').style.background = "#00004e";
    }else{
        document.getElementById('nav').style.background = "transparent"
    }
}

import CartCard from "./CartCard.vue";
import Loader from './Loader.vue'
export default {
    components: {CartCard,Loader},
    computed:{
      user(){
        return this.$store.state.user;
      },
      currentUser(){
        if(this.$store.state.currentUser){
          return this.$store.state.currentUser.userRole;
        }
      },
      cart(){
        return this.$store.state.cart;
      },
      cartTotal(){
        return this.$store.state.cartTotal;
      }
    }
}
</script>

<style scoped>
.offcanvas {
    background-image: linear-gradient(
    to right,
    #000040,
    #00004e
  );
  color: white;
}

#nav{
  transition: all 0.2s linear;
}
</style>