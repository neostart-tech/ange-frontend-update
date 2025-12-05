<template>
  <div class="section-padding-t90-b100">
    <Head>
      <Title>ANGE-TOGO | Statistique</Title>
      <Meta property="og:title" content="Agence National de Gestion de l'Environnement"/>
      <Meta property="og:type" content="Agence National de Gestion de l'Environnement"/>
    </Head>
    <div class="container">
      <!-- Section Title Start -->

      <div class="section-title text-center" data-aos="fade-up">
        <h2
            class="text-cnce fz-32"
            style="color: #285a43 !important"
            v-if="!isLoading"
        >
          Statistiques des EIES réalisés par l'ANGE
        </h2>
      </div>

      <div class="mt-5">
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
            <th>TOTAL des dossiers traités</th>
          </tr>
          </thead>
          <tbody>

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

           <tr v-for="(stat, index) in statistiques" v-else>
            <td>{{ stat.annee }}</td>
            <td>{{stat.tdr_ae}}</td>
            <td>{{stat.tdr_eies}}</td>
            <td>{{stat.ae_prov}}</td>
            <td>{{stat.ae_finaux}}</td>
            <td>{{stat.eies_ap_prov}}</td>
            <td>{{stat.eies_sp_prov}}</td>
            <td>{{stat.eies_ap_fin}}</td>
            <td>{{stat.eies_sp_fin}}</td>
            <td>{{stat.cce}}</td>
            <td>{{stat.cre}}</td>
            <td>{{stat.totaux}}</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td>TOTAL</td>
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
            <td>{{ totals.totaux }}</td>
          </tr>
          </tfoot>
        </table>
        <div class="row footer-notes">
          <div class="col-md-6 mt-4">
            <p style="text-align: justify !important; font-size: 20px !important">
              <strong>EIES :</strong> Étude d’impact environnemental et social
            </p>
            <p style="text-align: justify !important; font-size: 20px !important">
              <strong>EIES AP :</strong> Étude d’impact environnemental et
              social Approfondie
            </p>
            <p style="text-align: justify !important; font-size: 20px !important">
              <strong>EIES SP :</strong> Étude d’impact environnemental et
              social Simplifiée
            </p>
            <p style="text-align: justify !important; font-size: 20px !important"><strong>TDR :</strong> Termes de
              référence</p>
          </div>
          <div class="col-md-6 mt-4">
            <p style="text-align: justify !important; font-size: 20px !important"><strong>AE :</strong> Audit
              environnemental</p>
            <p style="text-align: justify !important; font-size: 20px !important">
              <strong>CCE :</strong> Certificat de Conformité Environnementale
            </p>
            <p style="text-align: justify !important; font-size: 20px !important">
              <strong>CRE :</strong> Certificat de Régularisation
              Environnementale
            </p>

          </div>
        </div>
      </div>

      <div>
        <button
            class="btn btn-primary ange-btn-documentation mt-4 mb-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
        >
          Consulter le graphe
        </button>
      </div>

      <div class="collapse" id="collapseExample">
        <div class="row">
          <div class="col-lg-12">
            <div id="chart-container"></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div id="chart-container"></div>
        </div>
      </div>

      <div class="section-title text-center" data-aos="fade-up">
        <h2
            class="text-cnce fz-32"
            style="color: #285a43 !important"

        >Statistiques de la durée moyenne de traitement des dossiers EIES par année
        </h2>
      </div>

      <div class="mt-5 mb-5">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Année</th>
            <th>EIES/CCE</th>
            <th>Moyenne traitement (en jours)</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2018</td>
            <td>57</td>
            <td>45</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>88</td>
            <td>43</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>35</td>
            <td>42</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>96</td>
            <td>39</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>136</td>
            <td>38</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>65</td>
            <td>35</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td>TOTAL</td>
            <td>477</td>
            <td>40</td>
          </tr>
          </tfoot>
        </table>
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
      isLoadingStat: false,
      categories: [],
      series: [],
      chartTitle: "",
      statistiques: [],
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
        totaux: 0
      }
    };
  },

  mounted() {
    this.renderChart();
    this.fetchData();
  },

  methods: {
    async renderChart() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/statistiques`);

        const data = response.data.data[0];
        if (data) {
          this.categories = data.services;
          this.series = data.series.map((seriesItem) => ({
            name: seriesItem.name,
            data: seriesItem.data.map((item) => parseFloat(item)), // Convert strings to numbers
          }));
          this.chartTitle = data.text;

          this.$highchart.chart("chart-container", {
            chart: {
              type: "column",
            },
            title: {
              text: "",
              align: "center",
            },
            xAxis: {
              categories: this.categories,
              crosshair: true,
              accessibility: {
                description: "Categories",
              },
            },
            yAxis: {
              min: 0,
              title: {
                text: "Nombres de dossiers traités",
              },
            },
            tooltip: {
              valueSuffix: " dossiers",
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0,
              },
            },
            series: this.series,
          });

          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData() {
      this.isLoadingStat = true;
      try {
        const response = await this.$axios.get(`/statistiques-more-info`);

        const data = await response.data.data;
        if (data) {
          this.statistiques = data;
          this.isLoadingStat = false;
          this.calculateTotals();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    calculateTotals() {
      // Réinitialiser les totaux
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
        totaux: 0
      };

      this.statistiques.forEach(stat => {
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
      });
    }
  },
};
</script>

<style scoped>
.table thead th {
  background-color: #00a651;

  /* background: linear-gradient(-90deg, #016a98 0%, #146c53 100%); */
  /* background-color: #007bff; */
  color: white;
  text-align: center;
  vertical-align: middle;
}

.table tfoot td {
  background-color: #00a651;
  color: white;
  font-weight: bold;
  text-align: center;
}

.table td {
  text-align: center;
  vertical-align: middle;
}

.table tfoot td:last-child {
  font-weight: bold;
}

.footer-notes {
  font-size: 0.85rem;
  margin-top: 1rem;
}

.footer-notes p {
  margin: 0 0 1rem; /* Ajoute de l'espace en bas de chaque note */
}
</style>
