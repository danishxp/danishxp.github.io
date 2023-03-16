<template>
  <section class="mt-5 pt-5 bg-light-pink">
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12" class="w-100 mx-auto">
          <h2 class="mb-5 ">The Chapter Hotel</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.4927343102962!2d12.474352371099027!3d41.892915991092025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6049238630f3%3A0x917f33d4784deb98!2sHotel%20Chapter%20Roma!5e0!3m2!1sen!2s!4v1674720067562!5m2!1sen!2s"
            width="100%"
            height="600"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </b-col>
        <b-col class="mt-5">
          <h3>Bayswater</h3>
          <p class="col-xl-6 pl-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            alias quae, debitis ducimus impedit architecto modi sequi
            distinctio. Ab aspernatur hic sequi harum omnis, dolorum id enim
            ipsa placeat dignissimos!
          </p>
        </b-col>
      </b-row>
      <b-row class="pb-5">
        <b-col cols="12" xl="3" sm="6" v-for="box in boxes" :key="box.title" class="mb-3">
          <b-card
            class="border-0 shadow-sm"
            header-bg-variant="info"
            header-text-variant="white"
            border-variant="secondary"
            header="Address"
            header-border-variant="white"
            align="center"
            text-variant="black"
          >
            <template slot="header" class="">
              <div class="d-flex justify-content-center align-items-center">
                <div v-html="box.svg"></div>
                <h5 class="m-0 pl-2">{{ box.title }}</h5>
              </div>
            </template>
            <b-card-text>{{ box.content }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>

export default {
  data() {
    return {
      boxes: [
        {
          svg: '<svg fill="#fff" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="Icon_icon__qr5nN IconText_icon__HeB5f Icon_deepGreen__lih4K" aria-hidden="true"><path d="M15.83.08 8.17 3.19 1.83.62A1.13 1.13 0 0 0 .58.67 1.36 1.36 0 0 0 0 1.85v18A1.28 1.28 0 0 0 .83 21l7.34 3 7.66-3.11 6.34 2.57a1.33 1.33 0 0 0 1.25-.13 1.31 1.31 0 0 0 .58-1.09V3.39ZM23 22.24a.32.32 0 0 1-.14.26.33.33 0 0 1-.31 0l-6.72-2.72-7.15 2.9V6h-1v16.72L1.2 20.09a.33.33 0 0 1-.2-.21v-18a.39.39 0 0 1 .14-.35.35.35 0 0 1 .19-.06s.08 0 .12.11l6.72 2.69 7.25-2.94v16.75h1V1.4L23 4.07Z"></path></svg>',
          title: "Address",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          svg: '<svg fill="#fff" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="Icon_icon__qr5nN IconText_icon__HeB5f Icon_deepGreen__lih4K"><path d="M21 18.52V6.79a4.76 4.76 0 0 0-4-4.69V0h-1v2H9V0H8v2.1a4.76 4.76 0 0 0-4 4.69v11.73A1.5 1.5 0 0 0 5.53 20h1.58l-2.27 4H6l.56-1h12l.56 1h1.17L18 20h1.52A1.5 1.5 0 0 0 21 18.52ZM8.79 3h7.46A3.77 3.77 0 0 1 20 6.79V11H5V6.79A3.77 3.77 0 0 1 8.79 3ZM5 18.52V12h15v6.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.48ZM18 22H7.13l1.13-2h8.6Zm-8.97-6.97a1 1 0 1 0 0 2 1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path></svg>',
          title: "Public Transport",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          svg: '<svg fill="#fff" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="Icon_icon__qr5nN IconText_icon__HeB5f Icon_deepGreen__lih4K"><path d="M15.83.08 8.17 3.19 1.83.62A1.13 1.13 0 0 0 .58.67 1.36 1.36 0 0 0 0 1.85v18A1.28 1.28 0 0 0 .83 21l7.34 3 7.66-3.11 6.34 2.57a1.33 1.33 0 0 0 1.25-.13 1.31 1.31 0 0 0 .58-1.09V3.39ZM23 22.24a.32.32 0 0 1-.14.26.33.33 0 0 1-.31 0l-6.72-2.72-7.15 2.9V6h-1v16.72L1.2 20.09a.33.33 0 0 1-.2-.21v-18a.39.39 0 0 1 .14-.35.35.35 0 0 1 .19-.06s.08 0 .12.11l6.72 2.69 7.25-2.94v16.75h1V1.4L23 4.07Z"></path></svg>',
          title: "Downtown",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          svg: '<svg fill="#fff" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="Icon_icon__qr5nN IconText_icon__HeB5f Icon_deepGreen__lih4K"><path fill-rule="evenodd" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24ZM1 12a11 11 0 0 1 22 0 11 11 0 0 1-11 11A11 11 0 0 1 1 12Zm13.24-5.5H7.75v12h1v-5h5.5a3.51 3.51 0 1 0 0-7h-.01Zm0 6H8.75v-5h5.5a2.51 2.51 0 1 1 0 5h-.01Z"></path></svg>',
          title: "Parking",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.bg-light-pink {
  background-color: #fffbf2;
}

.primary-color-orange {
  background-color: #e68264;
  color: white;
}

svg {
  fill: white;
}
</style>
