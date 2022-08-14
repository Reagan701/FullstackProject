<template>
  <div id="main" class="users container-fluid">
    <h1>All Users</h1>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Address</th>
          <th scope="col">Cart</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Date</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">User Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <th scope="row">{{ user.firstName }}</th>
          <th scope="row">{{ user.lastName }}</th>
          <th scope="row">{{ user.gender }}</th>
          <th scope="row">{{ user.address }}</th>
          <th scope="row">
            <button v-if="user.cart" data-bs-toggle="modal" :data-bs-target="`#userCart`+user.id" class="btn btn-primary">Button</button>
            <p v-else>Empty</p>
          </th>
          <th scope="row">{{ user.phoneNumber }}</th>
          <th scope="row">{{ user.dateCreated }}</th>
          <th scope="row">{{ user.email }}</th>
          <th scope="row">{{ user.userPassword }}</th>
          <th scope="row">{{ user.userRole }}</th>
          <UserCartModal v-if="user.cart" :user="user" :cart="JSON.parse(user.cart)"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserCartModal from '../components/UserCartModal.vue';
export default {
  components:{
    UserCartModal
  },
  mounted() {
    this.$store.dispatch("getAllUsers");
  },
  computed: {
    allUsers() {
      return this.$store.state.allUsers;
    },
  },
};
</script>

<style scoped></style>
