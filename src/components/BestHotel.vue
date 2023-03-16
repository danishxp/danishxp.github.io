<template>
  <b-container class="mb-5">
    <b-row class="Besthotel-secondry-color align-items-center flex-column-reverse flex-md-row shadow-lg">
      <b-col class="pl-lg-5 pl-4 py-4 py-lg-0" md="6" sm="12">
        <h2 class="">Looking Forward to Your Stay</h2>
        <p class="mt-4 ">
          Discover a range of accommodation from luxury to budget hotels and exclusive suites.
        </p>
        <b-button
          pill
          variant="info"
          class="pt-2 pb-2 pl-5 pr-5 fs-5 text-white mt-2 heading-font-family ls-1"
          ><span class="py-2 d-block">Book Now</span></b-button
        >
      </b-col>
      <b-col md="6" class="pr-0 pl-0 pl-md-3">
        <img
          src="../assets/img/besthotel.png"
          alt=""
          width=""
          height=""
          class="img-fluid d-none d-md-block"
        />
        <img
          src="../assets/img/img-1.png"
          alt=""
          width=""
          height=""
          class="img-fluid d-md-none"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.Besthotel-secondry-color {
  background: #f6f2e7;
}
@media only screen and (max-width: 991px){
.Besthotel-secondry-color img:first-child {
  height: 350px;
  object-fit: cover;
}
}
/* @media only screen and (max-width: 767px){
.Besthotel-secondry-color img {
  height: 510px;
}
} */
@media only screen and (max-width: 575px){
.Besthotel-secondry-color{
  margin-right: 15px;
  margin-left: 15px;
}
/* .Besthotel-secondry-color img {
  height: 490px;
} */
}
</style>
