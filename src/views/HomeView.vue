<template>
  <div class="page-home">
  <!-- <carouselOfHomeSlider></carouselOfHomeSlider> -->

    <!-- <HomeSlider title="Welcome to Your Vue.js App" desc="Welcome to Your Vue.js App"/> -->
    <carouselOfHomeSlider></carouselOfHomeSlider>
    <!-- <HomeForm formContClass="HomeForm"></HomeForm> -->
    <ExclusiveHotel></ExclusiveHotel>
    <OfferingSeries></OfferingSeries>
    <HotelAmenities></HotelAmenities>
    <Offer></Offer>
    <Testimonals></Testimonals>
    <footer></footer>
  </div>

</template>

<script>
// @ is an alias to /src
// import HomeSlider from '@/components/HomeSlider.vue'
// import HomeForm from '@/components/HomeForm.vue'
import carouselOfHomeSlider from '@/components/carouselOfHomeSlider.vue'
import ExclusiveHotel from '@/components/ExclusiveHotel.vue'
import OfferingSeries from '@/components/OfferingSeries.vue'
import HotelAmenities from '@/components/HotelAmenities.vue'
import Offer from '@/components/Offer.vue'
import Testimonals from '@/components/Testimonals.vue'
// import carouselOfHomeSlider from '@/components/carouselOfHomeSlider.vue'



export default {
  name: 'HomeView',
  components: {
    // carouselOfHomeSlider,
    // HomeSlider,
    carouselOfHomeSlider,
    // HomeForm,
    ExclusiveHotel,
    OfferingSeries,
    HotelAmenities,
    Offer,
    Testimonals
  }
}
</script>
