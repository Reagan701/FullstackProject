<template>
  <div class="modal fade" style="color:white !important" :id="`userCart`+user.id" tabindex="-1" :aria-labelledby="`userCartLabel`+user.id" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" :id="`userCartLabel`+user.id">{{user.firstName}}'s Cart</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <UserCartCard v-for="product in cart" :key="product.id" :product="product" />
                </div>
            </div>
            <div class="modal-footer">
                <button @click="confirmChanges" class="btn btn-grad">Save Changes</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import UserCartCard from '../components/UserCartCard.vue';
export default {
    components:{UserCartCard},
    props:['user', 'cart'],
    methods:{
        confirmChanges(){
            let items = [];
            const cartItems = document.getElementsByClassName('userCart');
            for(let i=0; i<cartItems.length; i++){
                if(cartItems[i].style.filter == "grayscale(1)"){
                    items.push(parseInt(cartItems[i].id.slice(8)))
                }
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

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.modal-content{
    background-image: linear-gradient(
    to right,
    #000040,
    #00004e
  );
}
</style>