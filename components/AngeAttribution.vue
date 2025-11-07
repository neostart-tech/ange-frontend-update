<template>
  <section class="attributions-section container">
    <div class="title text-center mb-5">
      <h5 class="subtitle">Nos attributions</h5>
      <h2 class="main-title">Gouvernance, évaluation et appui pour un développement durable</h2>
      <p class="description">
        L’ANGE élabore et coordonne les programmes, outils et systèmes pour intégrer l’environnement dans les
        politiques, projets et actions de développement. Elle assure également l’évaluation,
        l’information, la formation et l’appui technique aux acteurs
        locaux et nationaux pour un développement durable.
      </p>
    </div>

    <div class="row d-flex">
      <!-- Colonne gauche -->
      <div class="left d-flex flex-column" ref="leftCol">
        <div
          v-for="(item, index) in attributions"
          :key="index"
          class="attributions-items flex-column"
        >
          <div class="title">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="desc">
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Colonne droite -->
      <div class="right">
        <img ref="rightImg" src="/images/bg/bg_o1.jpg" alt="Image environnement">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const attributions = [
  {
    title: "Coordination nationale",
    desc: "L’élaboration et la coordination de la mise en œuvre du Programme national de gestion de l’environnement."
  },
  {
    title: "Évaluations environnementales",
    desc: "La promotion et la mise en œuvre du système national des évaluations environnementales, notamment les études d’impact, les évaluations environnementales stratégiques, les audits environnementaux."
  },
  {
    title: "Intégration environnementale",
    desc: "L’appui à l’intégration de la dimension environnementale dans les politiques, stratégies, programmes et projets de développement national et local."
  },
  {
    title: "Outils techniques",
    desc: "L’élaboration et la promotion des outils techniques d’analyse, de planification et d’intégration de l’environnement aux politiques, plans, programmes, projets et activités de développement."
  },
  {
    title: "Appui technique local",
    desc: "L’appui technique aux collectivités territoriales, aux organisations communautaires à la base, aux privés et aux ONG en matière de gestion de l’environnement."
  },
  {
    title: "Système d’information",
    desc: "La mise en place et la gestion du système national d’information environnementale."
  },
  {
    title: "Rapport annuel",
    desc: "La coordination de l’élaboration du rapport annuel sur l’état de l’environnement."
  },
  {
    title: "Communication et formation",
    desc: "Le développement et la mise en œuvre des actions d’information, d’éducation, de communication et de formation relatives à la protection et à la gestion des ressources naturelles et de l’environnement."
  },
  {
    title: "Ressources et financement",
    desc: "La recherche et la mobilisation des ressources financières et techniques nécessaires à l’exécution de ses missions spécifiques et des autres missions qui pourront lui être confiées."
  }
];

const leftCol = ref(null);
const rightImg = ref(null);

// Synchroniser la hauteur de l'image avec la hauteur de la colonne gauche
onMounted(async () => {
  await nextTick();
  const leftHeight = leftCol.value.offsetHeight;
  rightImg.value.style.height = leftHeight + "px";
});
</script>

<style scoped>
.subtitle {
  font-size: 13px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.main-title {
  font-size: 26px;
  margin: 10px 0;
  line-height: 1.4;
  color: #222;
}

.description {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch; /* aligne les deux colonnes */
  gap: 40px;
  margin-top: 40px;
}

.left {
  flex: 1 1 55%;
}

.right {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  align-items: center; /* centrer verticalement */
}

.right img {
  width: 100%;
  max-width: 480px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.attributions-items {
  position: relative;
  padding-left: 25px;
  margin-bottom: 30px;
  border-left: 2px solid rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.attributions-items::before {
  content: "";
  position: absolute;
  left: -2px;
  width: 2px;
  height:50%; 
  background-color: #000;
}

.attributions-items:hover {
  border-color: #00a800;
  transform: translateX(5px);
}

.attributions-items .title h3 {
  font-size: 18px;
  color: #222;
  margin-bottom: 6px;
}

.attributions-items .desc p {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .row {
    flex-direction: column;
  }

  .right {
    order: -1;
    margin-bottom: 30px;
  }

  .main-title {
    font-size: 22px;
  }
}
</style>
