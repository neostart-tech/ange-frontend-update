<template>
  <div class="maintitle">
    <div class="container">
      <div class="section-title">
        <h4>Organisation</h4>
        <h2>Conseil d'administration</h2>
        <p>
          Le conseil d'administration est composé de neuf (0-9) membres et d'un représentant des partenaires au
          développement à titre d'observateur. Le conseil d'administration est composé comme suit :
        </p>
      </div>

      <div class="row">
        <div
          class="card"
          v-for="(member, index) in members"
          :key="index"
          :class="{ 'double-icon': member.icons === 2 }"
        >
          <div class="icone">
            <i class="fa fa-user"></i>
          </div>
          <div class="desc">
            <p>{{ member.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const members = [
  { text: "Un représentant du ministre chargé de l'environnement, président;", icons: 1 },
  { text: "Un représentant du ministre chargé de l’aménagement du territoire", icons: 1 },
  { text: "Le directeur général du fond national pour l’environnement;", icons: 1 },
  { text: "Le secrétaire permanent de la commission nationale du développement durable;", icons: 1 },
  { text: "Un représentant du ministre chargé des finances;", icons: 1 },
  { text: "Deux représentants des fédérations et réseaux des organisations non gouvernementales œuvrant dans le domaine de l’environnement;", icons: 2 },
  { text: "Le conseil élit en son sein un vice- président et deux rapporteurs.", icons: 1 },
  { text: "Un représentant du ministre chargé de l’environnement, président;", icons: 1 },
  { text: "Un représentant du conseil national du patronat;", icons: 1 },
  { text: "Un représentant des collectivités territoriales;", icons: 1 },
];
</script>

<style scoped>
.maintitle {
  padding: 60px 0 40px 0;
  text-align: left;
}

.section-title h4 {
  font-size: 13px;
  color: #60be66;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: justify;
}

.section-title h2 {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 25px;
}

/* Grid responsive pour les cartes */
.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colonnes égales */
  gap: 20px; /* espace entre les cartes */
  justify-content: center;
  align-items: stretch; /* toutes les cartes ont la même hauteur */
}

/* Chaque carte */
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #60be66;
  padding: 20px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  text-align: justify;
  min-height: 150px; /* hauteur minimale égale pour toutes */
  height: 100%; /* prend toute la hauteur disponible */
}

.icone {
  color: #60be66;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  gap: 5px;
  font-size: 18px;
  margin-bottom: 15px;
  flex-shrink: 0; /* empêche la réduction de l'icône */
}

/* Double icône pour cartes avec 2 icônes */
.card.double-icon .icone i {
  font-size: 16px;
}

.desc {
  flex-grow: 1; /* permet au texte de prendre l'espace disponible */
  display: flex;
  align-items: center;
  justify-content: center;
}

.desc p {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  width: 100%;
}

/* Responsive */
@media (max-width: 1200px) {
  .row {
    grid-template-columns: repeat(3, 1fr); /* 3 cartes par ligne */
  }
}

@media (max-width: 992px) {
  .row {
    grid-template-columns: repeat(2, 1fr); /* 2 cartes par ligne */
  }
}

@media (max-width: 576px) {
  .row {
    grid-template-columns: 1fr; /* 1 carte par ligne */
  }
  
  .card {
    min-height: 120px; /* hauteur réduite sur mobile */
    padding: 15px 10px;
  }
}
</style>