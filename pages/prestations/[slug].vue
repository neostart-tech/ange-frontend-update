<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Procédure administrative</Title>
      <Meta
        name="description"
        content="Procedure Administrative Agence National de Gestion de l'Eenvironnement"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      :activePageName="`${limitation}`"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Procédures', url: '/prestations' },
      ]"
    />

    <!-- service section start -->
    <div class="container mt-5">
      <div class="row">
        <!-- Loader -->
        <div v-if="isLoading" class="text-center">
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

        <div class="col-lg-12 col-md-12 col-sm-12">
          <h3 class="text-cnce fz-32 text-center mb-30" v-if="!isLoading">
            {{ procedure.nom }}
          </h3>

          <div class="row">
            <div
              class="col-lg-4 col-md-4 col-sm-12 col-12 categories d-flex flex-column mb-3"
            >
              <div class="header">
                <h4 style="color: #fff !important">
                  Autre procedures relatives
                </h4>
              </div>
              <div class="card">
                <div class="card-body steps-container" v-if="!isLoading">
                  <NuxtLink
                    class="category-item"
                    v-for="(other, index) in procedure.others"
                    :key="index"
                    :to="`/prestations/${other.slug}`"
                  >
                    <div class="category-text">
                      <i class="fa fa-leaf"></i><span>{{ other.nom }}</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 mb-3">
              <div class="header">
                <h4 style="color: #fff !important">Résumé de la procédure</h4>
              </div>
              <div class="card mb-3" v-if="!isLoading">
                <div
                  class="card-body steps-container"
                  v-html="procedure.description"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- service section end -->
  </AngeRoot>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      isLoading: true,
      img_url_back: null,
      procedure: {},
      limitation: "",
    };
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.fetchData();
    },

    async fetchData() {
      try {
        const response = await this.$axios.get(
          `/procedures/${this.$route.params.slug}`
        );
        const data = await response.data.data;
        if (data) {
          this.procedure = data;
          this.limitation = this.procedure.nom.slice(0, 35) + "...";
          this.isLoading = false;
          console.log("reponse", this.procedure);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  mounted() {
    this.img_url_back = config.app_back_url_img;
    // this.fetchData().then(() => this.filteredStep);
  },
};
</script>

<style scoped>
.step-list {
  list-style: none;
  padding-left: 0;
}
.step-list li {
  margin-bottom: 10px;
}
.card img {
  width: 100%;
  height: auto;
}
.header {
  /* background-color: #007bff; */
  background-image: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  color: white;
  padding: 10px;
  border-radius: 5px 5px 0 0;
}
.card-body {
  border: 1px solid linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  border-top: none;
  border-radius: 0 0 5px 5px;
}
.steps-container {
  max-height: 600px; /* Ajustez cette hauteur selon vos besoins */
  overflow-y: auto;
}

.active-step {
  color: #2e95e9;
}
</style>
