<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
              <div class="cta-text">
                <h4>Find us</h4>
                <span>1007 Mountain Drive, Gotham City</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Call us</h4>
                <span>888-766-8686</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h4>Mail us</h4>
                <span>BruceWayne@WayneEnterprises.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="/"
                  ><img
                    src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png"
                    class="img-fluid"
                    alt="logo"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">Our Services</a></li>
                <li><a href="/about">Meet the Team</a></li>
                <li><a href="/contact">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-social-icon">
              <span>Follow us</span>
              <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
              <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
              <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
            </div>
            <div class="footer-widget">
              <div class="footer-text">
                <p>
                  Kit Army stocks the widest range of sporting clothing in South
                  Africa, sourced from major international and local brands. We
                  have a huge selection of sports and outdoor gear at
                  competitive prices. Browse our online store and if you can't
                  find what you are looking for please don't hesitate to give us
                  a call or visit one of our 69 stores countrywide.
                </p>
              </div>
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2022, All Right Reserved
                  <a href="#">KIT ARMY</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  background: transparent;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid white;
}
.single-cta i {
  color: red;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: white;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: white;
  line-height: 28px;
}
.footer-social-icon span {
  color: white;
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: white;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: white;
  color: red;
}
.twitter-bg {
  background: white;
  color: red;
}
.google-bg {
  background: white;
  color: red;
}
.footer-widget-heading h3 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: red;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: red;
}
.footer-widget ul li a {
  color: red;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: white;
  border: 1px solid red;
  color: white;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: red;
  padding: 13px 20px;
  border: 1px solid red;
  top: 0;
}
.subscribe-form button i {
  color: white;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area {
  background: transparent;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: white;
}
.copyright-text p a {
  color: red;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: red;
}
.footer-menu li a {
  font-size: 14px;
  color: red;
}
</style>
