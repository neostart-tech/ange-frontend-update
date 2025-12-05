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
      :activePageName="`Résultat pour le mot ${query}`"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[]"
    />

    <!-- service section start -->
    <div class="container mt-5 mb-5">
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="text-cnce fz-32" style="color: #285a43 !important">
          {{ nbResultat }} résultat{{ nbResultat > 1 ? "s" : "" }} trouvé{{
            nbResultat > 1 ? "s" : ""
          }}
          pour le mot {{ query }}
        </h2>
      </div>
    </div>

    <div v-if="isLoading">Chargement...</div>
    <div class="container mt-5 mb-50" v-if="nbResultat > 0">
      <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li
          class="nav-item"
          role="presentation"
          v-for="(items, key) in result"
          :key="key"

        >
          <button
            class="nav-link"
            :class="{ active: activeTab === key }"
            :id="'pills-' + key + '-tab'"
            data-bs-toggle="pill"
            :data-bs-target="'#pills-' + key"
            type="button"
            role="tab"
            :aria-controls="'pills-' + key"
            :aria-selected="activeTab === key"
            @click="activeTab = key"
          >
            {{ key.charAt(0).toUpperCase() + key.slice(1) }} ({{
              items.length
            }})
          </button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade"
          v-for="(items, key) in result"
          :key="'tab-' + key"
          :class="{ show: activeTab === key, active: activeTab === key }"
          :id="'pills-' + key"
          role="tabpanel"
          :aria-labelledby="'pills-' + key + '-tab'"
        >
          <div v-if="items.length > 0" class="row">
            <div
              class="col-md-4 mb-3"
              v-for="(item, index) in items"
              :key="index"
            >
              <div class="card h-100">
                <img
                  v-if="item.type === 'texte'"
                  :src="'https://via.placeholder.com/150'"
                  class="card-img-top"
                  alt="Image"
                />
                <div class="card-body">
                  <!-- <p class="text-muted">{{ item.title }}</p> -->
                  <h5 class="card-title">{{ item.title }}</h5>
                  <a :href="`/${item.prefix}/${item.slug}`"
                    >LIRE L'ARTICLE ENTIER →</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="text-muted">Aucun élément à afficher.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- service section end -->
  </AngeRoot>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      nbResultat: 0,
      activeTab: "",
      result: {},
      isLoading: true,
    };
  },
  created() {
    // Récupération du paramètre query à partir de l'URL
    this.query = this.$route.query.q || "";
  },
  mounted() {
    this.resultSearch();
  },
  methods: {
    async resultSearch() {
      try {
        const response = await this.$axios.post(`/search`, this.query);
        const data = response.data;
        if (data.code == 200) {
          this.nbResultat = data.count;
          this.result = data.data || {};
          console.log("mes résultats", this.result);

          this.activeTab =
            Object.keys(this.result).find(
              (key) => this.result[key] && this.result[key].length > 0
            ) || "";

          this.isLoading = false; // Désactive l'état de chargement
          console.log("Active Tab:", this.activeTab);
          console.log("Result:", this.result);
        }
      } catch (error) {
        console.log("Une erreur est survenue", error);
      }
    },
  },
};
</script>

<style scoped>
.nav-pills .nav-link.active {
  background-color: #4d6b4d !important;
  color: #e1e6ec !important;
  font-weight: bold;
}

.tab-content {
  padding: 20px !important;
  /* background-color: #e5f3e5; */
  border: #4d6b4d solid !important;
  border-radius: 8px !important;
  margin-top: 20px !important;
}

.card {
  border: none !important;
  border-radius: 10px !important;
  background-color: #e5f3e5;
}

.card img {
  border-radius: 10px !important;
}

.card-title {
  font-size: 1rem !important;
  font-weight: bold !important;
}

.card-text {
  color: #606060 !important;
  font-size: 0.9rem !important;
}

.card a {
  color: #4caf50 !important;
  font-weight: bold !important;
  text-decoration: none !important;
  margin-top: 10px !important;
  display: inline-block !important;
}
</style>
