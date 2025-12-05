<template>
  <div class="container">
    <div class="tabs-container" ref="tabsContainer">
      <!-- Version Desktop -->
      <div class="desktop-tabs" v-if="!isMobile">
        <!-- Onglets avec indicateur de progression -->
        <div class="tabs-header sticky">
          <div class="tabs-progress" v-if="showProgress">
            <div 
              class="progress-bar" 
              :style="{ width: `${((activeTab + 1) / tabs.length) * 100}%` }"
            ></div>
          </div>
          
          <div class="tabs-navigation">
            <button 
              class="nav-btn prev"
              @click="previousTab"
              :disabled="activeTab === 0"
              aria-label="Onglet précédent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            <div class="tabs-wrapper">
              <div 
                v-for="(tab, index) in tabs"
                :key="tab.id || index"
                :class="[
                  'tab-item',
                  { 
                    active: activeTab === index,
                    completed: tab.completed,
                    'has-error': tab.hasError
                  }
                ]"
                @click="switchTab(index)"
              >
                <div class="tab-indicator">
                  <span v-if="tab.completed" class="check-icon">✓</span>
                  <span v-else class="tab-number">{{ index + 1 }}</span>
                </div>
                <span class="tab-label">{{ tab.label }}</span>
                <div v-if="tab.hasError" class="error-dot" title="Erreur à corriger"></div>
              </div>
            </div>

            <button 
              class="nav-btn next"
              @click="nextTab"
              :disabled="activeTab === tabs.length - 1"
              aria-label="Onglet suivant"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Version Mobile/Tablette - Navigation en HAUT ET BAS -->
      <div class="mobile-tabs" v-if="isMobile">
        <!-- Navigation HAUT -->
        <div class="mobile-header sticky">
          <!-- Indicateur de progression mobile -->
          <div class="mobile-progress">
            <div class="progress-info">
              <span class="current-step">Étape {{ activeTab + 1 }} sur {{ tabs.length }}</span>
              <span class="progress-percent">{{ Math.round(((activeTab + 1) / tabs.length) * 100) }}%</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: `${((activeTab + 1) / tabs.length) * 100}%` }"
              ></div>
            </div>
          </div>

          <!-- Indicateur d'onglet actuel -->
          <div class="current-tab-indicator">
            <div class="tab-indicator-mobile">
              <span v-if="tabs[activeTab].completed" class="check-icon">✓</span>
              <span v-else class="tab-number">{{ activeTab + 1 }}</span>
            </div>
            <span class="current-tab-label">{{ tabs[activeTab].label }}</span>
            <div v-if="tabs[activeTab].hasError" class="error-dot-mobile" title="Erreur à corriger"></div>
          </div>

          <!-- Navigation mobile HAUT - BOUTONS AUX BORDS -->
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

      <!-- Contenu avec animations -->
      <div class="tab-content-wrapper">
        <transition :name="transitionName" mode="out-in">
          <div 
            :key="activeTab"
            class="tab-content"
          >
            <component 
              :is="tabs[activeTab].component" 
              @tab-complete="onTabComplete"
              @tab-error="onTabError"
            />
          </div>
        </transition>
      </div>

      <!-- Version Mobile/Tablette - Navigation BAS -->
      <div class="mobile-tabs" v-if="isMobile">
        <div class="mobile-footer">
          <!-- Navigation mobile BAS - BOUTONS AUX BORDS -->
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// Composants
import Angepqatprojet from './Angepqatprojet.vue'
import Angepqatobjectifs from './Angepqatobjectifs.vue'
import Angepqatactivites from './Angepqatactivites.vue'
import Angepqatzoneintervention from './Angepqatzoneintervention.vue'
import Angepqatpartenairebeneficiaire from './Angepqatpartenairebeneficiaire.vue'
import Angepqatbudget from './Angepqatbudget.vue'

const props = defineProps({
  showProgress: {
    type: Boolean,
    default: true
  },
  saveState: {
    type: Boolean,
    default: true
  }
})

const tabs = ref([
  { 
    id: 'projet',
    label: 'Projet', 
    component: Angepqatprojet,
    hasError: false,
    completed: false
  },
  { 
    id: 'objectifs',
    label: 'Objectifs', 
    component: Angepqatobjectifs,
    hasError: false,
    completed: false
  },
  { 
    id: 'activites',
    label: 'Activités', 
    component: Angepqatactivites,
    hasError: false,
    completed: false
  },
  { 
    id: 'zone-intervention',
    label: 'Zone d\'intervention', 
    component: Angepqatzoneintervention,
    hasError: false,
    completed: false
  },
  { 
    id: 'partenaires',
    label: 'Partenaires & Bénéficiaires', 
    component: Angepqatpartenairebeneficiaire,
    hasError: false,
    completed: false
  },
  { 
    id: 'budget',
    label: 'Budget', 
    component: Angepqatbudget,
    hasError: false,
    completed: false
  }
])

const activeTab = ref(0)
const transitionName = ref('slide-next')
const isMobile = ref(false)
const tabsContainer = ref(null)

// // Restaurer l'état sauvegardé
// if (props.saveState) {
//   const savedTab = localStorage.getItem('active-tab')
//   if (savedTab) {
//     activeTab.value = parseInt(savedTab)
//   }
// }

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024 // Tablettes et mobiles
}

// Fonction pour scroller vers le haut
const scrollToTop = () => {
  nextTick(() => {
    // Scroller vers le haut du conteneur des tabs
    if (tabsContainer.value) {
      tabsContainer.value.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      })
    }
    
    // Scroller aussi vers le haut de la page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

const switchTab = (index) => {
  const direction = index > activeTab.value ? 'next' : 'prev'
  transitionName.value = `slide-${direction}`
  activeTab.value = index
  
  // Scroller vers le haut après le changement d'onglet
  scrollToTop()
  
  if (props.saveState) {
    localStorage.setItem('active-tab', index.toString())
  }
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

const onTabComplete = (tabId) => {
  const tabIndex = tabs.value.findIndex(tab => tab.id === tabId)
  if (tabIndex !== -1) {
    tabs.value[tabIndex].completed = true
  }
}

const onTabError = ({ tabId, hasError }) => {
  const tabIndex = tabs.value.findIndex(tab => tab.id === tabId)
  if (tabIndex !== -1) {
    tabs.value[tabIndex].hasError = hasError
  }
}

// Gestion du responsive
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.container {
  width: 100%;
  /* max-width: 1400px; */
  margin: 0 auto;
  padding: 0 20px;
}

.tabs-container {
  margin-top: 60px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 600px;
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
  background: linear-gradient(90deg, #1ba5d4, #1ba5d4);
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
  background: #1ba5d4;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(27, 165, 212, 0.3);
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
  min-width: 140px;
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

.tab-item.completed {
  background: #f0fff4;
}

.tab-item.has-error .tab-label {
  color: #dc2626;
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

.tab-item:not(.active):not(.completed) .tab-indicator {
  background: #e2e8f0;
  color: #64748b;
}

.tab-item.active .tab-indicator {
  background: #1ba5d4;
  color: white;
}

.tab-item.completed .tab-indicator {
  background: #007608;
  color: white;
}

.tab-item.has-error .tab-indicator {
  background: #dc2626;
  color: white;
}

.tab-label {
  font-weight: 500;
  color: #475569;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.tab-item.active .tab-label {
  color: #1ba5d4;
  font-weight: 600;
}

.tab-item.completed .tab-label {
  color: #007608;
}

.error-dot {
  width: 8px;
  height: 8px;
  background: #dc2626;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  right: 8px;
  flex-shrink: 0;
}

/* ===== CONTENU COMMUN ===== */
.tab-content-wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
}

.tab-content {
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  min-height: 400px;
}

/* ===== VERSION MOBILE/TABLETTE - NAVIGATION EN HAUT ET BAS ===== */
.mobile-tabs .mobile-header {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
}

/* Progression mobile */
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
  color: #1ba5d4;
  font-weight: 600;
}

/* Indicateur d'onglet actuel */
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
  background: #1ba5d4;
  color: white;
  flex-shrink: 0;
}

.tab-indicator-mobile .check-icon {
  font-size: 16px;
}

.current-tab-label {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  text-align: center;
  flex: 1;
}

.error-dot-mobile {
  width: 10px;
  height: 10px;
  background: #dc2626;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Navigation mobile HAUT */
.mobile-navigation-simple.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* ===== VERSION MOBILE/TABLETTE - NAVIGATION BAS ===== */
.mobile-tabs .mobile-footer {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
}

/* Navigation mobile BAS */
.mobile-navigation-simple.bottom-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* Styles communs pour les boutons de navigation mobile */
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
  background: #1ba5d4;
  color: white;
  border: 2px solid #1ba5d4;
}

.mobile-nav-btn.next:not(:disabled):hover {
  background: #1593c2;
  border-color: #1593c2;
  transform: translateY(-2px);
}

.mobile-nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none !important;
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

/* Tablettes (1024px et moins) */
@media (max-width: 1024px) {
  .container {
    padding: 0 16px;
    max-width: 100%;
  }
  
  .desktop-tabs {
    display: none;
  }
  
  .mobile-tabs {
    display: block;
  }
  
  .tab-content {
    padding: 20px;
  }
}

/* Mobiles (768px et moins) */
@media (max-width: 768px) {
  .container {
    padding: 0 12px;
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
    min-height: 350px;
  }
  
  .current-tab-label {
    font-size: 15px;
  }
  
  .mobile-nav-btn {
    width: 46px;
    height: 46px;
    padding: 10px;
  }
}

/* Petits mobiles (480px et moins) */
@media (max-width: 480px) {
  .container {
    padding: 0 10px;
        margin-top: 120px;

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
  
  .mobile-navigation-simple {
    gap: 0;
  }
  
  .mobile-progress {
    margin-bottom: 12px;
  }
}

/* Très petits écrans (360px et moins) */
@media (max-width: 360px) {
  .container {
    padding: 0 8px;
    margin-top: 120px;
  }
  
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
    min-height: 250px;
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

/* Orientation paysage sur mobile */
@media (max-width: 900px) and (orientation: landscape) {
  .tabs-container {
    min-height: 350px;
  }
  
  .tab-content {
    min-height: 200px;
  }
  
  .mobile-tabs .mobile-header,
  .mobile-tabs .mobile-footer {
    padding: 10px 12px;
  }
  
  .mobile-nav-btn {
    width: 44px;
    height: 44px;
  }
}


</style>