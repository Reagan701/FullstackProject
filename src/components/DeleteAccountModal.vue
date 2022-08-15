<template>
  <div class="modal fade" id="userDelete" tabindex="-1" aria-labelledby="UserDeleteLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="UserDeleteLabel">Delete Your Account</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure?
            </div>
            <div class="modal-footer">
                <button @click="deleteAccount" data-bs-dismiss="modal" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['id'],
    methods:{
        deleteAccount(){
            this.$store.dispatch('deleteAccount',this.id)
        }
    }
}
</script>

<style scoped>

</style>