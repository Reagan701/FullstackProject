<template>
  <div v-if="product" id="main">
      <router-link to="/products"><button class="btn btn-danger">Go Back</button></router-link>
    <div class="container">
      <div class="row">
        <div id="item">
          <div class="card">
            <img :src="product.prodUrl" alt="" style="width:100%">
            <div class="information-area">
              <div class="info-top">
                <h1>{{product.prodName}}</h1>
                <p>{{product.description}}</p>
                <p>{{product.price}}</p>
              </div>
              <div class="btn-area btn-danger">
                <a class="text-white" @click="addProductToCart">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else id="main">
	loading...
  </div>
</template>

<script>
export default {
	computed:{
		product(){
			return this.$store.state.singleProduct;
		}
	},
	mounted(){
		this.$store.dispatch('getSingleProduct', this.$route.params.id)
	},
  methods:{
    addProductToCart(){
      let newProduct = {
        prodName: this.product.prodName,
        prodUrl: this.product.prodUrl,
        description: this.product.description,
        price: this.product.price
      }
      this.$store.dispatch('AddProductToCart',newProduct);
    }
  }
};
</script>

<style scoped>
#main {
background-image: url(https://i.postimg.cc/Hj1L1Wvb/wp9306523-football-pc-4k-wallpapers.jpg);
background-size: cover;
background-position:center;
background-repeat: no-repeat;
height:100%;
color: white;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 320px;
  margin: auto;
  text-align: center;
  background-color: transparent;
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 21px;
  padding: 0 0 0 0;
}

#item{
  padding: 25px
}
  
.price {
  color: black;
  font-size: 22px;
}
  
.btn-area {
  text-decoration: none;
  font-size: 30px;
  color: white;
}
</style>