<template>
  <div class="container mt-5">
    <div class="title text-center">
      <h5 class="subtitle">Qui sommes-nous</h5>
      <h2 class="main-title">Textes fondateurs</h2>
      <p class="description">
        Chers usagers, acteurs de protection de l’environnement
        et de promotion du développement durable, la loi
        n° 2008-005 portant loi-cadre sur l'environnement au Togo, en son article 15 a
      </p>
      <button class="btn-doc">
        Documenteque <i class="fa fa-arrow-right"></i>
      </button>
    </div>

    <div class="cards-wrapper">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :class="{ 'green-card': index === 1 }"
      >
        <div class="icone" :class="{ white: index === 1 }">
          <i :class="card.icon"></i>
        </div>

        <div class="titre">
          <h2>{{ card.title }}</h2>
          <div class="divider"></div>
        </div>

        <div class="desc">
          <p>{{ card.description }}</p>
        </div>

        <button :class="index === 1 ? 'btn-white' : 'btn-green'">Voir plus  <i class="fa fa-arrow-right"></i> </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    icon: "fa fa-balance-scale",
    title: "Loi-cadre sur l’environnement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    icon: "fa fa-leaf",
    title: "Politique environnementale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    icon: "fa fa-globe",
    title: "Développement durable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
];
</script>

<style scoped>
.title {
  margin-bottom: 40px;
}

.subtitle {
  font-size: 13px;
  color: #007608;
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
  max-width: 600px;
  margin: 0 auto 15px auto;
}

.btn-doc {
  background-color: #007608;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.3s ease;
}

.btn-doc:hover {
  background-color: #005a06;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.card {
  background: #fff;
  border-radius: 10px;
  padding: 35px 25px;
  width: 320px;
  height: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  text-align: center; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* Icône */
.icone {
  background: #e9f7ee;
  color: #007608;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 10px; 
}

.icone.white {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Titre et trait */
.titre h2 {
  font-size: 18px;
  color: #222;
  font-weight: 600;
  margin-bottom: 6px; 
  line-height: 1.3;
}

.divider {
  width: 50px;
  height: 3px;
  background: #007608;
  border-radius: 2px;
  margin: 0 auto 10px auto; 
}

/* Description */
.desc p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Boutons */
.btn-green {
  background: #007608;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.3s ease;
}

.btn-green:hover {
  background: #005a06;
}

/* Variante verte */
.green-card {
  background: #007608;
  color: white;
}

.green-card h2,
.green-card p {
  color: white;
}

.green-card .divider {
  background: white;
}

.btn-white {
  background: white;
  color: #007608;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s ease;
}

.btn-white:hover {
  background: transparent;
  border: 1px solid white;
  color: white;
}

/* Responsive */
@media (max-width: 992px) {
  .cards-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
    height: auto;
  }
}
</style>
