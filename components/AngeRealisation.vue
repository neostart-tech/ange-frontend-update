<template>
  <div
    class=" mb-5 container d-flex justify-content-center align-items-center min-vh-50"
    ref="containerRef"
    style="margin-top: -10px;"
  >
    <div class="stats-row">
      <!-- Bloc 1 -->
      <div class="stat-item">
        <div class="value">
          <h1>{{ animatedValue1 }}+</h1>
        </div>
        <div class="desc">
          <p>Personnes et entreprises aidées</p>
        </div>
      </div>

      <!-- Bloc 2 -->
      <div class="stat-item">
        <div class="value">
          <h1>{{ animatedValue2 }}</h1>
        </div>
        <div class="desc">
          <p>Projets achevés avec impact mesurable</p>
        </div>
      </div>

      <!-- Bloc 3 -->
      <div class="stat-item">
        <div class="value">
          <h1>{{ animatedValue3 }}+</h1>
        </div>
        <div class="desc">
          <p>Experts environnementaux</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const animatedValue1 = ref(0)
const animatedValue2 = ref(0)
const animatedValue3 = ref(0)
const animationStarted = ref(false)

const targetValues = {
  value1: 200,
  value2: 6,
  value3: 50
}

const duration = 2000 // 2 seconds
const frameDuration = 1000 / 60 // 60 fps
const totalFrames = Math.round(duration / frameDuration)

const startCounter = (currentValue, targetValue, updateCallback) => {
  let frame = 0

  const counter = setInterval(() => {
    frame++
    const progress = frame / totalFrames
    const current = Math.round(targetValue * progress)

    updateCallback(current)

    if (frame === totalFrames) {
      clearInterval(counter)
    }
  }, frameDuration)
}

const isElementInViewport = (el) => {
  if (!el) return false
  
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

const handleScroll = () => {
  if (animationStarted.value) return
  
  if (containerRef.value && isElementInViewport(containerRef.value)) {
    animationStarted.value = true
    
    startCounter(0, targetValues.value1, (value) => {
      animatedValue1.value = value
    })
    
    startCounter(0, targetValues.value2, (value) => {
      animatedValue2.value = value
    })
    
    startCounter(0, targetValues.value3, (value) => {
      animatedValue3.value = value
    })
    
    // Retirer l'écouteur d'événement après le démarrage
    window.removeEventListener('scroll', handleScroll)
  }
}

onMounted(() => {
  // Vérifier immédiatement si l'élément est visible
  setTimeout(() => {
    handleScroll()
  }, 100)

  // Ajouter l'écouteur d'événement pour le scroll
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.container {
  padding: 0px ;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stats-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
  gap: 0px;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.value h1 {
  font-size: 64px;
  font-weight: bold;
  margin: 0;
  color: #333;
  line-height: 1;
}

.desc p {
  margin: 0;
  font-size: 16px;
  color: #555;
  line-height: 1.4;
  max-width: 150px;
}

/* Desktop - Layout horizontal (chiffre à gauche, texte à droite) */
.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Responsive - Mobile */
@media (max-width: 768px) {
  .container {
    padding: 40px 20px;
    height: auto;
    min-height: 200px;
  }
  
  .stats-row {
    gap: 15px;
  }
  
  .stat-item {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .value h1 {
    font-size: 48px;
    text-align: center;
  }
  
  .desc p {
    font-size: 14px;
    max-width: 120px;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 30px 15px;
    min-height: 180px;
  }
  
  .stats-row {
    gap: 10px;
  }
  
  .value h1 {
    font-size: 36px;
  }
  
  .desc p {
    font-size: 12px;
    max-width: 100px;
  }
}

/* Très petits écrans */
@media (max-width: 400px) {
  .container {
    padding: 20px 10px;
    min-height: 150px;
  }
  
  .stats-row {
    gap: 8px;
  }
  
  .value h1 {
    font-size: 28px;
  }
  
  .desc p {
    font-size: 11px;
    max-width: 80px;
  }
}
</style>