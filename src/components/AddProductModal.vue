<template>
  <div class="modal fade" style="color:black !important" id="AddProductModal" tabindex="-1" aria-labelledby="AddProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="AddProductModalLabel">Add Product</h5>
                <button type="button" id="AddProductModalClose" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="POST" @submit="addProduct">
                    <label for="ProductName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" v-model="prodName" name="ProductName">
                    <label for="ProductUrl" class="form-label">Product Url</label>
                    <input type="text" class="form-control" v-model="prodUrl" name="ProductUrl">
                    <label for="Description" class="form-label">Description</label>
                    <input type="text" class="form-control" v-model="description" name="Description">
                    <label for="Quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" v-model="quantity" name="Quantity">
                    <label for="Price" class="form-label">Price</label>
                    <input type="number" class="form-control" name="Price" v-model="price">
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            prodName: null,
            prodUrl: null,
            description: null,
            quantity: null,
            price: null
        }
    },
    methods:{
        addProduct(e){
            e.preventDefault();
            let newProduct = {
                prodName: this.prodName,
                prodUrl: this.prodUrl,
                description: this.description,
                quantity: this.quantity,
                price: this.price
            };
            this.$store.dispatch('addProduct',newProduct);
            document.getElementById('AddProductModalClose').click();
        }
    }
}
</script>

<style scoped>

</style>