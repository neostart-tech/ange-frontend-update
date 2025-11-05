<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <!-- Section Title avec bouton aligné à droite -->
      <div class="section-header" data-aos="fade-up">
        <div class="section-title-wrapper">
          <div class="section-title">
            <h2 class="text-cnce fz-32 text-start" style="color: #000 !important">
              Actualités
            </h2>
            <p>Restez informé des dernières nouvelles et développements en matière d'environnement au Togo</p>
          </div>
          <div class="section-button">
            <NuxtLink style="background-color: #0a8fbe;color:white;border: none;"
              to="/actualite"
              class="btn btn-primary ange-btn-documentation"
            >
              Toutes nos actualités &nbsp;
                 <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

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
        <div
          class="col mt-30"
          v-for="(blog, index) in blogs.slice(0, 3)"
          :key="index"
        >
          <div class="work">
            <div class="thumbnail">
              <NuxtLink :to="`/actualite/${blog.slug}`" class="image">
                <img
                  class="w-100"
                  :src="`${img_url_back}/${blog.images[0].url}`"
                  :alt="blog.titre"
                  style="width: 100%; height: 230px; object-fit: cover"
                />
              </NuxtLink>
            </div>
            <div class="info">
              <!-- Date après l'image -->
              <div class="blog-date">
                <i class="far fa-calendar"></i>&nbsp; {{ formatDate(blog.created_at) }}
              </div>
              
              <!-- Titre -->
              <h3 class="title">
                <NuxtLink
                  :to="`/actualite/${blog.slug}`"
                  class="hover-actu-last"
                  >{{ blog.short_titre }}
                </NuxtLink>
              </h3>
              
              <!-- Bouton Lire la suite -->
              <div class="blog-read-more">
                <NuxtLink style="color: #0a8fbe;"
                  :to="`/actualite/${blog.slug}`"
                  class="lire-suite-btn"
                >
                  En savoir plus &nbsp;
                  <i class="fa-solid fa-arrow-right"></i>
                </NuxtLink>
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

<style lang="scss">
.section-header {
  margin-bottom: 40px;
}

.section-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
}

.section-title {
  flex: 1;
  text-align: left;
}

.section-button {
  flex-shrink: 0;
  margin-bottom: 15px;
}

.ange-btn-documentation {
  background: #285a43;
  color: white;
  border: 2px solid #285a43;
  padding: 10px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.ange-btn-documentation:hover {
  background: transparent;
  color: #285a43;
  transform: translateY(-2px);
}

/* Nouvelle structure des cartes d'actualités */
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

/* Date après l'image */
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

/* Titre */
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

/* Bouton Lire la suite */
.blog-read-more {
  margin-top: auto;
}

.lire-suite-btn {
  color: #0000;
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
  color: #0000;
  transform: translateX(5px);
}

.lire-suite-btn img {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.lire-suite-btn:hover img {
  transform: translateX(3px);
}

/* Responsive */
@media (max-width: 768px) {
  .section-title-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .section-button {
    align-self: flex-end;
    margin-bottom: 0;
  }
  
  .ange-btn-documentation {
    padding: 8px 20px;
    font-size: 14px;
  }
  
  .info {
    padding: 15px;
  }
  
  .title a {
    font-size: 16px;
  }
  
  .blog-date {
    font-size: 13px;
  }
  
  .lire-suite-btn {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-title-wrapper {
    align-items: stretch;
  }
  
  .section-button {
    align-self: stretch;
    text-align: center;
  }
}
</style>