<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="image-section">
        <img
          src="/images/bg/about-3.png"
          alt="Background ANGE"
          class="background-image"
        />
      </div>

      <div class="content-section">
        <div class="title-section">
          <h4>Objectifs</h4>
          <h1>Découvrez nos différents objectifs</h1>
          <p>
            Nous unissons expertise et engagement pour bâtir un avenir durable
            au service du développement national.
          </p>
        </div>

        <div class="objectifs-grid">
          <div class="objectif-item">
            <div class="icone">
              <i class="fa fa-bullseye"></i>
            </div>
            <div class="objectif-content">
              <h3>Coordination</h3>
              <p>
                L’ANGE coordonne et évalue la mise en œuvre des politiques
                nationales en matière d’environnement.
              </p>
            </div>
          </div>

          <div class="objectif-item">
            <div class="icone">
              <i class="fa fa-chart-line"></i>
            </div>
            <div class="objectif-content">
              <h3>Développement </h3>
              <p>
                Promouvoir le développement durable à travers des stratégies
                innovantes et responsables.
              </p>
            </div>
          </div>

          <div class="objectif-item">
            <div class="icone">
              <i class="fa fa-users"></i>
            </div>
            <div class="objectif-content">
              <h3>Sensibilisation </h3>
              <p>
                Sensibiliser et former les acteurs nationaux aux enjeux
                environnementaux.
              </p>
            </div>
          </div>

          <div class="objectif-item">
            <div class="icone">
              <i class="fa fa-shield-alt"></i>
            </div>
            <div class="objectif-content">
              <h3>Protection </h3>
              <p>
                Protéger et valoriser le patrimoine naturel national pour les
                générations futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  margin-top: 40px !important;
}

/* ----------- Taille globale réduite ----------- */
.content-wrapper {
  display: flex;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

/* ----------- Image ----------- */
.image-section {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-section:hover .background-image {
  transform: scale(1.05);
}

/* ----------- Contenu ----------- */
.content-section {
  flex: 1;
  padding: 40px 35px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ----------- Titres ----------- */
.title-section {
  margin-bottom: 25px;
}

.title-section h4 {
  font-size: 1rem;
  color: #0b9dd1;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-weight: 600;
}

.title-section h1 {
  font-size: 1.9rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 700;
  line-height: 1.3;
}

.title-section p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* ----------- Grille d’objectifs ----------- */
.objectifs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.objectif-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  border: 1px solid #f1f1f1;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.objectif-item:hover {
  box-shadow: 0 4px 10px rgba(11, 157, 209, 0.1);
  transform: translateY(-2px);
}

.icone {
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  background: #0b9dd1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.objectif-item:hover .icone {
  transform: scale(1.1);
}

.objectif-content h3 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 6px;
  font-weight: 600;
}

.objectif-content p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
}

/* ----------- Responsive ----------- */
@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
    height: auto;
  }

  .image-section {
    height: 280px;
  }

  .content-section {
    padding: 30px 25px;
  }

  .objectifs-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .title-section h1 {
    font-size: 1.6rem;
  }

  .title-section p {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 10px;
  }

  .icone {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .objectif-content h3 {
    font-size: 1rem;
  }

  .objectif-content p {
    font-size: 0.85rem;
  }
}
</style>
