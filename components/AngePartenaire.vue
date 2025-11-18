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
                  :modules="modules"
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

// Import correct pour Swiper v8+ - CORRIGÉ
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

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
      modules: [Autoplay],
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
  padding: 80px 0; 
}

.brand-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-list {
  width: 100%;
  height: 180px; 
  max-width: 1400px; 
  margin: 0 auto;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px; 
  padding: 25px; 
  background: transparent;
  border-radius: 12px; 
  transition: all 0.3s ease;
}

.brand:hover {
  transform: translateY(-8px);
  background: white;
}

.brand-image {
  max-width: 100%;
  max-height: 120px; /* Augmenté la hauteur max */
  min-height: 80px; /* Hauteur minimum */
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand:hover .brand-image {
  transform: scale(1.1); /* Zoom légèrement augmenté */
}

/* Centrage amélioré pour Swiper */
.swiper {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0; /* Padding ajouté */
}

.swiper-wrapper {
  display: flex;
  align-items: center;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

/* Responsive adjustments - TAILLES AUGMENTÉES */
@media (max-width: 1399px) {
  .brand-list {
    max-width: 1300px;
    height: 170px;
  }
  
  .brand {
    height: 150px;
    padding: 22px;
  }
  
  .brand-image {
    max-height: 110px;
    min-height: 75px;
  }
}

@media (max-width: 1199px) {
  .brand-section {
    padding: 70px 0;
  }
  
  .brand-list {
    max-width: 1100px;
    height: 160px;
  }
  
  .brand {
    height: 140px;
    padding: 20px;
  }
  
  .brand-image {
    max-height: 100px;
    min-height: 70px;
  }
}

@media (max-width: 991px) {
  .brand-section {
    padding: 60px 0;
  }
  
  .brand-list {
    max-width: 900px;
    height: 150px;
  }
  
  .brand {
    height: 130px;
    padding: 18px;
  }
  
  .brand-image {
    max-height: 90px;
    min-height: 65px;
  }
}

@media (max-width: 767px) {
  .brand-section {
    padding: 50px 0;
  }
  
  .brand-list {
    max-width: 700px;
    height: 140px;
  }
  
  .brand {
    height: 120px;
    padding: 15px;
  }
  
  .brand-image {
    max-height: 80px;
    min-height: 60px;
  }
}

@media (max-width: 575px) {
  .brand-section {
    padding: 40px 0;
  }
  
  .brand-list {
    max-width: 100%;
    padding: 0 20px;
    height: 130px;
  }
  
  .brand {
    height: 110px;
    padding: 12px;
  }
  
  .brand-image {
    max-height: 70px;
    min-height: 55px;
  }
}

@media (max-width: 374px) {
  .brand-section {
    padding: 35px 0;
  }
  
  .brand-list {
    height: 120px;
    padding: 0 15px;
  }
  
  .brand {
    height: 100px;
    padding: 10px;
  }
  
  .brand-image {
    max-height: 65px;
    min-height: 50px;
  }
}

/* Animation de chargement améliorée */
.spinner-grow {
  width: 2rem;
  height: 2rem;
  margin: 0 5px;
}
</style>