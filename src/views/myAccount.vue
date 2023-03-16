<template>
    <section class="bgcheckout py-5">
        
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h2 class="mb-2 text-center">My Account</h2>
                    <p class="mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <b-card no-body>
                        <b-tabs pills card vertical start active lazy align="center" active-nav-item-class="btn-info" nav-class="pt-4">
                        <b-tab title="Edit Profile" title-item-class="text-center mb-3" title-link-class="rounded-pill">
                            <editProfile></editProfile>
                        </b-tab>
                        <b-tab title="My Booking" title-item-class="text-center mb-3" title-link-class="rounded-pill">
                            <OurBooking></OurBooking>
                        </b-tab>
                        <b-tab title="My Reservation" title-item-class="text-center mb-3" title-link-class="rounded-pill">
                            <reservationForm></reservationForm>
                        </b-tab>
                        <b-tab title="Security" title-item-class="text-center mb-3" title-link-class="rounded-pill">
                            <changePassword></changePassword>
                        </b-tab>
                        </b-tabs>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import editProfile from '@/components/EditProfile.vue'
import OurBooking from '@/components/OurBooking.vue'
import reservationForm from '@/components/reservationForm.vue';
import changePassword from '@/components/changePassword.vue';

export default {
  name: 'MyAccount',
  components: {
    editProfile,
    OurBooking,
    reservationForm,
    changePassword
  }
}
</script>

<style scoped>
.bgcheckout {
    background: #fffbf2;
}
.tabs >>> .nav-link {
    background-color: #e1e1e1;
    border-color: #e1e1e1;
}
</style>

