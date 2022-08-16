<template>
  <div id="main" v-if="user" class="admin container d-flex align-items-center flex-column gap-5 justify-content-center">
    <h2>WELCOME ADMINS</h2>
    <img class="img-fluid"
      id="logo"
      src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png"
      alt="logo"/>
      <br>
    <div>
      <router-link to="/admin/users"><button id="adminButton" class="btn btn">View Users</button></router-link>
      <router-link to="/admin/products"><button id="adminButton" class="btn btn">View Products</button></router-link>
    </div>
  </div>
  <div v-else id="main" class="admin container d-flex align-items-center flex-column justify-content-center">
    <h1>There is No User Logged in</h1>
    <router-link to="/login">
    <button class="btn btn-grad">Return to Login Page</button>
    </router-link>
  </div>
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.container{
  padding: 110px 0;
}

#adminButton{
  width: 122.56px;
}

.btn{
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

.btn:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
