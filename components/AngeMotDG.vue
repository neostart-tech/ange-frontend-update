<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/presentation"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; À-propos
          </NuxtLink>

          <NuxtLink
            to="/mission-attribution"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            Missions et Attributions &nbsp;
            <i class="fas fa-arrow-alt-circle-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="text-cnce fz-32" style="color: #285a43 !important">
            Mot du Directeur Général
          </h2>
        </div>
        <!-- <h2 class="text-cnce fz-32" style="color: #285a43 !important">
          Mot du Directeur Général
        </h2> -->
        <!-- <h3 class="text-cnce fz-32 ange-sty-center">
          Mot du Directeur Général
        </h3> -->
      </div>
    </div>

    <img
      src="/images/others/photoDG.jpg"
      alt="image"
      class="img-fluid img-float float-md-left"
      style="max-width: 350px"
    />

    <p
      class="dg-talk-p"
      style="text-align: justify !important; font-size: 24px !important"
    >
      Chers usagers, acteurs de protection de l’environnement et de promotion du
      développement durable, la loi n° 2008-005 portant loi-cadre sur
      l'environnement au Togo, en son article 15 alinéa 2, définit la vision
      stratégique de l’Agence Nationale de Gestion de l’Environnement (ANGE) : «
      Elle sert d’institution d’appui à la mise en œuvre de la politique
      nationale de l’environnement telle que définie par le gouvernement dans le
      cadre du plan national de développement »
    </p>
    <p
      class="dg-talk-p"
      style="text-align: justify !important; font-size: 24px !important"
    >
      Pour y parvenir, l’ANGE est chargée d’assurer, entre autres, « la mise en
      place et la gestion du système national d’information environnementale »
      mais aussi « le développement et la mise en œuvre des actions
      d’information, d’éducation, de communication et de formation relatives à
      la protection et à la gestion des ressources naturelles et de
      l’environnement ».
    </p>
    <p
      class="dg-talk-p"
      style="text-align: justify !important; font-size: 24px !important"
    >
      La loi prévoit également que le système d’information et de suivi
      environnemental mette à la disposition de tous les acteurs de
      développement, des données d’analyse sectorielle et spatiale, accessibles
      et utilisables, nécessaires à l’évaluation environnementale et à des
      prises de décisions efficaces pour une gestion rationnelle de
      l’environnement.
    </p>
    <p
      class="dg-talk-p"
      style="text-align: justify !important; font-size: 24px !important"
    >
      Assurer cette responsabilité d’information sur les missions de l’agence se
      justifie et se concrétise par le recours à une panoplie de mesures, y
      compris la création et la mise à jour régulière d’un site web.
    </p>
    <p
      class="dg-talk-p"
      style="text-align: justify !important; font-size: 24px !important"
    >
      Le site web de l’ANGE se révèle comme l’un des canaux efficaces de mise à
      disposition en temps réel, d’informations fiables utiles à
      l’administration, aux promoteurs de projets, aux chercheurs, aux
      organisations de la société civile, bref à toutes les parties intéressées.
    </p>
    <p
      class="dg-talk-p"
      style="text-align: justify !important; font-size: 24px !important"
    >
      La direction générale de l’ANGE s’engage à collaborer davantage avec tous
      les acteurs nationaux et internationaux pour combler autant que possible
      les attentes de plus en plus croissantes mais légitimes.
    </p>
    <p
      class="dg-talk-p"
      style="text-align: justify !important; font-size: 24px !important"
    >
      Je suis heureux de vous compter parmi les visiteurs de notre site.
    </p>
    <p style="text-align: justify !important; font-size: 24px !important">
      Cordialement
    </p>
    <p
      style="
        text-align: justify !important;
        font-size: 24px !important;
        font-weight: bold;
      "
    >
      <span>Dr koffi Efanam ADADJI</span> <br />
      <span>Le Directeur Général</span>
    </p>

    <div class="row mt-5">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/presentation"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; À-propos
          </NuxtLink>

          <NuxtLink
            to="/mission-attribution"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            Missions et Attributions &nbsp;
            <i class="fas fa-arrow-alt-circle-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      isLoading: false,
      configAnge: [],
      img_url_back: null,
    };
  },

  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/configs/liste`);

        const data = await response.data.data;
        if (data) {
          this.img_url_back = config.app_back_url_img;
          this.configAnge = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
.ange-sty-center {
  text-align: center !important;
  margin-bottom: 5rem;
}

.dg-talk-p {
  text-align: justify;
}

.img-float {
  float: left;
  margin-right: 15px;
  /* Espace entre l'image et le texte */
  margin-bottom: 15px;
  /* Espace sous l'image pour le texte */
}

@media (max-width: 767.98px) {
  .img-float {
    float: none;
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
    min-width: 100%;
  }
}

.tests {
  display: flex;
  justify-content: flex-end;
}
</style>
