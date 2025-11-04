<template>
  <!-- <div class="section-padding-top section-padding-bottom-180 overflow-hidden"> -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
              to=""
              class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
          </NuxtLink>
          <NuxtLink
              to="/mot-du-directeur"
              class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            Mot du directeur &nbsp;
            <i class="fas fa-arrow-alt-circle-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="text-cnce fz-32" style="color: #285a43 !important">
            Qui sommes-nous
          </h2>
        </div>

        <!-- <h3 class="text-cnmce fz-32 ange-sty-center">Qui sommes-nous</h3> -->
      </div>
    </div>

    <img
        src="/images/others/batiment.jpg"
        alt="image"
        class="img-fluid img-float float-md-left"
        style="max-width: 456px"
    />

    <p
        class="dg-talk-p"
        style="text-align: justify !important; font-size: 24px !important"
    >
      L’Agence nationale de gestion de l’environnement
      (ANGE) est un établissement public administratif (EPA), doté d’une
      personnalité morale et d’une autonomie financière créée par la loi
      n° 2008-005 du 30 mai 2008 portant loi-cadre sur l'environnement. La
      vision de l’ANGE est de « servir d’institution d’appui à la mise en
      œuvre de la politique nationale de l’environnement telle que définie
      par le gouvernement dans le cadre du plan national de développement
      ».
    </p>
    <p
        class="dg-talk-p"
        style="text-align: justify !important; font-size: 24px !important"
    >
      Sur la base de ses missions, la vision fondamentale actuelle de
      l’Agence Nationale de Gestion de l’Environnement consiste à : «
      assurer un service de qualité en matière d’évaluation et
      d’information environnementale au bénéfice du développement durable
      à l’échéance 2030 ».
    </p>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>

<style scoped>
.about-section,
.mission-section,
.attribution-section {
  padding: 60px 0;
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
}

.mission-section {
  /* background-color: #f8f9fa; */
  padding: 60px 0;
}

.mission-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
}

.mission-item {
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.mission-item h3 {
  font-size: 1.75rem;
  margin-bottom: 15px;
}

.mission-item p {
  margin-bottom: 10px;
  text-align: justify;
  font-size: 24px;
}

.mission-item ul,
.attribution-item ul {
  list-style-type: disc;
  padding-left: 20px;
  text-align: justify;
  font-size: 24px;
}

.mission-item ul li,
.attribution-item ul li {
  margin-bottom: 10px;
}

.a-porpos-ange-style {
  font-family: "Mulish", sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  font-style: normal;
  line-height: 1.74 !important;
  visibility: visible !important;
  color: #444 !important;
}

.apropos-p {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.section-title {
  font-size: 1.25rem;
  margin-top: 20px;
  color: #343a40;
}

.section-content {
  margin-bottom: 20px;
}
</style>
