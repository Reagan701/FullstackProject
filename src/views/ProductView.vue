<template>
  <div v-if="product" id="main" class="container d-flex justify-content-center align-items-center flex-column" style="min-height:100vh">
    <router-link class="mb-4" to="/products"
      ><button class="btn-grad btn">Go Back</button></router-link
    >
      <div class="row">
        <div class="col-md-6">
            <img class="w-100 h-100" :src="product.prodUrl" alt="productImg" />
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="h-100 d-flex justify-content-evenly gap-5 align-items-start flex-column p-5">
              <div id="details" class="info-top">
                <h1>{{ product.prodName }}</h1>
              </div>
                <p style="text-align:start;">{{ product.description }}</p>
              <div style="align-self:end">
                  <p id="priceText">R{{ product.price }}</p>
                <div class="btn-grad btn">
                  <a class="text-white" @click="addProductToCart">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div v-else id="main" class="container d-flex justify-content-center align-items-center flex-column"><Loader /></div>
</template>

<script>
import Loader from '../components/Loader.vue';

export default {
  components: {Loader},
  computed: {
    product() {
      return this.$store.state.singleProduct;
    },
  },
  mounted() {
    this.$store.dispatch("getSingleProduct", this.$route.params.id);
  },
  methods: {
    addProductToCart() {
      let newProduct = {
        prodName: this.product.prodName,
        prodUrl: this.product.prodUrl,
        description: this.product.description,
        price: this.product.price,
      };
      this.$store.dispatch("AddProductToCart", newProduct);
    },
  },
};
</script>

<style scoped>
a{text-decoration: none;}

#priceText{
  text-align: end;
  font-size: 27px !important;
  font-weight: 500;
}

#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
  /* padding-top:100px; */
}
.card {
  box-shadow: -20px 0px 20px 0 rgba(0, 0, 0, 0.2);
  max-width: 100%;
  height: 100%;
  margin: auto;
  background-color: transparent;
  /* font-family: New Century Schoolbook, TeX Gyre Schola, serif; */
  font-size: 21px;
  padding: 20px 20px 20px 20px;
  color:white;
  border-radius: 10px;
  box-shadow: 0 0 20px white;
}

img{
  box-shadow: 0 0 20px white;
  border-radius: 10px;
}

.price {
  color: black;
  font-size: 22px;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #e52d27 0%,
    #b31217 51%,
    #e52d27 100%
  );
  margin: 0 !important;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 19px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
