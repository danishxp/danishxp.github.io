<template>
    <div class="offering_series_main">
    <b-container class="offering_series">
        <b-row class="align-items-center flex-column-reverse flex-lg-row">
            <b-col cols="12" lg="6" class="position-relative z-index-1 pr-xl-5 mt-4 mt-lg-0">
                <h2 class="text-dark fs-heading">A Comfortable & Lavish Staycation in London</h2>
                <p class="text-dark mt-3 pr-5 mr-5">Our hotels offer a contemporary atmosphere for you to relax, work, and socialise in comfort and style, providing an escape from the holiday blues.</p>
                <b-button pill variant="info" class="lh-1 px-5 py-3 rounded-pill text-white mt-2 ls-1">Learn More</b-button>
            </b-col>
            <b-col cols="12" lg="6" class="off_ser_col_2">
                <!-- <b-img src="../../public/images/dot_pattern.svg" fluid alt="Dot Pattern" class="off_ser_pattren_1"></b-img> -->
                <b-img src="../../public/images/offering_services_1.jpg" fluid alt="Offering Services" class="position-relative"></b-img>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<!-- script -->
<script>

</script>

<!-- style -->
<style lang="scss" scoped>
.offering_series_main {
    background-color: #f6f6f6;
}
.offering_series {
    // background-image: url('../assets/img/offering_series.jpg');
    // background-size: cover;
    // background-repeat: no-repeat;
    padding-top: 100px;
    padding-bottom: 100px;
    margin-top: 100px;
    
}
// .off_ser_col_2{
//     padding-top: 100px;
//     padding-bottom: 100px;
// }
.off_ser_col_2::before {
    content: "";
    position: absolute;
    bottom: -60px;
    left: -47px;
    width: 150px;
    height: 150px;
    background-image: url('../../public/images/dot_pattern.svg');
    background-size: 150px;
    background-repeat: no-repeat;
}
@media only screen and (max-width: 991px){
 .offering_series {
    padding-top: 50px;
    padding-bottom: 50px;
}
}

</style>

 
