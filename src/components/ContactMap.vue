<template>
  <b-container fluid class="pt-5">
    <b-container class="mt-5 mb-md-4 mb-5">
      <b-row class="align-items-center justify-content-lg-center">
        <b-col cols="12" xl="7" lg="8">
          <h1 class="fs-heading">Located in the heart of London</h1>
          <p class="fs-4">
            Unwind the clock of modern life, unlock the door to a wonder of the
            world.
          </p>
        </b-col>
        <b-col cols="12" xl="3" lg="4" md="5">
          <button
            data-v-16d095cd=""
            type="button"
            class="bg-dark btn pb-3 d-flex pt-3 px-5 rounded-pill text-white ml-lg-auto"
            to="/hotel-checkout"
          >
            <img
              src="../assets/img/location.svg"
              alt=""
              width="30"
              height="30"
              class="mr-2"
            />
           <span class="pt-1" > Get Directions </span>
          </button>
        </b-col>
      </b-row>
    </b-container>
    <b-row>
      <b-col class="px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.9811820329978!2d12.474696720439724!3d41.89322607174033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6048da4d6993%3A0x3d19cba85626cfe7!2sVia%20degli%20Specchi%2C%2020%2C%2000186%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2s!4v1674200283078!5m2!1sen!2s"
          width="100%"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </b-col>
    </b-row>
  </b-container>
</template>



<style  scoped>

@media only screen and (max-width: 767px){
.contact-us h1 {
    font-size: 3rem;
}
}
@media only screen and (max-width: 450px){
.contact-us h1 {
  font-size: 2.3rem;
}
}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px)
 {
.small-heading{
font-size: 28px;
}
.small-paragraph{
  font-size: 20px;
}
}


</style>