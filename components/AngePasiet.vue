<template>
  <div class="container">
    <!-- Système de tabulation - COPIE EXACTE -->
    <div class="tabs-container" ref="tabsContainer">
      <!-- Version Desktop - IDENTIQUE -->
      <div class="desktop-tabs" v-if="!isMobile">
        <div class="tabs-header">
          <!-- Indicateur de progression - IDENTIQUE -->
          <div class="tabs-progress">
            <div 
              class="progress-bar" 
              :style="{ width: `${((activeTab + 1) / tabs.length) * 100}%` }"
            ></div>
          </div>
          
          <!-- Navigation des onglets - IDENTIQUE -->
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

      <!-- Version Mobile - IDENTIQUE -->
      <div class="mobile-tabs" v-if="isMobile">
        <!-- En-tête mobile - IDENTIQUE -->
        <div class="mobile-header">
          <!-- Indicateur de progression - IDENTIQUE -->
          <div class="mobile-progress">
            <div class="progress-info">
              <span class="current-step">Étape {{ activeTab + 1 }} : {{ tabs[activeTab].title }}</span>
              <span class="progress-percent">{{ activeTab + 1 }}/{{ tabs.length }}</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: `${((activeTab + 1) / tabs.length) * 100}%` }"
              ></div>
            </div>
          </div>

          <!-- Navigation mobile (haut) - IDENTIQUE -->
          <div class="mobile-navigation-simple top-nav">
            <button 
              class="mobile-nav-btn prev"
              @click="previousTab"
              :disabled="activeTab === 0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
              <span class="nav-text">Précédent</span>
            </button>
            
            <button 
              class="mobile-nav-btn next"
              @click="nextTab"
              :disabled="activeTab === tabs.length - 1"
            >
              <span class="nav-text">Suivant</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Contenu des onglets avec animation - IDENTIQUE -->
      <div class="tab-content-wrapper">
        <transition :name="transitionName" mode="out-in">
          <div 
            :key="activeTab"
            class="tab-content"
          >
            <!-- Onglet 1 : Contexte & Justification -->
            <div v-if="activeTab === 0" class="tab-pane">
              <Angecbitcontextjustification/>
            </div>

            <!-- Onglet 2 : Objectifs -->
            <div v-else-if="activeTab === 1" class="tab-pane">
              <AngecbitObjectifs/>
            </div>

            <!-- Onglet 3 : Activités -->
            <div v-else-if="activeTab === 2" class="tab-pane">
              <AngecbitActivite/>
            </div>

            <!-- Onglet 4 : Informations Projet -->
            <div v-else-if="activeTab === 3" class="tab-pane">
              <AngecbitProjectInfo/>
            </div>

            <!-- Onglet 5 : Résultats -->
            <div v-else-if="activeTab === 4" class="tab-pane">
              <AngecbitResultat/>
            </div>

            <!-- Onglet 6 : Perspectives -->
            <div v-else-if="activeTab === 5" class="tab-pane">
              <Angecbitperpective/>
            </div>
          </div>
        </transition>
      </div>

      <!-- Navigation mobile (bas) - IDENTIQUE -->
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
              <span class="nav-text">Précédent</span>
            </button>
            
            <button 
              class="mobile-nav-btn next"
              @click="nextTab"
              :disabled="activeTab === tabs.length - 1"
            >
              <span class="nav-text">Suivant</span>
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// Configuration des onglets - 6 comme dans votre structure
const tabs = ref([
  {
    title: "Contexte & Justification",
    completed: false
  },
  {
    title: "Objectifs",
    completed: false
  },
  {
    title: "Activités",
    completed: false
  },
  {
    title: "Informations Projet",
    completed: false
  },
  {
    title: "Résultats",
    completed: false
  },
  {
    title: "Perspectives",
    completed: false
  }
])

const activeTab = ref(0)
const transitionName = ref('slide-next')
const isMobile = ref(false)
const tabsContainer = ref(null)

// Fonctions IDENTIQUES
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
  console.log('Next tab clicked, current tab:', activeTab.value) // Debug
  if (activeTab.value < tabs.value.length - 1) {
    switchTab(activeTab.value + 1)
  }
}

const previousTab = () => {
  console.log('Previous tab clicked, current tab:', activeTab.value) // Debug
  if (activeTab.value > 0) {
    switchTab(activeTab.value - 1)
  }
}

onMounted(() => {
  console.log('Component mounted') // Debug
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
/* STYLES IDENTIQUES AU PREMIER COMPOSANT */

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- Système de tabulation --- */
.tabs-container {
  margin-top: 40px;
  background: #fff;
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
  background: linear-gradient(135deg, #f8fff8 0%, #f0f9f0 100%);
  border-bottom: 1px solid #e0f2e1;
  width: 100%;
}

.tabs-progress {
  height: 4px;
  background: #e8f5e9;
  position: relative;
  width: 100%;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #007608, #34d058);
  transition: width 0.4s ease;
  border-radius: 0 4px 4px 0;
}

.tabs-navigation {
  display: flex;
  align-items: center;
  padding: 20px 24px;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
}

.nav-btn {
  padding: 10px;
  border: none;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  color: #64748b;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0f2e1;
}

.nav-btn:hover:not(:disabled) {
  background: #007608;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 118, 8, 0.2);
  border-color: #007608;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  background: #f8faf9;
  pointer-events: none;
}

.tabs-wrapper {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  min-width: 180px;
  justify-content: flex-start;
  flex-shrink: 0;
  border: 1px solid transparent;
  background: white;
}

.tab-item:hover:not(.active) {
  background: #f0f9f0;
  border-color: #c8e6c9;
  transform: translateY(-2px);
}

.tab-item.active {
  background: white;
  box-shadow: 0 4px 16px rgba(0, 118, 8, 0.1);
  border-color: #007608;
  transform: translateY(-2px);
}

.tab-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
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

.tab-number {
  font-weight: 600;
}

.tab-label {
  font-weight: 600;
  color: #2d3748;
  transition: color 0.3s ease;
  white-space: nowrap;
  font-size: 14px;
  letter-spacing: 0.3px;
}

.tab-item.active .tab-label {
  color: #007608;
  font-weight: 700;
}

/* ===== CONTENU DES ONGLETS ===== */
.tab-content-wrapper {
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f8fff8 100%);
}

.tab-content {
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
  min-height: 500px;
}

.tab-pane {
  height: 100%;
  width: 100%;
  opacity: 1 !important;
  display: block !important;
  visibility: visible !important;
}

/* ===== VERSION MOBILE ===== */
.mobile-tabs .mobile-header {
  background: linear-gradient(135deg, #f8fff8 0%, #f0f9f0 100%);
  border-bottom: 1px solid #e0f2e1;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

.mobile-progress {
  margin-bottom: 20px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 15px;
}

.current-step {
  color: #1a202c;
  font-weight: 600;
  font-size: 16px;
  flex: 1;
  text-align: left;
}

.progress-percent {
  color: #007608;
  font-weight: 600;
  background: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  flex-shrink: 0;
}

.progress-bar {
  height: 6px;
  background: #e8f5e9;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #007608, #34d058);
  transition: width 0.4s ease;
  border-radius: 3px;
}

/* Navigation mobile */
.mobile-navigation-simple {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.mobile-tabs .mobile-footer {
  background: linear-gradient(135deg, #f8fff8 0%, #f0f9f0 100%);
  border-top: 1px solid #e0f2e1;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
}

.mobile-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  min-height: 56px;
  font-weight: 600;
  font-size: 15px;
  user-select: none;
}

.mobile-nav-btn.prev {
  background: white;
  color: #4a5568;
  border: 1px solid #e0f2e1;
  justify-content: flex-start;
}

.mobile-nav-btn.prev:not(:disabled):hover {
  background: #f0f9f0;
  border-color: #007608;
  color: #007608;
  transform: translateY(-2px);
}

.mobile-nav-btn.prev:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.mobile-nav-btn.next {
  background: #007608;
  color: white;
  border: 1px solid #007608;
  justify-content: flex-end;
}

.mobile-nav-btn.next:not(:disabled):hover {
  background: #005a06;
  border-color: #005a06;
  transform: translateY(-2px);
}

.mobile-nav-btn.next:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.nav-text {
  margin: 0 12px;
}

/* Animations - IDENTIQUES */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* ===== RESPONSIVE DESIGN ===== */

/* Tablettes */
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
    padding: 24px;
    min-height: 400px;
  }
  
  .tab-item {
    min-width: 160px;
  }
}

/* Mobiles */
@media (max-width: 768px) {
  .container {
    padding: 0 12px;
  }

  .tabs-container {
    margin-top: 30px;
    border-radius: 12px;
    min-height: auto;
  }
  
  .tab-content {
    padding: 20px;
  }
  
  .mobile-tabs .mobile-header,
  .mobile-tabs .mobile-footer {
    padding: 16px;
  }
  
  .mobile-nav-btn {
    padding: 12px 16px;
    min-height: 52px;
  }
  
  .current-step {
    font-size: 15px;
  }
  
  .progress-percent {
    font-size: 13px;
    padding: 3px 10px;
  }
}

/* Petits mobiles */
@media (max-width: 480px) {
  .container {
    padding: 0 8px;
  }

  .tabs-container {
    margin-top: 20px;
    border-radius: 10px;
  }
  
  .tab-content {
    padding: 16px;
  }
  
  .mobile-tabs .mobile-header,
  .mobile-tabs .mobile-footer {
    padding: 14px;
  }
  
  .mobile-nav-btn {
    padding: 10px 14px;
    min-height: 48px;
    font-size: 14px;
  }
  
  .nav-text {
    margin: 0 8px;
    font-size: 14px;
  }
  
  .current-step {
    font-size: 14px;
  }
  
  .progress-percent {
    font-size: 12px;
    padding: 2px 8px;
  }
}

/* Styles pour s'assurer que le contenu s'affiche */
.tab-content > div {
  height: 100%;
  display: block !important;
  opacity: 1 !important;
}

.tab-pane {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Style pour les listes - IDENTIQUE */
li::marker {
  font-weight: bold !important;
}

/* Debug styles - pour voir si les boutons fonctionnent */
.debug-active {
  outline: 2px solid red !important;
}

/* S'assurer que les boutons sont cliquables */
button {
  position: relative;
  z-index: 10;
}

/* Correction pour les boutons désactivés */
button:disabled {
  pointer-events: none !important;
  cursor: not-allowed !important;
}

/* S'assurer que les boutons actifs sont cliquables */
button:not(:disabled) {
  pointer-events: auto !important;
  cursor: pointer !important;
}
</style>