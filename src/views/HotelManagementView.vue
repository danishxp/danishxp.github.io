    <template>
    <div class="hotel-management">
        <HotelManagementForm></HotelManagementForm>
        <HotelForm></HotelForm>
    </div>
    </template>
    <script>
  // import Banner from '@/components/Banner.vue';
  import HotelManagementForm from '@/components/HotelManagementForm.vue';
  import HotelForm from '@/components/HotelForm.vue';
  export default {
    name: 'hotel-management',
    components: {
        HotelManagementForm,
        HotelForm,
    }
  }
  </script>