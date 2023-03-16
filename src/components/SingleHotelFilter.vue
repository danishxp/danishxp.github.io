<template>
    <div class="available_rates_filter position-sticky top-0 bg-light-pink z-index-99" id="available_rates_filter">
      <b-container class="pt-3 sticky">
        <b-row class="border-bottom border-2 border-dark">
          <b-col class="d-flex justify-content-between p-0">

            <ul class="list-unstyled d-flex m-0 navigation">
              <li v-for="(section, index) in sections" :key="index" :class="{ active: section.isActive }" class="border-bottom-dark fs-4 mr-3 border-bottom-trasnparent">
                <a :href="'#' + section.id" class="p-3 pl-2 pr-3 d-inline-block text-decoration-none">{{ section.title }}</a>
              </li>
            </ul>

            <!-- <ul class="list-unstyled d-flex m-0 navigation">
              <li class="border-bottom-dark fs-4 mr-3 border-bottom-trasnparent" v-for="(section, index) in sections" :key="index" :class="{ active: activeSection === section.id }" @click.prevent="scrollToSection(section.id)">
                <a :href="'#' + section.id"  class="p-3 pl-2 pr-3 d-inline-block text-decoration-none">{{ section.title }}</a>
              </li>
            </ul> -->

            <!-- <ul class="list-unstyled d-flex m-0 navigation">
              <li class="active border-bottom-dark fs-4 mr-3 border-bottom-trasnparent">
                <a class="p-3 pl-2 pr-3 d-inline-block text-decoration-none" href="#overview">Overview</a>
              </li>
              <li class="border-bottom-dark fs-4 mr-3 border-bottom-trasnparent">
                <a href="#availabilityRates" class="p-3 pl-2 pr-3 d-inline-block text-decoration-none">Availability and rates</a>
              </li>
              <li class="border-bottom-dark fs-4 mr-3 border-bottom-trasnparent">
                <a href="#amenities" class="p-3 pl-2 pr-3 d-inline-block text-decoration-none">Amenities </a>
              </li>
              <li class="border-bottom-dark fs-4 mr-3 border-bottom-trasnparent">
                <a href="#bookingPolicies" class="p-3 pl-2 pr-3 d-inline-block text-decoration-none"> Booking policies </a>
              </li>
            </ul> -->
            <b-button class="btn btn-secondary lh-1 mb-2 mt-2 pl-4 pr-4 rounded-pill d-lg-block d-none"
              >Check Availability</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
  export default {
    data() {
    return {
      activeSection: null,
      sections: [
        { id: "overview", title: "Overview", isActive: false },
        { id: "availabilityRates", title: "Availability and rates", isActive: false },
        { id: "amenities", title: "Amenities", isActive: false },
        { id: "bookingPolicies", title: "Booking policies", isActive: false },
        // add more sections as needed
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sections = document.querySelectorAll(".single_section");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 90;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const index = this.sections.findIndex((s) => s.id === sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.sections[index].isActive = true;
        } else {
          this.sections[index].isActive = false;
        }
      });
    },
  }
  }
</script>

<style scoped>
.border-bottom {
  border-bottom: 3px solid #dee2e6 !important;
}
.border-bottom-dark:hover,
.border-bottom-dark.active{
border-bottom: 4px solid #e16743;
}

.border-bottom-trasnparent{
border-bottom: 4px solid transparent;
}
.available_rates_filter .list-unstyled {
    position: relative;
    top: 3px;
}
</style>