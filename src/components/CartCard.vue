<template>  
  <div class="col-md-6">
    <div class="card bg-dark">
        <div class="card-body">
            <img :src="product.prodUrl" class="card-img-top">
        </div>
    </div>
  </div>
  <div id="text" class="col-md-6">
    <ul>
        <li>{{product.prodName}}</li>
        <li>{{product.description}}</li>
        <li>R{{product.price}}</li>
    </ul>
    <button @click="removeFromCart" class="btn btn-danger">Remove</button>
  </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        removeFromCart(){
            this.$store.dispatch('removeFromCart',this.product.id);
        }
    }
}
</script>

<style scoped>
#text{
    text-align: left;
}
</style>