<template>    
    <div>
        <b-carousel id="list_slider" v-model="slide" :interval="6000" controls background="#ababab"
            img-width="318" img-height="200">            
            <b-carousel-slide
                img-src="../../public/images/caro_1.jpeg"
            >            
            </b-carousel-slide>
            <b-carousel-slide
                img-src="../../public/images/caro_2.jpeg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                img-src="../../public/images/caro_3.jpeg"
            >
            </b-carousel-slide>
        </b-carousel>

    </div>
</template>
<style>
#list_slider .carousel-item img {
    height: 200px;
    object-fit: cover;
}
.carousel-control-prev-icon,
.carousel-control-next-icon{
    width: 25px;
    height: 25px;
}
.carousel-control-next-icon {
    background-image: url('../../public/images/next_arrow.svg');
}
.carousel-control-prev-icon {
    background-image: url('../../public/images/prev_arrow.svg');
}
</style>
<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },

}</script>