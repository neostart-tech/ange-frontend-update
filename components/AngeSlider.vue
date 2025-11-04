<template>
  <div class="position-relative">
    <div class="intro-slider">
      <swiper
          :speed="4000"
          :loop="true"
          :effect="'fade'"
          :navigation="swiperOptions.navigation"
          :autoplay="{ delay: 10000 }"
      >
        <swiper-slide v-for="(banner, index) in sliderData" :key="index">
          <div
              class="intro-section overlay bg-cover"
              :style="{ backgroundImage: `url(${banner.bgImgSrc})` }"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-lg-12 align-self-center">
                  <div class="intro-content m-auto" style="margin-top: -143px !important;">
                    <h2 class="title">{{ banner.heading }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- pagination class -->
        <div class="home-slider-prev swiper-button-prev main-slider-nav">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next main-slider-nav">
          <i class="fa fa-angle-right"></i>
        </div>
      </swiper>
    </div>

    <!-- Domains Section -->
    <main class="container my-5 domains-container">
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
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
              "Nous servons d’institution d’appui à la mise en œuvre de la politique nationale de l’environnement telle que définie par le gouvernement dans le cadre du développement.",
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
  margin-bottom: 10rem;
}

.domains-container {
  position: absolute;
  bottom: -230px;
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
  height: 200px;
}

.intro-slider {
  z-index: 1;
}

/* Premier domaine - Superposition sur tous les écrans */
.first-domain {
  position: relative;
  z-index: 20;
}

/* Styles pour PC (lg et xl) */
@media (min-width: 992px) {
  .first-domain {
    margin-top: -80px; /* Légère superposition sur PC */
  }
}

/* Styles pour tablettes (md) */
@media (max-width: 991px) and (min-width: 768px) {
  .domains-row {
    flex-wrap: wrap;
  }
  
  .domain-item {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .domains-container {
    position: relative;
    bottom: 0;
    margin-top: 2rem;
  }
  
  /* Premier domaine superposé au slider sur tablette */
  .first-domain {
    margin-top: -120px; /* Superposition plus prononcée sur tablette */
  }
  
  /* Le deuxième domaine aussi pour l'alignement */
  .domain-item:nth-child(2) {
    margin-top: -120px;
  }
}

/* Styles pour mobiles (sm et xs) */
@media (max-width: 767px) {
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
    min-height: 180px;
  }
  
  /* Superposition du premier élément avec le slider sur mobile */
  .first-domain {
    margin-top: -100px;
  }
}

.container.my-5 {
  margin-top: 5rem !important;
}

.container h4 {
  font-size: 18px;
}

.swiper-button-prev,
.swiper-button-next {
  color: white;
}

header h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.banner {
  background: #e3ebf3;
}

.banner h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.banner p {
  font-size: 1.25rem;
  color: #555;
}

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

.loading-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

.card:hover .loading-bar {
  transform: scaleX(1);
}

.icon {
  font-size: 2rem;
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
</style>