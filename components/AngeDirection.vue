<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/organisation"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; Organisation
          </NuxtLink>
          <NuxtLink to="" class="ml-auto"> </NuxtLink>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" data-aos="fade-up">
        <h3 class="text-cnce ange-sty-center">Directions</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 mb-4">
        <p style="text-align: justify">
          Le conseil de l’Agence Nationale de Gestion de l’Environnement est
          gérée par une Direction Générale organisée en trois directions et
          services
        </p>
      </div>

      <!-- <div class="row"> -->
      <div class="col-sm-6">
        <AngeDirectionCard
          image="/images/svg/direction/Leader-pana.svg"
          departmentName="Département Exemple"
          responsible="Responsable Exemple"
          :objectives="['Objectif 1', 'Objectif 2', 'Objectif 3']"
        />
      </div>

      <div class="col-sm-6">
        <AngeDirectionCard
          image="/images/svg/direction/Leader-pana.svg"
          departmentName="Département Exemple"
          responsible="Responsable Exemple"
          :objectives="['Objectif 1', 'Objectif 2', 'Objectif 3']"
        />
      </div>
      <!-- </div> -->
    </div>

    <div class="row mt-5">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/organisation"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; Organisation
          </NuxtLink>
          <NuxtLink to="" class="ml-auto"> </NuxtLink>
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
