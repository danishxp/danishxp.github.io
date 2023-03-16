<template>
  <div class="about-page">
  <Banner title="About The Chapter Hotels"></Banner>
  <AboutContent></AboutContent>
  <Bulp></Bulp>
  <SidebySide></SidebySide>
  <BestHotel></BestHotel> 
</div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import AboutContent from '@/components/AboutContent.vue';
import Bulp from '@/components/Bulp.vue';
import SidebySide from '@/components/SidebySide.vue'
import BestHotel from '@/components/BestHotel.vue'

export default {
  name: 'About',
  components: {
    Banner,
    AboutContent,
    Bulp,
    SidebySide,
    BestHotel,
  
  }
}
</script>

<style>

</style>