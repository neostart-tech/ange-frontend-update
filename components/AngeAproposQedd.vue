<template>
  <section class="apropos-section container mb-5">
    <!-- Système de tabulation unifié -->
    <div class="tabs-container" ref="tabsContainer">
      <!-- Version Desktop -->
      <div class="desktop-tabs" v-if="!isMobile">
        <div class="tabs-header">
          <!-- Indicateur de progression -->
          <div class="tabs-progress">
            <div 
              class="progress-bar" 
              :style="{ width: `${((activeTab + 1) / tabs.length) * 100}%` }"
            ></div>
          </div>
          
          <!-- Navigation des onglets -->
          <div class="tabs-navigation">
            <button 
              class="nav-btn prev"
              @click="previousTab"
              :disabled="activeTab === 0"
              aria-label="Section précédente"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            <div class="tabs-wrapper">
              <div 
                v-for="(tab, index) in tabs"
                :key="index"
                :class="[
                  'tab-item',
                  { 
                    active: activeTab === index,
                    completed: tab.completed
                  }
                ]"
                @click="switchTab(index)"
              >
                <div class="tab-indicator">
                  <span class="tab-number">{{ index + 1 }}</span>
                </div>
                <span class="tab-label">{{ tab.title }}</span>
              </div>
            </div>

            <button 
              class="nav-btn next"
              @click="nextTab"
              :disabled="activeTab === tabs.length - 1"
              aria-label="Section suivante"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Version Mobile -->
      <div class="mobile-tabs" v-if="isMobile">
        <!-- En-tête mobile -->
        <div class="mobile-header">
          <!-- Indicateur de progression -->
          <div class="mobile-progress">
            <div class="progress-info">
              <span class="current-step">Section {{ activeTab + 1 }} sur {{ tabs.length }}</span>
              <span class="progress-percent">{{ Math.round(((activeTab + 1) / tabs.length) * 100) }}%</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: `${((activeTab + 1) / tabs.length) * 100}%` }"
              ></div>
            </div>
          </div>

          <!-- Indicateur de section actuelle -->
          <div class="current-tab-indicator">
            <div class="tab-indicator-mobile">
              <span class="tab-number">{{ activeTab + 1 }}</span>
            </div>
            <span class="current-tab-label">{{ tabs[activeTab].title }}</span>
          </div>

          <!-- Navigation mobile (haut) -->
          <div class="mobile-navigation-simple top-nav">
            <button 
              class="mobile-nav-btn prev"
              @click="previousTab"
              :disabled="activeTab === 0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <button 
              class="mobile-nav-btn next"
              @click="nextTab"
              :disabled="activeTab === tabs.length - 1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Contenu des onglets avec animation -->
      <div class="tab-content-wrapper">
        <transition :name="transitionName" mode="out-in">
          <div 
            :key="activeTab"
            class="tab-content"
          >
            <!-- Onglet 1 : À propos -->
            <div v-if="activeTab === 0" class="content-wrapper about-tab">
              <div class="image-col">
                <img src="/images/bg/about-5.png" alt="Le PNADE" />
              </div>

              <div class="text-col">
                <h4>A propos</h4>
                <h2>La QEDD qu'est-ce que c'est ?</h2>
                <p>
                  La Quinzaine de l'Environnement et du Développement Durable (QEDD) est
                  une initiative du ministère de l'Environnement et des Ressources
                  Forestières (MERF), mise en œuvre à travers l'Agence Nationale de
                  Gestion de l'Environnement (ANGE). Elle vise à cultiver et à
                  entretenir un comportement écocitoyen et responsable au sein des
                  populations, afin de faire face aux multiples défis environnementaux
                  et climatiques.
                  <br /><br />
                  Des réformes de l'organisation de la QEDD ont été entreprises, et ont
                  abouti à son institutionnalisation par arrêté N°020/MERF/SG du
                  20 mars 2023. Ces réformes ont permis de définir une nouvelle
                  approche, axée sur la participation inclusive, destinée à servir de
                  relais aux actions de communication sur les efforts du gouvernement et
                  de ses partenaires en matière de préservation de l'environnement et de
                  lutte contre les changements climatiques.
                </p>
              </div>
            </div>

            <!-- Onglet 2 : Organisation et axes stratégiques -->
            <div v-else-if="activeTab === 1" class="section-content">
              <h2>{{ tabs[1].title }}</h2>
              <p>{{ tabs[1].text }}</p>
            </div>

            <!-- Onglet 3 : Cadre de participation -->
            <div v-else-if="activeTab === 2" class="section-content">
              <h2>{{ tabs[2].title }}</h2>
              <p>{{ tabs[2].text }}</p>
            </div>

            <!-- Onglet 4 : Contexte environnemental -->
            <div v-else-if="activeTab === 3" class="section-content">
              <h2>{{ tabs[3].title }}</h2>
              <p>{{ tabs[3].text }}</p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Navigation mobile (bas) -->
      <div class="mobile-tabs" v-if="isMobile">
        <div class="mobile-footer">
          <div class="mobile-navigation-simple bottom-nav">
            <button 
              class="mobile-nav-btn prev"
              @click="previousTab"
              :disabled="activeTab === 0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <button 
              class="mobile-nav-btn next"
              @click="nextTab"
              :disabled="activeTab === tabs.length - 1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const tabs = ref([
  {
    title: "À propos de la QEDD",
    completed: false
  },
  {
    title: "Organisation et axes stratégiques",
    text: `La première quinzaine du mois de juin a été retenue pour la tenue de la QEDD.
    Elle coïncide avec la célébration de grandes journées internationales telles que
    la Journée mondiale de l'environnement (05 juin), la Journée mondiale des océans (08 juin)
    et la Journée internationale de lutte contre la désertification (17 juin).
    Chaque édition s'articule autour d'un thème en lien avec les priorités et les préoccupations
    environnementales du moment. La QEDD s'organise autour de trois axes majeurs :
    (i) la valorisation des acteurs impliqués dans les activités de la quinzaine,
    (ii) la recherche-action en matière de gestion de l'environnement et de lutte contre la pollution,
    (iii) la sensibilisation et l'information sur les bonnes pratiques et la production responsable.
    Elle offre également un cadre d'expression et de visibilité à toute organisation locale ou nationale
    engagée dans des actions d'intérêt écologique, favorisant ainsi le partage d'expériences,
    de politiques et d'innovations environnementales.`,
    completed: false
  },
  {
    title: "Cadre de participation et d'expression",
    text: `Au cours de la QEDD, des événements sont organisés dans toutes les régions administratives du pays,
    mettant l'accent sur des thématiques telles que la préservation de la biodiversité, la lutte contre
    les changements climatiques, la gestion durable des ressources naturelles et la promotion des énergies renouvelables.
    Ces activités prennent la forme de conférences, débats et actions concrètes sur le terrain.`,
    completed: false
  },
  {
    title: "Contexte environnemental et enjeux au Togo",
    text: `Enfin, la QEDD s'inscrit dans un contexte environnemental préoccupant.
    Au Togo, les décès et maladies liés à la pollution de l'air sont dus à l'inhalation de microparticules
    qui affaiblissent le système immunitaire. Ces particules proviennent notamment des transports,
    de l'élimination des déchets, de l'usage de la biomasse comme source d'énergie domestique,
    des activités industrielles et des feux de végétation.
    Ces derniers contribuent, selon les recherches, aux deux tiers des émissions nationales de gaz à effet de serre.`,
    completed: false
  }
])

const activeTab = ref(0)
const transitionName = ref('slide-next')
const isMobile = ref(false)
const tabsContainer = ref(null)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

const scrollToTop = () => {
  nextTick(() => {
    if (tabsContainer.value) {
      tabsContainer.value.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      })
    }
  })
}

const switchTab = (index) => {
  const direction = index > activeTab.value ? 'next' : 'prev'
  transitionName.value = `slide-${direction}`
  activeTab.value = index
  scrollToTop()
}

const nextTab = () => {
  if (activeTab.value < tabs.value.length - 1) {
    switchTab(activeTab.value + 1)
  }
}

const previousTab = () => {
  if (activeTab.value > 0) {
    switchTab(activeTab.value - 1)
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.apropos-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Système de tabulation --- */
.tabs-container {
  margin-top: 60px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 550px;
}

/* ===== VERSION DESKTOP ===== */
.desktop-tabs {
  width: 100%;
}

.tabs-header {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
}

.tabs-progress {
  height: 3px;
  background: #e2e8f0;
  position: relative;
  width: 100%;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #007608, #1ba5d4);
  transition: width 0.4s ease;
}

.tabs-navigation {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
}

.nav-btn {
  padding: 8px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover:not(:disabled) {
  background: #007608;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 118, 8, 0.3);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tabs-wrapper {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  min-width: 180px;
  justify-content: center;
  flex-shrink: 0;
}

.tab-item:hover:not(.active) {
  background: #f1f5f9;
}

.tab-item.active {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tab-indicator {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.tab-item:not(.active) .tab-indicator {
  background: #e2e8f0;
  color: #64748b;
}

.tab-item.active .tab-indicator {
  background: #007608;
  color: white;
}

.tab-label {
  font-weight: 500;
  color: #475569;
  transition: color 0.3s ease;
  white-space: nowrap;
  font-size: 14px;
  text-align: center;
}

.tab-item.active .tab-label {
  color: #007608;
  font-weight: 600;
}

/* ===== CONTENU DES ONGLETS ===== */
.tab-content-wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
}

.tab-content {
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  align-items: center;
}

/* Style pour l'onglet À propos */
.about-tab.content-wrapper {
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 100%;
}

.about-tab .image-col {
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-tab .image-col img {
  width: 330px;
  height: 432px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-tab .text-col {
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
}

.about-tab .text-col h4 {
  font-size: 14px;
  color: #007608;
  text-transform: uppercase;
  margin-bottom: 6px;
  letter-spacing: 1px;
}

.about-tab .text-col h2 {
  font-size: 25px;
  margin-bottom: 15px;
  line-height: 1.3;
  color: #222;
}

.about-tab .text-col p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
}

/* Style pour les autres onglets (sections simples) */
.section-content {
  width: 100%;
}

.section-content h2 {
  font-size: 25px;
  color: #222;
  margin-bottom: 20px;
  line-height: 1.3;
}

.section-content p {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  text-align: justify;
}

/* ===== VERSION MOBILE ===== */
.mobile-tabs .mobile-header {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
}

.mobile-progress {
  margin-bottom: 16px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
}

.current-step {
  color: #1e293b;
  font-weight: 600;
}

.progress-percent {
  color: #007608;
  font-weight: 600;
}

.current-tab-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px;
  background: white;
  border-radius: 10px;
  border: 2px solid #e2e8f0;
  margin-bottom: 16px;
}

.tab-indicator-mobile {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  background: #007608;
  color: white;
  flex-shrink: 0;
}

.current-tab-label {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  text-align: center;
  flex: 1;
}

/* Navigation mobile */
.mobile-navigation-simple {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.mobile-tabs .mobile-footer {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
}

.mobile-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.mobile-nav-btn.prev {
  background: #f8fafc;
  color: #475569;
  border: 2px solid #e2e8f0;
}

.mobile-nav-btn.prev:not(:disabled):hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: translateY(-2px);
}

.mobile-nav-btn.next {
  background: #007608;
  color: white;
  border: 2px solid #007608;
}

.mobile-nav-btn.next:not(:disabled):hover {
  background: #005a06;
  border-color: #005a06;
  transform: translateY(-2px);
}

.mobile-nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Animations */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.4s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ===== RESPONSIVE DESIGN ===== */

/* Tablettes et mobiles */
@media (max-width: 1024px) {
  .container {
    padding: 0 16px;
  }
  
  .desktop-tabs {
    display: none;
  }
  
  .mobile-tabs {
    display: block;
  }
  
  .tab-content {
    padding: 20px;
    min-height: 350px;
  }
  
  .about-tab.content-wrapper {
    flex-direction: column;
    gap: 30px;
  }
  
  .about-tab .image-col img {
    width: 100%;
    max-width: 400px;
    height: auto;
    max-height: 350px;
  }
  
  .about-tab .text-col {
    padding-left: 0;
    text-align: center;
  }
  
  .section-content h2 {
    font-size: 22px;
  }
  
  .section-content p,
  .about-tab .text-col p {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .apropos-section {
    padding: 0 15px;
  }

  .tabs-container {
    margin-top: 40px;
    border-radius: 8px;
    min-height: 500px;
  }
  
  .mobile-tabs .mobile-header,
  .mobile-tabs .mobile-footer {
    padding: 14px 16px;
  }
  
  .tab-content {
    padding: 16px;
  }
  
  .current-tab-label {
    font-size: 15px;
  }
  
  .mobile-nav-btn {
    width: 46px;
    height: 46px;
    padding: 10px;
  }
  
  .about-tab .text-col h2 {
    font-size: 22px;
  }
  
  .about-tab .text-col h4 {
    font-size: 13px;
  }
  
  .section-content h2 {
    font-size: 20px;
  }
  
  .section-content p,
  .about-tab .text-col p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .apropos-section {
    padding: 0 10px;
  }

  .tabs-container {
    margin-top: 30px;
    border-radius: 6px;
    min-height: 450px;
  }
  
  .mobile-tabs .mobile-header,
  .mobile-tabs .mobile-footer {
    padding: 12px;
  }
  
  .tab-content {
    padding: 12px;
    min-height: 300px;
  }
  
  .current-tab-indicator {
    padding: 12px;
    gap: 10px;
    margin-bottom: 12px;
  }
  
  .tab-indicator-mobile {
    width: 34px;
    height: 34px;
    font-size: 13px;
  }
  
  .current-tab-label {
    font-size: 14px;
  }
  
  .mobile-nav-btn {
    width: 44px;
    height: 44px;
    padding: 8px;
  }
  
  .about-tab.content-wrapper {
    gap: 20px;
  }
  
  .about-tab .text-col h2 {
    font-size: 20px;
  }
  
  .about-tab .text-col h4 {
    font-size: 12px;
  }
  
  .section-content h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  .section-content p,
  .about-tab .text-col p {
    font-size: 13px;
  }
}

@media (max-width: 360px) {
  .tabs-container {
    margin-top: 25px;
    min-height: 400px;
  }
  
  .mobile-tabs .mobile-header,
  .mobile-tabs .mobile-footer {
    padding: 10px;
  }
  
  .tab-content {
    padding: 10px;
  }
  
  .current-tab-indicator {
    padding: 10px;
    gap: 8px;
  }
  
  .tab-indicator-mobile {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
  
  .current-tab-label {
    font-size: 13px;
  }
  
  .mobile-nav-btn {
    width: 42px;
    height: 42px;
    padding: 6px;
  }
}
</style>