<template>
  <div class="contact-us">
   <ContactMap></ContactMap>
   <ContactDetailsForm></ContactDetailsForm>
   <ContactForm></ContactForm>
  </div>
</template>
<script>
// import Banner from '@/components/Banner.vue';
import ContactMap from '@/components/ContactMap.vue';
import ContactDetailsForm from '@/components/ContactDetailsForm.vue';
import ContactForm from '@/components/ContactForm.vue';
export default {
  name: 'contact-us',
  components: {
  //  Banner,
   ContactMap,
   ContactDetailsForm,
   ContactForm,
  }
}
</script>