<template>
  <b-container>
    <b-row class="mt-5 mb-5 pt-3">
      <b-col cols="12" lg="8" sm="12" class="mx-xl-auto">
        <b-col>
          <h2>Get in touch</h2>
          <form class="mt-5" v-on:submit.prevent="sendmail">
            <div class="form-group">
              <label for="name" class="mb-3 font-weight-normal">Name(*)</label>
              <input
                type="text"
                class="form-control single-line mb-3 shadow-none"
                id="name"
                required
                v-model="form.name"
              />
            </div>
            <div class="form-group">
              <label for="email" class="mb-3 font-weight-normal">Email(*)</label>
              <input
                type="email"
                class="form-control single-line mb-3 shadow-none"
                id="email"
                required
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="phone" class="mb-3 font-weight-normal">Phone</label>
              <input
                type="tel"
                class="form-control single-line mb-3 shadow-none"
                id="phone"
                required
                v-model="form.phone"
              />
            </div>
            <div class="form-group">
              <label for="message" class="mb-3 font-weight-normal">Your Message</label>
              <textarea
                class="form-control single-line mb-5 shadow-none"
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
            <button
              data-v-16d095cd=""
              type="submit"
              class="btn lh-1 px-5 py-3 rounded-pill text-white mt-5 poppins_regular btn-info rounded-pill"
            >
              Send
            </button>
          </form>
        </b-col>
      </b-col>
      <b-col cols="12" xl="3" sm="12"></b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.custom-contact-form-bg {
  background: #99a9b721;
  border-style: double;
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

.single-line:focus {
  outline: 0;
  border-width: 0 0 2px;
  border-color: black;
  border-radius: 0px;
}
</style>
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
      axios.post('http://192.168.1.28:8000/api/user/contactquery',this.form)
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