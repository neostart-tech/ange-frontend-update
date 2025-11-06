<template>
  <div class="container">
    <!-- Titre -->
    <div class="title text-center">
      <h5 class="subtitle">Projets</h5>
      <h2 class="main-title">Réalisations et projets phares</h2>
      <p class="description">
        Nous unissons expertise et engagement pour bâtir un avenir durable au service
        du développement national.
      </p>
    </div>

    <!-- Liste des cartes -->
    <div class="cards-container">
      <div v-for="(projet, index) in projets" :key="index" class="card">
        <div class="img">
          <img :src="projet.image" :alt="projet.titre" />
        </div>
        <div class="content">
          <h2>{{ projet.titre }}</h2>
          <p>{{ projet.description }}</p>
        </div>
      </div>
    </div>

    <!-- Bouton en bas -->
    <div class="btn-wrapper text-center">
      <button class="btn-projets">Voir tous les projets <i class="fa fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script setup>
const projets = [
  {
    titre: "Quinzaine de l'environnement et du développement durable (QEDD)",
    description:
      "La problématique de la pollution de l'air est une préoccupation nationale et globale. La qualité de l'air joue un rôle important dans la préservation de l'environnement, de la santé et du bien-être de la population.",
    image: "/images/bg/bg-ange-01.jpg",
  },
  {
    titre: "Programme de reforestation nationale",
    description:
      "Un projet ambitieux pour restaurer les forêts et renforcer la résilience écologique face aux changements climatiques.",
    image: "/images/bg/bg-ange-02.jpg",
  },
  {
    titre: "Suivi de la qualité de l’air",
    description:
      "Mise en place de stations de mesure pour surveiller la pollution atmosphérique et informer la population.",
    image: "/images/bg/bg-ange-03.jpg",
  },
  {
    titre: "Gestion des déchets plastiques",
    description:
      "Promotion du recyclage et de la réduction des déchets pour un environnement plus propre et plus sain.",
    image: "/images/bg/bg-ange-01.jpg",
  },
];
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 15px;
}

.title {
  margin-bottom: 40px;
}

.subtitle {
  font-size: 13px;
  color: #0b9dd1;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.main-title {
  font-size: 25px;
  margin-bottom: 10px;
  color: #222;
}

.description {
  font-size: 13px;
  color: #555;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 100%;
  border: none;
}

.card {
  background: #fff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}


.img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .img img {
  transform: scale(1.05);
}

.content {
  padding: 15px;
  /* padding-top: 20px;
  padding-bottom: 20px; */
}

.content h2 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.3;
}

.content p {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.btn-wrapper {
  margin-top: 35px;
}

.btn-projets {
  background-color: #0b9dd1;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.btn-projets:hover{
  background-color: transparent;
  color: #0b9dd1;
  border: 1px solid #0b9dd1;
}

.btn-projets:hover i{
transform: translatex(10px);
}

@media (max-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .main-title {
    font-size: 22px;
  }

  .img {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .content h2 {
    font-size: 15px;
  }

  .content p {
    font-size: 12px;
  }

  .img {
    height: 160px;
  }

  .btn-projets {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
