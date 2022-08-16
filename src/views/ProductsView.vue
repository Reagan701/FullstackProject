<template>
  <div id="main" v-if="products && user" class="container d-flex justify-content-center align-items-center flex-column">
    <div class="row">
      <div class="col-md-12">
        <h1>View our Products</h1>
        <select v-model="league" class="form-control">
          <option value="Any">Any</option>
          <option value="English League">English League</option>
          <option value="Spanish League">Spanish League</option>
          <option value="Italian League">Italian League</option>
          <option value="German League">German League</option>
          <option value="French League">French League</option>
          <option value="Dutch League">Dutch League</option>
        </select>
        <select v-model="price">
          <option value="Any">Any</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select v-model="alphabetically">
          <option value="Any">Any</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <input type="text" v-model="search" placeholder="text">
      </div>
    </div>
    <div class="row">
      <Cards
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  <div v-else-if="!user && products" id="main" class="container d-flex align-items-center flex-column justify-content-center gap-5">
    <h1>There is No User Logged in</h1>
    <router-link to="/login">
    <button class="btn btn-grad">Return to Login Page</button>
    </router-link>
  </div>
  <div v-else-if="user && !products" id="main" class="d-flex justify-content-center align-items-center flex-column">
    <Loader />
  </div>
  <div v-else id="main" class="d-flex justify-content-center align-items-center flex-column">
    <Loader />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import Loader from '../components/Loader.vue';

export default {
  data(){
    return{
      league: "Any",
      search: '',
      price: 'Any',
      alphabetically: 'Any'
    }
  },
  components: {
    Cards, Loader
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("clearSingleProduct");
  },
  computed: {
    products() {
      let value = this.$store.state.products?.filter((prod)=>{
        let isMatched = true;
        if((!prod.prodName?.toLowerCase().includes(this.search.toLowerCase()))){
          isMatched = false;
        }
        if((prod.category != this.league) && this.league !='Any'){
          isMatched = false;
        }

        return isMatched;
      });
      let sort = value;
      if(this.price != 'Any'){
        if(this.price == "asc"){
          sort = value.sort((a,b)=>{
            return a.price - b.price
          })
        }
        if(this.price =="desc"){
          sort = value.sort((a,b)=>{
            return a.price - b.price
          })
          sort.reverse();
        }
      }
      return sort;
    },
    user(){
      return this.$store.state.user;
    }
  },
  methods:{

  }
};
</script>

<style scoped>
#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
  padding-top:100px;
}

#registerzone {
  padding: 50px 0 0 0;
}

#cardzone {
  padding: 40px 50px 40px 50px;
}

.card,
.btn,
input {
  border-radius: 0;
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

.border-bottom{
  border-bottom:2px solid red !important;
}
</style>
