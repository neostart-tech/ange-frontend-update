<template>
  <!-- Section Budget Refondue - Design Professionnel -->
  <div class="budget-section">
    <div class="container">
      <!-- En-tête avec informations claires -->
      <div class="budget-header" data-aos="fade-up">
        <div class="header-content">
          <div class="badge">
            <svg class="badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Investissement
          </div>
          <h1 class="title">Budget Alloué au <span class="highlight">Projet PQAT</span></h1>
          <p class="subtitle">
            Un investissement national stratégique pour l'amélioration de la qualité de l'air au Togo
          </p>
        </div>
      </div>

      <div class="budget-content">
        <!-- Carte principale avec visualisation claire -->
        <div class="main-budget-card" data-aos="fade-up">
          <div class="budget-hero">
            <div class="amount-display">
              <div class="amount-main">4 Milliards</div>
              <div class="amount-currency">de Francs CFA</div>
              <div class="amount-equivalent">≈ 7 000 000 USD</div>
            </div>
            <div class="budget-badge">
              <div class="badge-dot"></div>
              Budget Total du Projet
            </div>
          </div>

          <div class="budget-details">
            <div class="detail-section">
              <h3 class="detail-title">Source de Financement</h3>
              <div class="funding-source">
                <div class="source-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <div class="source-info">
                  <div class="source-name">Gouvernement Togolais</div>
                  <div class="source-type">Financeur Principal</div>
                </div>
              </div>
            </div>

            <div class="detail-section">
              <h3 class="detail-title">Période de Réalisation</h3>
              <div class="timeline">
                <div class="timeline-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div class="timeline-period">2023 - 2027 (5 ans)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cartes d'information complémentaires -->
        <div class="info-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="info-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div class="card-content">
              <h4>Engagement National</h4>
              <p>Financement 100% togolais démontrant l'engagement du gouvernement dans la protection de l'environnement</p>
            </div>
          </div>

          <div class="info-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div class="card-content">
              <h4>Contributions Multiples</h4>
              <p>Mobilisation des ressources nationales et locales pour une appropriation complète du projet</p>
            </div>
          </div>

          <div class="info-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <div class="card-content">
              <h4>Planification Stratégique</h4>
              <p>Déploiement progressif sur 5 ans pour une mise en œuvre optimale et des résultats durables</p>
            </div>
          </div>
        </div>

        <!-- Section d'impact -->
        <!-- <div class="impact-section" data-aos="fade-up" data-aos-delay="400">
          <h3 class="impact-title">Impact du Budget</h3>
          <div class="impact-grid">
            <div class="impact-item">
              <div class="impact-number">25</div>
              <div class="impact-label">Stations de surveillance</div>
            </div>
            <div class="impact-item">
              <div class="impact-number">45%</div>
              <div class="impact-label">Industries contrôlées</div>
            </div>
            <div class="impact-item">
              <div class="impact-number">50k+</div>
              <div class="impact-label">Personnes sensibilisées</div>
            </div>
            <div class="impact-item">
              <div class="impact-number">-30%</div>
              <div class="impact-label">Réduction PM2.5 visée</div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.budget-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.budget-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(23, 141, 182, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(23, 141, 182, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* En-tête */
.budget-header {
  text-align: center;
  margin-bottom: 80px;
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #178db6, #1ca8d8);
  color: white;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 25px;
  box-shadow: 0 6px 20px rgba(23, 141, 182, 0.3);
}

.badge-icon {
  width: 16px;
  height: 16px;
  display: block;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 20px;
  line-height: 1.1;
}

.highlight {
  color: #178db6;
  background: linear-gradient(135deg, #178db6, #2d3748);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.3rem;
  color: #4a5568;
  line-height: 1.6;
  font-weight: 400;
}

/* Carte principale */
.main-budget-card {
  background: white;
  padding: 60px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.budget-hero {
  text-align: center;
  position: relative;
}

.amount-display {
  margin-bottom: 30px;
}

.amount-main {
  font-size: 4rem;
  font-weight: 900;
  color: #178db6;
  line-height: 1;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #178db6, #2b6cb0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.amount-currency {
  font-size: 1.4rem;
  color: #4a5568;
  font-weight: 600;
  margin-bottom: 8px;
}

.amount-equivalent {
  font-size: 1.1rem;
  color: #718096;
  font-weight: 500;
}

.budget-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f7fafc;
  color: #2d3748;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid #e2e8f0;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #48bb78;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Détails du budget */
.budget-details {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.detail-section {
  padding: 30px;
  background: #f7fafc;
  border-left: 4px solid #178db6;
}

.detail-title {
  font-size: 1.1rem;
  color: #2d3748;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.funding-source {
  display: flex;
  align-items: center;
  gap: 15px;
}

.source-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #178db6, #1ca8d8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.source-icon svg {
  width: 20px;
  height: 20px;
  display: block;
}

.source-info {
  flex: 1;
}

.source-name {
  font-size: 1.3rem;
  color: #2d3748;
  font-weight: 700;
  margin-bottom: 4px;
}

.source-type {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
}

.timeline {
  display: flex;
  align-items: center;
  gap: 15px;
}

.timeline-icon {
  width: 40px;
  height: 40px;
  background: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #178db6;
  flex-shrink: 0;
}

.timeline-icon svg {
  width: 18px;
  height: 18px;
  display: block;
}

.timeline-period {
  font-size: 1.2rem;
  color: #2d3748;
  font-weight: 600;
}

/* Grille d'information */
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.info-card {
  background: white;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  text-align: center;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: #178db6;
}

.card-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #178db6, #1ca8d8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 25px;
}

.card-icon svg {
  width: 24px;
  height: 24px;
  display: block;
}

.card-content h4 {
  font-size: 1.3rem;
  color: #2d3748;
  font-weight: 700;
  margin-bottom: 15px;
}

.card-content p {
  color: #718096;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Section d'impact */
.impact-section {
  background: white;
  padding: 50px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.impact-title {
  font-size: 1.8rem;
  color: #2d3748;
  font-weight: 700;
  margin-bottom: 40px;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.impact-item {
  text-align: center;
}

.impact-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #178db6;
  margin-bottom: 8px;
  line-height: 1;
}

.impact-label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 500;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 1024px) {
  .main-budget-card {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px;
  }
  
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .budget-section {
    padding: 60px 0;
  }
  
  .title {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .amount-main {
    font-size: 3rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .impact-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 1.8rem;
  }
  
  .main-budget-card {
    padding: 30px 20px;
  }
  
  .amount-main {
    font-size: 2.5rem;
  }
  
  .detail-section {
    padding: 20px;
  }
  
  .impact-section {
    padding: 30px 20px;
  }
  
  .impact-number {
    font-size: 2rem;
  }
}
</style>