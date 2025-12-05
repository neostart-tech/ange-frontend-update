<template>
  <!-- Section Zone d'intervention - Version minimaliste -->
  <div class="intervention-section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <div class="badge">
          <i class="fas fa-map-marked-alt badge-icon"></i>
          Couverture Nationale
        </div>
        <h2 class="title">Zone d'Intervention du <span class="highlight">PQAT</span></h2>
      </div>

      <div class="intervention-content">
        <!-- Statistiques principales -->
        <div class="main-stats" data-aos="fade-up">
          <div class="stat-item">
            <div class="stat-number">11</div>
            <div class="stat-label">Villes</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">23</div>
            <div class="stat-label">Communes</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5</div>
            <div class="stat-label">Régions</div>
          </div>
        </div>

        <!-- Description -->
        <div class="description" data-aos="fade-up" data-aos-delay="100">
          <p>Le PQAT couvre onze (11) villes au Togo en fonction de la densité de la population et du développement économique.</p>
        </div>

        <!-- Villes par région -->
        <div class="regions-container" data-aos="fade-up" data-aos-delay="200">
          <div class="region-group">
            <h3>Région Maritime</h3>
            <div class="cities">
              <span class="city">Grand Lomé</span>
              <span class="city">Aného</span>
              <span class="city">Tsévié</span>
              <span class="city">Tabligbo</span>
            </div>
          </div>

          <div class="region-group">
            <h3>Région des Plateaux</h3>
            <div class="cities">
              <span class="city">Notsé</span>
              <span class="city">Kpalimé</span>
              <span class="city">Atakpamé</span>
            </div>
          </div>

          <div class="region-group">
            <h3>Région Centrale</h3>
            <div class="cities">
              <span class="city">Sokodé</span>
            </div>
          </div>

          <div class="region-group">
            <h3>Région de la Kara</h3>
            <div class="cities">
              <span class="city">Kara</span>
            </div>
          </div>

          <div class="region-group">
            <h3>Région des Savanes</h3>
            <div class="cities">
              <span class="city">Mango</span>
              <span class="city">Dapaong</span>
            </div>
          </div>
        </div>

        <!-- Liste des communes -->
        <div class="communes-section" data-aos="fade-up" data-aos-delay="300">
          <h3>Communes couvertes</h3>
          <div class="communes-grid">
            <div class="commune">13 communes du Grand Lomé (Golfe et Agoè-Nyivé)</div>
            <div class="commune">Commune Zio 1</div>
            <div class="commune">Commune Lacs 1</div>
            <div class="commune">Commune Yoto 1</div>
            <div class="commune">Commune Kloto 1</div>
            <div class="commune">Commune Haho 1</div>
            <div class="commune">Commune Ogou 1</div>
            <div class="commune">Commune Tchaoudjo 1</div>
            <div class="commune">Commune Kozah 1</div>
            <div class="commune">Commune Oti 1</div>
            <div class="commune">Commune Tône 1</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intervention-section {
  padding: 80px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #0d6efd, #178db6);
  color: white;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(23, 141, 182, 0.2);
}

.badge-icon {
  font-size: 14px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
}

.highlight {
  color: #178db6;
  font-weight: 700;
  
}

.intervention-content {
  max-width: 1000px;
  margin: 0 auto;
}

/* Statistiques principales */
.main-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
  padding: 40px 20px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.stat-item:hover {
  border-color: #178db6;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(23, 141, 182, 0.15);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #178db6;
  margin-bottom: 10px;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Description */
.description {
  text-align: center;
  margin-bottom: 50px;
  padding: 0 20px;
}

.description p {
  font-size: 1.2rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

/* Régions et villes */
.regions-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.region-group {
  padding: 25px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-top: 4px solid #178db6;
  transition: all 0.3s ease;
}

.region-group:hover {
  border-color: #178db6;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(23, 141, 182, 0.12);
}

.region-group h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;

}

.cities {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.city {
  padding: 10px 15px;
  background: white;
  color: #475569;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;

}

.city:hover {
  background: #178db6;
  color: white;
  border-color: #178db6;
  transform: scale(1.02);
}

/* Communes */
.communes-section {
  padding: 40px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-top: 4px solid #178db6;
}

.communes-section h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 600;
}

.communes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.commune {
  padding: 15px 20px;
  background: white;
  color: #475569;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.commune:hover {
  background: #178db6;
  color: white;
  border-color: #178db6;
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .intervention-section {
    padding: 60px 0;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .main-stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .stat-item {
    padding: 30px 20px;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .regions-container {
    grid-template-columns: 1fr;
  }
  
  .communes-grid {
    grid-template-columns: 1fr;
  }
  
  .communes-section {
    padding: 30px 25px;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 1.8rem;
  }
  
  .description p {
    font-size: 1.1rem;
  }
  
  .city, .commune {
    padding: 12px 15px;
    font-size: 0.95rem;
  }
}
</style>