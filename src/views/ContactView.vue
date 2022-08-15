<template>
  <div class="container d-flex flex-column justify-content-center align-items-center" id="main">
    <div class="w-100 row justify-content-center">
      <div id="contactzone" class="col-lg-6 col-md-12 col-sm-12">
        <h1 class="pb-5">CONTACT US</h1>
        <div id="cardzone" class="card text-white">
          <div class="card-title text-center border-bottom">
            <h2>Feel free to contact us if you need any assistance</h2>
          </div>
          <div class="card-body">
            <form action="https://formspree.io/f/mvoleqaw" method="PATCH">
              <div class="mb-4 row">
                <div class="col-lg-6">
                  <label for="name" class="form-label">Name</label>
                  <input class="form-control" name="name"/>
                </div>
                <div class="col-lg-6">
                  <label for="email" class="form-label">Email</label>
                  <input class="form-control" name="email"/>
                </div>
                <div class="col-lg-12 mt-3">
                  <label for="text" class="form-label">Message</label>
                  <input id="leave" type="text" required class="form-control" name="text"/>
                </div>
              </div>
              <div>
                <button type="submit" class="w-100 mx-auto btn btn-grad">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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

#cardzone {
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 20px white;
  color: white;
  background: transparent;
}

</style>
