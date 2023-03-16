<template>
    <div class="hotel-destination-page">
    <HotelDestinationSlider></HotelDestinationSlider>
    <HotelDestinationBanner></HotelDestinationBanner>
    <!-- <HotelDestinationAvailability></HotelDestinationAvailability> -->
    <SingleHotelFilter></SingleHotelFilter>
    <HotelDestinationFilter></HotelDestinationFilter>
    <HoteldestinationRoom></HoteldestinationRoom>
    <HoteldestinationRoom></HoteldestinationRoom>
    <HoteldestinationRoom></HoteldestinationRoom>
    <HotelDestinationButton></HotelDestinationButton>
    <HotelDestinationEminities></HotelDestinationEminities>
    <HotelDestinationMap></HotelDestinationMap>
    <HotelDestinationBookingPolicies></HotelDestinationBookingPolicies>
   </div>
</template>

  <script>
// Note: Vue automatically prefixes the directive name with 'v-'
  // import singleGallery from '@/components/singleGallery.vue';
  import HotelDestinationSlider from '@/components/HotelDestinationSlider.vue';
  import HotelDestinationBanner from '@/components/HotelDestinationBanner.vue';
  import SingleHotelFilter from '@/components/SingleHotelFilter.vue';
  import HotelDestinationFilter from '@/components/HotelDestinationFilter.vue';
  import HoteldestinationRoom from '@/components/HotelDestinationRoom.vue';
  import HotelDestinationButton from '@/components/HotelDestinationButton.vue';
  import HotelDestinationEminities from '@/components/HotelDestinationEminities.vue';
  import HotelDestinationAvailability from '@/components/HotelDestinationAvailability.vue';
  import HotelDestinationMap from '@/components/HotelDestinationMap.vue';
  import HotelDestinationBookingPolicies from '@/components/HotelDestinationBookingPolicies.vue';
  export default {
    name: 'hotel-destination-page',
    components: {
      HotelDestinationSlider,
      HotelDestinationBanner,
      HotelDestinationFilter,
      SingleHotelFilter,
      HoteldestinationRoom,
      HotelDestinationButton,
      HotelDestinationEminities,
      HotelDestinationAvailability,
      HotelDestinationMap,
      HotelDestinationBookingPolicies,
    },
    // code

    
    // code
  }

  
  </script>