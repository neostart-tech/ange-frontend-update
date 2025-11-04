<template>
  <div class="section-padding-top section-padding-bottom-180 overflow-hidden">
    <div class="container mb-30">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center" data-aos="fade-up">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              Projet qualité de l'air au Togo (PQAT)
            </h2>
          </div>
        </div>
      </div>

      <img
          src="/images/projet/pqat.png"
          alt="image"
          class="img-fluid img-float float-md-left"
          style="max-width: 456px"
      />

      <p
          class="dg-talk-p"
          style="text-align: justify !important; font-size: 24px !important"
      >
        La problématique de la pollution de l’air est une préoccupation nationale et globale. La qualité de l’air joue
        un rôle important dans la préservation de l’environnement, de la santé et le bien-être de la population. Elle
        constitue aujourd’hui un défi majeur pour le développement socio-économique mondial. Mais de nos jours elle est
        à l’origine de plusieurs maladies et décès chaque année dans le monde causés par la respiration de l’air trop
        chargé de particules en suspension. Selon un rapport de l’OMS publié en 2016, environ 1 000 000 de morts sont
        associés à ce « tueur invisible » en Afrique. La pollution de l’air est donc un redoutable fléau qui dépasse de
        loin le tabagisme. À cet effet, elle est
        responsable de la perte de l’espérance de vie qui est estimé à 1,8 année (EPIC, 2018). Selon le Programme des
        Nations Unies pour l’Environnement (PNUE), si rien n’est fait en Afrique, les émissions de polluants pourraient
        tripler et représenter en 2030, 50% des émissions mondiales. De même, les résultats publiés en 2013 par la
        Banque Mondiale montrent que la pollution de l’air couterait à l’Afrique 3,8% de son PIB et si on continue dans
        cette voie, les dépenses de santé risquent d’augmenter plus rapidement que le PIB.
      </p>

      <p class="dg-talk-p"
         style="text-align: justify !important; font-size: 24px !important">
        Au Togo, les décès et les maladies liés à la pollution de l’air ont pour origine des microparticules qui
        attaquent le système immunitaire à chaque fois que celle-ci sont inspirées. Ces particules proviennent de
        multiples sources notamment les transports, l’élimination des déchets, l’utilisation de la biomasse comme source
        d’énergie au niveau des ménages, les industries et les feux de végétation. Les feux de végétations contribuent
        selon les recherches au 2/3 des émissions de gaz à effet de serre.
      </p>

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

<style scoped>
.text-justify-mission {
  text-align: justify !important;
}

li::marker {
  font-weight: bold !important;
}
</style>
