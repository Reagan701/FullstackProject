<template>
  <!-- <nav>
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
      <button
        class="btn btn-grad btn-danger fa-solid fa-cart-shopping"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#cartCanvas"
        aria-controls="cartCanvas"
      ></button>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="cartCanvas"
      aria-labelledby="cartCanvasLabel"
    >
      <div class="offcanvas-header">
        <h5 id="cartCanvasLabel">Cart</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <CartCard v-for="product in cart" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </nav> -->
  <Navbar />
  <router-view />
  <FooterAll />
</template>

<script>
import Navbar from './components/Navbar.vue';
import FooterAll from "./components/FooterAll.vue";

export default {
  components: { FooterAll, Navbar }
};
</script>

<style>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #e52d27 0%,
    #b31217 51%,
    #e52d27 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}

.form-check-input:checked{
  background-color:red !important;
  border-color:red !important;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
  overflow-x: hidden;
}

.offcanvas{
  width:700px !important;
}

.card {
  border: none;
}

#basket {
  text-decoration: none;
}

#inline {
  display: inline-block;
}

#app {
  /* font-family: New Century Schoolbook, TeX Gyre Schola, serif; */
  font-size: 21px;
  text-align: center;
  color: red;
  background-image: linear-gradient(
    #000040,
    #00004e
  );
  /* background-image: linear-gradient(
    to right,
    #000046 0%,
    #1cb5e0 51%,
    #000046 100%
  ); */
}

.table-dark{
  --bs-table-bg: transparent !important;
  --bs-table-striped-bg: transparent !important;
  --bs-table-border-color: red !important;
  --bs-table-hover-bg: #ff000057 !important;
  --bs-table-active-bg: transparent !important;
  box-shadow: 1px 6px 10px 1px black !important;
}

th{
  font-size: 1rem;
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
  text-decoration: none;
}

#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: white;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
