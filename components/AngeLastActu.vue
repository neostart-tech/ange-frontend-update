<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="text-cnce fz-32" style="color: #285a43 !important">
          À la une
        </h2>
      </div>
      <!-- Section Title End -->

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
        <!-- <div v-else> -->
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
              <h3 class="title">
                <NuxtLink
                  :to="`/actualite/${blog.slug}`"
                  class="hover-actu-last"
                  >{{ blog.short_titre }}
                </NuxtLink>
              </h3>
              <!-- <p class="desc">{{ blog.short_titre }}</p> -->
              <div class="test-ange-actu">
                <NuxtLink
                  :to="`/actualite/${blog.slug}`"
                  class="simalary date-ange-actu hover-actu-last-date"
                >
                  <i class="far fa-calendar"></i>&nbsp; {{ blog.created_at }}
                </NuxtLink>
                <NuxtLink
                  :to="`/actualite/${blog.slug}`"
                  class="simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
                >
                  Lire la suite &nbsp;
                  <img src=" /images/svg/icons/right-arrow.svg" alt="" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>

      <div class="row mt-5 text-center">
        <div class="col-lg-12 col.md-12 col-sm-12">
          <NuxtLink
            to="/actualite"
            class="btn btn-primary ange-btn-documentation"
            >Toutes nos actualités</NuxtLink
          >
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
  },

  mounted() {
    this.img_url_back = config.app_back_url_img;
    this.fetchData();
  },
};
</script>

<style lang="scss">
.test-ange-actu {
  display: flex;
  justify-content: space-between;
}

.date-ange-actu {
  align-self: flex-start;
}

.simalary {
  padding: 10px;
}

.info-ange-actu {
  align-self: flex-end;
}

.hover-actu-last {
  color: #285a43;
}

.hover-actu-last:hover {
  color: #285a43 !important;
}

.hover-actu-last-date {
  color: rgba(18, 18, 18, 0.8);
  font-family: Raleway;
  font-size: 16.275px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.hover-actu-last-date:hover {
  color: rgba(18, 18, 18, 0.8);
}

.hover-actu-last-lire-suite {
  color: #285a43;
  font-family: "Work Sans";
  font-size: 16.275px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}

.hover-actu-last-lire-suite:hover {
  color: #285a43;
}
.plan-nav-sup {
  font-size: 20px;
}
</style>
