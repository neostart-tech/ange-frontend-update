<template>
  <div class="brand-section section-padding">
    <div class="container">
      <div class="row">
        <div class="section-title text-center" data-aos="fade-up">
          <h3 class="text-cnce fz-32" style="color: #285a43 !important">
            Nos partenaires
          </h3>
          <p class="sub-title">&nbsp;</p>
        </div>

        <div v-if="isLoading" class="text-center">
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div v-else>
          <div class="col-lg-12">
            <div class="brand-wrapper">
              <div class="brand-list">
                <swiper
                  :slides-per-view="5"
                  :space-between="30"
                  :speed="1000"
                  :loop="true"
                  :autoplay="{ delay: 2000 }"
                  :pagination="swiperOptions.pagination"
                  :centered-slides="true"
                >
                  <swiper-slide
                    class="brand"
                    v-for="(partenaire, index) in partenaires"
                    :key="index"
                  >
                    <NuxtLink :to="partenaire.link_web_site" target="_blank">
                      <img
                        :src="`${img_url_back}/${partenaire.image_link}`"
                        :alt="partenaire.libelle"
                        style="
                          max-width: 235px o !important;
                          max-height: 100.95px !important;
                        "
                      />
                    </NuxtLink>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~~/config";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper/core";
SwiperCore.use([Autoplay]);

// import brandData from '~/data/brand-logo.json'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      // brandData,
      isLoading: false,
      partenaires: [],
      img_url_back: null,
      swiperOptions: {
        breakpoints: {
          992: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        },
      },
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/partenaires/liste`);

        const data = await response.data.data;
        if (data) {
          this.partenaires = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  mounted() {
    this.img_url_back = config.app_back_url_img;
    this.fetchData();
  },
};
</script>
