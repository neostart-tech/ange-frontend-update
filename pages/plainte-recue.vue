<template>
    <div class="section-padding-t90-b100">
      <div class="container">
        <!-- Section Title Start -->
        <div class="section-title text-center" data-aos="fade-up">
          <h2
            class="text-cnce fz-32"
            style="color: #285a43 !important"
            v-if="!isLoading"
          >
            {{ chartTitle }}
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
                <th>Moy traitement (en jours)</th>
                <th>TOTAL des dossiers traités</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2018</td>
                <td>8</td>
                <td>91</td>
                <td>5</td>
                <td>4</td>
                <td>60</td>
                <td>2</td>
                <td>51</td>
                <td>2</td>
                <td>57</td>
                <td>3</td>
                <td>45</td>
                <td>283</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>25</td>
                <td>103</td>
                <td>10</td>
                <td>3</td>
                <td>82</td>
                <td>4</td>
                <td>77</td>
                <td>3</td>
                <td>88</td>
                <td>0</td>
                <td>43</td>
                <td>395</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>11</td>
                <td>86</td>
                <td>12</td>
                <td>8</td>
                <td>91</td>
                <td>7</td>
                <td>42</td>
                <td>5</td>
                <td>35</td>
                <td>5</td>
                <td>42</td>
                <td>302</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>9</td>
                <td>110</td>
                <td>13</td>
                <td>5</td>
                <td>129</td>
                <td>3</td>
                <td>96</td>
                <td>3</td>
                <td>96</td>
                <td>5</td>
                <td>39</td>
                <td>469</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>22</td>
                <td>66</td>
                <td>18</td>
                <td>16</td>
                <td>112</td>
                <td>3</td>
                <td>98</td>
                <td>2</td>
                <td>136</td>
                <td>10</td>
                <td>38</td>
                <td>483</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>36</td>
                <td>167</td>
                <td>19</td>
                <td>9</td>
                <td>176</td>
                <td>00</td>
                <td>82</td>
                <td>00</td>
                <td>65</td>
                <td>05</td>
                <td>35</td>
                <td>559</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>TOTAL</td>
                <td>111</td>
                <td>623</td>
                <td>77</td>
                <td>45</td>
                <td>650</td>
                <td>19</td>
                <td>446</td>
                <td>15</td>
                <td>477</td>
                <td>28</td>
                <td>2 491</td>
              </tr>
            </tfoot>
          </table>
          <div class="row footer-notes">
            <div class="col-md-6">
              <p>
                <strong>EIES :</strong> Étude d’impact environnemental et social
              </p>
              <p>
                <strong>EIES AP :</strong> Étude d’impact environnemental et
                social Approfondie
              </p>
              <p>
                <strong>EIES SP :</strong> Étude d’impact environnemental et
                social Simplifiées
              </p>
            </div>
            <div class="col-md-6">
              <p><strong>AE :</strong> Audit environnemental</p>
              <p>
                <strong>CCE :</strong> Certificat de Conformité Environnemental
              </p>
              <p>
                <strong>CRE :</strong> Certificat de Régularisation
                Environnemental
              </p>
              <p><strong>TDR :</strong> Termes de référence</p>
            </div>
          </div>
        </div>
  
        <div>
          <button
            class="btn btn-primary ange-btn-documentation mb-5"
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: false,
        categories: [],
        series: [],
        chartTitle: "",
      };
    },
  
    mounted() {
      this.renderChart();
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
    },
  };
  </script>
  
  <style scoped>
  .table thead th {
    background-color: #4d6b4d;
  
    /* background: linear-gradient(-90deg, #016a98 0%, #146c53 100%); */
    /* background-color: #007bff; */
    color: white;
    text-align: center;
    vertical-align: middle;
  }
  
  .table tfoot td {
    background-color: #4d6b4d;
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
  