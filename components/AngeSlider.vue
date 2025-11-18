<template>
  <div class="position-relative">
    <div class="intro-slider">
      <swiper
          :speed="4000"
          :loop="true"
          :effect="'fade'"
          :navigation="{
            nextEl: '.home-slider-next',
            prevEl: '.home-slider-prev'
          }"
          :autoplay="{ delay: 10000 }"
      >
        <swiper-slide v-for="(banner, index) in sliderData" :key="index">
          <div
              class="intro-section overlay bg-cover"
              :style="{ backgroundImage: `url(${banner.bgImgSrc})` }"
          >
            <!-- Overlay amélioré pour meilleur contraste -->
            <div class="background-overlay"></div>
            <div class="content-overlay"></div>
            
            <div class="container h-100">
              <div class="row justify-content-center align-items-center h-100">
                <div class="col-xl-8 col-lg-10 col-md-12 text-center">
                  <div class="intro-content">
                    <h2 class="title">{{ banner.heading }}</h2>
                    <p class="description" v-if="!banner.fromDatabase && index === 0">
                      {{ getSecondSlideDescription() }}
                    </p>
                    <!-- Afficher les boutons CTA seulement pour les slides statiques -->
                    <div class="cta-buttons mt-4" v-if="!banner.fromDatabase">
                      <NuxtLink to="/presentation" class="btn btn-primary">
                       A propos <i class="fa fa-arrow-right"></i>
                      </NuxtLink>
                    </div>
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

    <!-- Domains Section - Retour au design original -->
    <main class="container my-5 domains-container mb-5">
      <div class="row domains-row">
        <div
            v-for="(domain, idx) in domains"
            :key="idx"
            class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4 domain-item"
        >
          <div class="card h-100 shadow">
            <div class="card-body d-flex flex-column">
              <div class="icon">
                <i :class="domain.iconClass"></i>
              </div>
              <h4 class="card-title">{{ domain.title }}</h4>
              <div class="mt-auto">
                <a :href="domain.link" class="link-gradient" target="_blank">En savoir plus <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import SwiperCore, {Navigation, EffectFade, Autoplay,} from "swiper/core";

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
          heading:
              "ANGE, le service par excellence de gestion environnementale au Togo",
          bgImgSrc: "/images/bg/bg-ange-03.jpg",
          slug: "",
          fromDatabase: false // Slide statique
        },
        // Le deuxième slide statique est maintenant utilisé comme description
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
          title: "Demande CCE en ligne",
          link: "https://service-public.gouv.tg/service/672142cb7bacb864efe779f0/licences-agrements-certificats/demande-du-certificat-de-conformite-environnementale",
          linkText: "En savoir plus",
        },
        {
          iconClass: "fa fa-user-check",
          title: "Consultants agréés",
          link: "/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf",
          linkText: "En savoir plus",
        },
      ],

      // Texte de description du deuxième slide
      secondSlideDescription: "Nous servons d'institution d'appui à la mise en œuvre de la politique nationale de l'environnement"
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

        // Vider les slides existants et ajouter les blogs
        this.sliderData = [];
        
        blogs.forEach((blog) => {
          this.sliderData.push({
            id: this.sliderData.length + 1,
            heading: blog.titre || "",
            slug: blog.slug,
            bgImgSrc:
                this.img_url_back + "/" + blog.images[0].url ||
                "/images/bg/bg_o3.jpg",
            fromDatabase: true // Slide provenant de la base de données
          });
        });

        // Si aucun blog n'est chargé, remettre les slides statiques
        if (this.sliderData.length === 0) {
          this.sliderData = [
            {
              id: 1,
              heading: "ANGE, le service par excellence de gestion environnementale au Togo",
              bgImgSrc: "/images/bg/bg-ange-03.jpg",
              slug: "",
              fromDatabase: false
            }
          ];
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des blogs:", error);
        // En cas d'erreur, garder le slide statique
        this.sliderData = [
          {
            id: 1,
            heading: "ANGE, le service par excellence de gestion environnementale au Togo",
            bgImgSrc: "/images/bg/bg-ange-03.jpg",
            slug: "",
            fromDatabase: false
          }
        ];
      }
    },

    getSecondSlideDescription() {
      return this.secondSlideDescription;
    }
  },
};
</script>

<style scoped>
.position-relative {
  position: relative;
}

/* Slider amélioré avec images plus grandes */
.intro-slider {
  z-index: 1;
  height: 600px;
  overflow: hidden;
}

.intro-section {
  height: 600px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

/* Overlay amélioré pour un meilleur contraste */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    rgba(0, 0, 0, 0.4) 0%, 
    rgba(0, 0, 0, 0.3) 50%, 
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 2;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.container.h-100 {
  height: 100%;
  position: relative;
  z-index: 4;
}

.row.h-100 {
  height: 100%;
}

.intro-content {
  position: relative;
  z-index: 5;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  color: white;
  font-size: 20px !important;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8), 
               0 0 20px rgba(0, 0, 0, 0.6);
  position: relative;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #007608, transparent);
  border-radius: 2px;
}

/* Description sous le titre */
.description {
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 30px;
  /* border-radius: 8px; */
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: white;
  color: #007608;
}

.btn-primary:hover {
  background: #005a06;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 118, 8, 0.5);
}

.btn-outline {
  background: transparent;
  color: white;
  border-color: white;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.btn-outline:hover {
  background: white;
  color: #007608;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
}

/* Navigation buttons */
.main-slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
}

.home-slider-prev {
  left: 20px;
}

.home-slider-next {
  right: 20px;
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
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 118, 8, 0.9);
  border-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 118, 8, 0.4);
}

/* Domains Section - DESIGN ORIGINAL AMÉLIORÉ */
/* SUR DESKTOP SEULEMENT : superposition */
.domains-container {
  position: absolute;
  bottom: -180px;
  width: 100%;
  z-index: 10;
  left: 0;
  right: 0;
}

.domains-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.domain-item {
  flex: 0 0 25%;
  max-width: 25%;
  display: flex;
}

.card {
  padding-left: 20px;
  background: #0b9dd1 !important;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  border: none;
  border-radius: 0 !important;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(11, 157, 209, 0.3) !important;
}

.card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.icon {
  font-size: 1.8rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.link-gradient {
  font-weight: bold;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.link-gradient:hover {
  text-decoration: underline;
}

.container h4 {
  font-size: 16px;
}

/* Responsive Design CORRIGÉ */

/* Grands écrans */
@media (min-width: 1400px) {
  .intro-slider,
  .intro-section {
    height: 700px;
  }
  
  .title {
    font-size: 3rem;
  }
  
  .position-relative {
    margin-bottom: 8rem;
  }
}

/* Tablettes - PLUS DE SUPERPOSITION, affichage 2x2 normal */
@media (max-width: 1199px) and (min-width: 768px) {
  .intro-slider,
  .intro-section {
    height: 500px;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  /* PLUS DE SUPERPOSITION sur tablette */
  .domains-container {
    position: relative;
    bottom: 0;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  
  .domains-row {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .domain-item {
    flex: 0 0 50% !important;
    max-width: 50% !important;
    display: flex;
  }
  
  /* PLUS de margin-top négatif sur tablette */
  .domain-item:nth-child(1),
  .domain-item:nth-child(2),
  .domain-item:nth-child(3),
  .domain-item:nth-child(4) {
    margin-top: 0 !important;
  }
  
  /* Alignement correct 2x2 */
  .domain-item:nth-child(1),
  .domain-item:nth-child(2) {
    margin-bottom: 2rem;
  }
  
  .domain-item:nth-child(3),
  .domain-item:nth-child(4) {
    margin-bottom: 0;
  }
  
  .btn {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
  
  .position-relative {
    margin-bottom: 2rem;
  }
}

/* Tablettes petites */
@media (max-width: 991px) {
  .position-relative {
    margin-bottom:-130px;
  }
  
  .intro-slider,
  .intro-section {
    height: 450px;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  /* PLUS DE SUPERPOSITION sur tablette petite */
  .domains-container {
    position: relative;
    bottom: 0;
    margin-top: 2rem;
  }
}

/* Mobiles - PLUS DE SUPERPOSITION, affichage 1 colonne */
@media (max-width: 767px) {
  .position-relative {
    margin-bottom: 2rem;
  }
  
  .intro-slider,
  .intro-section {
    height: 400px;
  }
  
  .title {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .title::after {
    width: 80px;
    bottom: -8px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
    width: 200px;
  }
  
  /* PLUS DE SUPERPOSITION sur mobile */
  .domains-container {
    position: relative;
    bottom: 0;
    margin-top: 2rem;
  }
  
  .domains-row {
    flex-wrap: wrap;
  }
  
  .domain-item {
    flex: 0 0 100% !important;
    max-width: 100% !important;
    margin-bottom: 1rem;
  }
  
  .card {
    height: auto;
    min-height: 160px;
  }
  
  /* PLUS de margin-top négatif sur mobile */
  .domain-item:nth-child(1) {
    margin-top: 0 !important;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
  }
  
  .home-slider-prev {
    left: 10px;
  }
  
  .home-slider-next {
    right: 10px;
  }
}

/* Très petits mobiles */
@media (max-width: 480px) {
  .intro-slider,
  .intro-section {
    height: 350px;
  }
  
  .title {
    font-size: 1.4rem;
  }
  
  .description {
    font-size: 0.8rem;
  }
  
  .title::after {
    width: 60px;
    bottom: -6px;
  }
  
  .btn {
    padding: 8px 18px;
    font-size: 0.85rem;
    width: 180px;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    width: 35px;
    height: 35px;
  }
  
  .swiper-button-prev i,
  .swiper-button-next i {
    font-size: 1.2rem;
  }
}

/* Amélioration du contraste pour toutes les images */
.swiper-slide .intro-section {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>