<template>
  <div class="section-padding-t90-b100">
    <Head>
      <Title>ANGE-TOGO | Statistique</Title>
      <Meta
        property="og:title"
        content="Agence National de Gestion de l'Environnement"
      />
      <Meta
        property="og:type"
        content="Agence National de Gestion de l'Environnement"
      />
    </Head>
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2
          class="text-cnce fz-32"
          :style="{ color: '#007608' }"
          v-if="!isLoading"
        >
          Statistiques des EIES réalisés par l'ANGE
        </h2>
      </div>

      <!-- Premier tableau (statistiques générales) -->
      <div class="mt-5">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Année</th>
                <th>TDR AE</th>
                <th>TDR EIES</th>
                <th>AE Provisoires</th>
                <th>AE finaux</th>
                <th>EIES AP Provisoires</th>
                <th>EIES SP Provisoires</th>
                <th>EIES AP finaux</th>
                <th>EIES SP finaux</th>
                <th>CCE</th>
                <th>CRE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="isLoading">
                <td colspan="12" class="text-center py-4">
                  <div class="spinner-grow text-success me-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-danger me-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>

              <tr v-for="(stat, index) in statistiques" :key="index" v-else>
                <td>{{ stat.annee }}</td>
                <td>{{ stat.tdr_ae }}</td>
                <td>{{ stat.tdr_eies }}</td>
                <td>{{ stat.ae_prov }}</td>
                <td>{{ stat.ae_finaux }}</td>
                <td>{{ stat.eies_ap_prov }}</td>
                <td>{{ stat.eies_sp_prov }}</td>
                <td>{{ stat.eies_ap_fin }}</td>
                <td>{{ stat.eies_sp_fin }}</td>
                <td>{{ stat.cce }}</td>
                <td>{{ stat.cre }}</td>
                <td><strong>{{ stat.totaux }}</strong></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><strong>TOTAL</strong></td>
                <td>{{ totals.tdr_ae }}</td>
                <td>{{ totals.tdr_eies }}</td>
                <td>{{ totals.ae_prov }}</td>
                <td>{{ totals.ae_finaux }}</td>
                <td>{{ totals.eies_ap_prov }}</td>
                <td>{{ totals.eies_sp_prov }}</td>
                <td>{{ totals.eies_ap_fin }}</td>
                <td>{{ totals.eies_sp_fin }}</td>
                <td>{{ totals.cce }}</td>
                <td>{{ totals.cre }}</td>
                <td><strong>{{ totals.totaux }}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <!-- Notes explicatives -->
        <div class="row footer-notes mt-4">
          <div class="col-md-6">
            <p><strong>EIES :</strong> Étude d'impact environnemental et social</p>
            <p><strong>EIES AP :</strong> Étude d'impact environnemental et social Approfondie</p>
            <p><strong>EIES SP :</strong> Étude d'impact environnemental et social Simplifiée</p>
            <p><strong>TDR :</strong> Termes de référence</p>
          </div>
          <div class="col-md-6">
            <p><strong>AE :</strong> Audit environnemental</p>
            <p><strong>CCE :</strong> Certificat de Conformité Environnementale</p>
            <p><strong>CRE :</strong> Certificat de Régularisation Environnementale</p>
          </div>
        </div>
      </div>

      <!-- Bouton pour afficher le graphique -->
      <!-- <div class="text-center">
        <button
          class="btn btn-primary ange-btn-documentation mt-4 mb-5"
          type="button"
          @click="toggleChart"
        >
          <span v-if="!showChart"> Consulter le graphique</span>
          <span v-else> Masquer le graphique</span>
        </button>
      </div> -->

      <!-- Graphique -->
      <div v-if="showChart" class="row mb-5">
        <div class="col-lg-12">
          <div id="chart-container" class="chart-wrapper"></div>
        </div>
      </div>

      <!-- Deuxième tableau (durée moyenne) -->
      <div class="section-title text-center mt-5" data-aos="fade-up">
        <h2 class="text-cnce fz-32" :style="{ color: '#007608' }">
          Statistiques de la durée moyenne de traitement des dossiers EIES par année
        </h2>
      </div>

      <div class="mt-5 mb-5">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Année</th>
                <th>Nombre de EIES/CCE</th>
                <th>Moyenne traitement (en jours)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="isLoading">
                <td colspan="3" class="text-center py-4">
                  <div class="spinner-grow text-success me-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-danger me-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>
              <tr v-for="(stat, index) in statistiques" :key="index" v-else>
                <td>{{ stat.annee }}</td>
                <td>{{ stat.cce }}</td>
                <td>
                  <span class="badge-duree">{{ stat.moyenne_traitement }} jours</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><strong>TOTAL</strong></td>
                <td>{{ totals.cce }}</td>
                <td><strong>{{ totals.tmoyenne_traitement }} jours</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- SECTION PROJETS - Affichage simple par année -->
      <div class="section-title text-center mt-5" data-aos="fade-up">
        <h2 class="text-cnce fz-32" :style="{ color: '#007608' }">
          Liste des projets environnementaux par année
        </h2>
        <p class="text-muted mt-2">Consultez l'ensemble des projets traités, classés par année</p>
      </div>

      <div class="mt-4 mb-5">
        <!-- Loader -->
        <div v-if="projetsLoading" class="text-center py-5">
          <div class="spinner-wrapper">
            <div class="spinner" :style="{ borderTopColor: '#007608' }"></div>
            <p class="mt-3 text-muted">Chargement des projets...</p>
          </div>
        </div>

        <div v-else>
          <!-- Vérifier s'il y a des projets -->
          <div v-if="Object.keys(projetsParAnneeTriees).length > 0">
            <!-- Affichage direct par année - la dernière année en premier -->
            <div 
              v-for="(projets, annee) in projetsParAnneeTriees" 
              :key="annee"
              class="mb-5"
            >
              <!-- En-tête de l'année qui prend toute la largeur -->
              <div class="year-full-header" :style="{ backgroundColor: '#007608' }">
                <h3 class="year-title" style="color: white !important;">Année {{ annee }}</h3>
                <span class="project-count" style="color: white !important;">{{ projets.length }} projet{{ projets.length > 1 ? 's' : '' }}</span>
              </div>

              <!-- Liste des projets de l'année -->
              <div class="projects-list">
                <div 
                  v-for="(projet, index) in projets" 
                  :key="projet.id"
                  class="project-item"
                >
                  <div class="project-number">{{ index + 1 }}</div>
                  <div class="project-name">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="'#007608'" stroke-width="1.5" class="project-icon">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>{{ projet.nom || 'Projet sans nom' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Message si aucun projet du tout -->
          <div v-else class="empty-state text-center py-5">
            <div class="empty-icon mb-4">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                <line x1="15" y1="9" x2="9" y2="15"></line>
              </svg>
            </div>
            <h4 class="text-muted mb-2">Aucun projet disponible</h4>
            <p class="text-muted">Les projets apparaîtront ici une fois ajoutés</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      projetsLoading: false,
      showChart: false,
      categories: [],
      series: [],
      statistiques: [],
      projetsParAnnee: {},
      totals: {
        tdr_ae: 0,
        tdr_eies: 0,
        ae_prov: 0,
        ae_finaux: 0,
        eies_ap_prov: 0,
        eies_sp_prov: 0,
        eies_ap_fin: 0,
        eies_sp_fin: 0,
        cce: 0,
        cre: 0,
        totaux: 0,
        tmoyenne_traitement: 0,
      },
    };
  },

  computed: {
    // Trier les années par ordre décroissant pour avoir la plus récente en premier
    projetsParAnneeTriees() {
      const annees = Object.keys(this.projetsParAnnee);
      // Tri décroissant : la plus grande année (la plus récente) en premier
      const anneesTriees = annees.sort((a, b) => parseInt(b) - parseInt(a));
      
      const result = {};
      anneesTriees.forEach(annee => {
        result[annee] = this.projetsParAnnee[annee];
      });
      
      return result;
    }
  },

  mounted() {
    this.fetchData();
    this.fetchProjets();
  },

  methods: {
    toggleChart() {
      this.showChart = !this.showChart;
      if (this.showChart) {
        setTimeout(() => {
          this.renderChart();
        }, 100);
      }
    },

    async renderChart() {
      try {
        if (!this.categories.length || !this.series.length) {
          await this.fetchChartData();
        }
        
        if (document.getElementById("chart-container") && this.categories.length) {
          this.$highchart.chart("chart-container", {
            chart: {
              type: "column",
              backgroundColor: '#ffffff',
              style: { fontFamily: 'Arial, sans-serif' }
            },
            title: {
              text: "Évolution des statistiques EIES",
              style: { color: '#007608', fontSize: '18px', fontWeight: 'bold' }
            },
            xAxis: {
              categories: this.categories,
              crosshair: true,
              labels: { style: { color: '#333', fontSize: '12px' } }
            },
            yAxis: {
              min: 0,
              title: { text: "Nombre de dossiers traités", style: { color: '#333' } },
              gridLineColor: '#e0e0e0'
            },
            tooltip: {
              valueSuffix: " dossiers",
              backgroundColor: '#007608',
              borderColor: '#007608',
              style: { color: '#ffffff' }
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                  enabled: true,
                  color: '#007608'
                }
              }
            },
            series: this.series,
            credits: { enabled: false },
            legend: {
              enabled: true,
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              itemStyle: { color: '#333' }
            }
          });
        }
      } catch (error) {
        console.error("Error rendering chart:", error);
      }
    },

    async fetchChartData() {
      try {
        const response = await this.$axios.get(`/statistiques`);
        const data = response.data.data[0];
        
        if (data) {
          this.categories = data.services || [];
          this.series = (data.series || []).map((seriesItem) => ({
            name: seriesItem.name,
            data: (seriesItem.data || []).map((item) => parseFloat(item) || 0),
          }));
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    },
    
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/statistiques-more-info`);
        const data = response.data.data;
        
        if (data && Array.isArray(data)) {
          this.statistiques = data;
          this.calculateTotals();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchProjets() {
      this.projetsLoading = true;
      try {
        const response = await this.$axios.get(`/projets`);
        // La réponse est déjà au format { "2024": [...], "2025": [...] }
        this.projetsParAnnee = response.data || {};
      } catch (error) {
        console.error("Error fetching projects:", error);
        this.projetsParAnnee = {};
      } finally {
        this.projetsLoading = false;
      }
    },

    calculateTotals() {
      this.totals = {
        tdr_ae: 0,
        tdr_eies: 0,
        ae_prov: 0,
        ae_finaux: 0,
        eies_ap_prov: 0,
        eies_sp_prov: 0,
        eies_ap_fin: 0,
        eies_sp_fin: 0,
        cce: 0,
        cre: 0,
        totaux: 0,
        tmoyenne_traitement: 0,
      };

      let sommeMoyenne = 0;

      this.statistiques.forEach((stat) => {
        this.totals.tdr_ae += Number(stat.tdr_ae) || 0;
        this.totals.tdr_eies += Number(stat.tdr_eies) || 0;
        this.totals.ae_prov += Number(stat.ae_prov) || 0;
        this.totals.ae_finaux += Number(stat.ae_finaux) || 0;
        this.totals.eies_ap_prov += Number(stat.eies_ap_prov) || 0;
        this.totals.eies_sp_prov += Number(stat.eies_sp_prov) || 0;
        this.totals.eies_ap_fin += Number(stat.eies_ap_fin) || 0;
        this.totals.eies_sp_fin += Number(stat.eies_sp_fin) || 0;
        this.totals.cce += Number(stat.cce) || 0;
        this.totals.cre += Number(stat.cre) || 0;
        this.totals.totaux += Number(stat.totaux) || 0;

        sommeMoyenne += Number(stat.moyenne_traitement) || 0;
      });

      if (this.statistiques.length > 0) {
        this.totals.tmoyenne_traitement = Math.round(
          sommeMoyenne / this.statistiques.length
        );
      }
    }
  },
};
</script>

<style scoped>
/* Styles de base */
.table thead th {
  background-color: #007608 !important;
  color: white;
  text-align: center;
  vertical-align: middle;
}

.table tfoot td {
  background-color: #007608 !important;
  color: white;
  font-weight: bold;
  text-align: center;
}

.table td {
  text-align: center;
  vertical-align: middle;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  margin-bottom: 1rem;
}

.footer-notes p {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
}

/* Style pour le badge de durée */
.badge-duree {
  background-color: #e8f5e9;
  color: #007608;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 500;
  display: inline-block;
}

/* Styles pour le graphique */
.chart-wrapper {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  min-height: 400px;
}

/* En-tête d'année pleine largeur */
.year-full-header {
  background-color: #007608;
  color: white !important;
  padding: 15px 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.year-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: white !important;
}

.project-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  color: white !important;
}

/* Liste des projets */
.projects-list {
  border: 1px solid #dee2e6;
  border-top: none;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  margin-bottom: 30px;
}

.project-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #dee2e6;
  background: white;
  transition: background-color 0.2s ease;
}

.project-item:last-child {
  border-bottom: none;
}

.project-item:hover {
  background-color: #f8f9fa;
}

.project-number {
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #007608;
  margin-right: 15px;
  flex-shrink: 0;
}

.project-name {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.project-icon {
  flex-shrink: 0;
}

/* Loader */
.spinner-wrapper {
  padding: 60px 0;
}

.spinner {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border: 3px solid #eef2f6;
  border-top-color: #007608;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* État vide */
.empty-state {
  background: #f8fafc;
  border-radius: 32px;
  padding: 60px 20px;
}

.empty-icon {
  opacity: 0.5;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Bouton personnalisé */
.ange-btn-documentation {
  background: linear-gradient(135deg, #007608 0%, #005c06 100%);
  border: none;
  padding: 14px 35px;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 118, 8, 0.2);
}

.ange-btn-documentation:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 118, 8, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .year-full-header {
    padding: 12px 15px;
    flex-direction: column;
    text-align: center;
  }
  
  .year-title {
    font-size: 1.2rem;
  }
  
  .project-item {
    padding: 10px 15px;
  }
  
  .project-number {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
    margin-right: 10px;
  }
  
  .project-name {
    font-size: 0.95rem;
  }
  
  .chart-wrapper {
    min-height: 300px;
    padding: 10px;
  }
  
  .footer-notes p {
    font-size: 0.9rem;
  }
}

/* Très petits écrans */
@media (max-width: 480px) {
  .project-item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  
  .project-number {
    margin-right: 0;
  }
  
  .project-name {
    flex-direction: column;
    text-align: center;
  }
}
</style>