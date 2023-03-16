<template>
    <div class="search_main mt-5">
        <!-- <HomeForm formContClass="listing_form"></HomeForm> -->
        <HotelList></HotelList>
    </div>
</template>

<script>
// import Banner from '@/components/Banner.vue';
// import HomeForm from '@/components/HomeForm.vue'
import HotelList from '@/components/HotelList.vue'

export default {
    components: {
        // HomeForm,
        HotelList
    },
    // props: {
    //     BannerTitle: 'Search'
    // }
  }
</script>