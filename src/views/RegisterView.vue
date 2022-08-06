<template>
  <div id="main">
    <div class="container">
      <div class="row justify-content-center">
        <div id="registerzone" class="col-lg-4 col-md-6 col-sm-6">
          <h2 class="">Register Your Account</h2>
          <div id="cardzone" class="card shadow  text-dark">
            <div class="card-title text-center text-dark border-bottom">
            <h2>Register</h2>
            </div>
            <div class="card-body  text-dark">
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

<style scoped>
#main {
  background-image: url(https://lh3.googleusercontent.com/Ir5UWTuFEL-VkIwohYr4wWL9-Wlck-8Wb2GgiXS8KYbSjPuwt-ExC8AH664s70xyD5ySznfnpVgmiBvx4QSsl9JnaIcnaZBTeAdDQqX_c0v9XwGnDiKpsIfjus7CLwkreVw8XeUv1pQoP0Gv_xdbpVIWS7skbxHUu-HGM9B-PCYwE16_niLDG9B2phke3mnYFMMgITlOaCISUNFgAeU0Qu4Nu3_0-mgdIHgZr6xj2Tzt6R_cKFq1RkWbWpnuy5rfc4K3idSSfLQ6M623EYS0-BqFQ7F9OQfHbKh6NbpPbpOW_M4qZWw-IHkby_x-PVKWzJGyo-AuCGAPtaGkQPTO--d0w0C85XxVrQJSfFrIHrthYrkLNDc4qESNw8NZh04M8lE56nnsnH5x8NoQM6kmQG8Sc6Prvgr9KKHT0RUhyrrv_iXOwthj-wQKoFtLGq54md8-xFVZRMj0NJ3BKaWRcQrLQyMtAIosSEQoxKZIjBy01u79PqEfYQ8XtMn_19Ok2XDjYUA-z6kknmX1vvp0CwIbGTK09avBiMCS5_FwJtqnH75ttwJ7PSMSOLPjEdxhnX7CRdnJi3a3NpRlWS6QWe3agV8zzl4JlvfYiARFb8KURQLf-jJY3XTHQzZKYXaGuAiGEoRk_gmEv_tj6juW3YltYCig_6XOplVS8Bm4187_tM7fe7AamXBVWnjS9KtMXv2YkChjlA14f2xGrjuliXEPbxui2XLDwXX9W-k4jeZbwAavtiJIjQ=w1429-h893-no?authuser=0);
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  height:125vh;
  color: white;
}

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