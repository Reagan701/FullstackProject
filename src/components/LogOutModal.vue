<template>
  <div class="modal fade" style="color:white !important;" id="userLogout" tabindex="-1" aria-labelledby="UserLogOutLabel" aria-hidden="true">
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
                <button @click="logOut" data-bs-dismiss="modal" class="btn btn-grad">Log Out</button>
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
.modal-content{
    background-image: linear-gradient(
    to right,
    #000040,
    #00004e
  );
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
</style>