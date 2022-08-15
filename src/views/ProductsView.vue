<template>
  <div id="main" v-if="products && user" class="container d-flex justify-content-center align-items-center flex-column">
    <div class="row">
      <Cards
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  <div v-else-if="!user && products" id="main" class="container d-flex align-items-center flex-column justify-content-center gap-5">
    <h1>There is No User Logged in</h1>
    <router-link to="/login">
    <button class="btn btn-danger">Return to Login Page</button>
    </router-link>
  </div>
  <div v-else-if="user && !products" id="main" class="d-flex justify-content-center align-items-center flex-column">
    <Loader />
  </div>
  <div v-else id="main" class="d-flex justify-content-center align-items-center flex-column">
    <Loader />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import Loader from '../components/Loader.vue';

export default {
  components: {
    Cards, Loader
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("clearSingleProduct");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    user(){
      return this.$store.state.user;
    }
  },
};
</script>

<style scoped>
#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
  padding-top:100px;
}

#registerzone {
  padding: 50px 0 0 0;
}

#cardzone {
  padding: 40px 50px 40px 50px;
}

.card,
.btn,
input {
  border-radius: 0;
}
</style>
