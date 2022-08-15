<template>
  <div class="modal fade" style="color:white !important;" :id="`editProduct`+product.id" tabindex="-1" :aria-labelledby="product.id+`EditLabel`" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" :id="`editProductLabel`+product.id">Modal Title</h5>
                <button type="button" :id="`editProductClose`+product.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="PUT" @submit="editProduct">
                    <label class="form-label">ID</label>
                    <input type="number" class="form-control" :value="product.id" readonly>
                    <label class="form-label">Product Name</label>
                    <input type="text" class="form-control" v-model="product.prodName">
                    <label class="form-label">Product Image</label>
                    <input type="text" class="form-control" v-model="product.prodUrl">
                    <label class="form-label">Description</label>
                    <textarea style="resize:none;" class="form-control" cols="30" rows="4" v-model="product.description"></textarea>
                    <label class="form-label">Quantity</label>
                    <input type="number" class="form-control" v-model="product.quantity">
                    <label class="form-label">Price</label>
                    <input type="number" class="form-control" v-model="product.price">
                    <button type="submit" class="btn btn-grad">Save Changes</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-grad" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        editProduct(e){
            e.preventDefault();
            let newProduct = {
                id: this.product.id,
                prodName: this.product.prodName,
                prodUrl: this.product.prodUrl,
                description: this.product.description,
                quantity: this.product.quantity,
                price: this.product.price
            }
            this.$store.dispatch('editProduct',newProduct);
            document.getElementById(`editProductClose`+this.product.id).click();
        }
    }
}
</script>

<style scoped>
.modal-content{
    background-image: linear-gradient(
    to right,
    #000040,
    #00004e
  );
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
</style>