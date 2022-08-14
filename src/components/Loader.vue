<template>
  <div v-if="small" class="smallLoader mx-auto">

  </div>
  <div v-else class="loader mx-auto">

  </div>
</template>

<script>
export default {
  props:['small']

}
</script>

<style scoped>
.loader{
  border:16px solid white;
  border-top: 16px solid blue;
  border-bottom: 16px solid red;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: rotate 2s linear infinite;
}

.smallLoader{
  border:5px solid white;
  border-top: 5px solid blue;
  border-bottom: 5px solid red;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: rotate 2s linear infinite;

}

@keyframes rotate {
  0% {transform:rotate(0deg) ;}
  100% {transform:rotate(360deg) ;}
}
</style>