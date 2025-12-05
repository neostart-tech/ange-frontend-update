<template>
  <div class="container mb-5">
    <div class="content-wrapper">
      <!-- Colonne texte -->
      <div class="text-col">
        <h4>Résultats</h4>
        <h2>La Carte Nationale des Capacités en Environnement (CNCE)</h2>
        <p>
          La Carte Nationale des Capacités en Environnement (CNCE) est un outil dynamique conçu pour :
          renforcer durablement les capacités nationales de gestion de l’environnement grâce à un suivi régulier
          et une reconnaissance des compétences existantes. Faciliter la création de synergies entre les interventions
          dans le secteur de l’environnement. Permettre aux populations locales (collectivités territoriales, CLDD, CCD, etc.)
          de rechercher elles-mêmes un appui adéquat pour renforcer leurs capacités dans le domaine environnemental.
        </p>
      </div>

      <!-- Colonne image / carte -->
      <div class="image-col">
        <div class="card">
          <div class="icone">
            <i class="fa fa-user-check"></i>
          </div>
          <div class="desc">
            <strong>158 structures et personnes</strong> ayant des capacités en environnement ont été recensées
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container
{
 max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

}
.content-wrapper {
  display: flex;
  gap: 40px;
  align-items: stretch; 
  margin-top: 40px;
width: 100%;
}

/* Texte à gauche */
.text-col {
  flex: 1 1 50%;
}

.text-col h4 {
  font-size: 14px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.text-col h2 {
  font-size: 26px;
  color: #222;
  margin-bottom: 15px;
  line-height: 1.3;
}

.text-col p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

/* Carte / info à droite */
.image-col {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-col .card {
  background: #007608;
  color: white;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  width: 100%;
}

.image-col .icone {
  font-size: 40px;
  margin-bottom: 15px;
}

.image-col .desc {
  font-size: 16px;
  line-height: 1.5;
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
  }

  .image-col {
    margin-top: 20px;
  }

  .text-col h2 {
    font-size: 22px;
  }
}
</style>
