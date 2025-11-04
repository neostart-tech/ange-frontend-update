<template>
  <AngeRoot>
    <Head>
      <Title>{{ blog?.titre || "Actualité" }}</Title>
      <Meta
        name="description"
        :content="blog?.description || 'Description du blog'"
      />
      <Meta property="og:title" :content="blog?.titre || 'Actualité'" />
      <Meta
        property="og:description"
        :content="blog?.description || 'Description du blog'"
      />
      <Meta
        property="og:image"
        :content="
          blog?.images && blog.images.length > 0
            ? `${img_url_back}/${blog.images[0].url}`
            : '/images/default-image.jpg'
        "
      />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" :content="`https://ange.tg${$route.fullPath}`" />

      <!-- Ajout des métadonnées pour Twitter -->
      <Meta property="twitter:card" content="summary_large_image" />
      <Meta property="twitter:title" :content="blog?.titre || 'Actualité'" />
      <Meta
        property="twitter:description"
        :content="blog?.description || 'Description du blog'"
      />
      <Meta
        property="twitter:image"
        :content="
          blog?.images && blog.images.length > 0
            ? `${img_url_back}/${blog.images[0].url}`
            : '/images/default-image.jpg'
        "
      />
    </Head>

    <AngeBreadcrumb
      :activePageName="`Actualité`"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />

    <div class="section-padding fix">
      <div class="container">
        <div class="row mtn-50">
          <ange-togo-blog v-if="isLoading" class="text-center">
            <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </ange-togo-blog>

          <ange-togo-blog v-if="!isLoading">
            <div class="row">
              <div class="col-lg-7 col-12 order-lg-1 mt-50">
                <div class="row row-cols-1 no-gutters">
                  <div class="blog-3 blog-details col" data-aos="fade-up">
                    <div class="thumbnail">
                      <img
                        class="w-100"
                        :src="`${img_url_back}/${blog.images[0].url}`"
                        style="max-width: 849.99px; max-height: 574.31px"
                      />
                    </div>

                    <div class="info">
                      <div
                        class="desc"
                        style="text-align: justify"
                        v-html="blog.description"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 col-12 order-lg-2 mt-50">
                <div class="sidebar-widget-wrapper">
                  <div class="sidebar-widget">
                    <h3 class="text-cnce-blog-titre mb-5">{{ blog.titre }}</h3>
                    <h3 class="sidebar-widget-title mb-2 text-blog text-center">
                      Info supplémentaire
                    </h3>
                    <div class="sidebar-widget-content">
                      <ul class="sidebar-widget-cate-list">
                        <li>
                          <span class="text-blog">Date: </span>
                          <span class="count text-blog-info"
                            >{{ blog.date_intervention_debut }} -
                            {{ blog.date_intervention_fin }}</span
                          >
                        </li>

                        <li>
                          <span class="text-blog">Lieu: </span>
                          <span class="count text-blog-info">{{
                            blog.lieu
                          }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="sidebar-widget" v-if="blog.service">
                    <h3 class="sidebar-widget-title mb-2 text-blog text-center">
                      Service concerné
                    </h3>
                    <div class="sidebar-widget-content">
                      <ul class="sidebar-widget-list-post">
                        <li>
                          <NuxtLink to="#" class="text-cnce">
                            {{ blog.service.titre }} 
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="sidebar-widget" v-if="blog.direction">
                    <h3 class="sidebar-widget-title mb-2 text-blog text-center">
                      Direction concernée
                    </h3>
                    <div class="sidebar-widget-content">
                      <ul class="sidebar-widget-list-post">
                        <li>
                          <NuxtLink to="#" class="text-cnce">
                            {{ blog.direction.nom }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="sidebar-widget">
                    <h3 class="sidebar-widget-title">
                      Images relatives à l'évènement
                    </h3>
                    <div class="sidebar-widget-content">
                      <div class="row">
                        <div
                          class="col-lg-3 col-md-6 col-sm-12"
                          v-for="(image, index) in blog.images"
                          :key="index"
                          style="margin-bottom: 10px; padding-right: 10px"
                        >
                          <a
                            data-bs-toggle="modal"
                            :data-bs-target="`#bd-example-modal-lg-${index}`"
                            class="sidebar-widget-list-post"
                          >
                            <img
                              :src="`${img_url_back}/${image.url}`"
                              :alt="blog.titre"
                              style="
                                max-height: 120px;
                                margin-bottom: 5px;
                                margin-right: 5px;
                              "
                              class="image-fixed-height"
                            />
                          </a>
                          <div
                            class="modal fade bd-example-modal-xl"
                            :id="`bd-example-modal-lg-${index}`"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="myLargeModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-lg">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    :id="`bd-example-modal-lg-close-${index}`"
                                  ></button>
                                </div>

                                <div class="modal-body">
                                  <img
                                    :src="`${img_url_back}/${image.url}`"
                                    :alt="blog.titre"
                                    :key="index"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ange-togo-blog>
        </div>
      </div>
    </div>
  </AngeRoot>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      isLoading: true,
      img_url_back: null,
      blog: null,
    };
  },

  created() {
    this.initialize();
  },

  beforeMount() {
    this.img_url_back = config.app_back_url_img;
  },

  methods: {
    initialize() {
      this.fetchData();
    },

    async fetchData() {
      try {
        const response = await this.$axios.get(
          `/blogs/${this.$route.params.slug}/a-propos`
        );
        const data = await response.data.data;
        if (data) {
          this.blog = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style>
.text-blog {
  color: var(--foundation-green-dark-active, #144c39);
  font-family: sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.text-blog-info {
  color: var(--foundation-green-dark-active, #144c39);
  font-family: sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.text-cnce-blog-titre {
  color: var(--foundation-green-dark-active, #144c39);
  font-family: sans-serif;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.sidebar-widget-list-post:hover {
  transform: scale(1.1);
}

.image-fixed-height {
  width: 100%; /* Prendre toute la largeur du conteneur */
  height: 120px; /* Hauteur fixe pour toutes les images */
  object-fit: cover; /* Garde le ratio d'aspect en recadrant l'image */
  border-radius: 5px; /* Optionnel : arrondi des bords des images */
}
</style>
