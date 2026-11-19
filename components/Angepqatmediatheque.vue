<template>
  <div class="pqat-mediatheque">
    <!-- Indicateur de chargement -->
    <div v-if="isLoading" class="loading-state">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
      <div class="spinner-grow text-success ms-2" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
      <div class="spinner-grow text-info ms-2" role="status">
        <span class="visually-hidden">Chargement...</span>
      </div>
      <p class="mt-3 text-muted">Chargement des documents du projet PQAT...</p>
    </div>

    <!-- Message d'erreur -->
    <div v-else-if="errorMessage" class="error-state">
      <i class="fa fa-exclamation-triangle error-icon"></i>
      <p>{{ errorMessage }}</p>
      <button class="btn-primary-custom" @click="fetchDocuments" type="button">
        <i class="fa fa-refresh me-1"></i> Réessayer
      </button>
    </div>

    <!-- Contenu principal -->
    <div v-else class="container-fluid px-0">
      <div class="row">
        <!-- Zone de filtre (sidebar à gauche) -->
        <div class="col-lg-3 col-12 mb-4">
          <!-- Dropdown filtres pour mobile -->
          <div class="mobile-filter-dropdown d-lg-none mb-3">
            <button 
              class="dropdown-toggle-custom" 
              @click="toggleMobileDropdown"
              type="button"
            >
              <span><i class="fa fa-filter me-2"></i> Filtres</span>
              <i class="fa" :class="mobileDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
            
            <div class="dropdown-content-custom" :class="{ show: mobileDropdownOpen }">
              <div class="filter-section-mobile">
                <h5 class="filter-title-mobile">Filtrer par date</h5>
                
                <div class="mb-2">
                  <label class="filter-label-mobile">Année</label>
                  <select 
                    class="form-select filter-select-mobile" 
                    v-model="selectedYear"
                    @change="onFilterChange"
                  >
                    <option value="all">Toutes les années</option>
                    <option v-for="year in availableYears" :key="year" :value="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
                
                <div class="mb-2">
                  <label class="filter-label-mobile">Mois</label>
                  <select 
                    class="form-select filter-select-mobile" 
                    v-model="selectedMonth"
                    @change="onFilterChange"
                    :disabled="selectedYear === 'all'"
                  >
                    <option value="all">Tous les mois</option>
                    <option v-for="month in availableMonths" :key="month.value" :value="month.value">
                      {{ month.label }}
                    </option>
                  </select>
                </div>
                
                <button class="btn-reset-date-mobile" @click="resetFilters" type="button">
                  <i class="fa fa-refresh me-1"></i> Réinitialiser
                </button>
              </div>
            </div>
          </div>

          <!-- Sidebar fixe pour desktop -->
          <div class="filter-sidebar d-none d-lg-block">
            <div class="filter-section mb-4">
              <h5 class="filter-section-title">Filtrer par date</h5>
              
              <div class="mb-3">
                <label class="filter-label">Année</label>
                <select 
                  class="form-select filter-select" 
                  v-model="selectedYear"
                  @change="onFilterChange"
                >
                  <option value="all">Toutes les années</option>
                  <option v-for="year in availableYears" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
              
              <div class="mb-3">
                <label class="filter-label">Mois</label>
                <select 
                  class="form-select filter-select" 
                  v-model="selectedMonth"
                  @change="onFilterChange"
                  :disabled="selectedYear === 'all'"
                >
                  <option value="all">Tous les mois</option>
                  <option v-for="month in availableMonths" :key="month.value" :value="month.value">
                    {{ month.label }}
                  </option>
                </select>
              </div>
              
              <button 
                class="btn-reset-date" 
                @click="resetFilters" 
                type="button"
                v-if="hasActiveFilters"
              >
                <i class="fa fa-refresh me-1"></i> Réinitialiser les filtres
              </button>
            </div>

            <!-- Résumé / Infos -->
            <div class="filter-section">
              <h5 class="filter-section-title">Projet PQAT</h5>
              <div class="pqat-info-box">
                <p class="pqat-info-text">
                  Tous les documents officiels, rapports d'étape et bulletins d'information relatifs au Projet Qualité de l'Air au Togo.
                </p>
                <div class="pqat-stat">
                  <span class="pqat-stat-label">Total documents :</span>
                  <span class="pqat-stat-badge">{{ documents.length }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Zone des documents (à droite) -->
        <div class="col-lg-9 col-12 mb-3">
          <!-- En-tête des documents -->
          <div class="documents-header">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-12">
                <h3 class="documents-title">Médiathèque PQAT</h3>
                <p class="documents-subtitle" v-if="hasActiveFilters">
                  <i class="fa fa-filter"></i>
                  Filtres actifs :
                  <span class="filter-badge" v-if="selectedYear !== 'all'">Année: {{ selectedYear }}</span>
                  <span class="filter-badge" v-if="selectedMonth !== 'all'">{{ getMonthLabel(selectedMonth) }}</span>
                  <span class="filter-badge" v-if="search">{{ search }}</span>
                  <button class="btn-clear-all" @click="resetFilters" type="button">
                    <i class="fa fa-times"></i> Tout effacer
                  </button>
                </p>
                <p class="documents-subtitle" v-else>
                  Consultez et téléchargez les publications officielles
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-12 mt-3 mt-md-0">
                <div class="search-container">
                  <input
                    type="text"
                    v-model="search"
                    placeholder="Rechercher un document..."
                    class="search-input"
                    @input="onSearchInput"
                  />
                  <i class="fa fa-search search-icon" v-if="!search"></i>
                  <button 
                    class="btn-clear-search" 
                    @click="clearSearch"
                    v-if="search"
                    type="button"
                    aria-label="Effacer la recherche"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- État aucun document -->
          <div v-if="filteredDocuments.length === 0" class="no-documents">
            <i class="fa fa-file-alt no-doc-icon"></i>
            <p class="no-doc-text">Aucun document correspondant...</p>
            <button class="btn-reset-filters" @click="resetFilters" type="button" v-if="hasActiveFilters">
              <i class="fa fa-refresh me-1"></i> Réinitialiser tous les filtres
            </button>
          </div>

          <!-- Grille des documents -->
          <div v-else class="documents-grid">
            <div class="results-info mb-4">
              <span class="results-count">
                {{ filteredDocuments.length }} document<span v-if="filteredDocuments.length > 1">s</span> trouvé<span v-if="filteredDocuments.length > 1">s</span>
              </span>
              <div class="sort-container">
                <label class="sort-label">Trier par :</label>
                <select class="form-select sort-select" v-model="sortBy">
                  <option value="date_desc">Date (plus récent)</option>
                  <option value="date_asc">Date (plus ancien)</option>
                  <option value="name_asc">Nom (A-Z)</option>
                  <option value="name_desc">Nom (Z-A)</option>
                </select>
              </div>
            </div>

            <div class="row">
              <div
                class="col-xl-4 col-lg-6 col-md-6 col-12 mb-4"
                v-for="doc in paginatedDocuments"
                :key="doc.id || doc.slug || doc.fileUrl"
              >
                <div class="document-card">
                  <div class="card-icon pdf-icon">
                    <i class="fa fa-file-pdf"></i>
                    <span class="file-extension">PDF</span>
                  </div>
                  <div class="card-content">
                    <h6 class="document-name" :title="doc.title">{{ doc.title }}</h6>
                    <div class="document-meta">
                      <span class="document-type" v-if="doc.description">
                        <i class="fa fa-info-circle"></i>
                        {{ doc.description }}
                      </span>
                      <span class="document-date" v-if="doc.date_publication">
                        <i class="fa fa-calendar"></i>
                        {{ doc.date_publication }}
                      </span>
                    </div>
                    <div class="card-footer-actions">
                      <button
                        class="view-link"
                        @click="openModal(doc)"
                        type="button"
                      >
                        <i class="fa fa-eye me-1"></i> Visualiser
                      </button>
                      <a
                        class="download-btn"
                        :href="doc.fileUrl"
                        :download="doc.title + '.pdf'"
                        target="_blank"
                        rel="noopener"
                        title="Télécharger le fichier"
                      >
                        <i class="fa fa-download"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="row mt-4" v-if="totalPages > 1">
              <div class="col">
                <ul class="pagination-custom center">
                  <li class="page-item-custom" :class="{ disabled: currentPage === 1 }">
                    <a href="#" class="page-link-custom" @click.prevent="prevPage" aria-label="Précédent">
                      <i class="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li
                    v-for="pageNumber in totalPages"
                    :key="pageNumber"
                    class="page-item-custom"
                    :class="{ active: pageNumber === currentPage }"
                  >
                    <a href="#" class="page-link-custom" @click.prevent="goToPage(pageNumber)">
                      {{ pageNumber }}
                    </a>
                  </li>
                  <li class="page-item-custom" :class="{ disabled: currentPage === totalPages }">
                    <a href="#" class="page-link-custom" @click.prevent="nextPage" aria-label="Suivant">
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modale de visualisation PDF -->
    <div v-if="currentDoc" class="media-modal" @click.self="closeModal">
      <div class="media-modal-box">
        <div class="media-modal-head">
          <div class="d-flex align-items-center gap-2 text-truncate">
            <i class="fa fa-file-pdf text-danger fs-5"></i>
            <strong class="text-truncate">{{ currentDoc.title }}</strong>
          </div>
          <div class="media-modal-btns">
            <a :href="currentDoc.fileUrl" target="_blank" rel="noopener" class="btn-open-tab">
              <i class="fa fa-external-link me-1"></i> Ouvrir dans un onglet
            </a>
            <a :href="currentDoc.fileUrl" :download="currentDoc.title + '.pdf'" class="btn-download-tab">
              <i class="fa fa-download me-1"></i> Télécharger
            </a>
            <button class="close-btn" @click="closeModal" aria-label="Fermer">&times;</button>
          </div>
        </div>
        <div class="media-modal-body">
          <iframe :src="currentDoc.fileUrl" title="Visionneuse PDF"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import config from '~~/config'

const documents = ref([])
const isLoading = ref(true)
const errorMessage = ref('')
const search = ref('')
const selectedYear = ref('all')
const selectedMonth = ref('all')
const sortBy = ref('date_desc')
const currentPage = ref(1)
const itemsPerPage = ref(6)
const mobileDropdownOpen = ref(false)
const currentDoc = ref(null)

const { $axios } = useNuxtApp()

const availableMonths = [
  { value: '01', label: 'Janvier' },
  { value: '02', label: 'Février' },
  { value: '03', label: 'Mars' },
  { value: '04', label: 'Avril' },
  { value: '05', label: 'Mai' },
  { value: '06', label: 'Juin' },
  { value: '07', label: 'Juillet' },
  { value: '08', label: 'Août' },
  { value: '09', label: 'Septembre' },
  { value: '10', label: 'Octobre' },
  { value: '11', label: 'Novembre' },
  { value: '12', label: 'Décembre' }
]

const getMonthLabel = (monthVal) => {
  const m = availableMonths.find(item => item.value === monthVal)
  return m ? m.label : monthVal
}

const resolveFileUrl = (doc) => {
  if (!doc) return ''
  const url = doc.file_url || doc.file
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    try {
      const parsedUrl = new URL(url)
      if (parsedUrl.hostname === 'localhost' && !parsedUrl.port && config.app_local) {
        const storageBase = config.app_back_url_img || ''
        const link = doc.file_link || ''
        return link.startsWith('/') ? `${storageBase}${link}` : `${storageBase}/${link}`
      }
    } catch (e) {}
    return url
  }
  const storageBase = config.app_back_url_img || ''
  const link = doc.file_link || doc.file || ''
  return link.startsWith('/') ? `${storageBase}${link}` : `${storageBase}/${link}`
}

const parseDocDate = (doc) => {
  const raw = doc.raw_date_publication || doc.date_publication || doc.created_at
  if (!raw) return null
  try {
    const d = new Date(raw)
    if (!isNaN(d.getTime())) return d
    const match = String(raw).match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/)
    if (match) return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]))
  } catch (e) {}
  return null
}

const extractYearFromDoc = (doc) => {
  const d = parseDocDate(doc)
  return d ? String(d.getFullYear()) : null
}

const extractMonthFromDoc = (doc) => {
  const d = parseDocDate(doc)
  if (!d) return null
  const m = d.getMonth() + 1
  return m < 10 ? `0${m}` : String(m)
}

const availableYears = computed(() => {
  const set = new Set()
  documents.value.forEach((doc) => {
    const y = extractYearFromDoc(doc)
    if (y) set.add(y)
  })
  return Array.from(set).sort((a, b) => parseInt(b) - parseInt(a))
})

const hasActiveFilters = computed(() => {
  return selectedYear.value !== 'all' || selectedMonth.value !== 'all' || search.value.trim() !== ''
})

const filteredDocuments = computed(() => {
  let list = documents.value.filter((doc) => {
    // Filtre par année
    if (selectedYear.value !== 'all') {
      const y = extractYearFromDoc(doc)
      if (y !== selectedYear.value) return false
    }
    // Filtre par mois
    if (selectedMonth.value !== 'all') {
      const m = extractMonthFromDoc(doc)
      if (m !== selectedMonth.value) return false
    }
    // Filtre par recherche
    if (search.value.trim()) {
      const q = search.value.toLowerCase().trim()
      const title = (doc.title || doc.name_doc || '').toLowerCase()
      const desc = (doc.description || '').toLowerCase()
      if (!title.includes(q) && !desc.includes(q)) return false
    }
    return true
  })

  // Tri
  return list.sort((a, b) => {
    const dateA = parseDocDate(a) || new Date(0)
    const dateB = parseDocDate(b) || new Date(0)
    const nameA = (a.title || a.name_doc || '').toLowerCase()
    const nameB = (b.title || b.name_doc || '').toLowerCase()

    switch (sortBy.value) {
      case 'date_desc':
        return dateB.getTime() - dateA.getTime()
      case 'date_asc':
        return dateA.getTime() - dateB.getTime()
      case 'name_asc':
        return nameA.localeCompare(nameB, 'fr')
      case 'name_desc':
        return nameB.localeCompare(nameA, 'fr')
      default:
        return 0
    }
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredDocuments.value.length / itemsPerPage.value) || 1
})

const paginatedDocuments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return filteredDocuments.value.slice(start, start + itemsPerPage.value)
})

const onFilterChange = () => {
  currentPage.value = 1
}

const onSearchInput = () => {
  currentPage.value = 1
}

const clearSearch = () => {
  search.value = ''
  currentPage.value = 1
}

const resetFilters = () => {
  selectedYear.value = 'all'
  selectedMonth.value = 'all'
  search.value = ''
  sortBy.value = 'date_desc'
  currentPage.value = 1
}

const toggleMobileDropdown = () => {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const goToPage = (p) => {
  currentPage.value = p
}

const openModal = (doc) => {
  currentDoc.value = doc
}

const closeModal = () => {
  currentDoc.value = null
}

const fetchDocuments = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    const response = await $axios.get('/pqat/documents')
    const rawData = response?.data?.data ?? response?.data ?? []
    documents.value = (Array.isArray(rawData) ? rawData : []).map((doc) => ({
      ...doc,
      title: doc.title || doc.name_doc || 'Document sans titre',
      fileUrl: resolveFileUrl(doc),
    }))
  } catch (error) {
    console.error('Erreur lors du chargement des documents PQAT:', error)
    errorMessage.value = 'Impossible de charger les documents pour le moment.'
    documents.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchDocuments()
})
</script>

<style lang="scss" scoped>
.pqat-mediatheque {
  padding: 20px 0 40px;
  width: 100%;
}

/* États de chargement et erreurs */
.loading-state, .error-state {
  text-align: center;
  padding: 60px 20px;
}
.error-icon {
  font-size: 44px;
  color: #dc3545;
  margin-bottom: 16px;
}

/* Zone de filtre gauche (Sidebar) */
.filter-sidebar {
  background: #f0fcf0;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: fit-content;
  position: sticky;
  top: 20px;
}

.filter-section {
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
}

.filter-section-title {
  color: #000;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 16px;
    background: #1292ee;
    margin-right: 10px;
    border-radius: 2px;
  }
}

.filter-label {
  color: #000;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}

.filter-select {
  border: 2px solid #e8f8e8;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 14px;
  color: #000;
  transition: all 0.3s ease;
  width: 100%;
  cursor: pointer;

  &:focus {
    border-color: #1292ee;
    box-shadow: 0 0 0 3px rgba(18, 146, 238, 0.1);
  }

  &:disabled {
    background: #f8f9fa;
    color: #999;
    cursor: not-allowed;
  }
}

.btn-reset-date {
  width: 100%;
  background: transparent;
  border: 1px solid #dc3545;
  color: #dc3545;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;

  &:hover {
    background: #dc3545;
    color: white;
    transform: translateY(-2px);
  }
}

.pqat-info-box {
  background: white;
  border-radius: 8px;
  padding: 14px;
  border: 1px solid #e8f8e8;
}

.pqat-info-text {
  font-size: 13px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 12px;
}

.pqat-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
}

.pqat-stat-badge {
  background: #1292ee;
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
}

/* Dropdown mobile */
.mobile-filter-dropdown {
  position: relative;
  width: 100%;
}

.dropdown-toggle-custom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 18px;
  background: #f0fcf0;
  border: 2px solid #e8f8e8;
  border-radius: 8px;
  color: #000;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}

.dropdown-content-custom {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e8f8e8;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &.show {
    max-height: 400px;
  }
}

.filter-section-mobile {
  padding: 15px 18px;
}

.filter-title-mobile {
  color: #000;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 14px;
}

.filter-label-mobile {
  color: #000;
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 5px;
  display: block;
}

.filter-select-mobile {
  border: 1px solid #e8f8e8;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  color: #000;
  width: 100%;
  margin-bottom: 10px;
}

.btn-reset-date-mobile {
  width: 100%;
  background: transparent;
  border: 1px solid #dc3545;
  color: #dc3545;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

/* En-tête des documents */
.documents-header {
  margin-bottom: 25px;
}

.documents-title {
  color: #000;
  font-weight: 600;
  margin: 0 0 5px 0;
  font-size: 24px;
}

.documents-subtitle {
  color: #666;
  font-size: 14px;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  i {
    color: #1292ee;
  }
}

.filter-badge {
  background: #e8f8e8;
  color: #000;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.btn-clear-all {
  background: transparent;
  border: 1px solid #dc3545;
  color: #dc3545;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #dc3545;
    color: white;
  }
}

.search-container {
  position: relative;
  max-width: 320px;
  margin-left: auto;
}

.search-input {
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: 2px solid #e8f8e8;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  color: #000;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1292ee;
    box-shadow: 0 0 0 3px rgba(18, 146, 238, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  pointer-events: none;
}

.btn-clear-search {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #dc3545;
  }
}

/* Résultats & Tri */
.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 16px;
  border-bottom: 1px solid #e8f8e8;
}

.results-count {
  color: #000;
  font-weight: 500;
  font-size: 14px;
}

.sort-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sort-label {
  color: #000;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
}

.sort-select {
  border: 2px solid #e8f8e8;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: #000;
  min-width: 170px;
  cursor: pointer;

  &:focus {
    border-color: #1292ee;
    box-shadow: 0 0 0 3px rgba(18, 146, 238, 0.1);
  }
}

/* Cartes de documents */
.document-card {
  background: white;
  border-radius: 12px;
  padding: 22px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f8e8;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 15px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #1292ee;
  }
}

.card-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  i {
    font-size: 26px;
    margin-bottom: 4px;
  }

  .file-extension {
    font-size: 10px;
    font-weight: 600;
    color: white;
    position: absolute;
    bottom: -6px;
    padding: 1px 6px;
    border-radius: 3px;
  }

  &.pdf-icon {
    background: #ffe6e6;
    i { color: #ff0000; }
    .file-extension { background: #ff0000; }
  }
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.document-name {
  color: #000;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.document-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
}

.document-type, .document-date {
  color: #666;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  i {
    color: #1292ee;
    font-size: 11px;
  }
}

.card-footer-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding-top: 10px;
}

.view-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: linear-gradient(135deg, #1292ee 0%, #0d7bd4 100%);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: linear-gradient(135deg, #0d7bd4 0%, #0a68b9 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(18, 146, 238, 0.3);
    color: white;
  }
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f0fcf0;
  border: 1px solid #e8f8e8;
  color: #144c39;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #144c39;
    color: white;
    transform: translateY(-2px);
  }
}

/* État aucun document */
.no-documents {
  padding: 60px 20px;
  text-align: center;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #e8f8e8;
  margin-top: 20px;

  .no-doc-icon {
    font-size: 48px;
    color: #cbd5e1;
    margin-bottom: 15px;
  }

  .no-doc-text {
    color: #666;
    font-size: 16px;
    margin-bottom: 20px;
  }
}

.btn-reset-filters, .btn-primary-custom {
  background: #1292ee;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0d7bd4;
    transform: translateY(-2px);
  }
}

/* Pagination */
.pagination-custom {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 30px 0 0 0;
  gap: 6px;

  .page-item-custom {
    &.active .page-link-custom {
      background: #1292ee;
      border-color: #1292ee;
      color: white;
    }

    &.disabled .page-link-custom {
      color: #ccc;
      pointer-events: none;
      background: #f8f9fa;
    }
  }

  .page-link-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    height: 38px;
    padding: 0 12px;
    border: 1px solid #e8f8e8;
    border-radius: 6px;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
    background: white;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background: #f8f9fa;
      border-color: #1292ee;
      color: #1292ee;
    }
  }
}

/* Modale de visualisation */
.media-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 16px;
}

.media-modal-box {
  background: #fff;
  border-radius: 12px;
  width: 100%;
  max-width: 1100px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.media-modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #e2e8f0;
  gap: 16px;
  background: #f8fafc;
}

.media-modal-btns {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.btn-open-tab, .btn-download-tab {
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.btn-open-tab {
  color: #1292ee;
  background: #e6f4ff;
  &:hover {
    background: #bae0ff;
    color: #0d7bd4;
  }
}

.btn-download-tab {
  color: #144c39;
  background: #e8f8e8;
  &:hover {
    background: #d1f0d1;
    color: #0a3024;
  }
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: #64748b;
  padding: 0 4px;
  &:hover {
    color: #0f172a;
  }
}

.media-modal-body {
  flex: 1;
  width: 100%;
  height: 100%;
  background: #525659;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}

/* Responsive */
@media (max-width: 991.98px) {
  .search-container {
    max-width: 100%;
    margin-left: 0;
  }

  .results-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .sort-container {
    width: 100%;
    justify-content: space-between;
  }

  .sort-select {
    flex: 1;
  }

  .media-modal-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .media-modal-btns {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
