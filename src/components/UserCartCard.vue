<template>
    <div class="col-md-6">
        <img :src="product.prodUrl" @click="removeProduct" :id="`userProd`+product.id" class="userCart img-fluid">
    </div>

</template>

<script>
export default {
    props:['product'],
    methods:{
        removeProduct(){
            if(document.getElementById(`userProd`+this.product.id).style.filter == "grayscale(1)"){
                document.getElementById(`userProd`+this.product.id).style.filter = "";
            }else{
                document.getElementById(`userProd`+this.product.id).style.filter = "grayscale(1)";
            }
        }
    }
}

</script>

<style scoped>
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

.border-bottom{
  border-bottom:2px solid red !important;
}
</style>