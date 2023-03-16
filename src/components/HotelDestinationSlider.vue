<template>
  <b-container fluid>
  <div v-if="items">
    
    <CoolLightBox 
      :items="items" 
      :index="index"
      loop
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image" v-for="(image, imageIndex) in items" :key="imageIndex" @click="setIndex(imageIndex)"  :style="{ backgroundImage: 'url(' + image.src + ')' }"
      ></div>
    </div>
  </div>
</b-container>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  name: "app",
  data: function () {
    return {
      items: [
        {
          src: 'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/16ac6961-f5b7-44fa-bacf-96f8c2d0c0c2?im_w=1200',
        },
        {
          src: 'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/be62ef6d-2da9-41a3-a3bf-57a3fd9d2d56?im_w=1440',
        },
        {
          src: 'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/0de79180-9da7-4dd0-b01f-030ac9aa4078?im_w=1440',
        },
        {
          src: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fa0.muscache.com%2Fim%2Fpictures%2Fmonet%2FLuxury-54351340%2Foriginal%2F16ac6961-f5b7-44fa-bacf-96f8c2d0c0c2%3Fim_w%3D1200',
        },
        {
          src:'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fa0.muscache.com%2Fim%2Fpictures%2Fmonet%2FLuxury-54351340%2Foriginal%2Fbe62ef6d-2da9-41a3-a3bf-57a3fd9d2d56%3Fim_w%3D1440',
        },
        {
          src:'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fa0.muscache.com%2Fim%2Fpictures%2Fmonet%2FLuxury-54351340%2Foriginal%2Fbe62ef6d-2da9-41a3-a3bf-57a3fd9d2d56%3Fim_w%3D1440',
        },
        {
          src: 'https://a0.muscache.com/im/pictures/monet/Luxury-54351340/original/0de79180-9da7-4dd0-b01f-030ac9aa4078?im_w=1440',
        },
      ],
      index: null,
      slide: null
    };
  },
  components: {
    CoolLightBox
  },
  methods: {
    setIndex(index) {
      this.index = index
    }
  }
};
</script>
<style scoped>
.images-wrapper {
    display: grid;
    grid-template-columns: auto auto auto auto auto; 
    gap: 15px;
}

.images-wrapper .image:first-child{
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 4;
    height: 460px;
}
.images-wrapper .image{
  /* height:400px; */
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.images-wrapper .image:nth-child(n+6) {
    display: none;
}
</style>