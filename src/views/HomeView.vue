<template>
  <div id="main">
    <div class="container-fluid">
      <img class="img-fluid"
        id="logo"
        src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
#main {
  /* background-image: linear-gradient(
    to right,
    #000046 0%,
    #1cb5e0 51%,
    #000046 100%
  ); */
  background-image: url(../assets/landing.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

#logo {
  padding: 75px 0;
  width: 500px;
}
</style>
