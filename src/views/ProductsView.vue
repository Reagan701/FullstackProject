<template>
  <div id="main">
    <Cards />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
export default {
  components: {
    Cards,
  },
};
</script>

<style>

#registerzone{
  padding: 50px 0 0 0;
}

#cardzone{
  padding: 40px 50px 40px 50px;
  border-radius: 20px;
}

.card, .btn, input{
  border-radius:0 ;
}
</style>