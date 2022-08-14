<template>
  <div id="main" class="container d-flex justify-content-center align-items-center flex-column">
    <div class="contact-form-wrapper d-flex justify-content-center">
      <form
        action="https://formspree.io/f/mvoleqaw"
        class="contact-form card shadow"
      >
        <h5 class="title">Contact us</h5>
        <p class="description">
          Feel free to contact us if you need any assistance, any help or
          another question.
        </p>
        <div>
          <label for="Name">Name</label>
          <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="" required
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="" required
          />
        </div>
        <div>
          <label for="Message">Leave Us A Message</label>
          <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="" required
          ></textarea>
        </div>
        <div class="submit-button-wrapper">
          <input class="btn-grad" type="submit" value="Send" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

* {
  font-family: League Gothic, sans-serif;
  font-size: 21px;
}
#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

.contact-form-wrapper {
  padding: 20px 0;
}

.contact-form {
  padding: 30px 40px;
  border-radius: 12px;
  max-width: 400px;
  background-color: transparent;
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
