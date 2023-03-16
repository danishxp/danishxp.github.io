<template>
  <b-container>
  <b-row class="mt-5 mb-5">
    <b-col lg="5" md="8" sm="8" xl="4" class="py-3 mx-auto p-5 bg-light border">
      <!-- Update Password -->
      <h3 class="text-center text-info sm-heading">Update Password</h3>
      <b-form class="text-grey" @submit="onSubmit">
        <b-row class="mb-4">
          <b-col md="12" class="mb-3">
            <label for="password" class="small-font mt-2">New Password</label>
            <b-form-input
              id="password"
              class="input-custom-rounded small-font"
              name="new-password"
              type="password"
              placeholder="Password"
              @input="checkPassword"
              v-model="password"
              :class="{
                'is-valid': isPasswordValid,
                'is-invalid': !isPasswordValid,
              }"
              autocomplete="off"
              required
             
            >
          </b-form-input>
            <!-- password strength meter -->
            <div class="password-strength-meter">
              <div
                v-for="(strength, index) in strengths"
                :key="index"
                :class="{ 'is-active': passwordStrength === strength.name }"
                :style="{
                  backgroundColor: strength.color,
                  width: strength.width,
                }"
              ></div>
            </div>
            <!-- password strength meter -->
            <small class="mb-0 mt-2 custom-extra-small">
                Password should be 6+ char,mix case and one special symbol.
            </small>
          </b-col>
          <b-col md="12">
            <label for="confirm_password" class="small-font"
              >Confirm Password</label
            >
            <b-form-input
              id="confirm_password"
              class="input-custom-rounded small-font"
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              @input="checkPassword"
              v-model="confirmPassword"
              :class="{
                'is-valid': isPasswordMatch,
                'is-invalid': !isPasswordMatch,
              }"
              required
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="12" class="text-center">
            <b-button
              pill
              variant="info"
              class="text-white lh-1 py-2 px-4 ls-1 fs-6 mt-lg-0 mt-3"
              type="submit"
              ref="update_password"
              :disabled="!isPasswordValid || !isPasswordMatch"
              id="update_password"
              >Update Password</b-button
            >
          </b-col>
        </b-row>
      </b-form>
 
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      strengths: [
        { name: "Very Weak", color: "#dc3545", width: "20%" },
        { name: "Weak", color: "#ffc107", width: "40%" },
        { name: "Medium", color: "#28a745", width: "60%" },
        { name: "Strong", color: "#007bff", width: "80%" },
        { name: "Very Strong", color: "#6610f2", width: "100%" },
      ],
      passwordStrength: "",
    };
  },
  computed: {
    isPasswordValid() {
      if (
        this.passwordStrength == "Medium" ||
        this.passwordStrength == "Strong" ||
        this.passwordStrength == "Very Strong"
      ) {
        console.log(this.passwordStrength);
        return true;
      } else {
        console.log(this.passwordStrength);
        return false;
      }
    },
    isPasswordMatch() {
      if (this.password.length > 0 && this.confirmPassword.length > 0) {
        if (this.password === this.confirmPassword) {
          return this.password === this.confirmPassword;
        } else {
          return false;
        }
      }
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form))
      Swal.fire({
        icon: "success",
        title: "Password updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    // =========
    checkPassword() {
      // console.log(this.isPasswordValid+'-'+this.isPasswordMatch)
      let strength = 0;
      const regex = [
        /[A-Z]/, // Uppercase
        /[a-z]/, // Lowercase
        /[0-9]/, // Number
        /[^A-Za-z0-9]/, // Special character
      ];

      for (let i = 0; i < regex.length; i++) {
        if (regex[i].test(this.password)) {
          strength++;
        }
      }

      if (this.password.length >= 8) {
        strength++;
      }

      switch (strength) {
        case 0:
        case 1:
          this.passwordStrength = "Very Weak";
          break;
        case 2:
          this.passwordStrength = "Weak";
          break;
        case 3:
          this.passwordStrength = "Medium";

          break;
        case 4:
          this.passwordStrength = "Strong";
          break;
        case 5:
          this.passwordStrength = "Very Strong";
          break;
        default:
          this.passwordStrength = "";
      }

      if (strength == 0) {
        this.passwordStrength = "";
      }
    },

    // =========
  },
};
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
.radius_quater {
  border-radius: 0.7rem;
}

.password-strength-meter {
  width: 100%;
  height: 4px;
  background-color: #ccc;
  margin-top: 15px;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
}
.password-strength-meter > div {
  display: none;
  border-radius: 5px;
}
.password-strength-meter > div.is-active {
  height: 4px;
  display: block;
}
.custom-extra-small{
  font-size: 11px;
}

@media only screen and (min-device-width: 1200px) and (max-device-width: 1399px) {
  .hotel-checkout .row > .col-lg-11 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .small-font {
    font-size: 12px;
  }
  .custom-padding {
    padding: 0px;
  }

  .total-font {
    font-size: 18px;
  }
  
  .sm-center{
    text-align: center;
  }
  .sm-heading{
    font-size: 27px;
  }
}

@media only screen and (min-device-width: 768px) {
  .small-font {
    font-size: 14px;
  }
}
@media only screen and (min-width: 1400px) {

}
@media only screen and (max-width: 767px) {
  .left_inner > h4 {
    font-size: 1.2rem;
  }
}
@media only screen and (max-width: 575px) {
  /* .mobile-image{
width: 100%;
} */
}
</style>
