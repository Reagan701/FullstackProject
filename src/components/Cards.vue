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
                    <a id="live"
                      target="_blank"
                      class="text-danger fa-solid fa-cart-shopping fs-1"
                      :href="item.link1"
                    ></a> <br>
                    <a id="live"
                      target="_blank"
                      class="text-danger fa-solid fa-eye fs-1"
                      :href="item.link2"
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
          link2: "#"
        },
        {
          id: 2,
          icon: "https://i.postimg.cc/Y2GVPz66/arsenalkit.webp",
          title: "Arsenal",
          link1: "#",
          link2: "#"
        },
        {
          id: 3,
          icon: "https://i.postimg.cc/7hJkSDCC/Mancitykit.webp",
          title: "Manchester City",
          link1: "#",
          link2: "#"
        },
        {
          id: 4,
          icon: "https://i.postimg.cc/NfL0SVNN/unitedkit.webp",
          title: "Manchester United",
          link1: "#",
          link2: "#"
        },
        {
          id: 5,
          icon: "https://i.postimg.cc/LsmFKg9H/spurskit.webp",
          title: "Tottenham Hotspur",
          link1: "#",
          link2: "#"
        },
        {
          id: 6,
          icon: "https://i.postimg.cc/9MGxWJJK/liverpoolkit.webp",
          title: "Liverpool",
          link1: "#",
          link2: "#"
        },
        {
          id: 7,
          icon: "https://i.postimg.cc/RFRcs8PS/realmadridkit.webp",
          title: "Real Madrid",
          link1: "#",
          link2: "#"
        },
        {
          id: 8,
          icon: "https://i.postimg.cc/qBFtJ4Cf/Barcakit.png",
          title: "Barcelona",
          link1: "#",
          link2: "#"
        },
        {
          id: 9,
          icon: "https://i.postimg.cc/vTyGB2MV/Juvkit.webp",
          title: "Juventus",
          link1: "#",
          link2: "#"
        },
        {
          id: 10,
          icon: "https://i.postimg.cc/9XsnGwqL/interkit.webp",
          title: "Inter Milan",
          link1: "#",
          link2: "#"
        },
        {
          id: 11,
          icon: "https://i.postimg.cc/hG7JQwFy/ACMilankit.webp",
          title: "AC Milan",
          link1: "#",
          link2: "#"
        },
        {
          id: 12,
          icon: "https://i.postimg.cc/L5hFhcwh/Bayernkit.webp",
          title: "Bayern Munich",
          link1: "#",
          link2: "#"
        },
        {
          id: 13,
          icon: "https://i.postimg.cc/7hSdCqXH/dortmundkit.webp",
          title: "Borussia Dortmund",
          link1: "#",
          link2: "#"
        },
        {
          id: 14,
          icon: "https://i.postimg.cc/pTrPn5n2/PSGkit.webp",
          title: "Paris Saint-Germain",
          link1: "#",
          link2: "#"
        },
        {
          id: 15,
          icon: "https://i.postimg.cc/R0QTnNxb/athleticokit.webp",
          title: "Atlético Madrid",
          link1: "#",
          link2: "#"
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
  background: navy;
  color: white;
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
  border: 5px solid navy;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
#live{
  text-decoration: none;
}
</style>