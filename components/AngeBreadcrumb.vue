<template>
  <div class="breadcrumbs-wrapper">
    <div class="container">
      <div class="breadcrumbs-section">
        <div class="breadcrumbs-links">
          <ul class="breadcrumbs-list">
            <li v-for="(item, index) in breadcrumbsItems" :key="index" class="breadcrumb-item"
              :class="{ 'active': index === breadcrumbsItems.length - 1 }">
              <span v-if="index === breadcrumbsItems.length - 1">
                {{ item.name }}
              </span>
              <NuxtLink v-else :to="item.path">
                {{ item.name }}
              </NuxtLink>
              <span v-if="index < breadcrumbsItems.length - 1" class="breadcrumb-separator">
                
              </span>
            </li>
          </ul>

          <div class="breadcrumbs-divider"></div>

          <h1 class="page-title">{{ currentTitle }}</h1>
          <p class="page-description">
            {{ currentDescription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Props
const props = defineProps({
  backgroundUrl: {
    type: String,
    default: '/images/bg/breadcrumb-bg.jpg'
  },
  activePageName: {
    type: String,
    default: ''
  },
  others: {
    type: Object,
    default: () => ({})
  },
  pageTitle: {
    type: String,
    default: ''
  },
  pageDescription: {
    type: String,
    default: ''
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})

// Références réactives
const breadcrumbsItems = ref([])
const currentTitle = ref('')
const currentDescription = ref('')

// Computed properties pour les valeurs par défaut
const defaultBreadcrumbs = computed(() => [
  { name: 'Accueil', path: '/' },
  { name: props.activePageName || 'Page', path: '#' }
])

const defaultTitle = computed(() =>
  props.pageTitle || props.activePageName || 'Titre de la page'
)

const defaultDescription = computed(() =>
  props.pageDescription || ''
)

// Fonction d'initialisation
const initializeBreadcrumbs = () => {
  // Initialiser les breadcrumbs
  breadcrumbsItems.value = props.breadcrumbs.length > 0
    ? props.breadcrumbs
    : defaultBreadcrumbs.value

  // Initialiser le titre
  currentTitle.value = defaultTitle.value

  // Initialiser la description
  currentDescription.value = defaultDescription.value
}

// Fonction pour mettre à jour dynamiquement les breadcrumbs
const updateBreadcrumbs = (newBreadcrumbs) => {
  breadcrumbsItems.value = newBreadcrumbs
}

// Fonction pour mettre à jour le titre
const updateTitle = (newTitle) => {
  currentTitle.value = newTitle
}

// Fonction pour mettre à jour la description
const updateDescription = (newDescription) => {
  currentDescription.value = newDescription
}

// Fonction pour ajouter un élément au breadcrumb
const addBreadcrumb = (name, path = '#') => {
  breadcrumbsItems.value.push({ name, path })
}

// Fonction pour supprimer le dernier élément du breadcrumb
const removeLastBreadcrumb = () => {
  if (breadcrumbsItems.value.length > 1) {
    breadcrumbsItems.value.pop()
  }
}

// Watcher pour les props
watch(
  () => props.breadcrumbs,
  (newBreadcrumbs) => {
    if (newBreadcrumbs.length > 0) {
      breadcrumbsItems.value = newBreadcrumbs
    }
  }
)

watch(
  () => props.pageTitle,
  (newTitle) => {
    if (newTitle) {
      currentTitle.value = newTitle
    }
  }
)

watch(
  () => props.pageDescription,
  (newDescription) => {
    if (newDescription) {
      currentDescription.value = newDescription
    }
  }
)

// Initialisation au montage
initializeBreadcrumbs()

// Exposer les méthodes pour une utilisation externe
defineExpose({
  updateBreadcrumbs,
  updateTitle,
  updateDescription,
  addBreadcrumb,
  removeLastBreadcrumb
})
</script>

<style scoped>
.breadcrumbs-wrapper {
  width: 100%;
}

.breadcrumbs-section {
  background: #e7f5fa;
  min-height: 300px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}

.breadcrumbs-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: v-bind('props.backgroundUrl') center/cover;
  opacity: 0.3;
}

.breadcrumbs-links {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 60px 40px;
}

.breadcrumbs-list {
  display: flex;
  align-items: center;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  flex-wrap: wrap;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  transition: color 0.3s ease;
}

.breadcrumb-item.active {
  font-weight: 600;
  color: #016a98;
}

.breadcrumb-item a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-item a:hover {
  color: #016a98;
}

.breadcrumb-separator {
  color: #000;
  font-size: 14px;
  font-weight: 300;
}

.breadcrumbs-divider {
  height: 1px;
  background: #e2ebee;
  margin: 25px 0 35px 0;
  width: 100%;
  max-width: 200px;
}

.page-title {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 20px 0;
  color: #000;
}

.page-description {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  color: #000;
  max-width: 600px;
}

/* Responsive */
@media (max-width: 1199px) {
 
  
  .breadcrumbs-links {
    padding: 50px 30px;
  }
  
  .page-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {


  .breadcrumbs-links {
    padding: 40px 20px;
    text-align: center;
  }

  .breadcrumbs-list {
    justify-content: center;
    margin-bottom: 25px;
  }

  .breadcrumbs-divider {
    margin: 20px auto 30px auto;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: 1rem;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {


  .breadcrumbs-section {
    min-height: 250px;
    margin: 15px 0;
  }

  .breadcrumbs-links {
    padding: 30px 15px;
  }

  .breadcrumbs-list {
    gap: 8px;
  }

  .breadcrumb-item {
    font-size: 14px;
  }

  .page-title {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  .page-description {
    font-size: 0.95rem;
  }
}

/* Animation subtle */
.breadcrumbs-section {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Correction pour les très petits écrans */
@media (max-width: 375px) {
  .breadcrumbs-wrapper {
    margin-top: 85px;
  }
  
  .page-title {
    font-size: 1.6rem;
  }
  
  .page-description {
    font-size: 0.9rem;
  }
}
</style>