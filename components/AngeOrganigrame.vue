<template>
  <!-- <div class="section-padding-top section-padding-bottom-180 overflow-hidden"> -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/mission-attribution"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; Missions et Attributions
          </NuxtLink>
          <NuxtLink
            to="#"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12" data-aos="fade-up">
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="text-cnce fz-32" style="color: #285a43 !important">
            Organigramme de l'ANGE
          </h2>
        </div>
        <!-- <h3 class="text-cnce ange-sty-center">Organigramme de l'ANGE</h3> -->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mb-4">
        <p style="text-align: justify; font-size: 24px; margin-bottom: 20px">
          L’Agence Nationale de Gestion de l’Environnement assure un service de
          qualité en matière d’évaluation et d’information environnementale au
          bénéficie du développement durable. accompagne les citoyens à
          préserver l’environnement dans une perspective de jouissance de leur
          droit à un environnement sain.
        </p>
      </div>

      <div class="col-lg-12 text-center">
        <img src="/images/ange/conseil-admin/organigramme ange.png" alt="" />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/mission-attribution"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; Missions et Attributions
          </NuxtLink>
          <NuxtLink
            to="#"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>
