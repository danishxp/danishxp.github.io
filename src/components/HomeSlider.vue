<template>
  <div class="hello">
    <carouselOfHomeSlider></carouselOfHomeSlider>
    <!-- <b-jumbotron class="jumbotron-bg py-6 px-0"> -->

      <b-container class="HomeForm">
        <!-- <b-row class="py-5">
        <b-col cols="6">
          <h1 class="display-4 text-uppercase poppins_bold">Find the best hotel to stress release</h1>
          <p class="inter_regular fs-4 text-grey mt-4">Looking for a place to escape the stress of daily life? Our top-rated hotels and resorts offer the perfect retreat for relaxation and rejuvenation. Unwind in luxurious surroundings and find serenity at the best hotels for stress release.</p>
        <b-button pill variant="info" class="lh-1 px-5 py-3 rounded-pill text-white mt-4 inter_regular">Exclusive Hotels</b-button>
      </b-col>
      </b-row> -->

      <HomeForm></HomeForm>
    </b-container>

  <!-- </b-jumbotron> -->
  </div>
</template>
<style scoped lang="scss">
.hello{
  .jumbotron{
    background: url("../assets/img/home.png") no-repeat center center; 
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
  }

}
.hello .carousel::before {
    content: '';
    width: 80%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4990371148459384) 50%, rgba(255,255,255,0) 100%);
    z-index: 1;
}
.hello .carousel::after {
    content: '';
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgb(255 255 255 / 0) 0%, rgba(255,255,255,0.4990371148459384) 50%, rgba(255,255,255,1) 100%);
    z-index: 1;
}
.hello .carousel .container {
    position: relative;
    z-index: 2;
}
</style>
<script>
  import HomeForm from '@/components/HomeForm.vue'
  import carouselOfHomeSlider from '@/components/carouselOfHomeSlider.vue'


  export default {
    components: {
      HomeForm,
      carouselOfHomeSlider
    },
    props: {
      title: String,
      desc: String,
    }
  }
</script>
