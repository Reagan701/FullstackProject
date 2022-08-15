<template>
    <div id="basket" class="row position-relative p-3">
        <div class="col-md-6">
            <img :src="product.prodUrl" class="card-img-top">
        </div>
        <div id="text" class="col-md-6">
            <div class="d-flex justify-content-between align-items-start flex-column">
                <h3>{{product.prodName}}</h3>
                <p>R{{product.price}}</p>
                <p id="cartText">{{product.description}}</p>
                <button style="align-self:end" @click="removeFromCart" class="btn btn-grad">Remove</button>
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
#basket{
    background-image: linear-gradient(
    to right,
    #000040,
    #00004e
  );
  color: white;
}

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

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
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