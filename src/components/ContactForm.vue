<template>
  <b-container>
    <b-row class="my-5 pb-3">
      <b-col md="7" sm="12">
          <h2 class="fs-heading">Get in touch</h2>
          <form class="mt-5" v-on:submit.prevent="sendmail">
            <div class="form-group">
              <label for="name" class="mb-3 font-weight-normal">Name(*)</label>
              <input
                type="text"
                class="form-control single-line mb-4 shadow-none"
                id="name"
                required
                v-model="form.name"
              />
            </div>
            <div class="form-group">
              <label for="email" class="mb-3 font-weight-normal">Email(*)</label>
              <input
                type="email"
                class="form-control single-line mb-4 shadow-none"
                id="email"
                required
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="phone" class="mb-3 font-weight-normal">Phone</label>
              <input
                type="tel"
                class="form-control single-line mb-4"
                id="phone"
                required
                v-model="form.phone"
              />
            </div>
            <div class="form-group">
              <label for="message" class="mb-3 font-weight-normal">Your Message</label>
              <textarea
                class="form-control single-line mt-3 mb-5 shadow-none"
                id="message"
                required
                v-model="form.message"
              ></textarea>
            </div>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
              
            ><span class="font-weight-normal">
              I consent to Hoteller Hotel collecting my details through this
              form.</span>
            </b-form-checkbox>
            <div class="custom-text-center">
            <button
              data-v-16d095cd=""
              type="submit"
              class=" btn lh-1 px-5 py-3 rounded-pill text-white mt-4 mt-sm-5 poppins_regular btn-info rounded-pill mb-5 mb-md-0 shadow"
            >
              Submit
            </button>
          </div>
          </form>
        
      </b-col>
      <b-col md="5" sm="12">
        <b-col
          class="text-center p-2 custom-contact-form-bg custom-contact-form-bg pt-5 pb-5"
        >
          <h2 class="">Hotel Chapter</h2>
          <p>3660 Midland Ave Suite 101, Toronto, <br/>ON M1V 0B8, Canada </p>
          <br />
          <p class="mb-0"><strong>Tel:</strong> 09876543121</p>
          <p class="mb-0"><strong>Fax:</strong> 09876543121</p>
          <p class="mb-0"><strong>Email:</strong> info@thechapterhotel.com</p>
        </b-col>
        <b-col class="mt-5 text-center" md="12" sm="12">
          <h5>Stay With in Touch</h5>
          <ul class="d-flex list-unstyled justify-content-center">
            <a href="">
              <li class="">
                <img
                  src="../assets/img/facebook.png"
                  alt=""
                  width="55"
                  height="55"
                  class="mt-0 mr-1 ml-1"
                />
              </li>
            </a>
            <a href="">
              <li class="">
                <img
                  src="../assets/img/trip.png"
                  alt=""
                  width="40"
                  height="40"
                  class="mt-2 mr-1 ml-1"
                />
              </li>
            </a>
            <a href="">
              <li>
                <img
                  src="../assets/img/instagram.png"
                  alt=""
                  width="50"
                  height="50"
                  class="mr-1 ml-1 instagram-cutom-style"
                />
              </li>
            </a>
            <a href="">
              <li>
                <img
                  src="../assets/img/youtube.png"
                  alt=""
                  width="40"
                  height="40"
                  class="mt-2 mr-1 ml-1"
                />
              </li>
            </a>
          </ul>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';

  export default ({
    data(){
      return{
        form:{},
      }
    }, 
    methods:{
      sendmail(){
        axios.post('http://192.168.1.28:8000/api/user/contactus',this.form)
        .then(response => {
         console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      console.log(this.form);
      },
    }
  })
</script>

<style scoped>
.custom-contact-form-bg {
  /* background: #99a9b721; */
  border: 20px double #ffffff;
  background: #eaece2;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.single-line {
  outline: 0;
  border-width: 0 0 1px;
  border-color: black;
  border-radius: 0px;
}

.single-line:hover {
  outline: 0;
  border-width: 0 0 2px;
  border-color: black;
  border-radius: 0px;
}

.instagram-cutom-style {
  margin-top: 2px;
}


@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) {
  .heading-small{
    font-size: 28px !important;
  }

  .custom-text-center{
  text-align: left !important;
}
}

@media only screen 
and (min-width : 1024px) 
and (max-width : 1440px) 
{
  .custom-text-center{
  text-align: left !important;
}
}
@media only screen 
and (max-width: 2560px)
{
  .custom-text-center{
  text-align: left !important;
}
}
</style>
