<template>
<b-container :class="formContClass" class="rounded-pill ch_search_form">
    <b-row>
        <b-col>
            <b-form class="border-0 card col-md-12 py-3 px-2 rounded-pill shadow-lg">
                <b-row class="mx-0 px-xl-0 px-sm-5 py-lg-0 pb-md-3 pt-md-2">
                    <b-col class="d-flex align-items-center justify-content-center rounded-left-pill py-2 pb-xl-2 pb-lg-3 pl-xl-4 select_location" ref="select_location_col" xl="3" lg="6">
                        <svg class="location_icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="30" height="30" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 30 30" xml:space="preserve">
                            <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
            c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,469.729
            c-55.847-66.338-152.035-197.217-152.035-284.301c0-83.834,68.202-152.036,152.035-152.036s152.035,68.202,152.035,152.035
            C408.034,272.515,311.861,403.37,256,469.729z" fill="#e48265" data-original="#000000"></path>
                            <path d="M256,92.134c-51.442,0-93.292,41.851-93.292,93.293s41.851,93.293,93.292,93.293s93.291-41.851,93.291-93.293
            S307.441,92.134,256,92.134z M256,245.328c-33.03,0-59.9-26.871-59.9-59.901s26.871-59.901,59.9-59.901s59.9,26.871,59.9,59.901
            S289.029,245.328,256,245.328z" fill="#e48265" data-original="#000000"></path>
                        </svg>
                        <div class="ml-3">
                            <Select2 v-model="location" :options="options" class="w-100 border-0" :placeholder="location" ref="select_location" @open="onSelectOpen()" @close="onSelectClose()" />
                            <label class="form_label text-dark mb-0 d-block inter_regular">United Kingdom</label>
                        </div>
                    </b-col>

                    <b-col class="d-flex align-items-center justify-content-center datepicker-col py-2 pb-xl-2 pb-lg-3 pl-xl-5" ref="datepickerCol" xl="3" lg="6">

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 24 24" xml:space="preserve" class="">
                            <path d="M477.867,51.2h-59.733V34.133C418.133,15.313,402.825,0,384,0c-18.825,0-34.133,15.313-34.133,34.133V51.2H162.133
                        V34.133C162.133,15.313,146.825,0,128,0S93.867,15.313,93.867,34.133V51.2H34.133c-14.117,0-25.6,11.483-25.6,25.6v409.6
                        c0,14.117,11.483,25.6,25.6,25.6h443.733c14.117,0,25.6-11.483,25.6-25.6V76.8C503.467,62.683,491.983,51.2,477.867,51.2z
                        M366.933,34.133c0-9.413,7.658-17.067,17.067-17.067s17.067,7.654,17.067,17.067v51.2c0,9.413-7.658,17.067-17.067,17.067
                        s-17.067-7.654-17.067-17.067V34.133z M110.933,34.133c0-9.413,7.658-17.067,17.067-17.067s17.067,7.654,17.067,17.067v51.2
                        c0,9.413-7.658,17.067-17.067,17.067s-17.067-7.654-17.067-17.067V34.133z M170.667,494.933H34.133
                        c-4.708,0-8.533-3.829-8.533-8.533v-85.333h145.067V494.933z M170.667,384H25.6V281.6h145.067V384z M170.667,264.533H25.6
                        v-93.867h145.067V264.533z M324.267,494.933H187.733v-93.867h136.533V494.933z M324.267,384H187.733V281.6h136.533V384z
                        M324.267,264.533H187.733v-93.867h136.533V264.533z M486.4,486.4c0,4.704-3.825,8.533-8.533,8.533H341.333v-93.867H486.4V486.4z
                        M486.4,384H341.333V281.6H486.4V384z M486.4,264.533H341.333v-93.867H486.4V264.533z M486.4,153.6H25.6V76.8
                        c0-4.704,3.825-8.533,8.533-8.533h59.733v17.067c0,18.821,15.308,34.133,34.133,34.133s34.133-15.313,34.133-34.133V68.267
                        h187.733v17.067c0,18.821,15.308,34.133,34.133,34.133c18.825,0,34.133-15.313,34.133-34.133V68.267h59.733
                        c4.708,0,8.533,3.829,8.533,8.533V153.6z" fill="#f47a55" data-original="#f47a55" class=""></path>
                            <path d="M395.033,372.967c1.667,1.667,3.85,2.5,6.033,2.5c2.183,0,4.367-0.833,6.033-2.5l68.267-68.267
                        c3.333-3.333,3.333-8.733,0-12.067c-3.333-3.333-8.733-3.333-12.067,0l-62.233,62.233l-28.1-28.1
                        c-3.333-3.333-8.733-3.333-12.067,0c-3.333,3.333-3.333,8.733,0,12.067L395.033,372.967z" fill="#f47a55" data-original="#f47a55" class=""></path>
                        </svg>
                        <div class="ml-3 date-availability w-100 position-relative">
                            <div class="position-absolute date-placeholder" ref="datePlaceholder">
                                <span ref="checkIn">Check-in</span>
                                <b-icon icon="arrow-right" class="mx-3"></b-icon>
                                <span ref="checkOut">Check-out</span>
                            </div>

                            <date-range-picker ref="picker" :date-range="dateRange" :ranges="false" :min-date="minDate" class="w-100" @start-selection="startSelection($event)" @finish-selection="finishSelection($event)" @toggle="hideShow($event)">
                                <div class="drp-buttons" slot="footer" slot-scope="data">
                                    <span class="drp-selected"> {{ data.rangeText }} </span>
                                    <button type="button" class="border-0 lh-1 ml-3 px-4 py-2 rounded-pill text-white btn-secondary" @click="pickerUpdate(data)">Cancel </button>
                                    <button type="button" class="border-0 btn-info lh-1 ml-3 px-4 py-2 rounded-pill text-white" @click="data.clickApply">Apply</button>
                                </div>
                            </date-range-picker>

                        </div>
                    </b-col>

                    <b-col class="form-guest d-flex align-items-center justify-content-xl-center pt-xl-2 pt-lg-3 py-2" xl="3" lg="6">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="24" height="24" x="0" y="0" viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 24 24" xml:space="preserve" class="">
                            <path d="M244.587,241.557c32.128-18.389,54.08-52.629,54.08-92.224c0-58.816-47.851-106.667-106.667-106.667
                          S85.333,90.517,85.333,149.333c0,39.595,21.952,73.835,54.08,92.224C59.051,262.656,0,330.603,0,411.136v26.197
                          C0,443.221,4.779,448,10.667,448s10.667-4.779,10.667-10.667v-26.197C21.333,325.611,97.899,256,192,256
                          s170.667,69.611,170.667,155.136v26.197c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667v-26.197
                          C384,330.603,324.949,262.635,244.587,241.557z M106.667,149.333C106.667,102.272,144.939,64,192,64s85.333,38.272,85.333,85.333
                          c0,47.061-38.272,85.333-85.333,85.333S106.667,196.395,106.667,149.333z" fill="#f47a55" data-original="#f47a55" class=""></path>
                            <path d="M388.224,241.835c23.125-15.296,38.443-41.451,38.443-71.168c0-47.061-38.272-85.333-85.333-85.333
                          c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667c35.285,0,64,28.715,64,64s-28.715,64-64,64
                          c-5.888,0-10.667,4.779-10.667,10.667S335.445,256,341.333,256c70.592,0,128,53.056,128,118.293v20.373
                          c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667v-20.373
                          C490.667,312.64,447.659,260.267,388.224,241.835z" fill="#f47a55" data-original="#f47a55" class=""></path>
                        </svg>
                        <div class="ml-3">
                            <div class="ml-3 align-items-center d-flex">
                                <label class="text-dark m-0">Guests</label>
                                <b-form-spinbutton id="demo-sb" v-model="guest" min="1" max="10" class="border-0 text-dark p-0 w-100 ml-3"></b-form-spinbutton>
                            </div>
                        </div>
                    </b-col>

                    <b-col class="my-auto pr-lg-2 pr-3 pt-xl-0 pt-lg-3" xl="3" lg="6">
                        <b-button pill variant="info" class="w-100 text-white lh-1 py-4 ls-1 fs-5 mt-lg-0 mt-3" to="/search">See What's Available</b-button>
                    </b-col>
                </b-row>

            </b-form>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import Select2 from 'v-select2-component';
// import 'vue-datepicker-ui/lib/vuedatepickerui.css';
// import Datepicker from 'vue-datepicker-ui';

import DateRangePicker from 'vue2-daterange-picker'
//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
    components: {
        Select2,
        // Datepicker,
        DateRangePicker
    },
    data() {
        return {
            guest: 2,
            location: 'London',
            options: [{
                    id: 'london',
                    text: 'London'
                },
                {
                    id: 'bristol',
                    text: 'Bristol'
                },
                {
                    id: 'leicester',
                    text: 'Leicester'
                },
                {
                    id: 'manchester',
                    text: 'Manchester'
                }
            ],
            dateRange: {
                startDate: null,
                endDate: null
            },
            minDate: new Date(),
            daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    },
    props: {
        formContClass: String
    },
    mounted() {
        //console.log(Select2);

    },
    methods: {
        startSelection(data) {
            var checkInDate = data;
            if (checkInDate != null) {
                // var checkInDateFormated =  new Date(checkInDate);
                var completeCheckInDate = this.daysOfWeek[checkInDate.getDay()] + ', ' + this.monthNames[parseInt(checkInDate.getMonth() + 1)] + ' ' + checkInDate.getDate()
                this.$refs.checkIn.textContent = completeCheckInDate;
            } else {
                this.$refs.checkIn.textContent = 'Check-in';
            }
        },
        finishSelection(data) {
            var checkOutDate = data;
            if (checkOutDate != null) {
                var completeCheckOutDate = this.daysOfWeek[checkOutDate.getDay()] + ', ' + this.monthNames[parseInt(checkOutDate.getMonth() + 1)] + ' ' + checkOutDate.getDate()
                this.$refs.checkOut.textContent = completeCheckOutDate;
            } else {
                this.$refs.checkOut.textContent = 'Check-out';
            }
        },
        hideShow(data) {
            if (data == true) {
                this.$refs.datepickerCol.classList.add("bg-primary", "date-picker-open");
            } else {
                this.$refs.datepickerCol.classList.remove("bg-primary", "date-picker-open");
            }
        },
        pickerUpdate(data) {
            console.log(data)
            this.$refs.checkIn.textContent = 'Check-in';
            this.$refs.checkOut.textContent = 'Check-out';
            data.clickCancel()
        },
        onSelectOpen() {
            this.$refs.select_location_col.classList.add("bg-primary", "select-open-col");
        },
        onSelectClose() {
            this.$refs.select_location_col.classList.remove("bg-primary", "select-open-col");
        }
    }
}
</script>

<style lang="scss" scoped>
.form_label {
    display: flex;
    justify-content: center;
    align-items: center;
}
.b-form-spinbutton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
}
.select_location svg+div {
    width: calc(100% - 46px);
}
.HomeForm.container {
    position: relative;
    top: -50px;
    z-index: 9;
}

@media only screen and (max-width: 1399px) and (min-width: 1200px) {
    .ch_search_form form .pl-xl-5 {
        padding-left: 20px !important;
    }
}

@media only screen and (max-width: 1199px) {
    .datepicker-col {
        border-right: 0;
    }
    .form-guest {
        border-top: 1px solid #cccccc;
    }
    .form-guest+div {
        border-top: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
    }
}
@media only screen and (max-width: 991px) {
  .form-guest+div, .datepicker-col {
        border-left: none;
    }
    .datepicker-col{
      border-top: 1px solid #cccccc;
    }
    .ch_search_form form{
      border-radius: 0 !important;
    }
    .ch_search_form.container {      
      top: 0;
    }
}
</style>
<style lang="css">
/*svg.bi-calendar ,.svg {
  position: absolute;
  top: 30px;
  fill: #f69679;
  right: 90%;
}*/

.b-form-spinbutton output {
    border: none !important;
}

svg.bi-calendar:hover {
    position: absolute;
    top: 30px;
    fill: var(--var-primary-color);
    right: 90%;
}

.v-calendar .input-field input {
    background-color: transparent;
}

.v-calendar .input-field svg.datepicker {
    fill: var(--var-primary-color);
}

/* .date-availability > div {
    top: 22px;
} */
.datePicker_input {
    opacity: 0;
}

.datepicker-col {
    border-right: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
}



.select2-container--open .select2-selection--single .select2-selection__placeholder,
.select2-container--open .select2-selection--single .select2-selection__rendered,
.select-open-col .text-dark,
.date-picker-open .date-placeholder {
    color: #fff;
}

.select-open-col svg.location_icon path,
.date-picker-open svg path {
    fill: #ffffff;
}

.date-placeholder {
    top: 10px;
}

.reportrange-text {
    opacity: 0;
}

/* .select2-container--default .select2-selection--single .select2-selection__rendered .select2-selection__placeholder{
  color: #000000;
} */
</style>

<!-- {
  "contact_form_id":1192,
  "status":"validation_failed",
  "message":"Please confirm all required fields are filled and submit it again.",
  "invalid_fields":[
     {
        "field":"abcd",
        "message":"Please fill in the required field.",
        "idref":null,
        "error_id":"wpcf7-f1192-p737-o1-ve-abcd"
     }
  ],
  "posted_data_hash":"",
  "into":"#wpcf7-f1192-p737-o1"
} -->
