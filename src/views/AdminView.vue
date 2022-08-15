<template>
  <div id="main" class="admin">
    <div class="container justify-content-center">
    <h2>WELCOME ADMINS</h2>
      <img class="img-fluid"
        id="logo"
        src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png"
        alt=""/>
        <br>
      <div class="container justify-content-center">
        <router-link to="/admin/users"><button class="btn btn">View Users</button></router-link>
        <router-link to="/admin/products"><button class="btn btn">View Products</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
  padding: 110px 0;
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
