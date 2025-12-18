<template>
  <section class="">
    <div class="card">
      <!-- En-tête -->
      <header class="header">
        <div class="header-bg">
          <div class="header-overlay"></div>
          <div class="header-content">
            <h1 class="main-title">Informations du Projet</h1>
            <p class="header-subtitle">Projet CBIT - Togo</p>
          </div>
        </div>
      </header>

      <!-- Contenu principal -->
      <div class="content">
        <!-- Zone d'intervention -->
        <div class="info-section">
          <div class="section-header">
            <div class="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#007608"/>
                <path d="M12 11.5C13.6569 11.5 15 10.3431 15 9C15 7.34315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.34315 9 9C9 10.3431 10.3431 11.5 12 11.5Z" fill="white"/>
              </svg>
            </div>
            <h2 class="section-title">Zone d'intervention</h2>
          </div>
          
          <div class="info-card">
            <div class="info-content">
              <p class="info-text">
                Le Togo est la zone d'intervention.
              </p>
            </div>
          </div>
        </div>

        <!-- Partenaires et bénéficiaires -->
        <div class="info-section">
          <div class="section-header">
            <div class="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#007608"/>
              </svg>
            </div>
            <h2 class="section-title">Partenaires et bénéficiaires</h2>
          </div>
          
          <div class="info-card">
            <div class="info-content">
              <div class="info-item">
                <div class="item-label">Partenaire :</div>
                <div class="item-value">Fonds pour l'Environnement Mondial (FEM)</div>
              </div>
              
              <div class="info-item">
                <div class="item-label">Bénéficiaires :</div>
                <div class="item-value">Toutes les couches de la population togolaise</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Durée du projet -->
        <div class="info-section">
          <div class="section-header">
            <div class="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#007608"/>
                <path d="M12 6V12L16 14" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="section-title">Durée du projet</h2>
          </div>
          
          <div class="info-card">
            <div class="info-content">
              <div class="duration-display">
                <div class="duration-number">36</div>
                <div class="duration-label">mois</div>
              </div>
              
              <p class="info-text">
                Le projet a été mis en œuvre sur une période de 36 mois.
              </p>
            </div>
          </div>
        </div>

        <!-- Budget et financement -->
        <div class="info-section">
          <div class="section-header">
            <div class="section-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#007608"/>
                <path d="M12 8V16M15 12H9" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="section-title">Budget et financement</h2>
          </div>
          
          <div class="info-card">
            <div class="info-content">
              <div class="budget-items">
                <div class="budget-item">
                  <div class="budget-source">Fonds pour l'Environnement Mondial (FEM)</div>
                  <div class="budget-amount">10 102 567 $</div>
                </div>
                
                <div class="budget-item">
                  <div class="budget-source">Gouvernement togolais</div>
                  <div class="budget-amount">300 000 $</div>
                </div>
              </div>
              
              <div class="budget-total">
                <div class="total-label">Financement total :</div>
                <div class="total-amount">10 402 567 $</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Résumé visuel -->
        <div class="summary-section">
          <div class="summary-card">
            <div class="summary-item">
              <div class="summary-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#007608"/>
                </svg>
              </div>
              <div class="summary-content">
                <div class="summary-title">Zone</div>
                <div class="summary-value">Togo</div>
              </div>
            </div>
            
            <div class="summary-item">
              <div class="summary-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#007608"/>
                </svg>
              </div>
              <div class="summary-content">
                <div class="summary-title">Durée</div>
                <div class="summary-value">36 mois</div>
              </div>
            </div>
            
            <div class="summary-item">
              <div class="summary-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#007608"/>
                  <path d="M12 8V16M15 12H9" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <div class="summary-content">
                <div class="summary-title">Budget total</div>
                <div class="summary-value">10,4M $</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pied de page -->
      <footer class="footer">
        <div class="footer-content">
          <span>Projet CBIT Togo • Ministère de l’Environnement, des Ressources Forestières, de la Protection Côtière et du Changement Climatique</span>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
// Aucun script nécessaire
</script>

<style scoped>
/* Variables de couleur */
:root {
  --primary-color: #007608;
  --primary-light: #e8f5e9;
  --primary-lighter: #f1f9f1;
  --primary-dark: #005a06;
  --primary-darker: #004704;
  --text-dark: #1a3c2e;
  --text-light: #4a6b5e;
  --card-shadow: 0 10px 30px rgba(0, 118, 8, 0.1);
}

/* Conteneur global */
.container {
  min-height: 100vh;
  background: 
    radial-gradient(circle at 10% 20%, rgba(0, 118, 8, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(0, 118, 8, 0.02) 0%, transparent 40%),
    linear-gradient(135deg, #f8fcf8 0%, #f0f8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* Carte principale */
.card {
  max-width: 1000px;
  width: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  border: 1px solid rgba(0, 118, 8, 0.1);
}

/* En-tête */
.header {
  position: relative;
  overflow: hidden;
}

.header-bg {
  position: relative;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, var(--primary-darker), var(--primary-dark));
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.header-content {
  position: relative;
  z-index: 2;
  text-align: center;
  background-color: #007608;
  padding: 30px;
}

.main-title {
  font-size: 2rem;
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.header-subtitle {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 1px;
}

/* Contenu principal */
.content {
  padding: 2rem;
}

/* Section d'information */
.info-section {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-icon {
  background: var(--primary-light);
  padding: 0.8rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  font-size: 1.3rem;
  color: var(--primary-dark);
  font-weight: 600;
  margin: 0;
}

/* Carte d'information */
.info-card {
  background: var(--primary-lighter);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 118, 8, 0.15);
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin: 0;
}

/* Zone d'intervention spécifique */
.info-card .info-text {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  padding: 0.5rem;
}

/* Partenaires et bénéficiaires */
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.5rem 0;
}

.item-label {
  font-weight: 600;
  color: var(--primary-dark);
  min-width: 120px;
  font-size: 0.95rem;
}

.item-value {
  flex: 1;
  font-size: 0.95rem;
  color: var(--text-dark);
  line-height: 1.6;
}

/* Durée du projet */
.duration-display {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.duration-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-dark);
  line-height: 1;
}

.duration-label {
  font-size: 1.1rem;
  color: var(--text-light);
  font-weight: 500;
}

/* Budget et financement */
.budget-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.budget-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 118, 8, 0.1);
}

.budget-source {
  font-size: 0.95rem;
  color: var(--text-dark);
  font-weight: 500;
}

.budget-amount {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.budget-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 2px solid rgba(0, 118, 8, 0.2);
}

.total-label {
  font-size: 1rem;
  color: var(--text-dark);
  font-weight: 600;
}

.total-amount {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-dark);
}

/* Résumé visuel */
.summary-section {
  margin-top: 3rem;
}

.summary-card {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  background: var(--primary-lighter);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 118, 8, 0.15);
}

.summary-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.summary-icon {
  background: white;
  padding: 0.8rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 118, 8, 0.1);
}

.summary-content {
  display: flex;
  flex-direction: column;
}

.summary-title {
  font-size: 0.85rem;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.2rem;
}

.summary-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-dark);
}

/* Pied de page */
.footer {
  padding: 1.5rem 2rem;
  background: var(--primary-lighter);
  border-top: 1px solid rgba(0, 118, 8, 0.1);
  text-align: center;
}

.footer-content {
  font-size: 0.85rem;
  color: var(--text-light);
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .header-bg {
    padding: 2rem 1rem;
  }
  
  .main-title {
    font-size: 1.6rem;
  }
  
  .content {
    padding: 1.5rem;
  }
  
  .info-card {
    padding: 1.2rem;
  }
  
  .item-label {
    min-width: 100px;
    font-size: 0.9rem;
  }
  
  .budget-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .budget-total {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .summary-card {
    flex-direction: column;
    gap: 1rem;
  }
  
  .summary-item {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.4rem;
  }
  
  .section-title {
    font-size: 1.1rem;
  }
  
  .duration-number {
    font-size: 2.5rem;
  }
  
  .item-label {
    min-width: 90px;
    font-size: 0.85rem;
  }
  
  .item-value {
    font-size: 0.9rem;
  }
  
  .budget-source {
    font-size: 0.9rem;
  }
  
  .budget-amount {
    font-size: 1rem;
  }
  
  .total-amount {
    font-size: 1.3rem;
  }
}
</style>