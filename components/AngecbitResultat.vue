<template>
  <div class="results-page">
    <!-- Header Minimaliste -->
    <header class="page-header">
      <div class="header-content">
        <h1 class="page-title">Résultats Obtenus</h1>
        <p class="page-subtitle">Projet CBIT - Togo</p>
      </div>
    </header>

    <!-- Contenu Principal -->
    <main class="main-content">
      <!-- Liste des résultats -->
      <div class="results-list">
        
        <!-- Résultat 1 -->
        <div class="result-item">
          <div class="result-number">01</div>
          <div class="result-content">
            <h3>Cadre Institutionnel Actualisé</h3>
            <p>Le cadre institutionnel, juridique et réglementaire existant pour la gestion de l'information sur les changements climatiques est mis à jour.</p>
          </div>
          <div class="result-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="#007608" stroke-width="1.5"/>
              <path d="M17 8H7V10H17V8ZM17 12H7V14H17V12Z" stroke="#007608" stroke-width="1.5"/>
            </svg>
          </div>
        </div>

        <!-- Résultat 2 -->
        <div class="result-item">
          <div class="result-number">02</div>
          <div class="result-content">
            <h3>Système d'Information Implanté</h3>
            <p>Un système de gestion de l'information sur les changements climatiques est mis en place.</p>
          </div>
          <div class="result-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20Z" stroke="#007608" stroke-width="1.5"/>
              <path d="M4 6H20V16H4V6Z" stroke="#007608" stroke-width="1.5"/>
            </svg>
          </div>
        </div>

        <!-- Résultat 3 -->
        <div class="result-item">
          <div class="result-number">03</div>
          <div class="result-content">
            <h3>Matériel Sectoriel Fourni</h3>
            <p>Les secteurs concernés sont dotés du matériel approprié pour accomplir leur mission.</p>
          </div>
          <div class="result-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6Z" stroke="#007608" stroke-width="1.5"/>
              <path d="M13 12H16L12 8L8 12H11V16H13V12Z" stroke="#007608" stroke-width="1.5"/>
            </svg>
          </div>
        </div>

        <!-- Résultat 4 -->
        <div class="result-item">
          <div class="result-number">04</div>
          <div class="result-content">
            <h3>Acteurs Nationaux Formés</h3>
            <p>Les acteurs nationaux de la lutte contre le changement climatique sont formés à la saisie de données dans le système.</p>
          </div>
          <div class="result-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="#007608" stroke-width="1.5"/>
              <path d="M1 13L12 19L23 13M1 17L12 23L23 17" stroke="#007608" stroke-width="1.5"/>
            </svg>
          </div>
        </div>

        <!-- Résultat 5 -->
        <div class="result-item">
          <div class="result-number">05</div>
          <div class="result-content">
            <h3>Système Validé et Opérationnel</h3>
            <p>Le système de gestion de l'information est testé et fonctionnel.</p>
          </div>
          <div class="result-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#007608"/>
            </svg>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer Simple -->
    <!-- <footer class="page-footer">
      <p>CBIT Togo • Ministère de l'Environnement et des Ressources Forestières</p>
    </footer> -->
  </div>
</template>

<script setup>
// Aucun script nécessaire
</script>

<style scoped>
/* Variables minimales */
:root {
  --primary: #007608;
  --primary-light: #e8f5e9;
  --primary-dark: #005a06;
  --text: #1a3326;
  --text-light: #5a7a6a;
  --border: rgba(0, 118, 8, 0.1);
  --shadow: 0 4px 20px rgba(0, 118, 8, 0.08);
}

/* Reset de base */
.results-page {
  background: linear-gradient(135deg, #f8fcf8 0%, #f0f8f0 100%);
  max-width: 1000px;
  
}

/* Header minimaliste */
.page-header {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.page-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: 1px;
}

/* Contenu principal */
.main-content {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
  width: 100%;
}

/* Liste des résultats */
.results-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.result-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  align-items: start;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.result-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: rgba(0, 118, 8, 0.2);
}

.result-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  min-width: 40px;
}

.result-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 0.5rem;
}

.result-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text);
  margin: 0;
}

.result-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--primary-light);
  border-radius: 10px;
  padding: 0.5rem;
}

/* Note finale */
.final-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--primary-light);
  border-radius: 16px;
  padding: 1.5rem;
  border-left: 4px solid var(--primary);
}

.note-icon {
  flex-shrink: 0;
}

.note-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  margin: 0;
  font-style: italic;
}

/* Footer */
.page-footer {
  padding: 2rem;
  text-align: center;
  background: var(--primary-light);
  border-top: 1px solid var(--border);
}

.page-footer p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .page-header {
    padding: 2rem 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .main-content {
    padding: 0 1rem 2rem;
  }
  
  .result-item {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
  
  .result-number {
    margin: 0 auto;
  }
  
  .result-icon {
    margin: 0 auto;
  }
  
  .final-note {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.75rem;
  }
  
  .result-content h3 {
    font-size: 1.1rem;
  }
  
  .result-content p {
    font-size: 0.95rem;
  }
}
</style>