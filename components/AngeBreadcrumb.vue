<template>
  <div class="breadcrumbs-wrapper">
    <div class="container">
      <div class="breadcrumbs-section">
        <div class="breadcrumbs-links">
          <!-- Zone gauche: Breadcrumbs et titre existants -->
          <div class="breadcrumbs-left">
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

          <!-- Zone droite optionnelle: Image en fond et bouton de téléchargement -->
          <div v-if="showDownloadSection" class="download-section" :style="{ backgroundImage: `url(${downloadImageUrl})` }">
            <button class="download-btn" @click="handleDownload">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16L16 10H13V3H11V10H8L12 16Z" />
                <path d="M20 18H4V11H2V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V11H20V18Z" />
              </svg>
              {{ downloadButtonText }}
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Props
const props = defineProps({
  backgroundUrl: { type: String, default: '/images/bg/pqat_doc_background.jpeg' },
  activePageName: { type: String, default: '' },
  others: { type: Object, default: () => ({}) },
  pageTitle: { type: String, default: '' },
  pageDescription: { type: String, default: '' },
  breadcrumbs: { type: Array, default: () => [] },
  showDownloadSection: { type: Boolean, default: false },
  downloadImageUrl: { type: String, default: '/images/bg/pqat_doc_background.jpeg' },
  downloadImageAlt: { type: String, default: 'Document icon' },
  downloadButtonText: { type: String, default: 'Télécharger le bulletin d\'information du PQAT' },
  downloadDocumentUrl: { type: String, default: '#' }
})

const breadcrumbsItems = ref([])
const currentTitle = ref('')
const currentDescription = ref('')

const defaultBreadcrumbs = computed(() => [
  { name: 'Accueil', path: '/' },
  { name: props.activePageName || 'Page', path: '#' }
])
const defaultTitle = computed(() => props.pageTitle || props.activePageName || 'Titre de la page')
const defaultDescription = computed(() => props.pageDescription || '')

const handleDownload = () => {
  if (props.downloadDocumentUrl.startsWith('http')) {
    window.open(props.downloadDocumentUrl, '_blank')
  } else {
    const link = document.createElement('a')
    link.href = props.downloadDocumentUrl
    link.setAttribute('download', '')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  emit('download-clicked', props.downloadDocumentUrl)
}

const initializeBreadcrumbs = () => {
  breadcrumbsItems.value = props.breadcrumbs.length > 0 ? props.breadcrumbs : defaultBreadcrumbs.value
  currentTitle.value = defaultTitle.value
  currentDescription.value = defaultDescription.value
}

const updateBreadcrumbs = (newBreadcrumbs) => { breadcrumbsItems.value = newBreadcrumbs }
const updateTitle = (newTitle) => { currentTitle.value = newTitle }
const updateDescription = (newDescription) => { currentDescription.value = newDescription }
const addBreadcrumb = (name, path = '#') => { breadcrumbsItems.value.push({ name, path }) }
const removeLastBreadcrumb = () => { if (breadcrumbsItems.value.length > 1) breadcrumbsItems.value.pop() }

watch(() => props.breadcrumbs, (newBreadcrumbs) => { if (newBreadcrumbs.length > 0) breadcrumbsItems.value = newBreadcrumbs })
watch(() => props.pageTitle, (newTitle) => { if (newTitle) currentTitle.value = newTitle })
watch(() => props.pageDescription, (newDescription) => { if (newDescription) currentDescription.value = newDescription })

const emit = defineEmits(['download-clicked'])
initializeBreadcrumbs()
defineExpose({ updateBreadcrumbs, updateTitle, updateDescription, addBreadcrumb, removeLastBreadcrumb, handleDownload })
</script>

<style scoped>
.container { margin-bottom: 0px;margin-top:-20px}
.breadcrumbs-wrapper { 
  width: 100%;
margin:0px !important;
  box-sizing: border-box !important;
  background:#e7f5fa !important;
  padding:0px !important;
}
/* .breadcrumbs-section {width: 100%; background: #e7f5fa; min-height: 300px; display: flex; align-items: center; position: relative; overflow: hidden; margin:0; } */
.breadcrumbs-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: v-bind('props.backgroundUrl') center/cover; opacity: 0.3; }
.breadcrumbs-links { position: relative; z-index: 2; width: 100%; padding: 60px 40px; display: flex; justify-content: space-between; align-items: center; gap: 40px; }
.breadcrumbs-left { flex: 1; }
.breadcrumbs-list { display: flex; align-items: center; gap: 12px; list-style: none; padding: 0; margin: 0 0 30px 0; flex-wrap: wrap; }
.breadcrumb-item { display: flex; align-items: center; gap: 12px; font-size: 16px; font-weight: 500; color: #000; transition: color 0.3s ease; }
.breadcrumb-item.active { font-weight: 600; color: #016a98; }
.breadcrumb-item a { color: #000; text-decoration: none; transition: color 0.3s ease; }
.breadcrumb-item a:hover { color: #016a98; }
.breadcrumb-separator { color: #000; font-size: 14px; font-weight: 300; }
.breadcrumbs-divider { height: 1px; background: #e2ebee; margin: 25px 0 35px 0; width: 100%; max-width: 200px; }
.page-title { font-size: 2.5rem; font-weight: 700; line-height: 1.2; margin: 0 0 20px 0; color: #000; }
.page-description { font-size: 1.1rem; font-weight: 400; line-height: 1.6; margin: 0; color: #000; max-width: 600px; }

/* Section téléchargement agrandie et responsive */
.download-section {
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  padding: 35px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
  min-width: 350px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #016a98, #0199d6);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  line-height: 1.4;
  min-width: 260px;
  justify-content: center;
}

.download-btn:hover { background: linear-gradient(135deg, #015a80, #0189c6); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(1, 106, 152, 0.3); }
.download-btn:active { transform: translateY(0); }
.download-icon { width: 22px; height: 22px; flex-shrink: 0; }

/* Responsive */
@media (max-width: 1199px) { .download-section { min-width: 320px; max-width: 380px; padding: 30px; } }
@media (max-width: 992px) { .breadcrumbs-links { flex-direction: column; align-items: flex-start; gap: 40px; } .download-section { align-self: flex-start; min-width: 100%; max-width: 100%; } }
@media (max-width: 768px) { .download-btn { min-width: 220px; padding: 12px 24px; font-size: 0.95rem; } }
@media (max-width: 480px) { .download-section { padding: 25px; } .download-btn { min-width: 200px; font-size: 0.9rem; padding: 10px 20px; } }
@media (max-width: 375px) { .download-section { padding: 20px; } .download-btn { min-width: 180px; font-size: 0.85rem; padding: 8px 16px; } }

/* Animation subtle */
.breadcrumbs-section { animation: fadeInUp 0.8s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
