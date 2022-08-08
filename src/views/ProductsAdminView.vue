<template>
    <div id="main" class="products container-fluid">
        <h1>All Products</h1>
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">CRUD</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in allProducts" :key="product.id">
                    <th scope="row">{{product.id}}</th>
                    <th scope="row">{{product.prodName}}</th>
                    <th scope="row">{{product.prodUrl}}</th>
                    <th scope="row">{{product.description}}</th>
                    <th scope="row">{{product.quantity}}</th>
                    <th scope="row">R{{product.price}}</th>
                    <th scope="row">
                        <button data-bs-toggle="modal" :data-bs-target="`#editProduct`+product.id" class="btn btn-primary">Edit</button>
                        <button data-bs-toggle="modal" :data-bs-target="`#deleteProduct`+product.id" class="btn btn-danger">Delete</button>
                    </th>
                    <EditProductModal :product="product" />
                    <DeleteProductModal :product="product" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditProductModal from '../components/EditProductModal';
import DeleteProductModal from '../components/DeleteProductModal.vue';

export default {
    components: {EditProductModal, DeleteProductModal},
    mounted(){
        this.$store.dispatch('getProducts');
    },
    computed:{
        allProducts(){
            return this.$store.state.products
        }
    }
}
</script>

<style scoped>

</style>