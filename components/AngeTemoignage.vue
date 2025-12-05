<template>
  <section class="temoignages-section container">
    <div class="title text-center mb-5">
      <h4>Témoignages</h4>
      <h2>
        Découvrez les retours d’expériences<br />
        des acteurs impliqués dans le programme
      </h2>
    </div>

    <div class="row">
      <div class="card" v-for="(item, index) in temoignages" :key="index">
        <div class="icone">
          <i class="fa fa-quote-left"></i>
        </div>
        <div class="desc">
          <h3>{{ item.message }}</h3>
        </div>
        <div class="author">
          <div class="line"></div>
          <p>{{ item.auteur }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const temoignages = [
  {
    message:
      "Grâce à la formation GESTER, j'ai pu intégrer des pratiques durables dans la gestion de ma commune. Une expérience enrichissante !",
    auteur: "Un participant de la région Maritime",
  },
  {
    message:
      "L’appui de l’ANGE nous a permis d’améliorer la planification environnementale dans notre collectivité. Un partenariat fructueux !",
    auteur: "Une responsable de collectivité locale",
  },
  {
    message:
      "Les formations ont renforcé nos compétences en matière d’évaluation environnementale. Nous sommes désormais plus autonomes.",
    auteur: "Un technicien du ministère sectoriel",
  },
];
</script>

<style scoped>
.temoignages-section {
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 20px;
}

.title h4 {
  font-size: 14px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.title h2 {
  font-size: 26px;
  line-height: 1.4;
  color: #222;
  max-width: 800px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  margin-top: 50px;
}

.card {
  flex: 1 1 calc(33.333% - 20px);
  background-color: #e0f9e0;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  padding: 30px 25px;
  display: flex;
  color: #007608;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.icone {
  color: #007608;
  font-size: 26px;
  margin-bottom: 15px;
}

.desc h3 {
  font-size: 15px;
  color: #007608;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 20px;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.author .line {
  width: 30px;
  height: 3px;
  background-color: #007608;
  border-radius: 2px;
}

.author p {
  font-size: 13px;
  color: #007608;
  margin: 0;
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .card {
    flex: 1 1 calc(50% - 20px);
  }

  .title h2 {
    font-size: 22px;
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 500px;
  }
}
</style>
