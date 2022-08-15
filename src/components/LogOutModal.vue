<template>
  <div class="modal fade" style="color:black !important;" id="userLogOut" tabindex="-1" aria-labelledby="UserLogOutLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="UserLogOutLabel">Log Out</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure?
            </div>
            <div class="modal-footer">
                <button @click="logOut" data-bs-dismiss="modal" class="btn btn-danger">Log Out</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        logOut(){
            this.$store.commit('reset');
        }
    }
}
</script>

<style scoped>

</style>