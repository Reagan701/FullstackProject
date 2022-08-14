<template>
  <div class="modal fade" style="color:black !important" :id="`userCart`+user.id" tabindex="-1" :aria-labelledby="`userCartLabel`+user.id" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" :id="`userCartLabel`+user.id">{{user.firstName}}'s Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <UserCartCard v-for="product in cart" :key="product.id" :product="product" />
                </div>
            </div>
            <div class="modal-footer">
                <button @click="confirmChanges" class="btn btn-success">Save Changes</button>
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

</style>