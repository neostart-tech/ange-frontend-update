<template>
  <section class="banner text-center py-5">
    <h2 class="text-center">Qui sommes-nous</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p class="text-center" style="text-align: justify; font-size: 20px">
            L’Agence nationale de gestion de l’environnement (ANGE) est un
            établissement public administratif (EPA), dotée d’une personnalité
            morale et d’une autonomie financière créée par la loi n° 2008-005 du
            30 mai 2008 portant loi-cadre sur l'environnement. La vision de
            l’ANGE est de « servir d’institution d’appui à la mise en œuvre de
            la politique nationale de l’environnement telle que définie par le
            gouvernement dans le cadre du plan national de développement ». Sur
            la base de ses missions, la vision fondamentale actuelle de l’Agence
            Nationale de Gestion de l’Environnement consiste à : « assurer un
            service de qualité en matière d’évaluation et d’information
            environnementale au bénéfice du développement durable à l’échéance
            2030 ».
          </p>
        </div>
        <div class="col-lg-12">
          <div class="text-center">
            <NuxtLink
              to="/presentation"
              class="simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
            >
              Lire la suite &nbsp;
              <img src=" /images/svg/icons/right-arrow.svg" alt="" />
            </NuxtLink>
            <!-- <a href="about.html" class="text-success">Lire plus</a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>

<style scoped>
.banner {
  background: #e3ebf3;
}

.banner h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.banner p {
  font-size: 1.25rem;
  color: #555;
}
</style>
