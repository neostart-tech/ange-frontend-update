<template>
  <section class="apropos-section container mb-5">
    <!-- Bloc principal avec image et présentation -->
    <div class="content-wrapper">
      <div class="image-col">
        <img src="/images/bg/about-5.png" alt="Le PNADE" />
      </div>

      <div class="text-col">
        <h4>A propos</h4>
        <h2>La QEDD qu’est-ce que c’est ?</h2>
        <p>
          La Quinzaine de l’Environnement et du Développement Durable (QEDD) est
          une initiative du ministère de l’Environnement et des Ressources
          Forestières (MERF), mise en œuvre à travers l’Agence Nationale de
          Gestion de l’Environnement (ANGE). Elle vise à cultiver et à
          entretenir un comportement écocitoyen et responsable au sein des
          populations, afin de faire face aux multiples défis environnementaux
          et climatiques.
          <br /><br />
          Des réformes de l’organisation de la QEDD ont été entreprises, et ont
          abouti à son institutionnalisation par arrêté N°020/MERF/SG du
          20 mars 2023. Ces réformes ont permis de définir une nouvelle
          approche, axée sur la participation inclusive, destinée à servir de
          relais aux actions de communication sur les efforts du gouvernement et
          de ses partenaires en matière de préservation de l’environnement et de
          lutte contre les changements climatiques.
        </p>
      </div>
    </div>

    <!-- Bloc dynamique pour les sections répétées -->
    <div class="text-content mt-5">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="flex-column mb-3"
      >
        <h2>{{ section.title }}</h2>
        <p>{{ section.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const sections = [
  {
    title: "Organisation et axes stratégiques",
    text: `La première quinzaine du mois de juin a été retenue pour la tenue de la QEDD.
    Elle coïncide avec la célébration de grandes journées internationales telles que
    la Journée mondiale de l’environnement (05 juin), la Journée mondiale des océans (08 juin)
    et la Journée internationale de lutte contre la désertification (17 juin).
    Chaque édition s’articule autour d’un thème en lien avec les priorités et les préoccupations
    environnementales du moment. La QEDD s’organise autour de trois axes majeurs :
    (i) la valorisation des acteurs impliqués dans les activités de la quinzaine,
    (ii) la recherche-action en matière de gestion de l’environnement et de lutte contre la pollution,
    (iii) la sensibilisation et l’information sur les bonnes pratiques et la production responsable.
    Elle offre également un cadre d’expression et de visibilité à toute organisation locale ou nationale
    engagée dans des actions d’intérêt écologique, favorisant ainsi le partage d’expériences,
    de politiques et d’innovations environnementales.`,
  },
  {
    title: "Cadre de participation et d’expression",
    text: `Au cours de la QEDD, des événements sont organisés dans toutes les régions administratives du pays,
    mettant l’accent sur des thématiques telles que la préservation de la biodiversité, la lutte contre
    les changements climatiques, la gestion durable des ressources naturelles et la promotion des énergies renouvelables.
    Ces activités prennent la forme de conférences, débats et actions concrètes sur le terrain.`,
  },
  {
    title: "Contexte environnemental et enjeux au Togo",
    text: `Enfin, la QEDD s’inscrit dans un contexte environnemental préoccupant.
    Au Togo, les décès et maladies liés à la pollution de l’air sont dus à l’inhalation de microparticules
    qui affaiblissent le système immunitaire. Ces particules proviennent notamment des transports,
    de l’élimination des déchets, de l’usage de la biomasse comme source d’énergie domestique,
    des activités industrielles et des feux de végétation.
    Ces derniers contribuent, selon les recherches, aux deux tiers des émissions nationales de gaz à effet de serre.`,
  },
];
</script>

<style scoped>
.apropos-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Disposition principale --- */
.content-wrapper {
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 40px;
}

.image-col {
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.image-col img {
  width: 330px;
  height: 432px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.text-col {
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-col h4 {
  font-size: 14px;
  color: #007608;
  text-transform: uppercase;
  margin-bottom: 6px;
  letter-spacing: 1px;
}

.text-col h2 {
  font-size: 25px;
  margin-bottom: 15px;
  line-height: 1.3;
  color: #222;
}

.text-col p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
}

/* --- Sections dynamiques --- */
.text-content h2 {
  font-size: 25px;
  color: #222;
  margin-bottom: 10px;
}

.text-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
    gap: 30px;
  }

  .image-col {
    justify-content: center;
  }

  .image-col img {
    height: auto;
    max-height: 400px;
    max-width: 100%;
  }

  .text-col {
    text-align: center;
  }

  .text-col h2 {
    font-size: 22px;
  }
}

@media (max-width: 768px) {
  .apropos-section {
    padding: 0 15px;
  }

  .content-wrapper {
    margin-top: 30px;
    gap: 25px;
  }

  .text-col h2 {
    font-size: 20px;
  }

  .text-col p,
  .text-content p {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .apropos-section {
    padding: 0 10px;
  }

  .content-wrapper {
    margin-top: 20px;
    gap: 20px;
  }

  .text-col h4 {
    font-size: 13px;
  }

  .text-col h2,
  .text-content h2 {
    font-size: 18px;
  }

  .text-col p,
  .text-content p {
    font-size: 12px;
  }
}
</style>
