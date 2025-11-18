<template>
  <div class="mot-directeur-container mt-5">
    <div class="mot-directeur-row">
      <!-- Côté gauche (texte) -->
      <div class="left-side">
        <div class="title">
          <h4>Qui sommes-nous</h4>
          <h2>Mot du Directeur</h2>
        </div>

        <div class="desc">
          <p>
            Chers usagers, acteurs de protection de l’environnement et de promotion du développement durable,
            la loi n° 2008-005 portant loi-cadre sur l'environnement au Togo, en son article 15 alinéa 2,
            définit la vision stratégique de l’Agence Nationale de Gestion de l’Environnement (ANGE) :
            « Elle sert d’institution d’appui à la mise en œuvre de la politique nationale de l’environnement
            telle que définie par le gouvernement dans le cadre du plan national de développement ».
          </p>
        </div>

        <div class="boutons">
          <a href="/mot-du-directeur" class="btn-primary">Tout lire</a>
          <a href="/organigramme"  class="btn-outline">Organigramme</a>
        </div>
      </div>

      <!-- Côté droit (image) -->
      <div class="right-side">
        <img src="/images/others/photoDG.jpg" alt="Mot du Directeur" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mot-directeur-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background: #f7f7f7;
}

.mot-directeur-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px; 
  width: 100%;
  gap: 50px;
}

.left-side {
  flex: 1;
}

.title h4 {
  font-size: 14px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.title h2 {
  font-size: 28px;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
}

.desc p {
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  text-align: justify;
  margin-bottom: 25px;
}

/* ----- Boutons ----- */
.boutons {
  display: flex;
  gap: 15px;
}

.btn-primary {
  background: #007608;
  color: #fff;
  border: none;
  padding: 10px 22px;
  /* border-radius: 4px; */
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #005a06;
}

.btn-outline {
  background: transparent;
  border: 1.5px solid #007608;
  color: #007608;
  padding: 10px 22px;
  /* border-radius: 4px; */
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #007608;
  color: #fff;
}

/* ----- Partie droite (image) ----- */
.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
}

.right-side img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* ----- Responsive ----- */
@media (max-width: 992px) {
  .mot-directeur-row {
    flex-direction: column;
    text-align: center;
  }

  .left-side {
    order: 2;
  }

  .right-side {
    order: 1;
  }

  .right-side img {
    max-width: 100%;
  }

  .boutons {
    justify-content: center;
  }
}
</style>
