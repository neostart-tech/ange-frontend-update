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
            <div class="container h-100">
              <div class="row justify-content-center align-items-center h-100">
                <div class="col-xl-8 col-lg-10 col-md-12 text-center">
                  <div class="intro-content">
                    <h2 class="title">{{ banner.heading }}</h2>
                    <div class="cta-buttons mt-4">
                      <NuxtLink to="/contactez-nous" class="btn btn-primary">
                        Nous Contacter
                      </NuxtLink>
                      <NuxtLink to="/presentation" class="btn btn-outline">
                        En Savoir Plus
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

    <!-- Domains Section -->
    <main class="container my-5 domains-container mb-5">
      <div class="row domains-row">
        <div
            v-for="(domain, idx) in domains"
            :key="idx"
            class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4 domain-item"
            :class="{ 'first-domain': idx === 0 }"
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
          id: 3,
          heading:
              "ANGE, le service par excellence de gestion environnementale au Togo",
          bgImgSrc: "/images/bg/bg-ange-03.jpg",
          slug: "",
        },
        {
          id: 4,
          heading:
              "Nous servons d'institution d'appui à la mise en œuvre de la politique nationale de l'environnement",
          bgImgSrc: "/images/bg/bg-ange-03.jpg",
          slug: "",
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

        blogs.forEach((blog) => {
          this.sliderData.push({
            id: this.sliderData.length + 1,
            heading: blog.titre || "",
            slug: blog.slug,
            bgImgSrc:
                this.img_url_back + "/" + blog.images[0].url ||
                "/images/bg/bg_o3.jpg",
          });
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des blogs:", error);
      }
    },
  },
};
</script>

<style scoped>
.position-relative {
  position: relative;
  margin-bottom: 8rem;
}

/* Slider amélioré */
.intro-slider {
  z-index: 1;
  height: 500px;
  overflow: hidden;
}

.intro-section {
  height: 500px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
}

/* Overlay sombre amélioré */
.intro-section::before {
  content: '';
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

/* Centrage parfait */
.container.h-100 {
  height: 100%;
}

.row.h-100 {
  height: 100%;
}

.intro-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  color: white;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

/* CTA Buttons améliorés */
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  font-size: 1rem;
}

.btn-primary {
  background: #007608;
  color: white;
  border-color: #007608;
}

.btn-primary:hover {
  background: #005a06;
  border-color: #005a06;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 118, 8, 0.4);
}

.btn-outline {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-outline:hover {
  background: white;
  color: #007608;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.3);
}

/* Navigation buttons corrigés */
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
  background: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: rgba(0, 118, 8, 0.8);
  transform: scale(1.1);
}

/* Domains Section */
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
}

/* Premier domaine - Superposition */
.first-domain {
  position: relative;
  z-index: 20;
}

/* Responsive Design */

/* Tablettes */
@media (max-width: 991px) and (min-width: 768px) {
  .intro-slider,
  .intro-section {
    height: 400px;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .domains-container {
    bottom: -150px;
  }
  
  .domains-row {
    flex-wrap: wrap;
  }
  
  .domain-item {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .first-domain {
    margin-top: -100px;
  }
  
  .domain-item:nth-child(2) {
    margin-top: -100px;
  }
  
  .btn {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
}

/* Mobiles */
@media (max-width: 767px) {
  .position-relative {
    margin-bottom: 5rem;
  }
  
  .intro-slider,
  .intro-section {
    height: 350px;
  }
  
  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
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
  
  .domains-container {
    position: relative;
    bottom: 0;
    margin-top: 1rem;
  }
  
  .domains-row {
    flex-wrap: wrap;
  }
  
  .domain-item {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
  
  .card {
    height: auto;
    min-height: 160px;
  }
  
  .first-domain {
    margin-top: -80px;
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
    height: 300px;
  }
  
  .title {
    font-size: 1.3rem;
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

/* Styles des cartes domains */
.card {
  border: none;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}

.card-body:hover {
  transform: scale(1.05);
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
}

.link-gradient:hover {
  text-decoration: underline;
}

.container h4 {
  font-size: 16px;
}
</style>