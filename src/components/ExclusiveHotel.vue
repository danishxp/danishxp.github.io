<template>

<b-container class="exclusive_hotels pt-5">
    <b-row class="mb-4">
        <b-col class=" text-center">
            <h2 class="text-dark fs-heading">The Exclusive Chapter Hotels</h2>
            <p class="inter_regular text-dark mt-3">Set in the heart of London, The Chapter Hotels are known and loved for their charm, four splendour locations, and seamless services.</p>
        </b-col>
    </b-row>
    <b-row id="second_row m-5">
        <b-col lg="3" sm="6" class="skew mb-lg-0 mb-3">
            <a target="_blank" href="https://partners.eviivo.com/thechapterhotels/p/united-kingdom/greater-london/london/the-chapter-mayfair-suites/thchptrmyfrstsw1j#full-details" class="d-block text-decoration-none">
                <div class="shadow_on_img">
                    <h3 class="p_hotel text-white">Mayfair Suites</h3>
                    <p>On the present site of our hotel feet in the water, there used to be an establishment.</p>
                </div>
                <img src="../assets/img/hotel-1.jpg" width="435" class="skew_img img-fluid">
                <!-- <canvas id="hotel_1"></canvas> -->
                <!-- <transition>
                        <img v-bind:src="image" v-on:mouseover="image = image2" v-on:mouseout="image = image1" class="skew_img img-fluid" />
                    </transition> -->
                <!-- <canvas ref="canvas" width="200" height="200" v-on:mouseover="startAnimation" v-on:mouseout="stopAnimation"></canvas> -->
            </a>
        </b-col>
        <b-col lg="3" sm="6" class="skew mb-lg-0 mb-3">
            <a href="https://partners.eviivo.com/thechapterhotels/p/united-kingdom/greater-london/london/the-chapter-hotels-mayfair-residences/thchptrhtlsmyfrrsdncsw1j#full-details" class="d-block text-decoration-none" target="_blank">
                <div class="shadow_on_img">
                    <h3 class="p_hotel text-white">Mayfair Residences</h3>
                    <p>On the present site of our hotel feet in the water, there used to be an establishment.</p>
                </div>
                <img src="../assets/img/hotel-2.jpg" width="435" class="skew_img img-fluid">
                <!-- <canvas id="hotel_2"></canvas> -->
            </a>
        </b-col>
        <b-col lg="3" sm="6" class="skew mb-lg-0 mb-3">
            <a href="https://partners.eviivo.com/thechapterhotels/p/united-kingdom/greater-london/london/the-chapter-hotels-griffin-house/thchptrhtlsgrffnhsw2#full-details" class="d-block text-decoration-none" target="_blank">
                <div class="shadow_on_img">
                    <h3 class="p_hotel text-white">Griffin House</h3>
                    <p>On the present site of our hotel feet in the water, there used to be an establishment.</p>
                    <!-- <a href="#">read more <i class="fa fa-right-arrow"></i></a> -->
                </div>
                <img src="../assets/img/hotel-3.jpg" width="435" class="skew_img img-fluid">
                <!-- <canvas id="hotel_3"></canvas> -->
            </a>
        </b-col>
        <b-col lg="3" sm="6" class="skew mb-lg-0 mb-3">
            <a href="https://partners.eviivo.com/thechapterhotels/p/united-kingdom/greater-london/london/the-chapter-hotels-hyde-park/thchptrhtlshydprkw2#full-details" class="d-block text-decoration-none" target="_blank">
                <div class="shadow_on_img">
                    <h3 class="p_hotel text-white">Hyde Park</h3>
                    <p>On the present site of our hotel feet in the water, there used to be an establishment.</p>
                </div>
                <img src="../assets/img/hotel-4.jpg" width="435" class="skew_img img-fluid">
                <!-- <canvas id="hotel_4"></canvas> -->
            </a>
        </b-col>

    </b-row>

</b-container>
</template>

<script>
/*
export default {
  data() {
    return {
      image1: '/path/to/image1.jpg',
      image2: '/path/to/image2.jpg',`
      currentImage: 1,
      animationFrame: null
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    const ctx = canvas.getContext('2d')
    let image = new Image()
    image.src = this.image1

    image.onload = () => {
      ctx.drawImage(image, 0, 0)
    }

    const updateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (this.currentImage === 1) {
        image.src = this.image2
        this.currentImage = 2
      } else {
        image.src = this.image1
        this.currentImage = 1
      }

      requestAnimationFrame(updateCanvas)
    }

    updateCanvas()
  },
  methods: {
    startAnimation() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      let image = new Image()
      image.src = this.image1

      image.onload = () => {
        ctx.drawImage(image, 0, 0)
      }

      const updateCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (this.currentImage === 1) {
          image.src = this.image2
          this.currentImage = 2
        } else {
          image.src = this.image1
          this.currentImage = 1
        }

        this.animationFrame = requestAnimationFrame(updateCanvas)
    },
    stopAnimation() {
      window.cancelAnimationFrame(this.animationFrame)
    }
  }
}
*/
</script>

<style scoped>
.exclusive_hotels .skew {
    overflow: hidden;
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
}

.exclusive_hotels .skew img {
    object-fit: cover;
    height: 450px;
    border-radius: 15px;
    transition: all 0.3s ease;
}

.exclusive_hotels .skew>a::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: calc(100% - 20px);
    margin: 0 auto;
    padding: 0 15px;
    height: 110px;
    display: flex;
    align-items: center;
    background-image: linear-gradient(180deg, #FFFFFF00 0%, #031B18 100%);
    border-radius: 0 0 15px 15px;
    opacity: .6;
    -webkit-transition: all 550ms ease;
    transition: all 550ms ease;
}

.shadow_on_img {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    width: calc(100% - 40px);
    margin: 0 auto;
    padding: 0 10px;
    transition: 0.2s transform;
}

.shadow_on_img h3 {
    font-weight: 400;
    font-size: 24px;
    text-shadow: 0 0 10px black;
    transition: opacity .65s cubic-bezier(.05, .2, .1, 1), transform .65s cubic-bezier(.05, .2, .1, 1);
    transform: translateY(0px);
}

.exclusive_hotels .skew a:hover .shadow_on_img h3 {
    transform: translateY(-90px);
}

.exclusive_hotels .skew>a:hover::before {
    height: 250px;
    opacity: 1;
}

.exclusive_hotels .skew a:hover .shadow_on_img {
    transform: translateY(-30px);
}

.shadow_on_img p {
    color: #fff;
    opacity: 0;
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    transform: translateY(20px);
    width: calc(100% - 40px);
    transition: opacity .18s cubic-bezier(.05, .2, .1, 1), transform .18s cubic-bezier(.05, .2, .1, 1);
    margin-bottom: 0;
}

.exclusive_hotels .skew a:hover .shadow_on_img p {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity .65s cubic-bezier(.05, .2, .1, 1) 0.15s, transform .65s cubic-bezier(.05, .2, .1, 1) 0.15s;
}

.shadow_on_img h3::after {
    content: '';
    height: 3px;
    width: 0;
    background-color: #e68264;
    position: absolute;
    bottom: -6px;
    left: 0;
    border-radius: 5px;
    transition: width 1000ms cubic-bezier(0.4, 0, 1, 1);
}

.exclusive_hotels .skew>a:hover .shadow_on_img h3::after {
    width: 100px;
}

@media only screen and (max-width: 1399px){
.shadow_on_img p {
    width: 100%;
}
}
@media only screen and (max-width: 576px){
.exclusive_hotels .skew img {
    width: 100%;
}
}
@media only screen and (max-width: 1199px) and (max-width: 992px){
    .exclusive_hotels .skew a:hover .shadow_on_img p{
        transform: translateY(15px);
    }
}
</style>
