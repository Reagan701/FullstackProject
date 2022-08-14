<template>
  <div id="main" v-if="currentUser" class="account container d-flex justify-content-center align-items-center flex-column">
    <!-- <div v-if="currentUser" class="h-100 w-100"> -->
      <!-- <div> -->
        <div class="row w-100">
          <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <i id="userIcon" class="fa-solid fa-circle-user"></i>
          </div>
          <div class="col-md-6">
            <form @submit="updateUser">
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <label for="firstName" class="form-label">First Name</label>
                      <input
                        v-model="firstName"
                        type="text"
                        class="form-control"
                        name="firstName"
                        id="firstName"
                        @input="changeFirstNameColor"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="lastName" class="form-label">Last Name</label>
                      <input
                        type="text"
                        v-model="lastName"
                        class="form-control"
                        name="lastName"
                        id="lastName"
                        @input="changeLastNameColor"
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
                      v-model="address"
                      type="text"
                      class="form-control"
                      name="address"
                      id="address"
                      @input="changeAddressColor"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="phoneNumber" class="form-label"
                      >Phone Number</label
                    >
                    <input
                      v-model="phoneNumber"
                      type="number"
                      class="form-control"
                      name="phoneNumber"
                      id="phoneNumber"
                      @input="changePhoneNumberColor"
                    />
                  </div>
                  <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        name="email"
                        id="email"
                        @input="changeEmailColor"
                      />
                  </div>
                  <div>
                    <button type="submit" class="w-100 mx-auto btn btn-grad">
                      Save Changes
                    </button>
                  </div>
                </form>
          </div>
        </div>
      <!-- </div> -->
    <!-- </div> -->
  </div>
  <div id="main" v-else class="account container d-flex justify-content-center align-items-center flex-column">
    <h1>There is no user logged in</h1>
    <router-link to="/login">
    <button class="btn btn-primary">Return to Login Page</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: null,
      firstName: null,
      lastName: null,
      gender: null,
      address: null,
      phoneNumber: null,
      email: null,
      password: null,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  async mounted(){
    if(this.currentUser){
      this.id = this.$store.state.currentUser.id;
      this.firstName = this.$store.state.currentUser.firstName;
      this.lastName = this.$store.state.currentUser.lastName;
      this.gender = this.$store.state.currentUser.gender;
      this.address = this.$store.state.currentUser.address;
      this.phoneNumber = this.$store.state.currentUser.phoneNumber;
      this.email = this.$store.state.currentUser.email;
    }
  },
  methods:{
    changeFirstNameColor(){
      if(this.firstName != this.$store.state.currentUser.firstName){
        document.getElementById('firstName').style.background = "#d99";
      }else{
        document.getElementById('firstName').style.background = "#FFF";
      }
    },
    changeLastNameColor(){
      if(this.lastName != this.$store.state.currentUser.lastName){
        document.getElementById('lastName').style.background = "#d99";
      }else{
        document.getElementById('lastName').style.background = "#FFF";
      }
    },
    changeAddressColor(){
      if(this.address != this.$store.state.currentUser.address){
        document.getElementById('address').style.background = "#d99";
      }else{
        document.getElementById('address').style.background = "#FFF";
      }
    },
    changeEmailColor(){
      if(this.email != this.$store.state.currentUser.email){
        document.getElementById('email').style.background = "#d99";
      }else{
        document.getElementById('email').style.background = "#FFF";
      }
    },
    changePhoneNumberColor(){
      if(this.phoneNumber != this.$store.state.currentUser.phoneNumber){
        document.getElementById('phoneNumber').style.background = "#d99";
      }else{
        document.getElementById('phoneNumber').style.background = "#FFF";
      }
    },
    updateUser(e){
      e.preventDefault();
      let newUser = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        address: this.address,
        email: this.email,
        phoneNumber: this.phoneNumber,
        userPassword: "John123"
      }
      this.$store.dispatch('updateUser',newUser)
    }
  }
};
</script>

<style scoped>
#userIcon {
  font-size: 12rem;
}
</style>
