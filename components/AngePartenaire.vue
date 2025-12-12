<template>
  <div class="brand-section section-padding">
    <div class="container">
      <div class="row">
        <!-- Section title très compacte -->
        <div class="section-title" data-aos="fade-up">
          <p class="sub-title">&nbsp;</p>
        </div>

        <div v-if="isLoading" class="text-center loading-container">
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

        <div v-else class="content-wrapper">
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
                      <div class="image-container">
                        <img
                          :src="`${img_url_back}/${partenaire.image_link}`"
                          :alt="partenaire.libelle"
                          class="brand-image"
                          @load="handleImageLoad"
                          @error="handleImageError"
                        />
                      </div>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

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
            spaceBetween: 40,
          },
          // Desktop (1200px - 1399px)
          1200: {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          // Tablette paysage (992px - 1199px)
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // Tablette portrait (768px - 991px)
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // Mobile paysage (576px - 767px)
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Mobile portrait (480px - 575px)
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // Petit mobile (375px - 479px)
          375: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // Mobile extra small (< 375px)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
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

    handleImageLoad(event) {
      // Appliquer un traitement d'image via CSS
      const img = event.target;
      img.style.backgroundColor = "transparent";
    },

    handleImageError(event) {
      console.error("Erreur de chargement image:", event.target.src);
      event.target.src = "/images/placeholder-logo.png";
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
  padding: 15px 0 25px 0;
  margin-top: 80px;
  position: relative;
  z-index: 2;
}

.brand-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
}

.brand-list {
  width: 100%;
  height: 180px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  padding: 20px;
  background: transparent;
  transition: all 0.3s ease;
}

.brand:hover {
  transform: translateY(-5px);
}

/* SOLUTION RADICALE POUR LES FONDS BLANCS */
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f8f9fa !important; /* FORCER le fond */
  position: relative;
  overflow: hidden;
  padding: 15px;
}

/* TECHNIQUE AGGRESSIVE POUR SUPPRIMER LES FONDS BLANCS */
.brand-image {
  max-width: 100%;
  max-height: 130px;
  min-height: 90px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;

  /* MÉTHODE 1: Filtres avancés pour supprimer le blanc */
  filter: brightness(1.08) contrast(1.15) saturate(1.1)
    drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  /* MÉTHODE 2: Forcer la transparence */
  background: transparent !important;
  background-color: transparent !important;

  /* MÉTHODE 3: Mix blend mode radical */
  mix-blend-mode: darken;

  /* MÉTHODE 4: Isolation pour contrôle */
  isolation: isolate;

  /* MÉTHODE 5: Supprimer tout style inline */
  style: "";
}

/* Solution de secours pour images récalcitrantes */
.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f8f9fa;
  z-index: -1;
}

/* Couche supplémentaire pour cacher les bords blancs */
.image-container::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: #f8f9fa;
  z-index: -2;
}

.brand:hover .brand-image {
  transform: scale(1.1);
}

/* Centrage amélioré pour Swiper */
.swiper {
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
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

/* Section title très compacte */
.section-title {
  margin-bottom: 10px;
  min-height: 5px;
  height: 5px;
  padding: 0;
}

.section-title .sub-title {
  margin: 0;
  padding: 0;
  line-height: 1;
}

/* Conteneurs compacts */
.loading-container {
  margin: 8px 0;
  padding: 8px 0;
}

.content-wrapper {
  margin-top: 0;
  padding-top: 0;
}

/* STYLES SPÉCIFIQUES PAR TYPE D'IMAGE */
/* Pour les JPG avec fond blanc */
.brand-image[src*=".jpg"],
.brand-image[src*=".jpeg"] {
  mix-blend-mode: darken;
  filter: brightness(1.1) contrast(1.2) saturate(1.05)
    drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Pour les PNG (supposés avec transparence) */
.brand-image[src*=".png"] {
  mix-blend-mode: normal;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.05) contrast(1.1);
}

/* Pour les SVG */
.brand-image[src*=".svg"] {
  mix-blend-mode: normal;
  filter: brightness(1.05) contrast(1.1) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Responsive adjustments */
@media (max-width: 1399px) {
  .brand-section {
    margin-top: -70px;
    padding: 12px 0 22px 0;
  }

  .brand-list {
    max-width: 1300px;
    height: 170px;
  }

  .brand {
    height: 150px;
    padding: 18px;
  }

  .brand-image {
    max-height: 120px;
    min-height: 85px;
  }
}

@media (max-width: 1199px) {
  .brand-section {
    margin-top: -50px;
    padding: 10px 0 20px 0;
  }

  .brand-list {
    max-width: 1100px;
    height: 160px;
  }

  .brand {
    height: 140px;
    padding: 16px;
  }

  .brand-image {
    max-height: 110px;
    min-height: 80px;
  }
}

@media (max-width: 991px) {
  .brand-section {
    margin-top: -30px;
    padding: 8px 0 18px 0;
  }

  .brand-list {
    max-width: 900px;
    height: 150px;
  }

  .brand {
    height: 130px;
    padding: 14px;
  }

  .brand-image {
    max-height: 100px;
    min-height: 75px;
  }
}

@media (max-width: 767px) {
  .brand-section {
    margin-top: -15px;
    padding: 5px 0 15px 0;
  }

  .brand-list {
    max-width: 700px;
    height: 140px;
  }

  .brand {
    height: 120px;
    padding: 12px;
  }

  .brand-image {
    max-height: 90px;
    min-height: 70px;
  }

  .image-container {
    padding: 10px;
  }
}

@media (max-width: 575px) {
  .brand-section {
    margin-top: -8px;
    padding: 3px 0 12px 0;
  }

  .brand-list {
    max-width: 100%;
    padding: 0 10px;
    height: 130px;
  }

  .brand {
    height: 110px;
    padding: 10px;
  }

  .brand-image {
    max-height: 80px;
    min-height: 65px;
  }

  .image-container {
    padding: 8px;
  }

  .swiper {
    padding: 10px 0;
  }
}

@media (max-width: 374px) {
  .brand-section {
    margin-top: -5px;
    padding: 2px 0 10px 0;
  }

  .brand-list {
    height: 120px;
    padding: 0 8px;
  }

  .brand {
    height: 100px;
    padding: 8px;
  }

  .brand-image {
    max-height: 75px;
    min-height: 60px;
  }

  .image-container {
    padding: 6px;
  }
}

/* Pour les très grands écrans */
@media (min-width: 1600px) {
  .brand-section {
    margin-top: -90px;
    padding: 20px 0 30px 0;
  }

  .brand-list {
    height: 200px;
  }

  .brand {
    height: 180px;
  }

  .brand-image {
    max-height: 150px;
    min-height: 110px;
  }
}

/* Animation de chargement compacte */
.spinner-grow {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 3px;
}

/* Assurer que ça ne chevauche pas sur mobile */
@media (max-width: 767px) {
  .brand-section {
    z-index: 1;
  }
}
</style>
