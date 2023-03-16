<template>
  <div class="testimonal_bg py-6 px-0">
    <div class="container">
      <div class="row mb-5 mt-xl-5 mt-0 py-5">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-xl-4 align-self-center">
              <h2 class="text-dark fs-heading text-center text-xl-left">Every stay creates its own unique tale</h2>
              <div
                class="
                  custom-carousel-controls
                  d-flex
                  align-items-center
                  justify-content-between
                  py-3
                "
              >
                <span class="filtered-ic" @click="prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    width="15"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 443.52 443.52"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <path
                      d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8

c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712

L143.492,221.863z"
                      fill="#373737"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </span>
                <h5 class="carousel-counter mb-0">0{{ slide + 1 }}</h5>
                <span class="filtered-ic" @click="next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    width="14"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 512.002 512.002"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <path
                      d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105

L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795

l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"
                      fill="#313131"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div class="col-xl-8">
              <b-carousel
                id="testimonial-carousel"
                v-model="slide"
                :interval="3000"
                ref="myCarousel"
              >
                <b-carousel-slide
                  v-for="(testimonial, index) in testimonials"
                  :key="index"
                  class="slide-bg"
                >
                  <div class="p-3 text-left testimonal_test_slide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      viewBox="0 0 508.044 508.044"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                      class="Quotation"
                    >
                      <path
                        d="M0.108,352.536c0,66.794,54.144,120.938,120.937,120.938c66.794,0,120.938-54.144,120.938-120.938
        s-54.144-120.937-120.938-120.937c-13.727,0-26.867,2.393-39.168,6.61C109.093,82.118,230.814-18.543,117.979,64.303
        C-7.138,156.17-0.026,348.84,0.114,352.371C0.114,352.426,0.108,352.475,0.108,352.536z"
                        fill="#2d4356"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M266.169,352.536c0,66.794,54.144,120.938,120.938,120.938s120.938-54.144,120.938-120.938S453.9,231.599,387.106,231.599
        c-13.728,0-26.867,2.393-39.168,6.61C375.154,82.118,496.875-18.543,384.04,64.303C258.923,156.17,266.034,348.84,266.175,352.371
        C266.175,352.426,266.169,352.475,266.169,352.536z"
                        fill="#2d4356"
                        data-original="#000000"
                        class=""
                      ></path>
                    </svg>
                    <p class="text-dark">{{ testimonial.quote }}</p>
                    <h5 class="heading-font-family font-weight-bold text-dark">
                      {{ testimonial.name }}
                    </h5>
                  </div>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      testimonials: [
        {
          name: "John Doe",
          quote:
            "I had a wonderful stay and was blown away by the thoughtful design and functionality of the hotel. Can’t wait to check out again this hotel in the future.",
        },
        {
          name: "Jane Smith",
          quote:
            "I had a wonderful stay and was blown away by the thoughtful design and functionality of the hotel. Can’t wait to check out again this hotel in the future.",
        },
        {
          name: "Bob Johnson",
          quote:
            "I had a wonderful stay and was blown away by the thoughtful design and functionality of the hotel. Can’t wait to check out again this hotel in the future.",
        },
      ],
    };
  },
  methods: {
    onSlideEnd(slide) {
      this.slide = slide;
    },
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
  },
};
</script>

<style scoped>
.filtered-ic {
  filter: brightness(0);
  cursor: pointer;
}

.slide-bg {
  height: 286px;
}

#testimonial-carousel {
  background-color: #fefaf7;
  border-radius: 6px 80px 6px 6px;
}

.testimonal_test_slide {
  position: relative;
}

svg.Quotation {
  position: absolute;
  top: -55px;
}

.custom-carousel-controls {
  margin-top: 40px;
  width: 130px;
}

.custom-carousel-controls svg {
  margin: 0;
}

.testimonal_bg {
  background-image: url(../assets/img/Frame1.jpg);
  background-repeat: no-repeat;
}
@media only screen and (max-width: 1399px){
#testimonial-carousel >>> .carousel-caption {
  right: 20px;
  left: 20px;
}
}
@media only screen and (max-width: 1199px){
.custom-carousel-controls{
  margin: 20px auto;
}
}
</style>
