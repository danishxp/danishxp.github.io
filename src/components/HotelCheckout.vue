<template>
  <section class="bgcheckout pt-2 pb-5">

    <b-container>
      <b-row>
        <b-col cols="12" >
          <b-navbar-brand to="/" class="mx-auto"><img alt="Chapter Hotels" src="../assets/img/logo.png"></b-navbar-brand>
        </b-col>
      </b-row>
    </b-container>


    <b-container class="pt-md-5 pt-0 pb-3">
      <b-row>        
        <b-col cols="12" xl="9" lg="11" md="" class="mx-auto ">        
          <b-row class="align-items-center checkout-inner-row flex-column-reverse flex-lg-row">
            <b-col lg="7" class="">
              <div class="d-flex mb-3">
                <svg class="" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  aria-hidden="true" class="mt-1">
                  <path
                    d="M22.63 24H1.36A1.37 1.37 0 0 1 0 22.62V1.36A1.37 1.37 0 0 1 1.36 0h21.27A1.36 1.36 0 0 1 24 1.36v21.27A1.36 1.36 0 0 1 22.63 24ZM1.36 1a.37.37 0 0 0-.36.36v21.26a.37.37 0 0 0 .36.37h21.27a.36.36 0 0 0 .37-.36V1.36a.36.36 0 0 0-.37-.36ZM4 22v-6.5A2.49 2.49 0 0 1 6.49 13h11A2.5 2.5 0 0 1 20 15.49V22h-1v-6.5a1.5 1.5 0 0 0-1.5-1.5h-11a1.52 1.52 0 0 0-1.06.44A1.49 1.49 0 0 0 5 15.5V22Zm8-19a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z">
                  </path>
                </svg>
                <div class="ch_ginfo ml-3">
                  <h3 class="fs-5 mb-1">Guest Info</h3>
                  <p class="fs-6 mb-0">Already A Member? <a href="#">Log in</a></p>
                </div>
              </div>
              <b-form class="text-grey">
                <b-row class="mb-4">
                  <b-col md="6" sm="6">
                    <label for="your_email" class="small-font">Email Address</label>
                    <b-form-input id="your_email" class="input-custom-rounded small-font" name="email" type="email"
                      placeholder="Email Address"></b-form-input>
                  </b-col>
                  <b-col md="6" sm="6">
                    <label for="confirm_your_email" class="small-font ">Confirm Email</label>
                    <b-form-input id="confirm_your_email" class="input-custom-rounded small-font" name="confirm_email"
                      type="email" placeholder="Confirm Email Address"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="mb-4">
                  <b-col md="6" sm="6">
                    <label for="confirm_your_email" class="small-font">First Name</label>
                    <b-form-input id="confirm_your_email" class="input-custom-rounded small-font" name="confirm_email"
                      type="email" placeholder="First Name"></b-form-input>
                  </b-col>
                  <b-col md="6" sm="6">
                    <label for="confirm_your_email" class="small-font  ">Last Name</label>
                    <b-form-input id="Last_Name" class="input-custom-rounded small-font" name="confirm_email" type="text"
                      placeholder="Last Name"></b-form-input>
                  </b-col>


                </b-row>

                <b-row class="mb-4">
                  <b-col  md="6" sm="6">
                    <label class="mb-2 small-font" for="">Country Code</label>
                    <b-form-select v-model="cc_location" :options="cc_options" class="small-font"></b-form-select>
                  </b-col>
                  <b-col md="6" sm="6">
                    <label class="mb-2 small-font " for="inline-form-input-username">Phone Number</label>
                    <b-form-input id="inline-form-input-name" class="small-font mb-2 input-custom-rounded form-control"
                      placeholder="Phone Number"></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="mb-4">
                <b-col cols="12">
                  <label class="mb-2 small-font" for="dfb">Birthdate</label>
                </b-col>
                <b-col cols="4">
                  <b-form-select v-model="month_selected" :options="month_options" class="small-font"></b-form-select>
                </b-col>
                <b-col cols="4">
                  <b-form-select v-model="day_selected" :options="day_options" class="small-font"></b-form-select>
                </b-col>
                <b-col cols="4">
                  <b-form-select v-model="year_selected" :options="year_options" class="small-font"></b-form-select>
                </b-col>
              </b-row>

              <b-row class="mb-4">
                <b-col cols="6">
                  <label class="mb-2 small-font" for="inline-form-input-name">Create Password</label>
                  <b-form-input type="password" id="inline-form-input-name"
                    class="form-control input-custom-rounded small-font" placeholder="Password"></b-form-input>
              </b-col>
              <b-col cols="6">
                  <label class="mb-2 small-font" for="inline-form-input-username">Confirm Password</label>
                  <b-form-input type="password" id="inline-form-input-name"
                    class="form-control input-custom-rounded small-font"
                    placeholder="Confirm Password"></b-form-input>
              </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col cols="12">
                    <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted"
                      class="mb-3 mb-md-0 mb-lg-0 small-font">
                      Receive occasional news about Chapterhotel, new locations, and special
                      deals.
                    </b-form-checkbox>
                    <p class="text-terms">By selecting to complete this booking, I agree to the House Rules and Cancellation Policy, Terms of Service and Privacy Policy. I also agree to pay the total amount shown, which includes Occupancy Taxes.</p>
                </b-col>
              </b-row>
              <b-button variant="info" class="btn text-white w-100 lh-1 py-3 ls-1 fs-5 mt-lg-0 mt-3 rounded-pill">Complete booking</b-button>
              </b-form>
              
            </b-col>
            
            <b-col cols="11" xl="4" lg="5" md="12" class="rounded-custom p-0 radius_quater flex-nowrap mb-5 mb-lg-0" offset-xl="1">
              <b-col class="p-0" sm="12" md="12" lg="12" xl="12">
                <div class="d-lg-none d-flex justify-content-between align-items-center p-3" @click="show_cart_mob()">
                  <div class="left_cart d-flex align-items-center flex-wrap" >
                    <img src="https://res.cloudinary.com/sonder/image/private/s--cnXDW3OF--/c_pad,h_853,q_auto,w_1280/v1/s3assets/unit_images/images/000/431/839/original/q6rmmO1w.jpg"
                  alt="" width="100" height="100" class="img-fluid mobile-image mr-3" />
                    <div class="left_inner mt-2 mt-sm-0">
                      <h4 class="mb-md-0 mb-1">25 nights at Superior King Room</h4>
                      <p class="mb-0">Show price breakdown <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="15" height="15" x="0" y="0" viewBox="0 0 490.688 490.688" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M472.328 120.529 245.213 347.665 18.098 120.529c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l234.667 234.667c4.165 4.164 10.917 4.164 15.083 0l234.667-234.667c4.237-4.093 4.354-10.845.262-15.083-4.093-4.237-10.845-4.354-15.083-.262-.089.086-.176.173-.262.262l-.021.001z" style="" fill="#ffc107" data-original="#ffc107"></path><path d="M245.213 373.415a10.663 10.663 0 0 1-7.552-3.115L2.994 135.633c-4.093-4.237-3.975-10.99.262-15.083 4.134-3.992 10.687-3.992 14.82 0l227.136 227.115 227.115-227.136c4.093-4.237 10.845-4.354 15.083-.262 4.237 4.093 4.354 10.845.262 15.083-.086.089-.173.176-.262.262L252.744 370.279a10.672 10.672 0 0 1-7.531 3.136z" fill="#000000" data-original="#000000" class=""></path></g></svg></p>
                      <div class="right_cart font-weight-bold d-md-none d-block">£4,498.52</div>
                    </div>
                  </div>
                  <div class="right_cart font-weight-bold d-md-block d-none">£4,498.52</div>
                </div>
                <img
                  src="https://res.cloudinary.com/sonder/image/private/s--cnXDW3OF--/c_pad,h_853,q_auto,w_1280/v1/s3assets/unit_images/images/000/431/839/original/q6rmmO1w.jpg"
                  alt="" width="500" height="300" class="rounded-custom img-fluid mobile-image d-none d-lg-block" />
                <div v-if="mob_cart_show == true">
                <div class="mt-4 mx-3">
                  <h5 class="font-weight-bold fs-5">Studio Apartment w/ Balcony</h5>
                  <p class="small-font mb-0 text-grey"> Midtown South </p>
                  <p class="small-font mb-2 text-grey">Midtown, Atlanta</p>
                  <p class="small-font">Thu, Mar 09 - Thu, Mar 30 (21 nights)</p>
                </div>
                <div class="border-bottom"></div>

                <ul class="nav small text-grey px-3 pt-3 pb-1">
                  <li class="d-flex justify-content-between w-100 mb-2">
                    <span>£254.85 × 25 nights</span>
                    <span>£6,371.34</span>
                  </li>

                  <li class="d-flex justify-content-between w-100 mb-2">
                    <span>35% off - biweekly member rate</span>
                    <span>-£2,229.60</span>
                  </li>

                  <li class="d-flex justify-content-between w-100 mb-2">
                    <span>Your rate £165.66 x 25 nights</span>
                    <span>£4,141.38</span>
                  </li>

                  <li class="d-flex justify-content-between w-100 mb-2">
                    <span>Tax</span>
                    <span>£357.14</span>
                  </li>
                </ul>
                <div class="border-bottom"></div>

                <ul class="nav px-3 pt-3 pb-1">
                  <li class="d-flex justify-content-between w-100 mb-2">
                    <span>Total</span>
                    <span>£357.14</span>
                  </li>
                </ul>



                <!--
                <b-row class="mt-3 fs-6">
                  <b-col class="ml-3">
                    <p class="small-font">US$126.13 21 nights</p>
                  </b-col>
                  <b-col class="text-md-right ">
                    <p class="mr-3 small-font text-sm-center ml-5 ml-md-0 ml-lg-0">US$2,648.73</p>
                  </b-col>
                </b-row>
                <b-row class="fs-6">
                  <b-col class="ml-3">
                    <p class="mr-3 small-font">Biweekly member rate</p>
                  </b-col>
                  <b-col class="text-right">
                    <p class="mr-3 small-font text-sm-center">-US$794.00</p>
                  </b-col>
                </b-row>
                <b-row class="fs-6">
                  <b-col class="ml-3">
                    <p class="mr-3 small-font">Your rate US$88.29</p>
                  </b-col>
                  <b-col class="text-right">
                    <p class="mr-3 small-font text-sm-center">US$1,854.12</p>
                  </b-col>
                </b-row>
                <b-row class="fs-6">
                  <b-col class="ml-3">
                    <p class="mr-3 small-font ">Tax</p>
                  </b-col>
                  <b-col class="text-right">
                    <p class="mr-3 small-font">US$1,854.12</p>
                  </b-col>
                </b-row>
                <div class="border-bottom col-11 mx-auto"></div>
                <b-row class="mt-3">
                  <b-col class="ml-3 fs-5 total-font">
                    <h5 class="mr-3">Total</h5>
                  </b-col>
                  <b-col class="text-right fs-5 total-font">
                    <h5 class="mr-3 total-font">US$1,854.12</h5>
                  </b-col>
                </b-row>
                  -->
                
                  <div class="py-3 text-center">
                    <a href="javascript:;" @click="show_promo_code()">Add promo code</a>
                  </div>
                  <div class="px-3 pb-1 promo_code_box" v-if="active == true">
                    <b-form>
                      <b-form-group class="position-relative">
                      <b-form-input
                        id="promo_code"
                        placeholder="Enter promo code"
                        class="fs-6"
                        required
                      ></b-form-input>
                      <b-button type="submit" variant="gray" class="position-absolute top-0 right-0 fs-6 text-gray">Apply</b-button>
                    </b-form-group>
                    </b-form>
                  </div>
                </div>
               
              </b-col>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Select2 from 'v-select2-component';
export default {
  name : 'HotelCheckOutViews',
  components: {
    Select2,
  },
data() {
    return {
      active: false,
      mob_cart_show: true,
      cc_location: null,
      cc_options: [
          { id: 'USA', text: 'USA +1' },
          { id: 'CAN', text: 'CAN +1' },
          { id: 'AFG', text: 'AFG +93' },
          { id: 'ALA', text: 'ALA +358' }
        ],
      month_selected: null,
      month_options: [
        { value: null, text: 'Month' },
        { value: 'a', text: 'Jan' },
        { value: 'b', text: 'Fab' },
        { value: 'd', text: 'Mar' }
      ],
      day_selected: null,
      day_options: [
        { value: null, text: 'Day' },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' }
      ],
      year_selected: null,
      year_options: [
        { value: null, text: 'Year' },
        { value: '2003', text: '2003' },
        { value: '2002', text: '2002' },
        { value: '2003', text: '2001' },
        { value: '2004', text: '2000' }
      ]
    }
  },
  methods : {
    show_promo_code(){
      this.active = !this.active;
    },
    show_cart_mob(){      
        this.mob_cart_show = !this.mob_cart_show;
    }

  },
  mounted() {
    if(screen.width <= 991){
      this.mob_cart_show = false;
    }
    //document.getElementById('header_nav').style.display = "none";
  }
}
</script>

<style scoped>
button#dropdown-1__BV_toggle_ {
  background: white;
  color: #6c757d;
  border-radius: 3px;
  padding: 12px;
  width: 135px;
}
.bgcheckout {
  background: #fffbf2;
  min-height: 100vh;
}
.b-form {
  background: #fffbf2;
}
.month-custom-width {
  width: 173px !important;
}
.rounded-custom {
  border-radius: 0.7rem 0.7rem 0px 0px;
  background: #fcf5eb;
}
.rounded-custom-bottom {
  border-radius: 0px 0px 30px 30px;
}
.input-custom-rounded {
  border-radius: 6px;
}
.radius_quater{
  border-radius: 0.7rem;
}
.text-terms {
    font-size: 0.75rem;
    margin: 20px;
}
@media only screen 
and (min-device-width : 1200px) 
and (max-device-width : 1399px) {
.hotel-checkout .row > .col-lg-11 {
  flex: 0 0 91.66666667%;
  max-width: 91.66666667%;
}
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {

  .small-font{
    font-size: 12px;
  }
  .custom-padding{
    padding: 0px;
  }

  .total-font{
    font-size: 18px;
  }
}

@media only screen 
and (min-device-width : 768px) 
{
  .small-font{
    font-size: 14px;
}
}
@media only screen and (min-width: 1400px){
/* .checkout-inner-row .col-lg-5 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
    margin-left: 8.33333333%;
} */
}
@media only screen and (max-width : 767px){
.left_inner > h4{
  font-size: 1.2rem;
}
}
@media only screen and (max-width : 575px){
/* .mobile-image{
    width: 100%;
} */
}

</style>
