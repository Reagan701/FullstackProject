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

</style>