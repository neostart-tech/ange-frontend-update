<template>
  <div
    class="mt-5 mb-5 container d-flex justify-content-center align-items-center min-vh-50"
    style="background: #fff !important;"
    ref="containerRef"
  >
    <div class="row text-center text-md-start w-100">

      <!-- Bloc 1 -->
      <div class="col-md-4 d-flex align-items-center justify-content-center mb-4 mb-md-0">
        <div class="value me-3">
          <h1>{{ animatedValue1 }}+</h1>
        </div>
        <div class="desc">
          <p class="text-start">Personnes et entreprises aidées</p>
        </div>
      </div>

      <!-- Bloc 2 -->
      <div class="col-md-4 d-flex align-items-center justify-content-center mb-4 mb-md-0">
        <div class="value me-3">
          <h1>{{ animatedValue2 }}</h1>
        </div>
        <div class="desc">
          <p class="text-start">Projets achevés avec impact mesurable</p>
        </div>
      </div>

      <!-- Bloc 3 -->
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        <div class="value me-3">
          <h1>{{ animatedValue3 }}+</h1>
        </div>
        <div class="desc">
          <p class="text-start">Experts environnementaux</p>
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
  padding: 60px 20px;
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

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 40px 20px;
  }
  
  .value h1 {
    font-size: 48px;
  }
  
  .desc p {
    font-size: 14px;
    max-width: 120px;
  }
  
  .me-3 {
    margin-right: 1rem !important;
  }
}

@media (max-width: 576px) {
  .value h1 {
    font-size: 36px;
  }
  
  .desc p {
    font-size: 13px;
    max-width: 100px;
  }
  
  .me-3 {
    margin-right: 0.75rem !important;
  }
}
</style>