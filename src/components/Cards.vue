<template>
  <article>
    <div class="container">
      <div class="row">
        <div
          class="col-md-4 col-lg-4 col-12"
          v-for="item in FoodArray"
          :key="item.id"
        >
          <section class="card-content">
            <div class="card-content">
              <div class="card">
                <div class="layer"></div>
                <div class="content">
                    <img :src="item.icon" alt="avatar" id="food-img" class="img-fluid image"/>
                  <br />
                  <div class="details">
                    <span>{{ item.title }}</span>
                    <br />
                    <a
                      id="live"
                      target="_blank"
                      class="text-primary fa-solid fa-cart-shopping fs-1"
                      :href="item.link1"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script scoped>
export default {
  data() {
    return {
      FoodArray: [
        {
          id: 1,
          icon: "https://i.postimg.cc/6psMFsWw/chelseakit.webp",
          title: "Chelsea FC",
          link1: "#",
        },
        {
          id: 2,
          icon: "https://i.postimg.cc/Y2GVPz66/arsenalkit.webp",
          title: "Arsenal FC",
          link1: "#",
        },
        {
          id: 3,
          icon: "https://i.postimg.cc/9XZbT8Pn/citykit.webp",
          title: "Manchester City FC",
          link1: "#",
        },
        {
          id: 4,
          icon: "https://i.postimg.cc/NfL0SVNN/unitedkit.webp",
          title: "Manchester United FC",
          link1: "#",
        },
        {
          id: 5,
          icon: "https://i.postimg.cc/LsmFKg9H/spurskit.webp",
          title: "Tottenham Hotspur FC",
          link1: "#",
        },
        {
          id: 6,
          icon: "https://i.postimg.cc/9MGxWJJK/liverpoolkit.webp",
          title: "Liverpool FC",
          link1: "#",
        },
        {
          id: 7,
          icon: "https://i.postimg.cc/RFRcs8PS/realmadridkit.webp",
          title: "Real Madrid FC",
          link1: "#",
        },
        {
          id: 8,
          icon: "https://i.postimg.cc/qBFtJ4Cf/Barcakit.png",
          title: "FC Barcelona",
          link1: "#",
        },
        {
          id: 9,
          icon: "https://i.postimg.cc/vTyGB2MV/Juvkit.webp",
          title: "Juventus FC",
          link1: "#",
        },
        {
          id: 10,
          icon: "https://i.postimg.cc/9XsnGwqL/interkit.webp",
          title: "Inter Milan",
          link1: "https://github.com/Tempestfury11/Age2Days",
        },
        {
          id: 11,
          icon: "https://i.postimg.cc/hG7JQwFy/ACMilankit.webp",
          title: "AC Milan",
          link1: "https://github.com/Tempestfury11/Age2Days",
        },
        {
          id: 12,
          icon: "https://i.postimg.cc/L5hFhcwh/Bayernkit.webp",
          title: "FC Bayern Munich",
          link1: "https://github.com/Tempestfury11/Age2Days",
        },
        {
          id: 13,
          icon: "https://i.postimg.cc/7hSdCqXH/dortmundkit.webp",
          title: "Borussia Dortmund FC",
          link1: "https://github.com/Tempestfury11/Age2Days",
        },
        {
          id: 14,
          icon: "https://i.postimg.cc/pTrPn5n2/PSGkit.webp",
          title: "Paris Saint-Germain FC",
          link1: "https://github.com/Tempestfury11/Age2Days",
        },
        {
          id: 15,
          icon: "https://i.postimg.cc/R0QTnNxb/athleticokit.webp",
          title: "Atlético Madrid FC",
          link1: "https://github.com/Tempestfury11/Age2Days",
        },
      ],
    };
  },
};
</script>

<style scoped>
#food-img {
  object-fit: cover;
  border-radius: 30px;
}
.card-content {
  margin: 50px auto 50px;
  display: grid;
  grid-gap: 20px;
}

.card-content .card {
  position: relative;
  margin: 0 auto;
  width: 225px !important;
  width: fit-content;
  background: white;
  color: navy;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 30px;
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
  border: 5px solid red;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.card-content .card .content .details h2 {
  font-size: 18px;
}
.card-content .card .content .details span {
  color: navy;
  font-size: 14px;
  transition: 0.5s;
}
</style>