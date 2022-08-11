<template>
  <div id="main" class="container">
    <div class="row">
        <div class="col">
            <form action="https://formspree.io/f/mvoleqaw" method="POST">
        <div>
        <img
          src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png"
          alt="icon"
        />
      </div>
      <input type="text" placeholder="Name" name="name" required />
      <input type="text" placeholder="Email address (required)" required />
      <input type="text" placeholder="Topic (required)" required />
      <textarea placeholder="Subject (required)" required></textarea>
      <input type="submit" value="SEND" />
    </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main {
  background-image: url(https://i.postimg.cc/Hj1L1Wvb/wp9306523-football-pc-4k-wallpapers.jpg);
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  height:100%;
  color: white;
}

form {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 60px;
  margin: 12px auto;
  border: 2px solid white;
  border-radius: 20px;
  position: relative;
  z-index: 1;
}

form > div {
  position: absolute;
  top: 0;
  left: 50%;
  padding: 0 20px;
  transform: translate(-50%, -50%);
  background-color: #00a5ff;
  border: 2px solid white;
  border-radius: 20px;
  text-align: center;
}

form > div > img {
  filter: invert(1);
  width: 100px;
}

form > input,
form > textarea {
  padding: 12px;
  margin: 12px auto;
  border: 1px solid white;
  color: #00a5ff;
  background-color: white;
  border-radius: 4px;
  display: block;
  width: 70vw;
}

form > textarea {
  height: 100px;
  resize: none;
}

form > input[type="submit"] {
  max-width: 20vw;
  padding-left: 1%;
  padding-right: 1%;
  cursor: pointer;
  transition: 0.35s;
}

form > input[type="submit"]:hover {
  background-color: #00a5ff;
  color: white;
}
</style>
