<template>
  <div class="col-md-4 col-lg-3 col-xm-12 col-sm-6">
    <section class="card-content">
      <div class="card-content">
        <div class="card">
          <div class="layer"></div>
          <div class="content">
            <img
              :src="product.prodUrl"
              alt="productImage"
              id="food-img"
              class="img-fluid image"
            />
            <br />
            <div class="details">
              <span>{{ product.prodName }}</span>
              <br />
              <router-link
                :to="{ name: 'singleProduct', params: { id: product.id } }"
              >
                <button class="btn-grad">View Product</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script scoped>
export default {
  props: ["product"],
};
</script>

<style scoped>
a{
  text-decoration: none
}

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

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

#food-img {
  object-fit: cover;
}

.card-content {
  margin: 50px auto 50px;
  display: grid;
  grid-gap: 20px;
}
.details {
  text-decoration: underline;
  border: none;
}
.card-content .card {
  position: relative;
  margin: 0 auto;
  width: 225px !important;
  width: fit-content;
  background: transparent;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.card-content .card .content {
  position: relative;
  z-index: 2;
}
.card-content .card .content p {
  font-size: 18px;
  line-height: 24px;
}
.card-content .card .content .image {
  width: 100%;
  height: 180px;
  margin: 0 auto;
  overflow: hidden;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
#live {
  text-decoration: none;
}
.details {
  text-decoration: none;
}
</style>
