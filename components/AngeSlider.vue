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
                <div
                  class="row justify-content-center align-items-center h-100"
                >
                  <div class="col-xl-8 col-lg-10 col-md-12 text-center">
                    <div class="intro-content centered-content">
                      <h5 class="slider-title">{{ banner.heading }}</h5>
                      <p
                        class="description"
                        v-if="!banner.fromDatabase && index === 0"
                      >
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
                  <h4 class="domain-title">
                    {{ domain.title }} <br />
                    <br />
                    <a
                      :href="domain.link"
                      class="link-gradient"
                      target="_blank"
                    >
                      En savoir plus <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </h4>
                  <!-- <div class="domain-link">
                   
                  </div> -->
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

      doc_path: null,

      sliderData: [
        {
          id: 1,
          heading:
            "ANGE, le service par excellence de gestion environnementale au Togo",
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
          link: "https://service-public.gouv.tg/service/672142cb7bacb864efe779f0/licences-agrements-certificats/demande-du-certificat-de-conformite-environnementale",
          linkText: "En savoir plus",
        },
        {
          iconClass: "fa fa-user-check",
          title: "Consultants agréés",
          link: "/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf",
          linkText: "En savoir plus",
           key: "consultants",
        },
      ],

      secondSlideDescription:
        "Nous servons d'institution d'appui à la mise en œuvre de la politique nationale de l'environnement",
    };
  },

  mounted() {
    this.fetchBlogData();
    this.fetchDoc();
    this.img_url_back = config.app_back_url_img;
  },

  methods: {
    async fetchDoc() {
      try {
        const response = await this.$axios.get(
          "/autre-consultant-agrees/get-consultant-agree-document",
        );

        const apiDoc = response.data?.data;

        if (apiDoc && apiDoc.path) {
          const consultantIndex = this.domains.findIndex(
            (item) => item.key === "consultants",
          );

          if (consultantIndex !== -1) {
            this.domains[consultantIndex].link = apiDoc.path;
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du document:", error);
     
      }
    },

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
              this.img_url_back + "/" + blog.images[0].url ||
              "/images/bg/bg_o3.jpg",
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

.slider-title {
  color: white;
  font-size: 18px;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  text-align: center !important;
  line-height: 1.2 !important;
  margin: 0 auto !important;
  padding: 0 10px !important;
  max-width: 100% !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
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

.domains-iceberg-overlay {
  position: absolute;
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
  max-width: 1200px;
}

.domains-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
  gap: 15px;
  width: 100%;
  margin: 0 auto;
  margin-top: -340px;
  padding: 0;
  box-sizing: border-box;
}

.domain-col {
  flex: 0 0 auto;
  min-width: 0;
  max-width: 25%;
}

.domain-card-iceberg {
  background: #0b9dd1;
  color: white;
  border: none;
  border-radius: 0;
  transition: all 0.3s ease;
  height: 140px !important;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100% !important;
  max-width: 250px;
  margin: 0 auto;
}

.domain-card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px 20px !important;
  text-align: left !important;
  width: 100%;
  position: relative;
  z-index: 2;
  align-items: flex-start !important;
  justify-content: space-between;
}

.domain-icon {
  font-size: 1.8rem !important;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px !important;
  transition: all 0.3s ease;
  flex-shrink: 0;
  text-align: left !important;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.domain-title {
  color: white !important;
  font-size: 16px !important; /* Taille augmentée */
  font-weight: 600 !important;
  line-height: 1.2 !important;
  margin-bottom: 2px !important;
  text-align: left !important; /* IMPORTANT : Alignement à gauche */
  width: 100% !important; /* Prendre toute la largeur */
  display: block !important; /* FORCER l'affichage */
  visibility: visible !important; /* FORCER la visibilité */
  opacity: 1 !important; /* FORCER l'opacité */
  flex-grow: 1; /* Permet au titre de prendre l'espace disponible */
  overflow: visible !important; /* S'assurer que le texte est visible */
}

.domain-link {
  margin-top: auto !important; /* Pousser le lien vers le bas */
  flex-shrink: 0;
  width: 100% !important;
  text-align: left !important;
  display: flex;
  justify-content: flex-start;
}

.link-gradient {
  font-weight: bold !important;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  font-size: 0.9rem !important;
  transition: all 0.3s ease !important;
  white-space: nowrap !important;
  text-align: left !important;
}

.link-gradient:hover {
  text-decoration: underline !important;
  transform: translateX(5px) !important;
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

@media (max-width: 2000px) {
  .intro-section {
    height: 350px !important;
  }
  .domains-row {
    margin-top: -250px !important;
  }

  .domain-card-iceberg {
    height: 100px !important;
    max-width: 280px !important;
  }

  .hero-container {
    height: 600px !important;
    margin-bottom: 350px !important;
  }
}

@media (max-width: 1600px) {
  .intro-section {
    height: 300px !important;
  }

  .hero-container {
    height: 500px !important;
    margin-bottom: 300px !important;
  }
  .domain-card-iceberg {
    height: 100px !important;
    max-width: 280px !important;
  }
}

@media (max-width: 1400px) {
  .intro-section {
    max-height: 280px !important;
  }
  .hero-container {
    height: 55px;
    margin-top: 0px !important;
  }

  .intro-slider {
    height: 550px;
  }

  .intro-section {
    height: 400px;
  }

  .domains-iceberg-overlay {
    bottom: -70px;
  }

  .container-fluid {
    max-width: 1320px;
    padding: 0px 20px;
  }

  .domains-row {
    padding: 0;
    margin-top: -350px !important;
    margin-bottom: 120px !important;
  }

  /* CARTES RECTANGULAIRES - Centrées */
  .domain-card-iceberg {
    height: 180px !important;
    max-height: 160px !important;
    max-width: 280px !important;
  }

  .domain-card-body {
    padding: 10px 20px !important;
  }

  .domain-title {
    font-size: 16px !important;
  }

  .title {
    font-size: 1.2rem !important;
  }
}

/* Desktop (≥1200px) - SUPERPOSITION ICEBERG */
@media (min-width: 1245px) {
  .intro-section {
    height: 400px !important;
  }
  .hero-container {
    height: 500px !important;
    margin-bottom: -70px !important;
  }

  .intro-slider {
    height: 500px !important;
  }

  .domains-iceberg-overlay {
    bottom: -60px;
  }

  .container-fluid {
    max-width: 1140px;
    padding: 0 15px;
  }

  .domains-row {
    gap: 20px;
    flex-wrap: nowrap;
    padding: 0;
  }

  .domain-col {
    flex: 0 0 auto; /* Pas d'étirement automatique */
    max-width: none; /* Retirer la limite max */
    width: auto; /* Largeur automatique */
  }

  .domain-card-iceberg {
    height: 180px !important;
    margin-top: 5px;
    width: 250px !important; /* Largeur fixe pour uniformité */
    max-width: 250px;
  }

  .domain-card-body {
    text-align: left !important;
    align-items: flex-start !important;
  }

  .domain-title {
    font-size: 16px !important;
  }
}

@media (max-width: 1244px) and (min-width: 992px) {
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
    max-width: 960px;
    padding: 0 15px !important;
  }

  .domains-row {
    gap: 15px;
    flex-wrap: nowrap;
    padding: 0;
    margin-top: -300px !important;
    justify-content: center;
  }

  .domain-col {
    flex: 0 0 auto;
    max-width: none;
    width: auto;
  }

  .domain-card-iceberg {
    height: 180px !important;
    width: 220px !important; /* Largeur réduite pour s'adapter */
    max-width: 220px;
  }

  .domain-card-body {
    padding: 20px 15px !important;
  }

  .domain-title {
    font-size: 15px !important;
  }

  .domain-icon {
    font-size: 1.6rem !important;
    margin-bottom: 10px !important;
  }

  .title {
    font-size: 1.5rem !important;
  }

  .link-gradient {
    font-size: 0.85rem !important;
  }

  .home-slider-prev {
    left: 10px;
  }

  .home-slider-next {
    right: 10px;
  }
}

@media (max-width: 991px) and (min-width: 768px) {
  .hero-container {
    margin-bottom: 0;
    height: auto;
  }

  .intro-slider {
    height: 400px;
    position: relative;
    margin-bottom: 30px;
  }

  .domains-iceberg-overlay {
    position: relative;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 30px;
    padding: 0 15px;
  }

  .container-fluid {
    max-width: 720px;
    padding: 0 15px;
    margin-top: -100px;
  }

  .domains-row {
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 0px !important;
    justify-content: center;
    padding: 0;
  }

  .domain-col {
    flex: 0 0 calc(50% - 15px);
    max-width: calc(50% - 15px);
  }

  .domain-card-iceberg {
    height: 170px !important;
    width: 100% !important;
    max-width: 280px; /* Limite max */
    margin: 0 auto;
  }

  .domain-card-body {
    padding: 20px 15px !important;
    text-align: left !important;
    flex-direction: column !important; /* IMPORTANT: layout vertical */
  }

  .domain-title {
    font-size: 15px !important;
    margin-bottom: 10px !important;
    display: block !important;
    visibility: visible !important;
  }

  .domain-icon {
    font-size: 1.7rem !important;
    margin-bottom: 10px !important;
    text-align: left !important;
  }

  .title {
    font-size: 1.3rem !important;
  }

  .link-gradient {
    font-size: 0.85rem !important;
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

@media (max-width: 767px) and (min-width: 600px) {
  .hero-container {
    height: auto;
    margin-top: -40px !important;
  }

  .intro-content.centered-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
  }
  .intro-slider {
    height: 380px;
    margin-bottom: 25px;
    margin-top: 0px !important;
  }

  .intro-content.centered-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
  }

  .position-relative {
    padding-top: 40px;
  }

  .domains-iceberg-overlay {
    position: relative;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 25px;
    padding: 0 15px;
  }

  .container-fluid {
    max-width: 540px;
    padding: 0 15px;
    margin-top: -100px !important;
  }

  .domains-row {
    flex-wrap: wrap;
    gap: 12px;
    padding: 0;
  }

  .domain-col {
    flex: 0 0 calc(50% - 12px);
    max-width: calc(50% - 12px);
  }

  .domain-card-iceberg {
    height: 180px !important; /* Hauteur augmentée */
    width: 100% !important;
    max-width: 280px;
    margin: 0 auto;
  }

  .domain-card-body {
    padding: 20px 15px !important;
    text-align: left !important;
    flex-direction: column !important; /* Layout vertical */
  }

  .domain-title {
    font-size: 14px !important;
    margin-bottom: 10px !important;
    line-height: 1.3 !important;
    display: block !important;
    visibility: visible !important;
  }

  .intro-content.centered-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
  }
  .domain-icon {
    font-size: 1.6rem !important;
    margin-bottom: 12px !important;
    text-align: left !important;
  }

  .title {
    font-size: 1.3rem !important;
    padding: 0 15px;
  }

  .link-gradient {
    font-size: 0.85rem !important;
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

@media (max-width: 599px) {
  .hero-container {
    height: auto;
    padding-bottom: 20px;
  }

  .intro-slider {
    height: 320px !important;
    margin-bottom: 20px;
    margin-top: -30px !important;
  }

  .position-relative {
    padding-top: 30px;
  }

  .domains-iceberg-overlay {
    position: relative;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 20px;
    padding: 0 15px;
  }

  .container-fluid {
    max-width: 100%;
    padding: 0 15px;
    margin-top: -0px !important;
  }

  /* Les cartes empilées verticalement et centrées */
  .domains-row {
    display: flex;
    flex-direction: column; /* Empilement vertical */
    flex-wrap: nowrap;
    gap: 15px;
    margin-top: 0 !important;
    padding: 0;
    width: 100%;
    align-items: center; /* Centrer les cartes */
  }

  .domain-col {
    flex: 0 0 100% !important; /* Pleine largeur */
    max-width: 100% !important; /* Pleine largeur */
    width: 100% !important;
    display: flex;
    justify-content: center; /* Centrer le contenu de la colonne */
  }

  /* CARTES MOBILE - DESIGN VERTICAL AMÉLIORÉ */
  .domain-card-iceberg {
    height: auto !important; /* Hauteur automatique */
    min-height: 160px !important; /* Hauteur minimale */
    width: 100% !important;
    max-width: 400px !important; /* Largeur max sur mobile */
    display: flex;
    margin: 0 auto; /* Centrage */
  }

  .intro-content.centered-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
  }

  /* LAYOUT VERTICAL POUR MOBILE (empilé) */
  .domain-card-body {
    padding: 20px 15px !important;
    flex-direction: column !important; /* Layout vertical */
    align-items: flex-start !important; /* Alignement à gauche */
    text-align: left !important;
    justify-content: flex-start !important;
    width: 100%;
    height: auto;
  }

  .domain-icon {
    font-size: 1.6rem !important;
    margin-bottom: 12px !important;
    margin-right: 0 !important;
    text-align: left !important;
    width: 100%;
  }

  /* CORRECTION : Titre bien visible */
  .domain-title {
    text-align: left !important;
    font-size: 15px !important; /* Taille augmentée */
    font-weight: 600 !important;
    margin-bottom: 15px !important;
    line-height: 1.4 !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    color: white !important;
    width: 100%;
    overflow: visible !important;
    white-space: normal !important;
    word-wrap: break-word !important;
    /* Pas de limite de lignes sur mobile */
    -webkit-line-clamp: unset !important;
    -webkit-box-orient: unset !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .domain-link {
    margin-top: 10px !important; /* Espace au-dessus du lien */
    flex-shrink: 0;
    text-align: left !important;
    align-self: flex-start !important;
    width: 100%;
  }

  .link-gradient {
    font-size: 0.9rem !important;
    white-space: nowrap !important;
  }

  .title {
    padding: 0 15px;
    font-size: 50px !important;
  }

  .description {
    font-size: 0.9rem;
    padding: 0 15px;
  }

  /* Masquer navigation sur mobile */
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

@media (max-width: 480px) {
  .intro-slider {
    height: 220px !important;
    margin-top: -30px !important;
  }

  .domains-iceberg-overlay {
    padding: 0 12px;
  }

  .container-fluid {
    padding: 0 12px;
    margin-top: 100px !important;
  }

  .intro-content.centered-content {
    padding: 0px 20px;
  }
  .domains-row {
    gap: 12px;
  }

  .domain-card-iceberg {
    min-height: 150px !important;
    margin-bottom: 0 !important;
    max-width: 280px;
  }

  .domain-card-body {
    padding: 18px 15px !important;
  }

  .domain-icon {
    font-size: 1.5rem !important;
    margin-bottom: 10px !important;
  }

  .domain-title {
    font-size: 12px !important;
    margin-bottom: 12px !important;
  }

  .domain-link {
    margin-top: 8px !important;
  }

  .link-gradient {
    font-size: 0.85rem !important;
  }

  /* .title {
    font-size: 20px !important ;
    padding: 0 12px;

  } */
  .title {
    font-size: 16px !important; /* Plus petit sur très petit écran */
    padding: 0 8px !important;
    line-height: 1.1 !important;
  }

  .description {
    font-size: 0.85rem;
    padding: 0 12px;
  }
}

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
    padding: 0 10px;
    margin-top: 100px;
  }

  .domain-card-iceberg {
    min-height: 140px !important;
    margin-bottom: 10px !important;
    max-width: 260px;
  }

  .domains-row {
    gap: 10px;
  }

  .intro-content.centered-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
  }

  .domain-card-body {
    padding: 15px 12px !important;
  }

  .domain-icon {
    font-size: 1.4rem !important;
    margin-bottom: 8px !important;
  }

  .domain-title {
    font-size: 13px !important;
    margin-bottom: 10px !important;
  }

  .link-gradient {
    font-size: 0.8rem !important;
  }

  .slider-title {
    font-size: 16px !important;
  }
}

/* Suppression des marges négatives problématiques */
@media (max-width: 991px) {
  .domains-row {
    margin-top: 0 !important;
  }

  .position-relative {
    overflow: visible;
  }
}

/* Assurer que le titre est toujours visible */
.domain-title {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  overflow: visible !important;
}

/* Forcer le layout vertical sur tous les écrans mobiles */
@media (max-width: 767px) {
  .domain-card-body {
    flex-direction: column !important;
  }
  .container-fluid {
    margin-top: -180px;
  }

  .title {
    font-size: 1.4rem !important;
  }
}

/* Ajustements pour les très petits textes */
.domain-title {
  word-break: break-word;
  hyphens: auto;
}

/* Assure que tous les éléments ont la même marge */
* {
  box-sizing: border-box;
}
</style>
