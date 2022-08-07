<template>
  <div id="main" class="container">
    <div class="row">
      <Cards v-for="product in products" :key="product.id" :product="product" />
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