<template>
  <AngeRoot>
    <Head>
      <Title>{{ " Région " + region?.libelle || "Cnce par Région" }}</Title>
      <Meta name="description" :content="region?.libelle || 'region'" />
      <Meta property="og:title" :content="blog?.titre || 'Actualité'" />
      <Meta
        property="og:description"
        :content="blog?.description || 'Description du blog'"
      />

      <Meta property="og:type" content="article" />
      <Meta property="og:url" :content="`https://ange.tg${$route.fullPath}`" />
    </Head>
    <AngeBreadcrumb
      :activePageName="`${region?.libelle}`"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'CNCE', url: '/cnce' },
      ]"
    />
    <section class="service-details-wrapper section-padding pb-125">
      <div class="container">
        <div class="row" v-if="isLoading">
          <ange-togo-blog class="text-center">
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
        </div>

        <div class="row" v-if="!isLoading">
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5 align-items-center"
          >
            <div class="d-flex align-items-center">
              <div class="text-cnce fs-2 col-sm-12" tabindex="0">
                Liste des thématiques de la région {{ region.libelle }}
              </div>
            </div>
          </div>

          <div
            class="col-12 mtn-40 order-2 order-lg-1"
            v-if="region.Thematiques.length > 0"
          >
            <div class="service-details-widget">
              <div
                class="service-single-widget mt-40"
                :style="{ backgroundColor: '#dcfce7' }"
              >
                <div class="row">
                  <div
                    class="col-lg-6 col-sm-12"
                    v-for="(thematique, index) in region.Thematiques"
                    :key="index"
                  >
                    <a
                      class="mb-3 btn-lg"
                      data-bs-toggle="modal"
                      :data-bs-target="`#sub-thematique-${index}`"
                    >
                      {{ thematique.libelle }} ({{
                        thematique.sousThematiques.length
                      }})
                    </a>

                    <div
                      class="modal fade"
                      :id="`sub-thematique-${index}`"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Liste des sous thématique de
                              {{ thematique.libelle }}
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              :id="`sub-thematique-close-${index}`"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div class="mb-3">
                              <ange-aucun-document
                                class="text-center"
                                v-if="thematique.sousThematiques.length <= 0"
                              >
                                <span class="file-document-name service-list"
                                  >Aucune sous thématique ...
                                </span>
                              </ange-aucun-document>
                              <ol class="service-list" v-else>
                                <li
                                  v-for="(
                                    sousThematique, index
                                  ) in thematique.sousThematiques"
                                  :key="index"
                                >
                                  <NuxtLink
                                    @click="closeModal(index)"
                                    :to="`/cnce/sous-thematique/${sousThematique.slug} `"
                                    class="mb-4"
                                    >{{ sousThematique.libelle }} (<span
                                      style="font-weight: bold"
                                    >
                                      {{ sousThematique.sigle }} </span
                                    >)
                                  </NuxtLink>
                                </li>
                              </ol>
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

          <div class="col-lg-8 mtn-40 order-2 order-lg-1" v-else>
            <ange-aucun-document class="text-center">
              <span class="file-document-name">Aucune thématique ... </span>
            </ange-aucun-document>
          </div>
        </div>
      </div>
    </section>
  </AngeRoot>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      isLoading: true,
      img_url_back: null,
      region: null,
    };
  },
  created() {
    this.initialize();
  },

  mounted() {
    this.img_url_back = config.app_back_url_img;
  },

  methods: {
    initialize() {
      this.fetchData();
    },

    async fetchData() {
      try {
        const response = await this.$axios.get(
          `/region/${this.$route.params.slug}/affiche-thematiques`
        );
        const data = await response.data.data;
        if (data) {
          this.region = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    closeModal(index) {
      document.getElementById(`sub-thematique-close-${index}`).click();
    },
  },
};
</script>
