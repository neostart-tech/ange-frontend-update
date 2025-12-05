<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2
            class="text-cnce fz-32"
            style="color: #285a43 !important"
        >
          Cartes feux de végétation
        </h2>
      </div>

      <div class="row mt-5">
        <div class="col-lg-3" v-for="(feuxVegetation, index) in feuxVegetations" :key="index">
          <div class="section-title text-center" data-aos="fade-up">
            <h6
                class="text-cnce fz-32"
                style="color: #285a43 !important"
            >
              {{ feuxVegetation.title }}
            </h6>
          </div>
          <img :src="feuxVegetation.img" alt="" :key="feuxVegetation.id">
          <a
              class="mt-3 avtar avtar-xs btn-link-success btn-pc-default"
              data-bs-toggle="modal"
              :data-bs-target="`#bd-example-modal-lg-${index}`"
          >
            <i class="fa fa-eye"></i>&nbsp;Visulaliser
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
                  <h1
                      class="modal-title fs-5"
                      id="exampleModalLabel"
                  >
                    {{ feuxVegetation.title }}
                  </h1>

                  <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      :id="`bd-example-modal-lg-close-${index}`"
                  ></button>
                </div>

                <div class="modal-body">
                  <img :src="feuxVegetation.img" alt="" :key="feuxVegetation.id">
                </div>
              </div>
            </div>
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

      feuxVegetations: [
        {
          id: 1,
          img: "/images/feux-vegetation/Carte_Feux_2018_2019_TG.png",
          title: "Carte des Feux de végétation année 2018 - 2019"
        },
        {
          id: 2,
          img: "/images/feux-vegetation/Carte_Feux_2020_2021_TG.png",
          title: "Carte des Feux de végétation année 2020 - 2021"
        },
        {
          id: 3,
          img: "/images/feux-vegetation/Carte_Ldst_SB_2021_2022_TG.png",
          title: "Carte des Feux de végétation année 2021 - 2022"
        },
        {
          id: 4,
          img: "/images/feux-vegetation/Carte_Ldst_SB_2022_2023_TG.png",
          title: "Carte des Feux de végétation année 2022 - 2023"
        },
      ],
    };
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
