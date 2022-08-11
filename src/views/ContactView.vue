<template>
  <div id="main">
    <div class="container">
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form action="https://formspree.io/f/mvoleqaw" class="contact-form">
          <h5 class="title">Contact us</h5>
          <p class="description">
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <div>
            <input
              type="text"
              class="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              class="form-control rounded border-white mb-3 form-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              class="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input class="bg-danger text-white" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 21px;
}
#main {
  background-image: url(https://i.postimg.cc/Hj1L1Wvb/wp9306523-football-pc-4k-wallpapers.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

.contact-form-wrapper {
  padding: 100px 0;
}

.contact-form {
  padding: 30px 40px;
  background-color: transparent;
  border-radius: 12px;
  max-width: 400px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: white;
  height: 50px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: white;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: black;
  font-weight: 500;
  opacity: 1;
}

.contact-form .form-control:-ms-input-placeholder {
  color: black;
  font-weight: 500;
}

.contact-form .form-control::-ms-input-placeholder {
  color: black;
  font-weight: 500;
}

.contact-form .form-control:focus {
  border-color: navy;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07), 0 0 8px navy;
}

.contact-form .title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.contact-form .description {
  color: white;
  font-size: 20px;
  text-align: center;
}

.contact-form .submit-button-wrapper {
  text-align: center;
}

.contact-form .submit-button-wrapper input {
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px 60px;
  font-weight: 500;
  letter-spacing: 2px;
}
</style>
