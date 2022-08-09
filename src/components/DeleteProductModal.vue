<template>
    <div class="modal fade" style="color:black !important" :id="`deleteProduct`+product.id" tabindex="-1" :aria-labelledby="product.id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteProductLabel`+product.id">Delete Product</h5>
                    <button type="button" :id="`deleteProductClose`+product.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are you sure?</h3>
                    <button data-bs-dismiss="modal" class="btn btn-primary">CANCEL</button>
                    <button class="btn btn-danger" @click="deleteProduct">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        deleteProduct(){
            this.$store.dispatch('deleteProduct',this.product.id);
            document.getElementById(`deleteProductClose`+this.product.id).click();
        }
    }
}
</script>

<style scoped>

</style>