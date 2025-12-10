<template>
  <div class="position-relative">
    <!-- Slider avec superposition des domaines -->
    <div class="hero-container">
      <!-- Slider principal -->
      <div class="intro-slider">
        <swiper
          :speed="4000"
          :loop="true"
          :effect="'fade'"
          :navigation="{
            nextEl: '.home-slider-next',
            prevEl: '.home-slider-prev',
          }"
          :autoplay="{ delay: 10000 }"
        >
          <swiper-slide v-for="(banner, index) in sliderData" :key="index">
            <div
              class="intro-section overlay bg-cover"
              :style="{ backgroundImage: `url(${banner.bgImgSrc})` }"
            >
              <div class="background-overlay"></div>
              <div class="content-overlay"></div>

              <div class="container h-100">
                <div class="row justify-content-center align-items-center h-100">
                  <div class="col-xl-8 col-lg-10 col-md-12 text-center">
                    <div class="intro-content centered-content">
                      <h2 class="title">{{ banner.heading }}</h2>
                      <p class="description" v-if="!banner.fromDatabase && index === 0">
                        {{ getSecondSlideDescription() }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- Navigation buttons -->
          <div class="home-slider-prev swiper-button-prev main-slider-nav">
            <i class="fa fa-angle-left"></i>
          </div>
          <div class="home-slider-next swiper-button-next main-slider-nav">
            <i class="fa fa-angle-right"></i>
          </div>
        </swiper>
      </div>

      <!-- Domaines SUPERPOSÉS SEULEMENT SUR DESKTOP -->
      <div class="domains-iceberg-overlay">
        <div class="container-fluid">
          <div class="row justify-content-center domains-row">
            <div v-for="(domain, idx) in domains" :key="idx" class="domain-col">
              <div class="domain-card-iceberg">
                <div class="domain-card-body">
                  <div class="domain-icon">
                    <i :class="domain.iconClass"></i>
                  </div>
                  <h4 class="domain-title">{{ domain.title }}</h4>
                  <div class="domain-link">
                    <a :href="domain.link" class="link-gradient" target="_blank">
                      En savoir plus <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper/core";

SwiperCore.use([Navigation, EffectFade, Autoplay]);

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import config from "~~/config";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      img_url_back: null,
      swiperOptions: {
        navigation: {
          nextEl: ".home-slider-next",
          prevEl: ".home-slider-prev",
        },
      },

      sliderData: [
        {
          id: 1,
          heading: "ANGE, le service par excellence de gestion environnementale au Togo",
          bgImgSrc: "/images/bg/bg-ange-03.jpg",
          slug: "",
          fromDatabase: false,
        },
      ],

      domains: [
        {
          iconClass: "fa fa-file-alt",
          title: "Projets soumis à étude d'impact environnemental et social",
          link: "/projets-soumis",
          linkText: "En savoir plus",
        },
        {
          iconClass: "fa fa-cogs",
          title: "Procédures, délais et coûts d'obtention des autorisations",
          link: "/obtentions-des-autorisations",
          linkText: "En savoir plus",
        },
        {
          iconClass: "fa fa-user",
          title: "Demande de service en ligne",
          link:
            "https://service-public.gouv.tg/service/672142cb7bacb864efe779f0/licences-agrements-certificats/demande-du-certificat-de-conformite-environnementale",
          linkText: "En savoir plus",
        },
        {
          iconClass: "fa fa-user-check",
          title: "Consultants agréés",
          link: "/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf",
          linkText: "En savoir plus",
        },
      ],

      secondSlideDescription:
        "Nous servons d'institution d'appui à la mise en œuvre de la politique nationale de l'environnement",
    };
  },

  mounted() {
    this.fetchBlogData();
    this.img_url_back = config.app_back_url_img;
  },

  methods: {
    async fetchBlogData() {
      try {
        const response = await this.$axios.get("/blogs/liste");
        const blogs = response.data.data;

        this.sliderData = [];

        blogs.forEach((blog) => {
          this.sliderData.push({
            id: this.sliderData.length + 1,
            heading: blog.titre || "",
            slug: blog.slug,
            bgImgSrc:
              this.img_url_back + "/" + blog.images[0].url || "/images/bg/bg_o3.jpg",
            fromDatabase: true,
          });
        });

        if (this.sliderData.length === 0) {
          this.sliderData = [
            {
              id: 1,
              heading:
                "ANGE, le service par excellence de gestion environnementale au Togo",
              bgImgSrc: "/images/bg/bg-ange-03.jpg",
              slug: "",
              fromDatabase: false,
            },
          ];
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des blogs:", error);
        this.sliderData = [
          {
            id: 1,
            heading:
              "ANGE, le service par excellence de gestion environnementale au Togo",
            bgImgSrc: "/images/bg/bg-ange-03.jpg",
            slug: "",
            fromDatabase: false,
          },
        ];
      }
    },

    getSecondSlideDescription() {
      return this.secondSlideDescription;
    },
  },
};
</script>

<style scoped>
.position-relative {
  position: relative;
  width: 100%;
  padding-top: 0px;
}

.hero-container {
  position: relative;
  width: 100%;
  overflow: visible;
}

/* SLIDER */
.intro-slider {
  position: relative;
  width: 100%;
  height: 400px !important;
}

.intro-section {
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

/* Overlays pour contraste */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

/* Contenu du slider */
.container.h-100 {
  height: 100%;
  position: relative;
  z-index: 3;
}

.intro-content.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 20px;
}

.title {
  color: white;
  font-size: 22px !important;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
}

.description {
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* DOMAINES ICEBERG - SUPERPOSITION SEULEMENT SUR DESKTOP */
.domains-iceberg-overlay {
  position: absolute; /* Par défaut pour desktop */
  bottom: -60px;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  box-sizing: border-box;
}

.container-fluid {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1200px; /* Largeur max pour centrer le contenu */
}

.domains-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap; /* Par défaut : pas de wrap */
  gap: 15px;
  width: 100%;
  margin: 0;
  margin-top: -340px;
  padding: 0 15px;
  box-sizing: border-box;
}

.domain-col {
  flex: 1;
  min-width: 0;
  max-width: 25%;
}

/* Cartes des domaines */
.domain-card-iceberg {
  background: #0b9dd1;
  color: white;
  border: none;
  border-radius: 0;
  transition: all 0.3s ease;
  height: 200px !important;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100%;
}

.domain-card-iceberg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00a8ff, #00ffaa, #00a8ff);
  z-index: 1;
}

.domain-card-iceberg:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(11, 157, 209, 0.5);
}

.domain-card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px 12px;
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 2;
}

.domain-icon {
  font-size: 1.8rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.domain-card-iceberg:hover .domain-icon {
  transform: scale(1.1);
}

.domain-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 15px;
  color: white;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.domain-link {
  margin-top: auto;
  flex-shrink: 0;
}

.link-gradient {
  font-weight: bold;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.link-gradient:hover {
  text-decoration: underline;
  transform: translateX(5px);
}

/* Navigation buttons */
.main-slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  cursor: pointer;
}

.home-slider-prev {
  left: 15px; /* Même marge que le contenu */
}

.home-slider-next {
  right: 15px; /* Même marge que le contenu */
}

.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: rgba(0, 0, 0, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.swiper-button-prev i,
.swiper-button-next i {
  font-size: 1.5rem;
  font-weight: bold;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 118, 8, 0.9);
  border-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
}

/* RESPONSIVE DESIGN */

/* Desktop Large (≥1400px) - SUPERPOSITION ICEBERG */
@media (min-width: 1400px) {
  .hero-container {
    height: 550px;
  }

  .intro-slider {
    height: 550px;
  }

  .domains-iceberg-overlay {
    bottom: -70px;
  }

  .container-fluid {
    max-width: 1320px; /* Bootstrap xxl */
    padding: 0 20px;
  }

  .domains-row {
    padding: 0 20px;
  }

  .domain-card-iceberg {
    height: 180px;
  }

  .domain-card-body {
    padding: 20px 15px;
  }

  .domain-title {
    font-size: 16px;
    -webkit-line-clamp: 4;
  }

  .title {
    font-size: 2.2rem !important;
  }
}

/* Desktop (≥1200px) - SUPERPOSITION ICEBERG */
@media (min-width: 1200px) {
  .hero-container {
    height: 500px;
  }

  .intro-slider {
    height: 500px;
  }

  .domains-iceberg-overlay {
    bottom: -60px;
  }

  .container-fluid {
    max-width: 1140px; /* Bootstrap xl */
    padding: 0 15px;
  }

  .domains-row {
    gap: 20px;
    flex-wrap: nowrap; /* 4 sur même ligne */
    padding: 0 15px;
  }

  .domain-col {
    flex: 0 0 calc(25% - 20px);
    max-width: calc(25% - 20px);
  }

  .domain-card-iceberg {
    height: 170px;
  }

  .domain-title {
    font-size: 15px;
    -webkit-line-clamp: 3;
  }
}

/* Desktop moyen (992px - 1199px) - SUPERPOSITION ICEBERG */
@media (max-width: 1199px) and (min-width: 992px) {
  .hero-container {
    height: 450px;
  }

  .intro-slider {
    height: 450px;
  }

  .domains-iceberg-overlay {
    bottom: -55px;
  }

  .container-fluid {
    max-width: 960px; /* Bootstrap lg */
    padding: 0 15px;
  }

  .domains-row {
    gap: 15px;
    flex-wrap: nowrap; /* 4 sur même ligne */
    padding: 0 15px;
    margin-top: 100px !important;
  }

  .domain-col {
    flex: 0 0 calc(25% - 15px);
    max-width: calc(25% - 15px);
  }

  .domain-card-iceberg {
    height: 160px;
  }

  .domain-card-body {
    padding: 15px 10px;
  }

  .domain-title {
    font-size: 14px;
    -webkit-line-clamp: 3;
    margin-bottom: 12px;
  }

  .domain-icon {
    font-size: 1.6rem;
    margin-bottom: 8px;
  }

  .title {
    font-size: 1.8rem !important;
  }

  .description {
    font-size: 1rem;
  }

  .link-gradient {
    font-size: 0.85rem;
  }

  .home-slider-prev {
    left: 10px;
  }

  .home-slider-next {
    right: 10px;
  }
}

/* TABLETTE (768px - 991px) - PAS DE SUPERPOSITION, 2x2 GRID */
@media (max-width: 991px) and (min-width: 768px) {
  .hero-container {
    margin-bottom: 0;
    height: auto; /* Hauteur automatique */
  }

  .intro-slider {
    height: 400px; /* Hauteur réduite sur tablette */
    position: relative;
    margin-bottom: 30px; /* Espace entre slider et cartes */
  }

  .domains-iceberg-overlay {
    position: relative; /* IMPORTANT: plus en absolute */
    bottom: 0;
    margin-top: 0;
    margin-bottom: 30px;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .container-fluid {
    max-width: 720px; /* Bootstrap md */
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .domains-row {
    flex-wrap: wrap; /* IMPORTANT: wrap activé */
    gap: 15px;
    margin-top: -150px;

    justify-content: center;
    padding: 0; /* Reset padding sur tablette */
  }

  .domain-col {
    flex: 0 0 calc(50% - 15px);
    max-width: calc(50% - 15px);
  }

  .domain-card-iceberg {
    height: 160px;
  }

  .domain-card-body {
    padding: 15px 12px;
  }

  .domain-title {
    font-size: 14px;
    -webkit-line-clamp: 3;
    margin-bottom: 12px;
  }

  .domain-icon {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }

  .title {
    font-size: 1.7rem !important;
  }

  .description {
    font-size: 1rem;
  }

  .link-gradient {
    font-size: 0.85rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 45px;
    height: 45px;
  }

  .home-slider-prev {
    left: 10px;
  }

  .home-slider-next {
    right: 10px;
  }
}

/* MOBILE PAYSAGE (600px - 767px) - PAS DE SUPERPOSITION, 2x2 GRID COMPACT */
@media (max-width: 767px) and (min-width: 600px) {
  .hero-container {
    height: auto;
  }

  .intro-slider {
    height: 380px;
    margin-bottom: 25px;
  }

  .position-relative {
    padding-top: 40px;
  }

  .domains-iceberg-overlay {
    position: relative;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 25px;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .container-fluid {
    max-width: 540px; /* Bootstrap sm */
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .domains-row {
    flex-wrap: wrap;
    gap: 12px;
    padding: 0; /* Reset padding */
  }

  .domain-col {
    flex: 0 0 calc(50% - 12px);
    max-width: calc(50% - 12px);
  }

  .domain-card-iceberg {
    height: 150px;
  }

  .domain-card-body {
    padding: 12px 10px;
  }

  .domain-title {
    font-size: 13px;
    -webkit-line-clamp: 3;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .domain-icon {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  .title {
    font-size: 1.6rem !important;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .description {
    font-size: 0.95rem;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .link-gradient {
    font-size: 0.8rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
  }

  .home-slider-prev {
    left: 8px;
  }

  .home-slider-next {
    right: 8px;
  }
}

/* MOBILE PORTRAIT (≤599px) - PAS DE SUPERPOSITION, 1 COLONNE */
@media (max-width: 599px) {
  .hero-container {
    height: auto;
  }

  .intro-slider {
    height: 350px;
    margin-bottom: 20px;
  }

  .position-relative {
    padding-top: 30px;
  }

  .domains-iceberg-overlay {
    position: relative;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 20px;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .container-fluid {
    max-width: 100%;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .domains-row {
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: column; /* 1 colonne */
    padding: 0; /* Reset padding */
  }

  .domain-col {
    flex: 0 0 100%; /* 1 carte par ligne = 100% */
    max-width: 100%;
  }

  .domain-card-iceberg {
    height: 140px;
  }

  .domain-card-body {
    padding: 15px 20px;
    flex-direction: row; /* Layout horizontal sur mobile */
    align-items: center;
    text-align: left;
  }

  .domain-icon {
    font-size: 1.6rem;
    margin-bottom: 0;
    margin-right: 15px;
    flex-shrink: 0;
    width: 40px;
    text-align: center;
  }

  .domain-title {
    font-size: 14px;
    -webkit-line-clamp: 2; /* 2 lignes max en layout horizontal */
    margin-bottom: 0;
    flex-grow: 1;
    padding-right: 10px;
  }

  .domain-link {
    margin-top: 0;
    flex-shrink: 0;
  }

  .link-gradient {
    font-size: 0.85rem;
    white-space: nowrap;
  }

  .title {
    font-size: 1.5rem !important;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  .description {
    font-size: 0.9rem;
    padding: 0 15px; /* MARGES SYMÉTRIQUES */
  }

  /* Masquer navigation sur mobile */
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

@media (max-width: 480px) {
  .intro-slider {
    height: 320px;
  }

  /* .domain-card-iceberg{
    display:flex;
    flex-direction: row;

    background:red;
  } */

  .domains-iceberg-overlay {
    padding: 0 12px; /* MARGES SYMÉTRIQUES réduites */
  }

  .container-fluid {
    padding: 0 12px; /* MARGES SYMÉTRIQUES réduites */
  }

  .domains-row {
    margin-top: 50px;
  }

  .domain-card-iceberg {
    height: 130px;
    margin-bottom: 10px;
  }

  .domain-card-body {
    padding: 12px 15px;
  }

  .domain-icon {
    font-size: 1.4rem;
    margin-right: 12px;
    width: 35px;
  }

  .domain-title {
    font-size: 13px;
    -webkit-line-clamp: 2;
  }

  .link-gradient {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.4rem !important;
    padding: 0 12px;
  }

  .description {
    font-size: 0.85rem;
    padding: 0 12px;
  }
}

/* Très petits mobiles (≤375px) */
@media (max-width: 375px) {
  .position-relative {
    padding-top: 0px;
  }

  .intro-slider {
    height: 300px;
  }

  .domains-iceberg-overlay {
    padding: 0 10px;
  }

  .container-fluid {
    padding: 0 10px; /* MARGES SYMÉTRIQUES minimales */
  }

  .domain-card-iceberg {
    height: 120px;
    margin-top: -120px;
    margin-bottom: 60px;
  }

  .domains-row {
    margin-top: 40px;
  }

  .domain-card-body {
    padding: 10px 12px;
  }

  .domain-icon {
    font-size: 1.3rem;
    margin-right: 10px;
    width: 30px;
  }

  .domain-title {
    font-size: 12px;
  }

  .link-gradient {
    font-size: 0.75rem;
  }

  .title {
    font-size: 1.3rem !important;
    padding: 0 10px; /* MARGES SYMÉTRIQUES minimales */
  }

  .description {
    display: none;
  }
}

/* Amélioration du contenu dans les cartes */
.domain-card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Pour le layout horizontal sur mobile */
@media (max-width: 599px) {
  .domain-card-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

/* Ajustements pour les très petits textes */
.domain-title {
  word-break: break-word;
  hyphens: auto;
}

/* Correction pour s'assurer que le conteneur principal n'a pas de hauteur fixe sur mobile/tablette */
@media (max-width: 991px) {
  .position-relative {
    overflow: visible;
  }
}

/* Assure que tous les éléments ont la même marge */
* {
  box-sizing: border-box;
}
</style>
