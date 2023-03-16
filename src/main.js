import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
// import PhotoGrid from 'vue-photo-grid/components/PhotoGridComponent.vue';
import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios';
//import NavScroll from 'navscroll';
//Vue.use(NavScroll);

// npm i --save-dev @types/vue-photo-grid
// Or, if you have to support IE9

// import Select2 from 'vue3-select2-component';
// import VueDatepickerUi from 'vue-datepicker-ui'
// import 'vue-datepicker-ui/lib/vuedatepickerui.css';
// Vue.component('Datepicker', VueDatepickerUi)
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)

Vue.config.productionTip = false
// app.component('Select2', Select2)
new Vue({
  router,
  store,
  // PhotoGrid,
  render: h => h(App)
}).$mount('#app')
