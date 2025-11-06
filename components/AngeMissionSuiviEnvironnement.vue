<template>
  <div class="container section-title">
    <!-- Titre -->
    <div class="title text-center mb-5">
      <h5 class="subtitle">Notre mission</h5>
      <h2 class="main-title">En matière d’information et du suivi de l’environnement</h2>
      <p class="description">
        L’ANGE assure les évaluations environnementales et intègre l’environnement dans les projets et politiques,
        tout en apportant outils techniques et appui aux acteurs locaux.
      </p>
    </div>

    <!-- Row des cartes -->
    <div class="row-cards">
      <div v-for="(mission, index) in missions" :key="index" class="card">
        <div class="icone">
          <i :class="mission.icon"></i>
        </div>
        <div class="title">
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
    icon: "fa fa-globe",
    title: "Construire un système national d’information environnementale",
    description: "La mise en place et la gestion du système national d’information environnementale. La notion d’information porte essentiellement sur la recherche, la compilation, le traitement et la restitution de données qualitatives et quantitatives en vue d’une analyse de l’état de l’environnement et du suivi des indicateurs environnementaux."
  },
  {
    icon: "fa fa-leaf",
    title: "Intégrer l’environnement dans les politiques et projets",
    description: "L’appui à l’intégration de la dimension environnementale dans les politiques, stratégies, programmes et projets de développement national et local."
  },
  {
    icon: "fa fa-cogs",
    title: "Fournir des outils techniques",
    description: "Élaboration et promotion des outils techniques d’analyse, de planification et d’intégration de l’environnement aux politiques, plans, programmes, projets et activités de développement."
  }
];
</script>

<style scoped>
.section-title {
  margin-top: 60px;
  margin-bottom: 40px;
}

/* --- Titre --- */
.subtitle {
  font-size: 13px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.main-title {
  font-size: 25px;
  margin: 10px 0;
  line-height: 1.3;
  color: #222;
}

.description {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  max-width: 700px;
  margin: 0 auto;
}

/* --- Row des cartes --- */
.row-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 40px 10px;
  background-color: #e0f9e0;
  margin-top: 40px;
}

/* --- Carte --- */
.card {
  flex: 1 1 30%;
  min-width: 250px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.icone {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e9f7ee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #007608;
}

.card .title h3 {
  font-size: 18px;
  margin: 0;
  color: #222;
}

.card .desc p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
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

  .description {
    max-width: 90%;
  }
}
</style>
