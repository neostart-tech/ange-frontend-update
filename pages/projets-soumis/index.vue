<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Projets soumis à étude d’impact environnemental et social</Title>
      <Meta
          name="description"
          content="Procedure Administrative Agence National de Gestion de l'Environnement Projets soumis à étude d’impact environnemental et social"
      ></Meta>
    </Head>
    <AngeBreadcrumb
        activePageName="Projets soumis à étude d’impact environnemental et social"
        backgroundUrl="/images/bg/bg-ange-03.jpg"
        :others="[{ title: 'Accueil', url: '/' }]"
    />

    <!-- service section start -->
    <div class="container mt-5 mb-5">
      <div class="row">
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

        <div v-if="!isLoading" class="col-lg-12">

          <div class="section-title text-center" data-aos="fade-up">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              A. Projets soumis à étude d’impact environnemental et social
            </h2>
          </div>
          <ul class="mt-2">
            <li>
              <strong style="text-align: justify; font-size: 22px; margin-bottom: 10px;">Loi n°2008-005 portant
                loi-cadre sur l’environnement</strong>
              <p style="text-align: justify; font-size: 20px; margin-bottom: 10px;"><strong><u>Article
                38</u> :</strong> Les activités, projets, programmes et plans de développement
                qui, par l’importance de
                leurs dimensions ou leurs incidences sur les milieux naturel et humain, sont susceptibles de porter
                atteinte à l’environnement sont soumis à une autorisation préalable du ministre chargé de
                l’environnement.</p>
            </li>

            <li>
              <strong style="text-align: justify; font-size: 22px; margin-bottom: 10px; margin-top: 18px;">Décret n°
                2017-040/PR
                fixant la procédure des études d’impact environnemental
                et social
                (EIES)</strong>
              <p style="text-align: justify; font-size: 20px; margin-bottom: 10px;">
                <strong><u>Article 6</u> :</strong>
                sont soumis à une EIES, les projets relatifs aux activités ci-dessous citées :</p>
              <ul>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">Les aménagements, ouvrages et
                  travaux pouvant affecter les zones sensibles ;
                </li>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">Les aménagements, ouvrages,
                  et travaux susceptibles, de par leur nature technique, leur
                  ampleur et la sensibilité du milieu d'implantation, d’avoir des conséquences dommageables sur
                  l’environnement ;
                </li>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">L’utilisation ou le transfert
                  de technologie susceptible d'avoir des conséquences dommageables
                  sur l’environnement ;
                </li>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">L’entreposage de produits
                  chimiques dangereux ;
                </li>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">L’entreposage de n'importe
                  quel liquide au-delà de 50 000 m<sup>3</sup>
                </li>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">Le transport commercial
                  régulier et fréquent ou ponctuel par voie routière, ferroviaire,
                  aérienne, maritime ou fluvial de matières dangereuses (corrosives, toxiques, contagieuses ou
                  radioactives, etc.) ;
                </li>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">L’installation ou
                  l'établissement classé dont l’ouverture est soumise à autorisation ;
                </li>
                <li style="text-align: justify; font-size: 20px; margin-bottom: 10px;">La modification des projets
                  qui ont précédemment fait l'objet d'une étude d'impact
                  environnemental et social.
                </li>

              </ul>
            </li>
            <li>
              <p style="text-align: justify; font-size: 22px; margin-bottom: 10px; margin-top: 18px;">Liste des
                projets soumis à EIES par secteurs d’activités (arrêté n°151/MERF/CAB/ANGE fixant la
                liste des activités et projets soumis à EIES complétant l’art 6 du décret ci-dessus)</p>
              <div class="dt-responsive table-responsive">
                <table
                    id="dom-jquery"
                    class="table table-striped table-bordered nowrap"
                >
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>SECTEURS ET TYPES DE PROJETS</th>
                    <th style="text-align: center !important">CONSULTER</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(procedure, index) in procedures" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ procedure.nom }}</td>

                    <td class="text-center">
                      <ul class="list-inline me-auto mb-0">
                        <li
                            class="list-inline-item align-bottom"
                            data-bs-toggle="tooltip"
                            title="Visualiser"
                        >
                          <a
                              class="avtar avtar-xs btn-link-success btn-pc-default"
                              data-bs-toggle="modal"
                              :data-bs-target="`#bd-example-modal-xl-${index}`"
                          >
                            <i class="fa fa-eye"></i>
                          </a>

                          <div
                              class="modal fade bd-example-modal-xl"
                              :id="`bd-example-modal-xl-${index}`"
                              tabindex="-1"
                              role="dialog"
                              aria-labelledby="myLargeModalLabel"
                              aria-hidden="true"
                          >
                            <div class="modal-dialog modal-xl">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                      class="modal-title fs-5"
                                      id="exampleModalLabel"
                                  >
                                    {{ procedure.nom }}
                                  </h1>

                                  <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                      :id="`bd-example-modal-xl-close-${index}`"
                                      @click="test(index)"
                                  ></button>
                                </div>

                                <div
                                    class="modal-body"
                                    v-html="procedure.description"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li
                            class="list-inline-item align-bottom"
                            data-bs-toggle="tooltip"
                            title="Télécharger"
                        >
                          <a
                              :href="`${img_url_back}/${procedure.documents[0]?.file_link}`"
                              target="_blank"
                              class="avtar avtar-xs btn-link-danger btn-pc-default"
                          >
                            <i class="fa fa-download f-18"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
          <div class="section-title text-center" data-aos="fade-up">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important; margin-top: 20px">
              B. Projets non soumis à étude d'impact environnemental et social
            </h2>
          </div>
          <ul>
            <li>
              <strong style="text-align: justify; font-size: 22px; margin-bottom: 10px;"> Décret n° 2017-040/PR
                fixant la procédure des études d’impact environnemental et social
                (EIES)</strong>
              <p style="text-align: justify; font-size: 20px; margin-bottom: 10px;">
                <strong><u>Article 17</u> :</strong>
                Ne sont pas soumis à étude d'impact environnemental et social les projets entrepris à
                des fins domestiques ou artisanales qui ne touchent pas des zones à risques ou écologiquement
                sensibles, qui n'entrainent pas de rejets significatifs dans l'environnement ou n'entrainent pas de
                nuisances aux populations riveraines.</p>
              <p style="text-align: justify; font-size: 20px; margin-bottom: 10px;">
                <strong><u>Article 18</u> :</strong>
                Pour les projets non soumis à étude d'impact environnemental et social, l’agence
                nationale de gestion de l'environnement (ANGE) délivre aux promoteurs une attestation de non
                soumission sur présentation de l'avis de projet.</p>
              <p style="text-align: justify; font-size: 20px; margin-top: 15px;">Toutefois, des mesures
                environnementales doivent être prescrites pour accompagner la mise en œuvre
                de ces projets sous forme d'un plan de gestion et environnementale et sociale .</p>
            </li>
          </ul>

          <p style="text-align: justify; font-size: 20px; margin-top: 20px;"><strong><u>Conclusion</u> :</strong>
            Les promoteurs dont les projets développement ne figurent pas dans les listes ci-dessus peuvent se référer à
            l'agence nationale de gestion de l'environnement pour s'assurer de leur soumission ou non à une autorisation
            environnementale.
          </p>
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
      procedures: [],
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
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/procedures`);

        const data = await response.data.data;
        if (data) {
          this.procedures = data[0].procedures;
          // console.log(this.procedures[1].documents[0]);

          this.isLoading = false;
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
ol[type="A"] > li::marker {
  color: #285a43; /* Couleur verte pour les chiffres */
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}
</style>