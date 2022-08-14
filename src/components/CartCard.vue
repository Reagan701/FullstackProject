<template>
    <div class="row position-relative p-3">
        <div class="col-md-6">
            <img :src="product.prodUrl" class="card-img-top">
        </div>
        <div id="text" class="col-md-6">
            <div class="d-flex justify-content-between align-items-start flex-column">
                <h3>{{product.prodName}}</h3>
                <p>R{{product.price}}</p>
                <p id="cartText">{{product.description}}</p>
                <button style="align-self:end" @click="removeFromCart" class="btn btn-danger">Remove</button>
            </div>
        </div>
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

.row::after{
    content: '';
    position: absolute;
    top: 0;
    left: 4%;
    border: 1px solid #e1e1e1;
    width: 90%;
}

#cartText{
    font-size: 0.9rem;
}

</style>