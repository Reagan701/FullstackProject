<template>
  <div id="main" class="account">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        currentUser(){
            return this.$store.state.currentUser;
        }
    },
    mounted(){
        this.$store.dispatch('getUserInfo')
    }
}
</script>

<style scoped>

    #userIcon{
        background-color: grey;
        border-radius: 50%;
        padding: 40px 50px;
        font-size: 12rem;
    }

</style>