<template>
  <div id="app">
    <my-header v-if="$route.name != 'HotelCheckOutViews'"></my-header>
    <router-view />
    <my-footer v-if="$route.name != 'HotelCheckOutViews'"></my-footer>
  </div>
</template>
<style lang="scss">
@import 'assets/scss/vendors/bootstrap-vue/_custom.scss';
@import "~bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>
<style>
/* @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'); */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

@media (min-width: 1200px){
.py-6{
  padding-top: 7rem !important;
  padding-bottom: 7rem !important;
}
}
@media (min-width: 1400px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1320px;
  }
}

:root{
  --var-primary-color: #e68264;
  --var-secondary-color: #2d4356;
  --body-font-family: 'Inter', sans-serif;
  --heading-font-family: 'Playfair Display', serif;
}
html{
  scroll-behavior: smooth;
}
body{
  font-family: var(--body-font-family);  
}
.daterangepicker td.in-range {
    background-color: rgb(233 236 238);
}
.daterangepicker td.active,
.daterangepicker td.active:hover{
  background-color: var(--var-secondary-color)
}

.heading-font-family, h1, h2, h3, h4{
  font-family: var(--heading-font-family);
}
.btn-secondary:focus,
.btn-secondary.focus,
.btn-secondary:hover {
    background-color: var(--var-primary-color);
    border-color: var(--var-primary-color);
}
.fs-6 {
  font-size: .9rem;
}
.fs-5 {
  font-size: 1.1rem;
}
.fs-4 {
  font-size: 1.2rem;
}
.fs-3 {
  font-size: 2.5rem;
}
.fs-2 {
  font-size: 3.5rem;
}
.fs-1 {
  font-size: 4.5rem;
}
.fs-heading {
    font-size: 3rem;
}
.ls-1{
  letter-spacing: 1px;
}
.lh-1 {
  line-height: 1;
}
.top-0{
  top: 0;
}
.right-0{
  right: 0;
}
.z-index-1{
  z-index: 1;
}
.z-index-9{
  z-index: 9;
}
.z-index-99{
  z-index: 99;
}
.carousel-indicators {
    z-index: 9;
}
.rounded-left-pill{
  border-top-left-radius: 50rem;
  border-bottom-left-radius: 50rem;
}
.border-radius-1{
  border-radius: 0.7rem;
}
.gap-1{gap:0.5rem;}
.gap-2{gap:1rem;}
.gap-3{gap:1.5rem;}
.gap-4{gap:2rem;}
.gap-5{gap:2.5rem;}


/* .poppins_bold {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}
.poppins_semi_bold {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
}
.poppins_regular {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}
.inter_semi_bold {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}
.inter_regular {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
} */
.text-grey {
  color: #636363;
}
.text-gray {
  color: #848484;
}
.HomeForm .b-form-datepicker button {
  /* display: none; */
  opacity: 0;
  text-indent: -99999px;
  padding: 0;
}
/* 
.b-form-datepicker.b-form-btn-label-control.form-control {
  box-shadow: none;
}

.b-form-datepicker.b-form-btn-label-control.form-control>.form-control {
  padding: 0;
  line-height: 1;
  min-height: auto;
} */

span.select2-container--default .select2-selection--single {
  border: none;
  background-color: transparent;
}

span.select2-container .select2-selection--single .select2-selection__rendered {
  padding-left: 0;
}

span.select2-container--open .select2-dropdown--above,
span.select2-container--open .select2-dropdown--below {
  border: 1px solid #aaa;
}
.sep {
    position: relative;
}
.site_sep::before {
    content: '';
    width: 70px;
    height: 3px;
    background-color: #e68264;
    position: absolute;
    border-radius: 10px;
}
.sep-center::before{
    right: 0;
    left: 0;
    margin: 0 auto;
}
@media only screen and (max-width:1199px){
.fs-heading {
  font-size: 2rem;
}
}
</style>

<script>

import Header from './components/Header'
import footer from './components/my-footer'

export default {
  components: {
    'my-header': Header,
    'my-footer': footer,
  },
  // created() {
  //       console.log(this.$route)
  //   }
}


</script>