import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-chapter-hotels',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/manage-hotel',
    name: 'ManageHotel',
    component: () => import('../views/HotelManagementView.vue')
  },
  {
    path: '/hotel-destination-page',
    name: 'Hoteldestination',
    component: () => import('../views/HoteldestinationView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/ListingView.vue')
  },
  {
    path: '/hotel-checkout',
    name: 'HotelCheckOutViews',
    meta: {
      hideHeader : true,
    },
    component: () => import('../views/HotelCheckOutViews.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('../views/reservation.vue')
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: () => import('../views/editProfile.vue')
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: () => import('../views/myAccount.vue')
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import('../views/ThankYouView.vue')
  },
  {
    path: '/reset-password',
    name: 'EmailTemplate',
    component: () => import('../views/ResetPassword.vue')
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
