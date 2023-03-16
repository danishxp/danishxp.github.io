<template>
  <b-container class="contact-address-box">
    <b-row class="mt-5 mb-5 gap-4 px-sm-0 px-4 py-4">
      <!-- <b-col class="d-flex justify-content-between mt-5 mb-5"> -->
        <b-col class="p-md-5 p-3 text-center shadow border-custom">
          <LottieAnimation
                    path="../../images/lottie/json/location-contact.json"
                    :width="160"
                    :height="80"
          ></LottieAnimation>
          <h2>Our Address</h2>
          <!-- <div class="site_sep sep-center"></div> -->
          <p class="pt-3">
            3660 Midland Ave Suite 101, Toronto, ON M1V 0B8, Canada
          </p>
        </b-col>
        <b-col class="p-md-5 p-3 text-center shadow border-custom">
          <LottieAnimation
                    path="../../images/lottie/json/email-contact.json"
                    :width="160"
                    :height="80"
          ></LottieAnimation>
          <h2>Our Email</h2>
          <!-- <div class="site_sep sep-center"></div> -->
          <p class="pt-3">
            info@thechapterhotel.com<br/>
            support@thechapterhotel.com
          </p>
        </b-col>
        <b-col class="p-md-5 p-3 text-center shadow border-custom">
          <LottieAnimation
                    path="../../images/lottie/json/earphone-telephone-outline.json"
                    :width="160"
                    :height="80"
          ></LottieAnimation>
          <h2>Call Now</h2>
          <!-- <div class="site_sep sep-center"></div> -->
          <p class="pt-3">
            USA: +31 555 777 83 <br/>
            FAX: +31 555 777 83
          </p>
        </b-col>
      <!-- </b-col> -->
    </b-row>
  </b-container>
</template>
<style>
.three-column-silver{
  background: #EAECE2;
}
.border-custom{
  border-radius:20px;
}
.custom-width{
width: 530px;
}
@media only screen 
and (min-device-width : 535px) 
and (max-device-width : 767px) {
.contact-address-box .col {
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
}
</style>
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
      LottieAnimation
  },
  data() {
    return {
    }
  }
};
</script>