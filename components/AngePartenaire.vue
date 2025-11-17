<template>
  <div class="brand-section section-padding">
    <div class="container">
      <div class="row">
        <div class="section-title text-center d-flex flex-start" data-aos="fade-up">
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
                  :autoplay="{ delay: 2000, disableOnInteraction: false }"
                  :breakpoints="swiperOptions.breakpoints"
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
                        class="brand-image"
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

// Import correct pour Swiper v8+
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// Ou si ça ne marche pas, essayez cette syntaxe alternative :
// import SwiperCore, { Autoplay } from 'swiper';
// SwiperCore.use([Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      isLoading: false,
      partenaires: [],
      img_url_back: null,
      swiperOptions: {
        breakpoints: {
          // Grands écrans (≥1400px)
          1400: {
            slidesPerView: 6,
            spaceBetween: 40
          },
          // Desktop (1200px - 1399px)
          1200: {
            slidesPerView: 5,
            spaceBetween: 35
          },
          // Tablette paysage (992px - 1199px)
          992: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          // Tablette portrait (768px - 991px)
          768: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          // Mobile paysage (576px - 767px)
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // Mobile portrait (480px - 575px)
          480: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          // Petit mobile (375px - 479px)
          375: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          // Mobile extra small (< 375px)
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
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

<style scoped>
.brand-section {
  background: #f8f9fa;
  padding: 60px 0;
}

.brand-wrapper {
  width: 100%;
  overflow: hidden;
}

.brand-list {
  width: 100%;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  transition: all 0.3s ease;
}

.brand:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.brand-image {
  max-width: 100%;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand:hover .brand-image {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 1399px) {
  .brand {
    height: 110px;
    padding: 12px;
  }
  
  .brand-image {
    max-height: 75px;
  }
}

@media (max-width: 1199px) {
  .brand-section {
    padding: 50px 0;
  }
  
  .brand {
    height: 100px;
    padding: 10px;
  }
  
  .brand-image {
    max-height: 70px;
  }
}

@media (max-width: 991px) {
  .brand-section {
    padding: 40px 0;
  }
  
  .brand {
    height: 90px;
    padding: 8px;
  }
  
  .brand-image {
    max-height: 65px;
  }
}

@media (max-width: 767px) {
  .brand-section {
    padding: 30px 0;
  }
  
  .brand {
    height: 80px;
    padding: 6px;
  }
  
  .brand-image {
    max-height: 60px;
  }
}

@media (max-width: 575px) {
  .brand-section {
    padding: 25px 0;
  }
  
  .brand {
    height: 70px;
    padding: 5px;
  }
  
  .brand-image {
    max-height: 50px;
  }
}

@media (max-width: 374px) {
  .brand {
    height: 65px;
    padding: 4px;
  }
  
  .brand-image {
    max-height: 45px;
  }
}
</style>