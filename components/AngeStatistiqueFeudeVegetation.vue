<template>
  <div class="feux-vegetation-section">
    <div class="feux-background">
      <div class="feux-content">
        <!-- Année en petit -->
        <div class="feux-year">2024</div>
        
        <!-- Titre principal -->
        <h2 class="feux-title">Statistiques des feux de végétation</h2>
        
        <!-- Les trois statistiques -->
        <div class="feux-stats-grid">
          <div class="feux-stat-item">
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value">6843,21</div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2020-2021
            </div>
          </div>

          <div class="feux-stat-item">
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value">15397,27</div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2021-2022
            </div>
          </div>

          <div class="feux-stat-item">
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value">11568,68</div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2022-2023
            </div>
          </div>
        </div>
        
        <!-- Call to action -->
        <div class="feux-cta">
          <NuxtLink to="feux-de-vegetation" class="feux-btn">
            Voir plus <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.feux-vegetation-section {
  margin: 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.feux-background {
  background: 
    /* linear-gradient(rgba(220, 245, 219, 0.9), rgba(220, 245, 219, 0.9)), */
    url('/images/bg/bg-statistique.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* border-radius: 0; */
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feux-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:#e0f9e06e;
  opacity: 0.8;
  z-index: 1;
}

.feux-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Année - 16px */
.feux-year {
  font-size: 16px;
  font-weight: 600;
  color: #007608;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Titre - 32px */
.feux-title {
  font-size: 32px;
  font-weight: 700;
  color: #007608;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feux-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 60px;
  width: 100%;
}

/* Statistiques sans cadre - juste en l'air */
.feux-stat-item {
  background: transparent;
  padding: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feux-stat-item:hover {
  transform: translateY(-5px);
}

/* Icône - width: 124px, height: 146px */
.feux-icon {
  width: 124px;
  height: 146px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feux-icon i {
  font-size: 80px;
  color: #007608;
}

/* Valeur - width: 251px, height: 38px */
.feux-value {
  width: 251px;
  height: 38px;
  font-size: 32px;
  font-weight: 800;
  color: #007608;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Description - width: 251px, height: 38px */
.feux-description {
  width: 251px;
  height: 38px;
  font-size: 14px;
  color: #007608;
  font-weight: 500;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.feux-cta {
  margin-top: 40px;
}

.feux-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #007608;
  color: white;
  padding: 12px 30px;
  /* border-radius: 50px; */
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feux-btn:hover {
  background: transparent;
  color: #007608;
  transform: translateY(-3px);
  /* box-shadow: 0 10px 25px rgba(0, 118, 8, 0.3); */
}

.feux-btn i {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.feux-btn:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 992px) {
  .feux-stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  .feux-background {
    padding: 60px 20px;
  }
  
  .feux-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .feux-stats-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .feux-background {
    padding: 50px 20px;
    min-height: auto;
  }
  
  .feux-title {
    font-size: 24px;
    margin-bottom: 40px;
  }
  
  .feux-value {
    font-size: 28px;
    width: 200px;
  }
  
  .feux-description {
    width: 200px;
    font-size: 13px;
  }
  
  .feux-icon {
    width: 100px;
    height: 120px;
  }
  
  .feux-icon i {
    font-size: 60px;
  }
}

@media (max-width: 480px) {
  .feux-background {
    padding: 40px 15px;
  }
  
  .feux-title {
    font-size: 20px;
  }
  
  .feux-value {
    font-size: 24px;
    width: 180px;
  }
  
  .feux-description {
    width: 180px;
    height: auto;
    min-height: 38px;
    font-size: 12px;
  }
  
  .feux-btn {
    padding: 10px 25px;
    font-size: 14px;
  }
  
  .feux-icon {
    width: 80px;
    height: 100px;
  }
  
  .feux-icon i {
    font-size: 50px;
  }
}
</style>