<template>
  <div id="main">
    <div class="container">
      <div class="row justify-content-center">
        <div id="registerzone" class="col-lg-4 col-md-6 col-sm-6">
          <h2 class="">Register Your Account</h2>
          <div id="cardzone" class="card shadow  text-white">
            <div class="card-title text-center text-white border-bottom">
            <h2>Register</h2>
            </div>
            <div class="card-body text-white">
            <form method="POST" @submit="registerUser">
              <div class="mb-4">
                <label for="firstName" class="form-label">First Name</label>
                <input v-model="firstName" type="text" class="form-control" name="firstName" />
              </div>
              <div class="mb-4">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" v-model="lastName" class="form-control" name="lastName" />
              </div>
              <div class="mb-4">
                <label for="gender" class="form-label">Gender</label><br>
                <label for="gender" class="form-label">Male</label>
                <input v-model="gender" type="radio" name="gender" class="form-check-input" value="Male" />
                <label for="gender" class="form-label">Female</label>
                <input v-model="gender" type="radio" name="gender" class="form-check-input" value="Female" />
                <label for="gender" class="form-label">Other</label>
                <input v-model="gender" type="radio" name="gender" class="form-check-input" value="Other" />
              </div>
              <div class="mb-4">
                <label for="address" class="form-label">Address</label>
                <input v-model="address" type="text" class="form-control" name="address" />
              </div>
              <div class="mb-4">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <input v-model="phoneNumber" type="number" class="form-control" name="phoneNumber" />
              </div>
              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" name="email" />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input v-model="userPassword" type="password" class="form-control" name="password" />
              </div>
              <div class="d-grid">
                <button type="submit" class="btn bg-danger text-white">Register</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName:null,
      lastName:null,
      gender:null,
      address:null,
      cart:null,
      phoneNumber:null,
      email:null,
      userPassword:null
    }
  },
  methods:{
    registerUser(event){
      event.preventDefault();
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        address: this.address,
        cart: this.cart,
        phoneNumber: this.phoneNumber,
        email:this.email,
        userPassword:this.userPassword
      }
      this.$store.dispatch('registerUser',user);
    }
  }
}
</script>

<style scoped>
#main {
  background-image: linear-gradient(to right, #000046 0%, #1CB5E0  51%, #000046  100%);
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  height:100%;
  color: white;
}

#registerzone{
  padding: 50px 0 50px 0;
}

#cardzone{
  padding: 40px 50px 40px 50px;
  border-radius: 20px;
  background-color: transparent;
}

.card, .btn, input{
  border-radius:0 ;
}
</style>