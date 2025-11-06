<template>
  <div class="container section-title">
    <!-- Titre avec left et right -->
    <div class="title d-flex justify-between align-items-center px-3 mb-5">
      <div class="left">
        <h5 class="subtitle">Notre mission</h5>
        <h2 class="main-title">
          En matière d’évaluation<br />
          environnementale
        </h2>
      </div>

      <div class="right">
        <p class="description">
          Nous unissons expertise et engagement pour bâtir un avenir durable
          au service du développement national.
        </p>
      </div>
    </div>

    <!-- Row des cartes avec background -->
    <div class="row-cards mt-5">
      <div v-for="(mission, index) in missions" :key="index" class="card">
        <div class="icone">
          <i :class="mission.icon"></i>
        </div>
        <div class="titre">
          <h3>{{ mission.title }}</h3>
        </div>
        <div class="desc">
          <p>{{ mission.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const missions = [
  {
    icon: "fa fa-balance-scale",
    title: "Évaluer pour mieux protéger l’environnement",
    description:
      "La promotion et la mise en œuvre du système national des évaluations environnementales, notamment les études d’impact environnemental et social, les évaluations environnementales stratégiques et les audits environnementaux ; il s’agit là de l’exécution opérationnelle du décret sur les études d’impacts de 2017."
  },
  {
    icon: "fa fa-leaf",
    title: "Intégrer l’environnement au cœur du développement",
    description:
      "L’appui à l’intégration de la dimension environnementale dans les politiques, stratégies, programmes et projets de développement national et local ; autant la question des évaluations environnementales stratégiques est abordée dans l’alinéa précédent, autant il s’agit ici d’en apporter les procédures d’accompagnement nécessaires."
  },
  {
    icon: "fa fa-cogs",
    title: "Élaborer et promouvoir les outils techniques",
    description:
      "L’élaboration et la promotion des outils techniques d’analyse, de planification et d’intégration de l’environnement aux politiques, plans, programmes, projets et activités de développement ; la question des outils est ici prise au sens large : il s’agit à la fois de la capacité à effectuer des mesures mais aussi des outils de suivi-évaluation nécessaires à la planification, y compris à travers les études d’impact environnemental et social (EIES), les audits environnementaux (AE) et les évaluations environnementales stratégiques (EES)."
  },
  {
    icon: "fa fa-users",
    title: "Appui technique aux acteurs locaux",
    description:
      "L’appui technique aux collectivités territoriales, aux organisations communautaires à la base, aux privés et aux ONG en matière de gestion de l’environnement ; cet appui passe essentiellement par la formation et le transfert de compétences. C’était notamment le thème central du Programme National d’Actions Décentralisées de gestion de l’Environnement (PNADE) qui a été développé parallèlement."
  }
];
</script>

<style scoped>
.section-title {
  margin-top: 60px;
  margin-bottom: 40px;
}

/* --- Titre --- */
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.left {
  flex: 1;
  min-width: 250px;
}

.right {
  flex: 1;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
}

.subtitle {
  font-size: 13px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.main-title {
  font-size: 25px;
  margin: 0;
  color: #222;
  line-height: 1.3;
}

.description {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  max-width: 400px;
}

/* --- Row des cartes --- */
.row-cards {
  background-color: #e0f9e0;
  padding: 60px 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden; /* pas de scroll */
}

/* --- Carte --- */
.card {
  flex: 1 1 23%; /* largeur par défaut 4 cartes par ligne */
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  min-width: 250px;
}

.icone {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e9f7ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #007608;
}

.titre h3 {
  font-size: 18px;
  margin: 0;
  color: #222;
}

.desc p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

/* --- Responsive --- */
@media (max-width: 1200px) {
  .card {
    flex: 1 1 48%; /* 2 cartes par ligne */
  }
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 100%; /* 1 carte par ligne */
  }

  .title {
    flex-direction: column;
    text-align: center;
  }

  .left,
  .right {
    width: 100%;
    text-align: center;
  }

  .main-title {
    font-size: 22px;
  }

  .description {
    font-size: 13px;
  }
}
</style>
