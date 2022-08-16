<template>
  <Navbar />
  <router-view />
  <FooterAll />
</template>

<script>
import Navbar from './components/Navbar.vue';
import FooterAll from "./components/FooterAll.vue";

export default {
  components: { FooterAll, Navbar }
};
</script>

<style>
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
  box-shadow: 0 0 14px #eee;
  border-radius: 10px;
  font-size: 12px;
}

#loadingText{
  margin-top:1px;
  padding-left:5px;
}

.form-check-input:checked{
  background-color:red !important;
  border-color:red !important;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
  overflow-x: hidden;
}

.offcanvas{
  width:700px !important;
}

.card {
  border: none;
}

#basket {
  text-decoration: none;
}

#inline {
  display: inline-block;
}

#app {
  font-size: 21px;
  text-align: center;
  color: red;
  background-image: linear-gradient(
    #000040,
    #00004e
  );
}

.table-dark{
  --bs-table-bg: transparent !important;
  --bs-table-striped-bg: transparent !important;
  --bs-table-border-color: red !important;
  --bs-table-hover-bg: #ff000057 !important;
  --bs-table-active-bg: transparent !important;
  box-shadow: 1px 6px 10px 1px black !important;
}

th{
  font-size: 1rem;
}

.offcanvas{
  width: 600px !important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: white;
  padding-top:117px !important;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
