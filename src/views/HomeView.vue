<template>
  <div id="main">
    <div class="container">
      <img id="logo" src="https://i.postimg.cc/XqG2mcZ2/Logo2-removebg-preview.png" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#main {
  /* background-image: url(https://i.postimg.cc/Hj1L1Wvb/wp9306523-football-pc-4k-wallpapers.jpg); */
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  height:100vh;
  color: white;
}

#logo{
  padding:75px 0;
  width:500px;
}
</style>
