<template>
    <div class="my-4">
      <b-row class="mb-4">
        <b-col sm="6">
          <h3>Booking</h3>
        </b-col>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
        <b-col sm="4" class="ml-auto">
          <b-form-group
            label="Filter"
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>

              <!-- <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append> -->
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-table striped hover
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        
      >
      <template #cell(action)>
        <a href="javascript:;" class="text-center d-block" id="show-btn" @click="$bvModal.show('bv-modal-example')">
          <b-icon-eye></b-icon-eye>
        </a>
      </template>
      </b-table>

      <b-col lg="6" class="ml-auto mt-4">
      <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>


      <!-- modal -->
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title>
          Booking #4875632
        </template>
        <div class="d-block pl-4">
          <h3>Booking #4875632</h3>
          <ul class="navbar-nav text-left mt-3">
            <li class="mb-3"><strong>Name: </strong>Wilson</li>
            <li class="mb-3"><strong>Email: </strong>info@example.com</li>
            <li class="mb-3"><strong>Start Date: </strong>28 Feb, 2023</li>
            <li class="mb-3"><strong>End Date: </strong>28 Feb, 2023</li>
          </ul>
          <b-button class="mt-2 mb-4" @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
        </div>
      </b-modal>
      <!-- modal -->
    </div>

    
  </template>
  
  <script>
    export default {
      data() {
        return {
          // Note `isActive` is left out and will not appear in the rendered table
          fields: ['booking_id', 'start_date_end_date', 'name', 'email', 'action'],
          items: [
            { isActive: true, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Macdonald', email: 'info@example.com' },
            { isActive: false, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Shaw', email: 'info@example.com' },
            { isActive: false, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Wilson', email: 'info@example.com' },
            { isActive: true, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Carney', email: 'info@example.com' },
            { isActive: true, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Macdonald', email: 'info@example.com' },
            { isActive: false, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Shaw', email: 'info@example.com' },
            { isActive: false, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Wilson', email: 'info@example.com' },
            { isActive: true, start_date_end_date: '28 Feb, 2023 - 04 Mar, 2023', booking_id: '483512', name: 'Carney', email: 'info@example.com' }
          ],
          totalRows: 1,
          currentPage: 1,
          perPage: 5,
          filter: null,
          filterOn: [],
        }
      },
      mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length
      },
      // onFiltered(filteredItems) {
      //   // Trigger pagination to update the number of buttons/pages due to filtering
      //   this.totalRows = filteredItems.length
      //   this.currentPage = 1
      // }
    }
  </script>

<style scoped>
ul >>> .page-item.active .page-link {
  background-color: var(--var-primary-color);
  border-color: var(--var-primary-color);
}
</style>