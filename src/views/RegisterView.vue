<template>
  <div id="main">
    <div class="container">
      <div class="row justify-content-center">
        <div id="registerzone" class="col-lg-4 col-md-6 col-sm-6">
          <h2 class="">Register Your Account</h2>
          <div id="cardzone" class="card shadow  text-white">
            <div class="card-title text-center border-bottom">
            <h2>Register</h2>
            </div>
            <div class="card-body">
            <form>
              <div class="mb-4">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname" />
              </div>
              <div class="mb-4">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" />
              </div>
              <div class="mb-4">
                <label for="gender" class="form-label">Gender</label>
                <input type="text" class="form-control" id="gender" />
              </div>
              <div class="mb-4">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" />
              </div>
              <div class="mb-4">
                <label for="username" class="form-label">Email</label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
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

}
</script>

<style>

#registerzone{
  padding: 50px 0 50px 0;
}

#cardzone{
  padding: 40px 50px 40px 50px;
  border-radius: 20px;
}

.card, .btn, input{
  border-radius:0 ;
}
</style>