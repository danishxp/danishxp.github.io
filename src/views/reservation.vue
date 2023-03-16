<template>
  <b-container class="py-5">
    <b-row class="py-5">
      <reservationForm></reservationForm>
    </b-row>
  </b-container>
</template>

<script>
import reservationForm from '@/components/reservationForm.vue';
export default {
  name: 'reservation',
  components: {
    reservationForm
  }
}
</script>