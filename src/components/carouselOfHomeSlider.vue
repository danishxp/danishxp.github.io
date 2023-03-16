<template>    
    <div>
        <b-carousel id="hm_slider" v-model="slide" :interval="8000" controls indicators 
            img-width="1024" img-height="480">            
            <b-carousel-slide
                img-src="../../public/images/slide-2.jpg"
            >
            <b-container>
                <b-row>
                    <b-col cols="12" xl="4" lg="6">
                        <h1 class="display-4 text-dark heading-font-family">Unwind in Luxury at The Chapter Hotels</h1>
                        <p class="inter_regular fs-4 text-dark mt-4">Experience Unrivaled Comfort and Style at Our Collection of Boutique Hotels</p>
                    </b-col>
                </b-row>
            </b-container>
            </b-carousel-slide>
            <!-- <b-carousel-slide
                img-src="../../public/images/slide-1.jpg"
            >
            <b-container>
            <b-row>
                <b-col cols="6">
                    <h1 class="display-4 poppins_bold text-primary">Find the best hotel to stress release</h1>
                </b-col>
            </b-row>
            </b-container>
            </b-carousel-slide> -->
        </b-carousel>

    </div>
</template>
<style scoped>
#hm_slider .carousel-item::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4990371148459384) 50%, rgba(255,255,255,0) 100%);
    z-index: 1;

}
/* #hm_slider .carousel-item::after {
    content: '';
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgb(255 255 255 / 0) 0%, rgba(255,255,255,0.4990371148459384) 50%, rgba(255,255,255,1) 100%);
    z-index: 1;
} */
#hm_slider >>> .carousel-caption {
    bottom: auto;
    top: 10%;
    text-align: left;
    right:0;
    left:0;
}

@media only screen and (max-width:1752px) and (min-width:1130px){
#hm_slider .col-12 {
    flex: 0 0 409px;
    max-width: 409px;
}
}
@media only screen and (max-width:1350px){
#hm_slider >>> .display-4 {
    font-size: 3rem;
}
#hm_slider >>> .carousel-caption {
    top: 8px;
}
}
@media only screen and (max-width:1070px){
#hm_slider .display-3 {
    font-size: 2.8rem;
    text-align: center;
}
}
@media only screen and (max-width:991px){
#hm_slider >>> .carousel-caption{
    text-align: center;
    position: initial;
    background-color: #fff;
}
#hm_slider div .carousel-item::before {
    display: none;
}
}
@media only screen and (max-width:575px){
#hm_slider .display-4 {
    font-size: 2.3rem;
}
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