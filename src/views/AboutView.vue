<template>
  <div id="main" class="overlay">
    <div class="margi py-5">
      <div class="container-fluid marge">
        <div class="container-fluid">
          <div class="row">
            <div>
              <img
                id="logo"
                src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
          <div class="row row-cols-2 row-cols-xs-2 row-cols-sm-2 row-cols-lg-2">
            <div class="col">
              <div class="card h-100 card shadow">
                <div class="text-center">
                  <div class="img-hover-zoom img-hover-zoom--colorize">
                    <img
                      class="shadow"
                      src="https://i.postimg.cc/rwZkrc6x/Reagon-1.jpg"
                      alt="Another Image zoom-on-hover effect"
                    />
                  </div>
                </div>

                <div class="card-body">
                  <div class="clearfix mb-3"></div>

                  <div class="my-2 text-white text-center">
                    <h1>REAGAN CAROLUSSEN</h1>
                  </div>
                  <div class="mb-3">
                    <h2 class="text-uppercase text-white text-center role">
                      BackEnd Developer
                    </h2>
                  </div>
                  <div class="box">
                    <div>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <i class="fab fa-github"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-linkedin-in text-primary"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-instagram text-danger"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-twitter text-primary"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 card shadow">
                <div class="text-center">
                  <div class="img-hover-zoom img-hover-zoom--colorize">
                    <img
                      class="shadow"
                      src="https://i.postimg.cc/y6GZB9md/LS2.jpg"
                      alt="Another Image zoom-on-hover effect"
                    />
                  </div>
                </div>

                <div class="card-body">
                  <div class="clearfix mb-3"></div>

                  <div class="my-2 text-white text-center">
                    <h1>MARSHALINO JANKOWSKI</h1>
                  </div>
                  <div class="mb-3">
                    <h2 class="text-uppercase text-white text-center role">
                      Frontend developer
                    </h2>
                  </div>
                  <div class="box">
                    <div>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <i class="fab fa-github"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-linkedin-in text-primary"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-instagram text-danger"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-twitter text-primary"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#logo {
  width: 200px;
}

#main {
  background-image: url(https://i.postimg.cc/Hj1L1Wvb/wp9306523-football-pc-4k-wallpapers.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

.marg {
  margin-bottom: 10rem;
}
.marge {
  margin-bottom: 12rem;
}

.text-aqua {
  color: aqua;
}
.h1,
h1 {
  font-size: 1.5rem;
}
.container-fluid {
  max-width: 1400px;
}
.card {
  background: transparent;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  border: 1;
  border-radius: 1rem;
}
.img-hover-zoom--colorize img {
  border-radius: 10%;
  width: 150px;
  height: auto;
  margin-top: 20px;
  padding: 1px;
  transition: transform 0.5s;
  filter: grayscale(100%);
}
.img-hover-zoom--colorize:hover img {
  filter: grayscale(0);
  transform: scale(1.05);
}
.card h5 {
  overflow: hidden;
  height: 80px;
  font-weight: 300;
  font-size: 1rem;
}
.card h5 a {
  color: black;
  text-decoration: none;
}
.role {
  color: #7a7a7a;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fab {
  font-size: 1.5rem;
  color: black;
  transition: transform 0.5s;
}
.fab:hover {
  color: black;
  transform: scale(1.1);
}
.card h2 {
  font-size: 1rem;
}
/* MEDIA */
@media only screen and (min-width: 1200px) {
  .img-hover-zoom--colorize img {
    width: 200px;
  }
}
@media only screen and (min-width: 1200px) {
  .h1,
  h1 {
    font-size: 2rem;
  }
}
/* for headers */
section {
  padding: 60px 0;
  min-height: 100vh;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bg-gray {
  background-color: #f9f9f9;
}
.site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.site-heading h2 span {
  color: #a00000;
}
.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}
.site-heading h4::before {
  background: #a00000 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}
</style>
