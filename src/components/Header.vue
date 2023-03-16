<template>
<b-navbar toggleable="lg" variant="" class="navbar-light navbar-expand-lg px-0" id="header_nav">
    <b-container class="d-block px-3 px-sm-0">
        <b-row class="justify-content-between">
            <b-col cols="auto" class="text-left my-auto ">

                <b-button v-b-toggle.sidebar-border variant="info" class="border-0 p-0 bg-transparent shadow-none ">
                    <b-icon icon="list" class="fs-1 info" height="2.5rem" width="2.5rem"></b-icon>
                </b-button><span class=" text-capitalize inter_regular pl-1">menu</span>
                <b-sidebar id="sidebar-border" class="custom-menu" backdrop shadow>
                    <div class="px-3 py-2">
                        <b-navbar-brand to="/" class="d-block mb-4 mx-0 ml-3"><img alt="Chapter Hotels" src="../assets/img/chapterHotel-logo.jpg" width="50"></b-navbar-brand>
                        <b-nav vertical>
                            <b-nav-item link-classes="d-flex justify-content-between" to="/">
                                <span class="text-white">Home</span>
                                <LottieAnimation path="../../images/lottie/json/home.json" :width="40" :height="40" class="m-0"></LottieAnimation>
                            </b-nav-item>
                            <b-nav-item link-classes="d-flex justify-content-between" to="/about-chapter-hotels">
                                <span class="text-white">About</span>
                                <LottieAnimation path="../../images/lottie/json/about.json" :width="40" :height="40" class="m-0"></LottieAnimation>
                            </b-nav-item>
                            <!-- <b-nav-item link-classes="d-flex justify-content-between" to="/search">
                                <span class="text-white">Search</span>
                                <LottieAnimation path="../../images/lottie/json/hotel.json" :width="40" :height="40" class="m-0"></LottieAnimation>
                            </b-nav-item> -->
                            <b-nav-item link-classes="d-flex justify-content-between" to="/contact-us">
                                <span class="text-white">Contact</span>
                                <LottieAnimation path="../../images/lottie/json/contact.json" :width="40" :height="40" class="m-0"></LottieAnimation>
                            </b-nav-item>
                            <b-nav-item link-classes="d-flex justify-content-between" to="/manage-hotel">
                                <span class="text-white">Manage Hotel</span>
                                <LottieAnimation path="../../images/lottie/json/contact.json" :width="40" :height="40" class="m-0"></LottieAnimation>
                            </b-nav-item>
                            <b-nav-item link-classes="d-flex justify-content-between" to="/hotel-checkout">
                                <span class="text-white">Checkout</span>
                                <LottieAnimation path="../../images/lottie/json/contact.json" :width="40" :height="40" class="m-0"></LottieAnimation>
                            </b-nav-item>
                        </b-nav>
                        <div class="d-sm-none text-center mt-5">
                          <b-button pill variant="outline-info " class="font-weight-bold px-4 ls-1" v-b-modal.modal-singup>
                              <div class="py-1 d-block">Sign Up</div>
                          </b-button>
                          <b-button pill variant="primary" class="btn btn-info ml-3 px-4 rounded-pill text-white font-weight-bold ls-1" v-b-modal.modal-login>
                              <div class="py-1 d-block">Log In</div>
                          </b-button>
                        </div>
                    </div>
                </b-sidebar>
            </b-col>
            <b-col cols="auto" class="text-center pr-4 pr-sm-0">
                <b-navbar-brand to="/" class="mx-auto"><img alt="Chapter Hotels" src="../assets/img/chapterHotel-logo.jpg" width="60"></b-navbar-brand>
            </b-col>
            <b-col cols="auto" class="text-right my-auto d-none d-sm-none">
                <a href="javascript:;" class="mr-3 check_in_link" v-b-modal.modal-login>Check In</a>
                <b-button pill variant="outline-info " class="font-weight-bold px-4 ls-1" v-b-modal.modal-singup>
                    <div class="py-1 d-block">Sign Up</div>
                </b-button>
                <b-button pill variant="primary" class="btn btn-info ml-3 px-4 rounded-pill text-white font-weight-bold ls-1" v-b-modal.modal-login>
                    <div class="py-1 d-block">Log In</div>
                </b-button>
            </b-col>
            <b-col cols="auto" class="text-right my-auto">
                <div class="my_account">

                <!-- my profile -->
                <!-- <b-navbar> -->
                    <a pill variant="primary" class="btn btn-info ml-3 px-4 rounded-pill text-white ls-1 font-weight-bold" href="https://partners.eviivo.com/thechapterhotels/s"  target="_blank" >
                    <div class="py-1 d-block" >Book Now</div>
                    </a>
                    <!-- OLD CHANGES -->
                    <!-- <b-navbar-nav>
                        <b-nav-item-dropdown right class="bg-light p-2 rounded-pill">
                            <template #button-content>
                                <b-icon icon="person-fill" class="mr-2"></b-icon>
                                <span>Wilson</span>
                            </template>
                            <b-dropdown-item to="/reservation" >Check In</b-dropdown-item>
                            <b-dropdown-item to="/my-account">Account</b-dropdown-item>
                            <b-dropdown-item href="#" >Logout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav> -->
                <!-- </b-navbar> -->
                <!-- my profile -->
            </div>
            </b-col>
        </b-row>
    </b-container>
</b-navbar>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
    components: {
        LottieAnimation
    },
    data() {
        return {}
    }    
}
</script>

<style lang="scss" scoped>
nav {
    svg {
        fill: #f69679;
    }

    span {
        color: #000;
    }
}

.btn-outline-info:hover {
    color: #fff !important;
}
</style><style lang="scss"  >
.custom-menu .bg-light {
    border-radius: 0px 80px 0px 0px;
    border-top: 0px solid #2D4356 !important;
    border-right: 0px solid #2D4356 !important;
    border-bottom: none !important;
    border-left: none !important;
    /*background: linear-gradient(180deg, #fefaf7 0%, #fffbf8 35%, rgba(255,255,255,1) 100%);*/
    background-color: #2D4356 !important;
}

.custom-menu .nav-link {
    color: #fff;
    font-size: 1.5rem;
    padding: 10px 40px;
}

.custom-menu .close {
    color: #fff !important;
    font-size: 2.2rem !important;
    margin-right: 40px;
}

.b-sidebar>.b-sidebar-header {
    top: 61px;
    position: relative;
}

.custom-menu .nav-link span::before {
    content: '';
    background-color: #fff;
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 30px;
    top: 15px;
    left: -30px;
}

.custom-menu .nav-link span {
    position: relative;
    font-weight: 600;
}

.b-sidebar>.b-sidebar-body .nav {
    margin-top: 70px;
}
.check_in_link{
    position: relative;
    top: 3px;
}


/* CUSTOM CSS AI */

/* Style the dropdown menu */
.dropdown-menu {
  background-color: #f8f9fa;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
}

/* Style the dropdown items */
.dropdown-item {
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

/* Style the active link */
.dropdown-item.router-link-active {
  background-color: #df5f38;
  color: #fff;
}

/* Style the dropdown toggle link */
.dropdown-toggle {
  color: #df5f38;
  display: flex;
  align-items: center;
  text-decoration: none;
}

/* Style the icon */
.b-icon.bi-person-fill {
  fill: #df5f38;
  margin-right: 0.5rem;
}

/* Style the active link icon */
.dropdown-item.router-link-active .b-icon.bi-person-fill {
  fill: #fff;
}


</style>
