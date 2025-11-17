<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <!-- Section Title avec bouton aligné à droite -->
      <div class="section-header" data-aos="fade-up">
        <div class="section-title-wrapper">
          <div class="section-title-content">
            <h2 class="section-main-title">
              Actualités
            </h2>
            <p class="section-subtitle">Restez informé des dernières nouvelles et développements en matière
              d'environnement au Togo</p>
          </div>
          <div class="section-button">
            <NuxtLink to="/actualite" class="btn btn-primary ange-btn-documentation">
              Toutes nos actualités &nbsp;
              <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Le reste de votre code reste inchangé -->
      <div class="row text-center" v-if="isLoading">
        <div class="col-lg-12">
          <div class="">
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
        </div>
      </div>

      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 mtn-30" v-else>
        <div class="col mt-30" v-for="(blog, index) in blogs.slice(0, 3)" :key="index">
          <div class="work">
            <div class="thumbnail">
              <NuxtLink :to="`/actualite/${blog.slug}`" class="image">
                <img class="w-100" :src="`${img_url_back}/${blog.images[0].url}`" :alt="blog.titre"
                  style="width: 100%; height: 230px; object-fit: cover" />
              </NuxtLink>
            </div>
            <div class="info">
              <!-- Date après l'image -->
              <div class="blog-date">
                <i class="far fa-calendar"></i>&nbsp; {{ formatDate(blog.created_at) }}
              </div>

              <!-- Titre -->
              <h3 class="title">
                <NuxtLink :to="`/actualite/${blog.slug}`" class="hover-actu-last">{{ blog.short_titre }}
                </NuxtLink>
              </h3>

              <!-- Bouton Lire la suite -->
              <div class="blog-read-more">
                <NuxtLink style="color: #0a8fbe;" :to="`/actualite/${blog.slug}`" class="lire-suite-btn">
                  En savoir plus &nbsp;
                  <i class="fa-solid fa-arrow-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton pour mobile et tablette - APRÈS la liste des actualités -->
      <div class="mobile-tablet-button">
        <NuxtLink to="/actualite" class="btn btn-primary ange-btn-documentation">
          Toutes nos actualités &nbsp;
          <i class="fa-solid fa-arrow-right"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      isLoading: false,
      blogs: [],
      img_url_back: null,
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/blogs/liste`);

        const data = await response.data.data;
        if (data) {
          this.blogs = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
  },

  mounted() {
    this.img_url_back = config.app_back_url_img;
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.section-header {
  margin-bottom: 40px;
}

.section-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  width: 100%;
}

.section-title-content {
  flex: 1;
  text-align: left;
  min-width: 0;
}

.section-main-title {
  color: #000 !important;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.2;
  font-family: 'Work Sans', sans-serif;
}

.section-subtitle {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
  max-width: 600px;
}

.section-button {
  flex-shrink: 0;
  margin-bottom: 15px;
}

/* Bouton mobile/tablette - caché par défaut */
.mobile-tablet-button {
  display: none;
  text-align: center;
  margin-top: 40px;
  width: 100%;
}

.ange-btn-documentation {
  background: #0a8fbe;
  color: white;
  border: 2px solid #0a8fbe;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ange-btn-documentation:hover {
  background: transparent;
  color: #0a8fbe;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(10, 143, 190, 0.3);
}

/* ========== RESPONSIVE DESIGN ========== */

/* Desktop large (≥1400px) */
@media (min-width: 1400px) {
  .section-title-wrapper {
    gap: 40px;
  }

  .section-main-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 17px;
    max-width: 700px;
  }

  .ange-btn-documentation {
    padding: 14px 30px;
    font-size: 15px;
  }
}

/* Desktop standard (1200px - 1399px) */
@media (max-width: 1399px) and (min-width: 1200px) {
  .section-title-wrapper {
    gap: 35px;
  }

  .section-main-title {
    font-size: 34px;
  }

  .section-subtitle {
    font-size: 16px;
    max-width: 650px;
  }
}

/* Tablette paysage (992px - 1199px) */
@media (max-width: 1199px) and (min-width: 992px) {
  .section-title-wrapper {
    gap: 30px;
  }

  .section-main-title {
    font-size: 30px;
  }

  .section-subtitle {
    font-size: 15px;
    max-width: 550px;
  }

  .ange-btn-documentation {
    padding: 11px 22px;
    font-size: 13px;
  }
}

/* Tablette portrait (768px - 991px) */
@media (max-width: 991px) and (min-width: 768px) {
  .section-title-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .section-title-content {
    width: 100%;
  }

  .section-main-title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 15px;
    max-width: 100%;
  }

  /* Cacher le bouton desktop et afficher le bouton mobile */
  .section-button {
    display: none;
  }

  .mobile-tablet-button {
    display: block;
    margin-top: 40px;
  }

  .ange-btn-documentation {
    padding: 12px 25px;
    font-size: 14px;
    width: auto;
  }
}

/* Mobile paysage (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
  .section-header {
    margin-bottom: 35px;
  }

  .section-title-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .section-main-title {
    font-size: 26px;
    margin-bottom: 8px;
  }

  .section-subtitle {
    font-size: 14px;
    line-height: 1.4;
  }

  /* Cacher le bouton desktop et afficher le bouton mobile */
  .section-button {
    display: none;
  }

  .mobile-tablet-button {
    display: block;
    margin-top: 35px;
  }

  .ange-btn-documentation {
    padding: 12px 25px;
    font-size: 14px;
    width: auto;
  }
}

/* Mobile portrait (480px - 575px) */
@media (max-width: 575px) and (min-width: 480px) {
  .section-header {
    margin-bottom: 30px;
  }

  .section-title-wrapper {
    gap: 15px;
  }

  .section-main-title {
    font-size: 24px;
    margin-bottom: 6px;
  }

  .section-subtitle {
    font-size: 13px;
    line-height: 1.4;
  }

  /* Cacher le bouton desktop et afficher le bouton mobile */
  .section-button {
    display: none;
  }

  .mobile-tablet-button {
    display: block;
    margin-top: 30px;
  }

  .ange-btn-documentation {
    padding: 11px 22px;
    font-size: 13px;
    width: auto;
  }
}

/* Petit mobile (375px - 479px) */
@media (max-width: 479px) and (min-width: 375px) {
  .section-header {
    margin-bottom: 25px;
  }

  .section-main-title {
    font-size: 22px;
  }

  .section-subtitle {
    font-size: 12px;
  }

  /* Cacher le bouton desktop et afficher le bouton mobile */
  .section-button {
    display: none;
  }

  .mobile-tablet-button {
    display: block;
    margin-top: 25px;
  }

  .ange-btn-documentation {
    padding: 10px 20px;
    font-size: 13px;
    width: 100%;
    max-width: 280px;
  }
}

/* Mobile extra small (< 375px) */
@media (max-width: 374px) {
  .section-header {
    margin-bottom: 20px;
  }

  .section-title-wrapper {
    gap: 12px;
  }

  .section-main-title {
    font-size: 20px;
  }

  .section-subtitle {
    font-size: 11px;
  }

  /* Cacher le bouton desktop et afficher le bouton mobile */
  .section-button {
    display: none;
  }

  .mobile-tablet-button {
    display: block;
    margin-top: 20px;
  }

  .ange-btn-documentation {
    padding: 9px 18px;
    font-size: 12px;
    width: 100%;
    max-width: 260px;
  }
}

/* Mode paysage sur mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .section-header {
    margin-bottom: 25px;
  }

  .section-title-wrapper {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .section-main-title {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .section-subtitle {
    font-size: 13px;
  }

  /* En mode paysage, on garde le bouton desktop */
  .section-button {
    display: block;
  }

  .mobile-tablet-button {
    display: none;
  }

  .ange-btn-documentation {
    padding: 8px 16px;
    font-size: 12px;
  }
}

/* Le reste de votre CSS existant reste inchangé */
.work {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.work:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.thumbnail {
  position: relative;
}

.info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-date {
  color: rgba(18, 18, 18, 0.8);
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.blog-date i {
  color: #000;
  margin-right: 5px;
}

.title {
  margin-bottom: 20px;
  flex: 1;
}

.title a {
  color: #000;
  font-family: "Work Sans";
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.title a:hover {
  color: #000;
}

.blog-read-more {
  margin-top: auto;
}

.lire-suite-btn {
  color: #0a8fbe;
  font-family: "Work Sans";
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 8px 0;
}

.lire-suite-btn:hover {
  color: #0a8fbe;
  transform: translateX(5px);
}

.lire-suite-btn i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.lire-suite-btn:hover i {
  transform: translateX(3px);
}
</style>