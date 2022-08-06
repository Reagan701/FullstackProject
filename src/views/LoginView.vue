<template>
  <div id="main">
    <div class="container">
      <div class="row justify-content-center">
        <div id="loginzone" class="col-lg-4 col-md-6 col-sm-6">
          <h2 class="">Sign-in To Your Account</h2>
          <div id="cardzone" class="card shadow  text-white">
            <div class="card-title text-center border-bottom">
            <h2>Login</h2>
            </div>
            <div class="card-body">
            <form>
              <div class="mb-4">
                <label for="username" class="form-label">Email</label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="d-grid">
                <button type="submit" class="btn bg-danger text-white">Login</button>
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

}
</script>

<style scoped>
#loginzone{
  padding: 150px 0 250px 0;
}

#cardzone{
  padding: 40px 40px 40px 40px;
  border-radius: 20px;
  color: white;
  background: navy
}

.card, .btn, input{
  border-radius:0 ;
}
</style>
