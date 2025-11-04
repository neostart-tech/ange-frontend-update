<template>
  <div class="section-padding-t90-b100">
    <div class="container">

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

      <section v-else>
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="text-cnce fz-32" style="color: #285a43 !important">
            Statistiques en Évaluation environnementale année {{statistique.annee}}
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-12 mx-auto">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
              <div class="col mb-5">
                <div class="indicator-card h-100">
                  <i class="fa-solid fa-leaf indicator-icon"></i>
                  <h2 class="counter-stat-env">{{statistique.tdr}}</h2>
                  <p class="font-weight-bold">
                    Nombre de Termes de références reçus (TDR )
                  </p>
                </div>
              </div>
              <div class="col mb-5">
                <div class="indicator-card h-100">
                  <i class="fa-solid fa-globe indicator-icon"></i>
                  <h2 class="counter-stat-env">{{statistique.cces}}</h2>
                  <p class="font-weight-bold">
                    Nombre de certificats de conformité environnementale et
                    sociale délivrés (CCES)
                  </p>
                </div>
              </div>
              <div class="col mb-5">
                <div class="indicator-card h-100">
                  <i class="fa-solid fa-clipboard-check indicator-icon"></i>
                  <h2 class="counter-stat-env">{{statistique.cre}}</h2>
                  <p class="font-weight-bold">
                    Nombre de certificats de regularisation environnementale délivrés
                    (CRE)
                  </p>
                </div>
              </div>
              <div class="col mb-5">
                <div class="indicator-card h-100">
                  <i class="fa-solid fa-check-circle indicator-icon"></i>
                  <h2 class="counter-stat-env">{{statistique.eies_ap_fin}}</h2>
                  <p class="font-weight-bold">
                    Nombre d'approbation environnementale délivrée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-lg-12 col.md-12 col-sm-12">
            <NuxtLink to="/statistique" class="btn btn-primary ange-btn-documentation">Consulter toutes les statistiques
            </NuxtLink>
          </div>
        </div>
      </section>

      <div class="section-title text-center mt-5" data-aos="fade-up">
        <h2 class="text-cnce fz-32" style="color: #285a43 !important">
          Statistiques des feux de végétation
        </h2>
      </div>

      <div class="row">
        <div class="col-lg-12 mx-auto">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
            <div class="col mb-5">
              <div class="indicator-card h-100">
                <i class="fa fa-fire-alt indicator-icon"></i>
                <h2 class="counter">6843,21</h2>
                <p class="font-weight-bold">
                  Nombre de superficie brulée (km²) année 2020-2021
                </p>
              </div>
            </div>
            <div class="col mb-5">
              <div class="indicator-card h-100">
                <i class="fa fa-fire-alt indicator-icon"></i>
                <h2 class="counter">15397,27</h2>
                <p class="font-weight-bold">
                  Nombre de superficie brulée (km²) année 2021-2022
                </p>
              </div>
            </div>
            <div class="col mb-5">
              <div class="indicator-card h-100">
                <i class="fa fa-fire-alt indicator-icon"></i>
                <h2 class="counter">11568,68</h2>
                <p class="font-weight-bold">
                  Nombre de superficie brulée (km²) année 2022-2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-lg-12 col.md-12 col-sm-12">
          <NuxtLink to="feux-de-vegetation" class="btn btn-primary ange-btn-documentation">Consulter tous les
            indicateurs
          </NuxtLink>
        </div>
      </div>

      <div class="section-title text-center mt-5" data-aos="fade-up">
        <h2 class="text-cnce fz-32" style="color: #285a43 !important">
          Statistiques des plaintes reçues à l’ANGE
        </h2>
      </div>

      <div class="row">
        <div class="col-lg-12 mx-auto">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
            <div class="col mb-5">
              <div class="indicator-card h-100">
                <i class="fa fa-hammer indicator-icon"></i>
                <h2 class="counter">05</h2>
                <p class="font-weight-bold">
                  Nombre de plainte pour le secteur des Mines année 2024
                </p>
              </div>
            </div>
            <div class="col mb-5">
              <div class="indicator-card h-100">
                <i class="fa fa-seedling indicator-icon"></i>
                <h2 class="counter">02</h2>
                <p class="font-weight-bold">
                  Nombre de plainte pour le secteur de l'Agroalimentaire année 2024
                </p>
              </div>
            </div>
            <div class="col mb-5">
              <div class="indicator-card h-100">
                <i class="fa fa-paw indicator-icon"></i>
                <h2 class="counter">01</h2>
                <p class="font-weight-bold">
                  Nombre de plainte pour le secteur de l'Agropastorale année 2024
                </p>
              </div>
            </div>
            <div class="col mb-5">
              <div class="indicator-card h-100">
                <i class="fa fa-industry indicator-icon"></i>
                <h2 class="counter">01</h2>
                <p class="font-weight-bold">
                  Nombre de plainte pour le secteur de l'Industrie année 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-lg-12 col.md-12 col-sm-12">
          <NuxtLink to="statistiques-plainte" class="btn btn-primary ange-btn-documentation">Consulter les statistiques
            des plaintes
            par genre
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import counterUp from "counterup2";

export default {
  data() {
    return {
      isLoading: false,
      statistique: {}
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/statistiques-eval-env`);

        const data = await response.data.data;
        if (data) {
          this.statistique = data;
          this.isLoading = false;
        }
        await this.$nextTick(() => {
          const counterElements = this.$el.querySelectorAll(".counter-stat-env");

          const callback = (entries) => {
            entries.forEach((entry) => {
              const el = entry.target;
              if (entry.isIntersecting && !el.classList.contains("is-visible")) {
                counterUp(el, {
                  duration: 2000,
                  delay: 16,
                });
                el.classList.add("is-visible");
              }
            });
          };

          const observer = new IntersectionObserver(callback, {threshold: 1});
          counterElements.forEach((el) => {
            observer.observe(el);
          });
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  mounted() {
    this.fetchData();
    this.$nextTick(() => {
      const counterElements = this.$el.querySelectorAll(".counter");

      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 2000,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      };

      const observer = new IntersectionObserver(callback, {threshold: 1});
      counterElements.forEach((el) => {
        observer.observe(el);
      });
    });
  },
};
</script>

<style scoped>
.indicator-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.indicator-card h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.indicator-card p {
  font-size: 19px;
  color: #000;
  font-weight: bold;
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
}

.indicator-icon {
  font-size: 3rem;
  background: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.counter {
  font-family: "Rampart One", cursive;
  font-size: 5em;
  margin: 0vh auto 40vh;
}

.counter:not(.is-visible) {
  visibility: hidden;
}
</style>
