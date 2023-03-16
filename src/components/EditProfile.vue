<template>
  <!--<section class="bgcheckout pt-5 pb-5">
    <b-container class="pt-md-5 pt-0 pb-3">
          <b-row class="align-items-center checkout-inner-row flex-column-reverse flex-lg-row">
            <b-col lg="7">
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
              </div> -->
              <b-row>
              <b-col cols="6" class="py-4">
                <h3>Update Account</h3>
                <p>You can update your contact information here.</p>
                <b-form class="text-grey">
                  <b-row class="mb-4">
                    <b-col md="6" sm="6">
                      <label for="first_name" class="small-font">First Name</label>
                      <b-form-input id="first_name" class="input-custom-rounded small-font" name="first_name"
                        type="text" placeholder="First Name"></b-form-input>
                    </b-col>
                    <b-col md="6" sm="6">
                      <label for="last_name" class="small-font  ">Last Name</label>
                      <b-form-input id="last_name" class="input-custom-rounded small-font" name="last_name" type="text"
                        placeholder="Last Name"></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="mb-4">
                    <b-col md="12" sm="6">
                      <label for="your_email" class="small-font">Email Address</label>
                      <b-form-input id="your_email" class="input-custom-rounded small-font" name="email" type="email"
                        placeholder="Email Address"></b-form-input>
                    </b-col>
                  </b-row>

                  <!-- <b-row class="mb-4">
                    <b-col md="4">
                      <label for="password" class="small-font">Password</label>
                      <b-form-input id="password" class="input-custom-rounded small-font" name="password"
                        type="password" placeholder="Password"></b-form-input>
                    </b-col>
                    <b-col md="4">
                      <label for="confirm_password" class="small-font  ">Confirm Password</label>
                      <b-form-input id="confirm_password" class="input-custom-rounded small-font" name="confirm_password" type="password"
                        placeholder="Confirm Password"></b-form-input>
                    </b-col>
                    <b-col md="4">
                      <label for="current_password" class="small-font  ">Current Password</label>
                      <b-form-input id="current_password" class="input-custom-rounded small-font" name="current_password" type="password"
                        placeholder="Current Password"></b-form-input>
                    </b-col>
                  </b-row> -->

                  <b-row class="mb-4">
                    <b-col  md="3" sm="4">
                      <label class="mb-2 small-font" for="">Country Code</label>
                      <b-form-select v-model="cc_location" :options="cc_options" class="small-font"></b-form-select>
                    </b-col>
                    <b-col md="9" sm="8">
                      <label class="mb-2 small-font " for="inline-form-input-username">Phone Number</label>
                      <b-form-input id="inline-form-input-name" class="small-font mb-2 input-custom-rounded form-control"
                        placeholder="Phone Number"></b-form-input>
                    </b-col>
                  </b-row>
                  <!-- <b-row class="mb-4">
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
                  </b-col>
                </b-row>-->
                <b-row class="mt-3">
                  <b-col cols="12" class="text-right">
                    <b-button pill variant="info" class="text-white lh-1 py-2 px-4 ls-1 fs-6 mt-lg-0 mt-3" type="submit">Save Updated Account</b-button>
                  </b-col>
                </b-row>
                </b-form>
               
                <!-- <hr class="mt-5 mb-4"> -->

              </b-col>              
            </b-row>
            <!-- </b-col>
          </b-row>
    </b-container>
  </section> -->
</template>

<script>
import Select2 from 'v-select2-component';
export default {
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
