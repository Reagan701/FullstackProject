<template>
  <div id="main" class="products container">
    <h1>ALL PRODUCTS</h1>
      <div style="overflow-x:auto">
              <table class="table text-white">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Image</th>
          <th scope="col">Description</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">
            ADD
            <button
              data-bs-target="#AddProductModal"
              data-bs-toggle="modal"
              class="btn-grad"
            >
              ADD
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="product.id">
          <th scope="row" class="p-2">{{ product.id }}</th>
          <th scope="row">{{ product.prodName }}</th>
          <th scope="row">{{ product.prodUrl }}</th>
          <th scope="row">{{ product.description }}</th>
          <th scope="row">{{ product.quantity }}</th>
          <th scope="row">R{{ product.price }}</th>
          <th scope="row">
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#editProduct` + product.id"
              class="btn-grad"
            >
              Edit
            </button>
            <button
              data-bs-toggle="modal"
              :data-bs-target="`#deleteProduct` + product.id"
              class="btn-grad"
            >
              Delete
            </button>
          </th>
          <EditProductModal :product="product" />
          <DeleteProductModal :product="product" />
        </tr>
      </tbody>
    </table>
      </div>
    <AddProductModal />
  </div>
</template>

<script>
import EditProductModal from "../components/EditProductModal";
import DeleteProductModal from "../components/DeleteProductModal.vue";
import AddProductModal from "../components/AddProductModal.vue";

export default {
  components: { EditProductModal, DeleteProductModal, AddProductModal },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    allProducts() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
#main{
  padding: 120px 0;
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
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid white;
}

th, td {
  text-align: center;
  padding: 8px;
}
</style>
