<template>
  <div id="main" class="users container">
    <h1>ALL USERS</h1>
    <div>
      <table class="table text-white">
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
          <th scope="col">Delete</th>
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
            <button v-if="user.cart" data-bs-toggle="modal" :data-bs-target="`#userCart`+user.id" class="btn btn-grad">View Cart</button>
            <p v-else>Empty</p>
          </th>
          <th scope="row">{{ user.phoneNumber }}</th>
          <th scope="row">{{ user.dateCreated }}</th>
          <th scope="row">{{ user.email }}</th>
          <th id="word" scope="row">{{ user.userPassword}}</th>
          <th scope="row">{{ user.userRole }}</th>
          <th scope="row">
            <button data-bs-toggle="modal" :data-bs-target="`#userDelete`+user.id" class="btn btn-grad">Delete</button>
          </th>
          <div class="modal fade" style="color:black !important" :id="`userDelete`+user.id" tabindex="-1" :aria-labelledby="`userAdminLabel`+user.id" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" :id="`userAdminLabel`+user.id">Delete The Account</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure?
                    </div>
                    <div class="modal-footer">
                        <button @click="deleteAccount(user.id)" data-bs-dismiss="modal" class="btn btn-grad">Delete</button>
                    </div>
                </div>
            </div>
          </div>
          <UserCartModal v-if="user.cart" :user="user" :cart="JSON.parse(user.cart)"/>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import UserCartModal from '../components/UserCartModal.vue';
import DeleteAccountModal from '../components/DeleteAccountModal.vue';
export default {
  components:{
    UserCartModal,DeleteAccountModal
  },
  mounted() {
    this.$store.dispatch("getAllUsers");
  },
  computed: {
    allUsers() {
      return this.$store.state.allUsers;
    },
  },
  methods:{
    deleteAccount(id){
      this.$store.dispatch('deleteAccountWithoutLogout',id)
    }
  }
};
</script>

<style scoped>
#main{
  padding: 110px 0;
}

#word{
  word-break: break-all;
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
