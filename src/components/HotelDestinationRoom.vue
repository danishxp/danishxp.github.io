<template>
  <b-container class="sh_single_room">
    <!-- <section
      class="shadow-lg mb-4 image-border"
    > -->
      <b-row class="shadow-lg border-radius-1 overflow-hidden mb-4">
        <!-- <b-col cols="12" class="d-flex"> -->
          <b-col cols="12" md="5" class="pl-0 pr-xl-3 pr-0">
            <b-carousel
              id="list_slider"
              :interval="6000"
              controls
              background=""
              img-width="318"
              img-height="200"
              class="img-radius"
              border-radius="20px"
            >
              <b-carousel-slide img-src="../../public/images/caro-9.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-10.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-11.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-12.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-13.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-14.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-2.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-3.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-4.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-5.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-6.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-7.jpg" class="">
              </b-carousel-slide>
              <b-carousel-slide img-src="../../public/images/caro-8.jpg" class="">
              </b-carousel-slide>
            </b-carousel>
          </b-col>
          <b-col cols="12" md="7" class="d-flex flex-wrap flex-column justify-content-between">
            <b-row class="mt-4">
              <b-col cols="12" xl="9">
                <h3>Single Room</h3>
                <div class="d-flex fs-6">
                  <span class="pl-2 pr-2">
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="Icon_icon__qr5nN BaseInformation_label_icon__MZk0A Icon_deepGreen__lih4K"
                      aria-hidden="true"
                    >
                      <path
                        d="M24 16v-2.77A1.22 1.22 0 0 0 22.82 12H9v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2H1V4H0v16h1v-2h22v2h1v-3H1v-3.95h21.82a.18.18 0 0 1 .18.18V16ZM3 10h5v2H3Z"
                      ></path>
                    </svg>
                    1 bedroom
                  </span>
                  <span class="pl-2 pr-2">
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="Icon_icon__qr5nN BaseInformation_label_icon__MZk0A Icon_deepGreen__lih4K"
                      aria-hidden="true"
                    >
                      <path
                        d="M22.91 20a2.87 2.87 0 0 1-.81-.14c-1-.3-1.87-.92-2.66-.92h-15c-.78 0-1.6.67-2.53.94S.54 20 .23 19.65c-.49-.62-.05-1.6.33-2.29a3 3 0 0 0 0-2.6A7.67 7.67 0 0 1 0 11.92a6.74 6.74 0 0 1 .55-2.66 2.85 2.85 0 0 0 .06-2.48C.21 6.07-.27 5 .22 4.41c.32-.41.88-.48 1.68-.26A12.09 12.09 0 0 0 4.43 5h15a12.05 12.05 0 0 0 2.68-.86c.82-.24 1.4-.15 1.72.25.5.62 0 1.64-.37 2.35a2.85 2.85 0 0 0 0 2.5 6.74 6.74 0 0 1 .54 2.68 7.58 7.58 0 0 1-.54 2.83 3 3 0 0 0 0 2.63c.37.69.81 1.66.31 2.27a1.09 1.09 0 0 1-.86.35ZM1 5.05a3.12 3.12 0 0 0 .49 1.24 3.83 3.83 0 0 1 0 3.37A5.65 5.65 0 0 0 1 11.92a6.68 6.68 0 0 0 .46 2.46 4 4 0 0 1 0 3.47C1 18.7 1 19 1 19h.1a1.9 1.9 0 0 0 .53-.09c1-.28 1.93-1 2.79-1h15c.86 0 1.84.63 3 1a1.2 1.2 0 0 0 .67.08 2.53 2.53 0 0 0-.43-1.15 4 4 0 0 1-.08-3.48 6.68 6.68 0 0 0 .42-2.44 5.65 5.65 0 0 0-.47-2.26 3.84 3.84 0 0 1 0-3.39c.5-.9.46-1.2.45-1.25S23 5 23 5a2.34 2.34 0 0 0-.57.1 12.81 12.81 0 0 1-2.94.9h-15a13 13 0 0 1-2.79-.9 1.13 1.13 0 0 0-.7-.05Z"
                      ></path>
                    </svg>
                    1 guest
                  </span>
                  <span class="pl-2 pr-2">
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="Icon_icon__qr5nN BaseInformation_label_icon__MZk0A Icon_deepGreen__lih4K"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 9V6a1 1 0 0 1 2 0v1h1V6a2 2 0 0 0-4 0v3H0v1h24V9Zm19.53 5.34A3.07 3.07 0 0 1 18.48 17h-13a3.09 3.09 0 0 1-3-2.66L2 11H1l.44 3.47A4.1 4.1 0 0 0 4 17.7V20h1v-2a3 3 0 0 0 .52.05h13A2.84 2.84 0 0 0 19 18v2h1v-2.3a4.06 4.06 0 0 0 2.53-3.23L23 11h-1Z"
                      ></path>
                    </svg>
                    1 bathroom
                  </span>
                  <span class="pl-2 pr-2">
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="Icon_icon__qr5nN BaseInformation_label_icon__MZk0A Icon_deepGreen__lih4K"
                      aria-hidden="true"
                    >
                      <path
                        d="M24.01 11h-1V1h-10V0h11v11zm-13 13h-11V13h1v10h10v1z"
                      ></path>
                    </svg>
                    91 sq Ft
                  </span>
                </div>
                <div class="sr_features mt-4">
                  <h6>Features</h6>
                  <ul class="pl-3 mt-3 fs-6">
                    <li>2 Twin beds</li>
                    <li>Television</li>
                    <li>Air conditioning</li>
                  </ul>
                </div>
              </b-col>
              <b-col cols="12" xl="3" class="text-right mb-xl-0 mb-3">
                <span class="fs-4 font-weight-bold d-block">GBP £177</span>
                <div class="lh-1 text-muted"><small><small><small>includes taxes and fees</small></small></small></div>
                <span class="fs-6 font-weight-bold d-block mt-1 text-info">GBP £184 / night</span>
              </b-col>
            </b-row>

            <b-row class="mb-4">
              <b-col cols="12" class="text-right">
                <b-button variant="secondary" class="px-5 py-3 rounded-pill">Book Now</b-button>
              </b-col>
            </b-row>
          </b-col>
        <!-- </b-col> -->
      </b-row>
    <!-- </section> -->
  </b-container>
</template>

<style scoped>
.button-styling {
  margin-top: 268px;
  position: absolute;
  margin-left: -35px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 25px;
  height: 25px;
}
.img-radius{
  border-radius:20px;
}
.sr_features ul {
    column-count: 2;
}
.sr_features ul li {
    margin-bottom: 5px;
}
#list_slider >>> .carousel-item img {
  height: 340px;
  object-fit: cover;
}
@media only screen and (max-width: 1199px){
#list_slider >>> .carousel-item img {
  height: 390px;
}
}
@media only screen and (max-width: 1199px){
#list_slider >>> .carousel-item img {
height: 410px;
}
}
@media only screen and (max-width: 767px){
#list_slider >>> .carousel-item img {
height: auto;
}
}
</style>
<style>

</style>