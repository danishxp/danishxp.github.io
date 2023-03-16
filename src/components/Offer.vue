<template>
  <div class="hm-offer-box py-5">
    <b-container fluid>
      <b-row class="pt-4">

        <b-col cols="12">

        <h2 class="text-dark text-center fs-heading">A Visual Journey</h2>
          <p class="text-center text-dark mt-3">Take a tour through the gallery of The Chapter Hotels</p>
        <carousel-3d :count="slides.length" height="500" width="600" class="mt-5">
          <slide v-for="(slide, i) in slides" :index="i" :key="i">
            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }" >
              <img
                :data-index="index"
                :class="{
                  current: isCurrent,
                  onLeft: leftIndex >= 0,
                  onRight: rightIndex >= 0,
                }"
                :src="slide.src"
              />
            </template>
          </slide>
        </carousel-3d>
      </b-col>
      </b-row>
      </b-container>

    
  </div>
</template>

<style scoped>
.hm-offer-box{
  /* background-image: url('../../public/images/hm-offer-bg.jpg');
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat; */
  background: #fefaf7;
  background: linear-gradient(180deg, #fefaf7 0%, #fffbf8 35%, rgba(255,255,255,1) 100%);
}
.carousel-3d-slide{
  border-radius: 20px;
  border: none;
}
</style>

<script>
// import Imgone from "../assets/img/hotel-3.jpg"
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  data() {
    return {
      slides: [
        {
          src: "/images/hotel-1.jpg",
        },
        {
          src: "/images/hotel-2.jpg",
        },
        {
          src: "/images/hotel-3.jpg",
        },
        {
          src: "/images/hotel-4.jpg",
        },
        {
          src: "/images/hotel-2.jpg",
        },
      ],
      index: 0,
      isCurrent: 0,
      leftIndex: 0,
      rightIndex: 4,
      slideWidth:500,
      slideHeight:500,

    };
  },
  components: {
    Carousel3d,
    Slide,
  },
};

</script>
