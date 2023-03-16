<template>
<b-container class="py-5">
    <b-row class="text-center justify-content-center py-5">
        <b-col cols="12" lg="9">
            <h2 class="text-dark fs-heading">Indulge in the Height of Comfort: Luxury Amenities Await at The Chapter Hotels</h2>
        </b-col>
        <b-col cols="12" lg="9" class="mt-5">
            <div class="d-flex flex-wrap justify-content-between">
                <div class="icon-item col-xl-auto col-sm-4 col-6 px-xl-0">
                    <LottieAnimation path="../../images/lottie/json/parking.json" :width="80" :height="80"></LottieAnimation>
                    <h4 class="fs-4 mt-3 text-dark">Parking</h4>
                </div>
                <div class="icon-item col-xl-auto col-sm-4 col-6 px-xl-0">
                    <LottieAnimation path="../../images/lottie/json/pool.json" :width="80" :height="80"></LottieAnimation>
                    <h4 class="fs-4 mt-3 text-dark">Swimming Pool</h4>
                </div>
                <div class="icon-item col-xl-auto col-sm-4 col-6 px-xl-0">
                    <LottieAnimation path="../../images/lottie/json/spa.json" :width="80" :height="80"></LottieAnimation>
                    <h4 class="fs-4 mt-3 text-dark">Spa</h4>
                </div>
                <div class="icon-item col-xl-auto col-sm-4 col-6 px-xl-0">
                    <LottieAnimation path="../../images/lottie/json/gym.json" :width="80" :height="80"></LottieAnimation>
                    <h4 class="fs-4 mt-3 text-dark">Gym</h4>
                </div>
                <div class="icon-item col-xl-auto col-sm-4 col-6 px-xl-0">
                    <LottieAnimation path="../../images/lottie/json/wifi.json" :width="80" :height="80"></LottieAnimation>
                    <h4 class="fs-4 mt-3 text-dark">Free Wifi</h4>
                </div>
                <div class="icon-item col-xl-auto col-sm-4 col-6 px-xl-0">
                    <LottieAnimation path="../../images/lottie/json/breakfast.json" :width="80" :height="80"></LottieAnimation>
                    <h4 class="fs-4 mt-3 text-dark">Breakfast</h4>
                </div>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<style scoped >

</style>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
    components: {
        LottieAnimation
    },
    data() {
        return {}
    }
};
</script>
