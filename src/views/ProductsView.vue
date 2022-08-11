<template>
  <div id="main">
      <div class="container">
    <div class="row">
      <Cards v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
export default {
  components: {
    Cards,
  },
  mounted(){
    this.$store.dispatch('getProducts');
    this.$store.dispatch('clearSingleProduct');
  },
  computed:{
    products(){
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped>
#main {
  background-image: linear-gradient(to right, #000046 0%, #1CB5E0  51%, #000046  100%);
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  height:100%;
  color: white;
}

#registerzone{
  padding: 50px 0 0 0;
}

#cardzone{
  padding: 40px 50px 40px 50px;
}

.card, .btn, input{
  border-radius:0 ;
}
</style>