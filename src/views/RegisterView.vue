<template>
  <div id="main" class="container d-flex justify-content-center align-items-center flex-column">
    <div class="w-100 row justify-content-center">
      <div id="registerzone" v-if="!user" class="col-lg-6 col-md-6 col-sm-6">
        <h1 class="pb-4">Register Your Account</h1>
        <div id="cardzone" class="card shadow text-white">
          <div class="card-title text-center text-white">
          </div>
          <div class="card-body text-white">
            <form method="POST" @submit="registerUser">
              <div class="row mb-3">
                <div class="col-6">
                  <label for="firstName" class="form-label">First Name</label>
                  <input
                    @input="clearClick"
                    v-model="firstName"
                    type="text"
                    class="form-control"
                    name="firstName"
                  />
                </div>
                <div class="col-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input
                    @input="clearClick"
                    type="text"
                    v-model="lastName"
                    class="form-control"
                    name="lastName"
                  />
                </div>
              </div>
              <div class="mb-1">
                <label for="gender" class="form-label">Gender</label><br />
                <label for="gender" class="form-label">Male</label>
                <input
                  v-model="gender"
                  type="radio"
                  name="gender"
                  class="form-check-input"
                  value="Male"
                />
                <label for="gender" class="form-label">Female</label>
                <input
                  v-model="gender"
                  type="radio"
                  name="gender"
                  class="form-check-input"
                  value="Female"
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input
                  @input="clearClick"
                  v-model="address"
                  type="text"
                  class="form-control"
                  name="address"
                />
              </div>
              <div class="mb-3">
                <label for="phoneNumber" class="form-label"
                  >Phone Number</label
                >
                <input
                  @input="clearClick"
                  v-model="phoneNumber"
                  type="number"
                  class="form-control"
                  name="phoneNumber"
                />
              </div>
              <div class="mb-3 row">
                <div class="col-md-6">
                  <label for="email" class="form-label">Email</label>
                  <input
                    @input="clearClick"
                    type="email"
                    v-model="email"
                    class="form-control"
                    name="email"
                  />
                </div>
                <div class="col-md-6">
                  <label for="password" class="form-label">Password</label>
                  <input
                    @input="clearClick"
                    v-model="userPassword"
                    type="password"
                    class="form-control"
                    name="password"
                  />
                </div>
              </div>
              <div>
                <button type="submit" class="w-100 mx-auto btn btn-grad">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-else class="col-lg-6 col-md-6 col-sm-6">
        <h1>Welcome {{user.firstName}} {{user.lastName}}</h1>
        <router-link to="/products">
        <button class="btn btn-grad">View Our Products</button>
        </router-link>
      </div>
      <div v-if="clicked && !user">
        <div v-if="registerError">
          {{registerError}}
        </div>
        <div v-else>
          <div v-if="registerComplete">
            Signing In...
          </div>
          <div v-else>
            Registering...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked:false,
      firstName: null,
      lastName: null,
      gender: null,
      address: null,
      cart: null,
      phoneNumber: null,
      email: null,
      userPassword: null,
    };
  },
  computed:{
    registerError(){
      return this.$store.state.registerError;
    },
    registerComplete(){
      return this.$store.state.registerComplete;
    },
    user(){
      return this.$store.state.currentUser;
    }
  },
  methods: {
    registerUser(event) {
      event.preventDefault();
      this.clicked = true;
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        address: this.address,
        cart: this.cart,
        phoneNumber: this.phoneNumber,
        email: this.email,
        userPassword: this.userPassword,
      };
      this.$store.dispatch("registerUser", user);
    },
    clearClick(){
      this.clicked = false;
      this.$store.commit('setRegisterError',null);
    }
  },
};
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

.border-bottom{
  border-bottom:2px solid red !important;
}

.form-check-input{
  margin-right: 1rem;
  margin-left: 1rem;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

#registerzone {
  padding: 20px 0;
}

#cardzone {
  padding: 40px 50px 40px 50px;
  border-radius: 10px;
  border: 1px solid red;
  background-color: transparent;
}

</style>
