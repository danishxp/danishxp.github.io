<template>
  <section class="aboutus-img py-6">
  <b-container fluid class="">
    <b-row>
      <b-col cols="12" class="py-4" sm="12" md="12">
        <h1 class="text-center fs-1 mb-0 py-3 text-white"><span class="">{{title}}</span></h1>
      </b-col>
    </b-row>
  </b-container>
</section>
</template>

<script>
export default {
  props:{
    title:String
  }
}
</script>

<style scoped>
.aboutus-img {
  background: url("../assets/img/about-banner.jpg") no-repeat center bottom/cover;

}

@media only screen
and (min-device-width : 320px) 
and (max-device-width : 480px) {
.custom-media-query{
width: 100%;

}

}

</style>
