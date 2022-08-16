<template>
  <div id="main" v-if="products && user" class="container d-flex justify-content-center align-items-center flex-column">
    <div id="sect" class="row">
        <h1 class="my-5">View our Products</h1>
          <div class="col-sm-12 col-xs-12 col-md-3 col-l-4 col-lg-3">
            <select v-model="league" class="form-control btn-grad">
              <option id="drops" value="Any">Filter by League</option>
              <option id="drops" value="English League">English League</option>
              <option id="drops" value="Spanish League">Spanish League</option>
              <option id="drops" value="Italian League">Italian League</option>
              <option id="drops" value="German League">German League</option>
              <option id="drops" value="French League">French League</option>
              <option id="drops" value="Dutch League">Dutch League</option>
            </select>
          </div>
          <div class="col-sm-12 col-xs-12 col-md-3 col-l-3 col-lg-3">
            <select v-model="price" class="form-control btn-grad">
              <option id="drops" value="Any">Filter by Price</option>
              <option id="drops" value="asc">Lowest First</option>
              <option id="drops" value="desc">Highest First</option>
            </select>
          </div>
          <div class="col-sm-12 col-xs-12 col-md-3 col-l-3 col-lg-3">
            <select v-model="alphabetically" class="form-control btn-grad">
              <option id="drops" value="Any">Filter by Alphabet</option>
              <option id="drops" value="asc">A-Z</option>
              <option id="drops" value="desc">Z-A</option>
            </select>
          </div>
          <div class="col-sm-12 col-xs-12 col-md-3 col-l-3 col-lg-3">
            <input class="btn-grad form-control" type="search" v-model="search" placeholder="Search...">
          </div>
    </div>
    <div style="min-height:100vh" class="row">
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
    window.scrollTo(0,0);
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
#sect{
  position: relative;
  padding: 7px;
}
#drops{
  background-color: #00004e;
}
#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
  padding-top:100px;
}

::placeholder{
  color:rgba(255, 255, 255, 0.781);
  text-transform: inherit;
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
  margin: 5px;

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 14px #eee;
  border-radius: 10px;
  font-size: 12px;
}

.border-bottom{
  border-bottom:2px solid red !important;
}
</style>
