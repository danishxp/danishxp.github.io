<template>
  <section class="grey">
    <b-container>
      <b-row class="justify-content-center custom-padding-top pb-5">
        <b-col md="4" class="p-3" sm="6">
          <LottieAnimation
            path="../../images/lottie/json/success.json"
            :width="80"
            :height="80"
            class="m-0 mb-3 zero-auto-bulp"
          ></LottieAnimation>
          <h3 class="text-center-bulp">Modernist Architecture</h3>
          <p class="mt-4 text-center-bulp">
            A luxury hotel group curated with modern-day British architecture and blended with the highest level of comfort, accompanied with fine dinings, bars, spa, and pools.
          </p>
        </b-col>
        <b-col class="p-3" md="4" sm="6">
          <LottieAnimation
            path="../../images/lottie/json/night.json"
            :width="80"
            :height="80"
            class="m-0 mb-3 zero-auto-bulp"
          ></LottieAnimation>
          <h3 class="text-center-bulp">Outstanding Amenities</h3>
          <p class="mt-4 text-center-bulp">
            Experience delight in every stay with world-class amenities in all domains. Our professional staff will always be on hand to help in any way they can.
          </p>
        </b-col>
        <b-col class="p-3" md="4" sm="6" >
          <LottieAnimation
            path="../../images/lottie/json/location.json"
            :width="80"
            :height="80"
            class="m-0 mb-3 zero-auto-bulp"
          ></LottieAnimation>
          <h3 class="text-center-bulp">Best Location</h3>
          <p class="mt-4 text-center-bulp">
            Modern and lavish hotels located in the heart of central London, The Chapter Hotels offer an incredible 360° view of the city. Enjoy stunning architecture of the city in full swing.
          </p>
        </b-col>
      <!-- </b-row> -->
      <!-- <b-row class="justify-content-center pb-5 pt-5"> -->
        <b-col class="p-3" md="4" sm="6">
          <LottieAnimation
            path="../../images/lottie/json/cancel.json"
            :width="80"
            :height="80"
            class="m-0 mb-3 zero-auto-bulp"
          ></LottieAnimation>
          <h3 class="text-center-bulp">Lavish Stay</h3>
          <p class="mt-4 text-center-bulp">
            Relax in our stylish rooms and suites to elevate your living with well-thought and functional design. Make yourself feel at home with cosy bed linens, modern-day British bars, and grills.
          </p>
        </b-col>
        <b-col class="p-3" md="4" sm="6">
          <LottieAnimation
            path="../../images/lottie/json/payment.json"
            :width="80"
            :height="80"
            class="m-0 mb-3 zero-auto-bulp"
          ></LottieAnimation>
          <h3 class="text-center-bulp">Home to Harmony</h3>
          <p class="mt-4 text-center-bulp">
            The Chapter Hotels offer a perfect combination of modern culture, creativity, cuisine, comfort, and interior - a place where you will find everything synced in a perfect harmony.
          </p>
        </b-col>
        <b-col class="p-3" md="4" sm="6">
          <LottieAnimation
            path="../../images/lottie/json/gift.json"
            :width="80"
            :height="80"
            class="m-0 mb-3 zero-auto-bulp"
          ></LottieAnimation>
          <h3 class="text-center-bulp">24/7 Customer Support</h3>
          <p class="mt-4 text-center-bulp">
            Get one-tap access to all your needs with our 24/7 customer support and stay updated with the latest offers (free parking, free checkout, free breakfast, and other perks).
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style scoped>
.grey {
  background: #f6f6f6;
}

.custom-padding-top {
  padding-top: 330px;
}
@media only screen and (max-width:767px){
.custom-padding-top[data-v-f3becc72] {
  padding-top: 300px;
}
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
/* Styles */
.zero-auto-bulp{
  margin: 0 auto !important;
}
.text-center-bulp{
  text-align: center;
}

}


</style>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  components: {
    LottieAnimation,
  },
  data() {
    return {};
  },
};
</script>
