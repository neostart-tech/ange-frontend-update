<template>
  <div class="section-padding">
    <div class="container-fluid px-0">
      <div v-if="isLoading" class="row">
        <div class="text-center">
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <div v-if="!isLoading" class="container">
        <div class="row">
          <!-- Zone de filtre -->
          <div class="col-lg-3 col-12 mb-5">
            <div class="mobile-filter-dropdown d-lg-none mb-3">
              <button 
                class="dropdown-toggle" 
                @click="toggleMobileDropdown"
                type="button"
              >
                <span>Filtres</span>
                <i class="fa" :class="mobileDropdownOpen ? '' : ''"></i>
              </button>
              
              <div class="dropdown-content" :class="{ show: mobileDropdownOpen }">
                <!-- Filtres par date pour mobile -->
                <div class="filter-date-mobile mb-3">
                  <div class="filter-section-mobile">
                    <h5 class="filter-title-mobile">Filtrer par date</h5>
                    
                    <div class="mb-2">
                      <label class="filter-label-mobile">Année</label>
                      <select 
                        class="form-select filter-select-mobile" 
                        v-model="selectedYear"
                        @change="handleDateFilter"
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
                        @change="handleDateFilter"
                        :disabled="selectedYear === 'all'"
                      >
                        <option value="all">Tous les mois</option>
                        <option v-for="month in availableMonths" :key="month.value" :value="month.value">
                          {{ month.label }}
                        </option>
                      </select>
                    </div>
                    
                    <button class="btn-reset-date-mobile" @click="resetDateFilters" type="button">
                      <i class="fa fa-refresh"></i>
                      Réinitialiser date
                    </button>
                  </div>
                </div>
                
                <!-- Types de documents pour mobile -->
                <div class="filter-list-mobile">
                  <div class="filter-section-mobile">
                    <h5 class="filter-title-mobile">Types de documents</h5>
                    
                    <div class="filter-options-scroll-mobile">
                      <div
                        class="filter-item-mobile"
                        :class="{ active: selectedCat === 'all' }"
                        @click="selectFilter('all')"
                      >
                        <span class="filter-text">Tout voir</span>
                        <span class="filter-count">{{ totalDocuments }}</span>
                      </div>

                      <div
                        class="filter-item-mobile"
                        v-for="(typeDocument, index) in typeDocuments"
                        :key="index"
                        :class="{ active: selectedCat === typeDocument.type }"
                        @click="selectFilter(typeDocument.type)"
                      >
                        <span class="filter-text">{{ typeDocument.type }}</span>
                        <span class="filter-count">{{ typeDocument.documents.length }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar normal pour desktop -->
            <div class="filter-sidebar d-none d-lg-block">
              <!-- Filtres par date -->
              <div class="filter-section mb-4">
                <h5 class="filter-section-title">Filtrer par date</h5>
                
                <div class="mb-3">
                  <label class="filter-label">Année</label>
                  <select 
                    class="form-select filter-select" 
                    v-model="selectedYear"
                    @change="handleDateFilter"
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
                    @change="handleDateFilter"
                    :disabled="selectedYear === 'all'"
                  >
                    <option value="all">Tous les mois</option>
                    <option v-for="month in availableMonths" :key="month.value" :value="month.value">
                      {{ month.label }}
                    </option>
                  </select>
                </div>
                
                <button class="btn-reset-date" @click="resetDateFilters" type="button">
                  <i class="fa fa-refresh"></i>
                  Réinitialiser les filtres
                </button>
              </div>
              
              <!-- Types de documents -->
              <div class="filter-section">
                <h5 class="filter-section-title">Types de documents</h5>
                
                <div class="filter-list">
                  <div
                    class="filter-item"
                    :class="{ active: selectedCat === 'all' }"
                    @click="filterHandler('all')"
                  >
                    <span class="filter-text">Tout voir</span>
                    <span class="filter-count">{{ totalDocuments }}</span>
                  </div>

                  <div
                    class="filter-item"
                    v-for="(typeDocument, index) in typeDocuments"
                    :key="index"
                    :class="{ active: selectedCat === typeDocument.type }"
                    @click="filterHandler(typeDocument.type)"
                  >
                    <span class="filter-text">{{ typeDocument.type }}</span>
                    <span class="filter-count">{{ typeDocument.documents.length }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Zone des documents -->
          <div class="col-lg-9 mb-3">
            <div class="documents-header">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                  <h3 class="documents-title">Documents</h3>
                  <p class="documents-subtitle" v-if="hasActiveFilters">
                    <i class="fa fa-filter"></i>
                    Filtres actifs : 
                    <span class="filter-badge" v-if="selectedCat !== 'all'">{{ selectedCat }}</span>
                    <span class="filter-badge" v-if="selectedYear !== 'all'">{{ selectedYear }}</span>
                    <span class="filter-badge" v-if="selectedMonth !== 'all'">{{ getMonthLabel(selectedMonth) }}</span>
                    <span class="filter-badge" v-if="search">{{ search }}</span>
                    <button class="btn-clear-all" @click="clearAllFilters" type="button">
                      <i class="fa fa-times"></i>
                      Tout effacer
                    </button>
                  </p>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="search-container">
                    <input
                      type="text"
                      v-model="search"
                      placeholder="Rechercher un document..."
                      class="search-input"
                      @input="handleSearch"
                    />
                    <!-- <i class="fa fa-search search-icon"></i> -->
                    <button 
                      class="btn-clear-search" 
                      @click="clearSearch"
                      v-if="search"
                      type="button"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="filteredDocuments.length === 0" class="no-documents">
              <div class="text-center">
                <i class="fa fa-file-alt no-doc-icon"></i>
                <p class="no-doc-text">Aucun texte correspondant...</p>
                <button class="btn-reset-filters" @click="clearAllFilters" type="button">
                  <i class="fa fa-refresh"></i>
                  Réinitialiser tous les filtres
                </button>
              </div>
            </div>

            <div v-else class="documents-grid">
              <!-- En-tête des résultats -->
              <div class="results-info mb-4">
                <span class="results-count">
                  {{ filteredDocuments.length }} document<span v-if="filteredDocuments.length > 1">s</span> trouvé<span v-if="filteredDocuments.length > 1">s</span>
                </span>
                <!-- <div class="sort-container">
                  <label class="sort-label">Trier par :</label>
                  <select class="form-select sort-select" v-model="sortBy" @change="handleSortChange">
                    <option value="date_desc">Date (plus récent)</option>
                    <option value="date_asc">Date (plus ancien)</option>
                    <option value="name_asc">Nom (A-Z)</option>
                    <option value="name_desc">Nom (Z-A)</option>
                  </select>
                </div> -->
              </div>
              
              <div class="row">
                <div
                  class="col-xl-4 col-lg-6 col-md-6 mb-4"
                  v-for="(doc, index) in paginatedDocuments"
                  :key="index"
                >
                  <div class="document-card">
                    <div class="card-icon" :class="getIconClass(doc.file_link)">
                      <i :class="getFileIcon(doc.file_link)"></i>
                      <span class="file-extension">{{ getFileExtension(doc.file_link) }}</span>
                    </div>
                    <div class="card-content">
                      <h6 class="document-name">{{ doc.doc_name }}</h6>
                      <div class="document-meta">
                        <span class="document-type" v-if="getDocumentType(doc)">
                          <i class="fa fa-folder"></i>
                          {{ getDocumentType(doc) }}
                        </span>
                        <span class="document-date" v-if="doc.date_publication">
                          <i class="fa fa-calendar"></i>
                          {{ formatDate(doc.date_publication) }}
                        </span>
                      </div>
                      <div class="card-footer">
                        <button
                          class="view-link"
                          @click="openDocument(doc.file_link)"
                          type="button"
                        >
                          <i class="fa fa-eye"></i>
                          Visualiser
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="row mt-50" v-if="paginatedDocuments.length > 0">
          <div class="col">
            <ul class="pagination center">
              <!-- Bouton précédent -->
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a href="#" class="page-link" @click.prevent="prevPage">
                  <i class="fa fa-angle-left"></i>
                </a>
              </li>
              
              <!-- Bouton précédent groupe -->
              <li class="page-item" :class="{ disabled: currentGroup === 1 }">
                <a href="#" class="page-link" @click.prevent="prevGroup">
                  <i class="fa fa-angle-double-left"></i>
                </a>
              </li>
              
              <!-- Pages du groupe actuel -->
              <li
                class="page-item"
                v-for="pageNumber in visiblePages"
                :key="pageNumber"
                :class="{ active: pageNumber === currentPage }"
              >
                <a
                  href="#"
                  class="page-link"
                  @click.prevent="goToPage(pageNumber)"
                  >{{ pageNumber }}</a
                >
              </li>
              
              <!-- Bouton suivant groupe -->
              <li class="page-item" :class="{ disabled: currentGroup === totalGroups }">
                <a href="#" class="page-link" @click.prevent="nextGroup">
                  <i class="fa fa-angle-double-right"></i>
                </a>
              </li>
              
              <!-- Bouton suivant -->
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <a href="#" class="page-link" @click.prevent="nextPage">
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      categories: [],
      selectedCat: "all",
      isLoading: false,
      typeDocuments: [],
      documents: [],
      totalDocuments: 0,
      file_url_back: null,
      search: "",
      itemsPerPage: 9,
      currentPage: 1,
      mobileDropdownOpen: false,
      pagesPerGroup: 5,
      
      // Filtres par date et tri
      selectedYear: "all",
      selectedMonth: "all",
      sortBy: "date_desc",
      
      // Données pour les filtres
      availableYears: [],
      availableMonths: [
        { value: "01", label: "Janvier" },
        { value: "02", label: "Février" },
        { value: "03", label: "Mars" },
        { value: "04", label: "Avril" },
        { value: "05", label: "Mai" },
        { value: "06", label: "Juin" },
        { value: "07", label: "Juillet" },
        { value: "08", label: "Août" },
        { value: "09", label: "Septembre" },
        { value: "10", label: "Octobre" },
        { value: "11", label: "Novembre" },
        { value: "12", label: "Décembre" }
      ],
      
      // Déclencheur pour forcer le recalcul
      filterUpdateKey: 0
    };
  },

  computed: {
    hasActiveFilters() {
      return this.selectedCat !== 'all' || 
             this.selectedYear !== 'all' || 
             this.selectedMonth !== 'all' || 
             this.search !== '';
    },
    
    allDocuments() {
      let allDocs = [];
      if (this.typeDocuments && this.typeDocuments.length > 0) {
        this.typeDocuments.forEach((typeDocument) => {
          if (typeDocument.documents && typeDocument.documents.length > 0) {
            typeDocument.documents.forEach((doc) => {
              // Créer un objet Date normalisé pour le tri
              let normalizedDate = null;
              if (doc.date_publication) {
                try {
                  const date = new Date(doc.date_publication);
                  if (!isNaN(date.getTime())) {
                    normalizedDate = date;
                  } else {
                    // Essayer de parser différents formats
                    const match = doc.date_publication.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
                    if (match) {
                      const year = parseInt(match[1]);
                      const month = parseInt(match[2]) - 1;
                      const day = parseInt(match[3]);
                      normalizedDate = new Date(year, month, day);
                    }
                  }
                } catch (e) {
                  console.error("Erreur parsing date:", e);
                }
              }
              
              allDocs.push({
                ...doc,
                type: typeDocument.type,
                // Propriétés normalisées pour le tri
                normalizedName: doc.doc_name ? doc.doc_name.toLowerCase().trim() : '',
                normalizedDate: normalizedDate || new Date(0) // Date très ancienne si invalide
              });
            });
          }
        });
      }
      return allDocs;
    },

    filteredDocuments() {
      // Utiliser filterUpdateKey pour forcer le recalcul
      const updateKey = this.filterUpdateKey;
      
      let filtered = this.allDocuments;
      
      // Filtre par type de document
      if (this.selectedCat !== "all") {
        filtered = filtered.filter(doc => doc.type === this.selectedCat);
      }
      
      // Filtre par recherche
      if (this.search && this.search.trim() !== '') {
        const searchTerm = this.search.toLowerCase().trim();
        filtered = filtered.filter(doc => {
          const docName = doc.doc_name ? doc.doc_name.toLowerCase() : '';
          return docName.includes(searchTerm);
        });
      }
      
      // Filtre par année
      if (this.selectedYear !== "all") {
        filtered = filtered.filter(doc => {
          if (!doc.date_publication) return false;
          const year = this.extractYearFromDate(doc.date_publication);
          return year === this.selectedYear;
        });
      }
      
      // Filtre par mois
      if (this.selectedMonth !== "all" && this.selectedYear !== "all") {
        filtered = filtered.filter(doc => {
          if (!doc.date_publication) return false;
          const month = this.extractMonthFromDate(doc.date_publication);
          return month === this.selectedMonth;
        });
      }
      
      // Tri des documents
      return this.sortDocumentsList(filtered);
    },

    totalPages() {
      return Math.max(1, Math.ceil(this.filteredDocuments.length / this.itemsPerPage));
    },

    paginatedDocuments() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredDocuments.slice(startIndex, endIndex);
    },

    currentGroup() {
      return Math.ceil(this.currentPage / this.pagesPerGroup);
    },
    
    totalGroups() {
      return Math.ceil(this.totalPages / this.pagesPerGroup);
    },
    
    visiblePages() {
      const startPage = (this.currentGroup - 1) * this.pagesPerGroup + 1;
      const endPage = Math.min(startPage + this.pagesPerGroup - 1, this.totalPages);
      
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },

  methods: {
    // Méthode pour ouvrir les documents
    openDocument(fileLink) {
      if (fileLink && this.file_url_back) {
        const url = `${this.file_url_back}/${fileLink}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        console.error('URL du document non disponible');
      }
    },
    
    getFileIcon(fileLink) {
      if (!fileLink) return 'fa fa-file';
      const extension = this.getFileExtension(fileLink).toLowerCase();
      switch (extension) {
        case 'pdf':
          return 'fa fa-file-pdf';
        case 'doc':
        case 'docx':
          return 'fa fa-file-word';
        case 'xls':
        case 'xlsx':
          return 'fa fa-file-excel';
        case 'ppt':
        case 'pptx':
          return 'fa fa-file-powerpoint';
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
        case 'bmp':
        case 'webp':
          return 'fa fa-file-image';
        case 'txt':
          return 'fa fa-file-alt';
        case 'zip':
        case 'rar':
        case '7z':
        case 'tar':
        case 'gz':
          return 'fa fa-file-archive';
        default:
          return 'fa fa-file';
      }
    },

    getIconClass(fileLink) {
      if (!fileLink) return 'file-icon';
      const extension = this.getFileExtension(fileLink).toLowerCase();
      switch (extension) {
        case 'pdf':
          return 'pdf-icon';
        case 'doc':
        case 'docx':
          return 'word-icon';
        case 'xls':
        case 'xlsx':
          return 'excel-icon';
        case 'ppt':
        case 'pptx':
          return 'powerpoint-icon';
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
        case 'bmp':
        case 'webp':
          return 'image-icon';
        case 'txt':
        case 'rtf':
        case 'md':
          return 'text-icon';
        case 'zip':
        case 'rar':
        case '7z':
        case 'tar':
        case 'gz':
          return 'archive-icon';
        default:
          return 'file-icon';
      }
    },

    getFileExtension(filename) {
      return filename ? filename.split('.').pop() : '';
    },
    
    getDocumentType(doc) {
      return doc.type;
    },
    
    extractYearFromDate(dateString) {
      if (!dateString) return null;
      
      // Essayez différents formats de date
      const patterns = [
        // Format YYYY-MM-DD
        /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/,
        // Format DD/MM/YYYY
        /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/,
        // Format YYYY seulement
        /^(\d{4})$/,
        // Format avec texte
        /(\d{4})/,
      ];
      
      for (const pattern of patterns) {
        const match = dateString.match(pattern);
        if (match) {
          let year = null;
          
          if (pattern === patterns[0]) {
            // YYYY-MM-DD
            year = match[1];
          } else if (pattern === patterns[1]) {
            // DD/MM/YYYY
            year = match[3];
          } else if (pattern === patterns[2]) {
            // YYYY seulement
            year = match[1];
          } else if (pattern === patterns[3]) {
            // Extraire 4 chiffres consécutifs
            year = match[1];
          }
          
          if (year && year.length === 4 && !isNaN(year)) {
            return year;
          }
        }
      }
      
      // Si aucune pattern ne marche, essayez de parser avec Date
      try {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          return date.getFullYear().toString();
        }
      } catch (e) {
        console.error(`Erreur parsing date: ${dateString}`, e);
      }
      
      return null;
    },
    
    extractMonthFromDate(dateString) {
      if (!dateString) return null;
      
      // Essayez différents formats de date
      const patterns = [
        // Format YYYY-MM-DD
        /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/,
        // Format DD/MM/YYYY
        /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/,
      ];
      
      for (const pattern of patterns) {
        const match = dateString.match(pattern);
        if (match) {
          let month = null;
          
          if (pattern === patterns[0]) {
            // YYYY-MM-DD
            month = match[2];
          } else if (pattern === patterns[1]) {
            // DD/MM/YYYY
            month = match[2];
          }
          
          if (month) {
            // Normaliser le mois à 2 chiffres
            const monthNum = parseInt(month);
            if (monthNum >= 1 && monthNum <= 12) {
              return monthNum.toString().padStart(2, '0');
            }
          }
        }
      }
      
      // Si aucune pattern ne marche, essayez de parser avec Date
      try {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          return (date.getMonth() + 1).toString().padStart(2, '0');
        }
      } catch (e) {
        console.error(`Erreur parsing date: ${dateString}`, e);
      }
      
      return null;
    },
    
    formatDate(dateString) {
      if (!dateString) return 'Date non disponible';
      try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
          return dateString;
        }
        return date.toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
      } catch (error) {
        return dateString;
      }
    },
    
    getMonthLabel(monthValue) {
      const month = this.availableMonths.find(m => m.value === monthValue);
      return month ? month.label : monthValue;
    },
    
    extractAvailableYears() {
      const years = new Set();
      this.allDocuments.forEach(doc => {
        if (doc.date_publication) {
          const year = this.extractYearFromDate(doc.date_publication);
          if (year) {
            years.add(year);
          }
        }
      });
      this.availableYears = Array.from(years).sort((a, b) => b - a);
    },
    
    async fetchDataDocument() {
      try {
        this.isLoading = true;
        const response = await this.$axios.get(`/texte-legislatifs`);
        const data = await response.data.data;
        
        if (data) {
          this.typeDocuments = data;
          this.file_url_back = config.app_back_url_img;
          
          this.extractAvailableYears();
          this.allDocumentNumber();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        this.typeDocuments = [];
      } finally {
        this.isLoading = false;
      }
    },

    filterHandler(selection) {
      this.selectedCat = selection;
      this.currentPage = 1;
      this.triggerFilterUpdate();
    },
    
    handleDateFilter() {
      this.currentPage = 1;
      this.triggerFilterUpdate();
    },
    
    handleSearch() {
      this.currentPage = 1;
      this.triggerFilterUpdate();
    },

    handleSortChange() {
      this.currentPage = 1;
      this.triggerFilterUpdate();
    },

    selectFilter(selection) {
      this.filterHandler(selection);
      this.mobileDropdownOpen = false;
    },

    toggleMobileDropdown() {
      this.mobileDropdownOpen = !this.mobileDropdownOpen;
    },
    
    resetDateFilters() {
      this.selectedYear = 'all';
      this.selectedMonth = 'all';
      this.currentPage = 1;
      this.triggerFilterUpdate();
    },
    
    clearSearch() {
      this.search = '';
      this.currentPage = 1;
      this.triggerFilterUpdate();
    },
    
    clearAllFilters() {
      this.selectedCat = 'all';
      this.selectedYear = 'all';
      this.selectedMonth = 'all';
      this.search = '';
      this.sortBy = 'date_desc';
      this.currentPage = 1;
      this.triggerFilterUpdate();
    },
    
    // Méthode pour déclencher le recalcul des computed properties
    triggerFilterUpdate() {
      this.filterUpdateKey++;
    },
    
    sortDocumentsList(documents) {
      if (!documents || documents.length === 0) return [];
      
      const sorted = [...documents];
      
      switch (this.sortBy) {
        case 'date_desc':
          return sorted.sort((a, b) => {
            const dateA = a.normalizedDate;
            const dateB = b.normalizedDate;
            
            if (dateA && dateB) {
              return dateB.getTime() - dateA.getTime();
            }
            
            if (dateA && !dateB) return -1;
            if (!dateA && dateB) return 1;
            
            return 0;
          });
          
        case 'date_asc':
          return sorted.sort((a, b) => {
            const dateA = a.normalizedDate;
            const dateB = b.normalizedDate;
            
            if (dateA && dateB) {
              return dateA.getTime() - dateB.getTime();
            }
            
            if (dateA && !dateB) return -1;
            if (!dateA && dateB) return 1;
            
            return 0;
          });
          
        case 'name_asc':
          return sorted.sort((a, b) => {
            const nameA = a.normalizedName || '';
            const nameB = b.normalizedName || '';
            return nameA.localeCompare(nameB, 'fr', { sensitivity: 'base' });
          });
          
        case 'name_desc':
          return sorted.sort((a, b) => {
            const nameA = a.normalizedName || '';
            const nameB = b.normalizedName || '';
            return nameB.localeCompare(nameA, 'fr', { sensitivity: 'base' });
          });
          
        default:
          return sorted;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },

    prevGroup() {
      if (this.currentGroup > 1) {
        const newPage = (this.currentGroup - 2) * this.pagesPerGroup + 1;
        this.currentPage = newPage;
      }
    },

    nextGroup() {
      if (this.currentGroup < this.totalGroups) {
        const newPage = this.currentGroup * this.pagesPerGroup + 1;
        this.currentPage = newPage;
      }
    },

    allDocumentNumber() {
      let total = 0;
      if (this.typeDocuments && this.typeDocuments.length > 0) {
        this.typeDocuments.forEach((typeDocument) => {
          if (typeDocument.documents && typeDocument.documents.length > 0) {
            total += typeDocument.documents.length;
          }
        });
      }
      this.totalDocuments = total;
    },
  },

  mounted() {
    this.fetchDataDocument();
  },

  watch: {
    typeDocuments: {
      handler() {
        this.allDocumentNumber();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.section-padding {
  padding: 60px 0;
}

.container-fluid {
  max-width: 1400px;
  margin: 0 auto;
}

/* Zone de filtre */
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
    color: #666;
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
  
  &:active {
    transform: translateY(0);
  }
}

.filter-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.filter-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border: none;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #dfe1df;
  position: relative;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: transparent;
    transform: translateX(5px);
    
    .filter-text {
      color: #1292ee;
    }
  }
  
  &.active {
    background: transparent;
    
    .filter-text {
      color: #1292ee;
      font-weight: 600;
    }
    
    .filter-count {
      background: #1292ee;
      color: white;
    }
  }
}

.filter-text {
  color: #000;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s ease;
}

.filter-count {
  background: #e8f8e8;
  color: #000;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

/* Dropdown pour mobile */
.mobile-filter-dropdown {
  position: relative;
  width: 100%;
}

.dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  background: #f0fcf0;
  border: 2px solid #e8f8e8;
  border-radius: 8px;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #1292ee;
  }
  
  i {
    transition: transform 0.3s ease;
    font-size: 14px;
  }
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e8f8e8;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  
  &.show {
    max-height: 500px;
    overflow-y: auto;
  }
}

.filter-section-mobile {
  padding: 15px 20px;
  
  &:not(:last-child) {
    border-bottom: 1px solid #e8f8e8;
  }
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
  cursor: pointer;
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
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  
  &:hover {
    background: #dc3545;
    color: white;
  }
}

.filter-options-scroll-mobile {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #1292ee;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #0d7bd4;
  }
}

.filter-list-mobile {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.filter-item-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  
  &:hover {
    background: #f8f9fa;
    
    .filter-text {
      color: #1292ee;
    }
  }
  
  &.active {
    background: #f0fcf0;
    
    .filter-text {
      color: #1292ee;
      font-weight: 600;
    }
    
    .filter-count {
      background: #1292ee;
      color: white;
    }
  }
}

/* En-tête des documents */
.documents-header {
  margin-bottom: 30px;
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
    margin-right: 5px;
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
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: 8px;
  
  &:hover {
    background: #dc3545;
    color: white;
  }
  
  &:active {
    transform: scale(0.95);
  }
}

.search-container {
  position: relative;
  max-width: 300px;
  margin-left: auto;
}

.search-input {
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: 2px solid #e8f8e8;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: white;
  color: #000;
  
  &:focus {
    outline: none;
    border-color: #1292ee;
    box-shadow: 0 0 0 3px rgba(18, 146, 238, 0.1);
  }
  
  &::placeholder {
    color: #666;
  }
}

.search-icon {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
}

.btn-clear-search {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    color: #dc3545;
  }
}

/* Informations des résultats */
.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
  padding: 8px 15px;
  font-size: 14px;
  color: #000;
  min-width: 180px;
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
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f8e8;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  position: relative;
  overflow: visible;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #1292ee;
  }
}

.card-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  i {
    font-size: 28px;
    margin-bottom: 5px;
  }
  
  .file-extension {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: white;
    position: absolute;
    bottom: -8px;
    padding: 2px 6px;
    border-radius: 3px;
  }
  
  /* Couleurs par type de fichier */
  &.pdf-icon {
    background: #ffe6e6;
    i { color: #ff0000; }
    .file-extension { background: #ff0000; }
  }
  
  &.word-icon {
    background: #e6f0ff;
    i { color: #2b579a; }
    .file-extension { background: #2b579a; }
  }
  
  &.excel-icon {
    background: #e6f4ea;
    i { color: #217346; }
    .file-extension { background: #217346; }
  }
  
  &.powerpoint-icon {
    background: #fff2e6;
    i { color: #d24726; }
    .file-extension { background: #d24726; }
  }
  
  &.image-icon {
    background: #f0e6ff;
    i { color: #8a2be2; }
    .file-extension { background: #8a2be2; }
  }
  
  &.text-icon {
    background: #e6e6e6;
    i { color: #555; }
    .file-extension { background: #555; }
  }
  
  &.archive-icon {
    background: #ffe6cc;
    i { color: #f60; }
    .file-extension { background: #f60; }
  }
  
  &.file-icon {
    background: #f0fcf0;
    i { color: #1292ee; }
    .file-extension { background: #1292ee; }
  }
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 2;
}

.document-name {
  color: #000;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.document-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
}

.document-type, .document-date {
  color: #666;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  i {
    color: #1292ee;
    font-size: 10px;
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  position: relative;
  z-index: 10;
}

/* BOUTON VISUALISER - CORRIGÉ */
.view-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #1292ee 0%, #0d7bd4 100%);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 100;
  min-height: 40px;
  
  &:hover {
    background: linear-gradient(135deg, #0d7bd4 0%, #0a68b9 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(18, 146, 238, 0.3);
    color: white;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  i {
    font-size: 14px;
    transition: transform 0.3s ease;
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
    color: #e2f5e2;
    margin-bottom: 15px;
  }
  
  .no-doc-text {
    color: #666;
    font-size: 16px;
    margin-bottom: 20px;
  }
}

.btn-reset-filters {
  background: #1292ee;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 10;
  
  &:hover {
    background: #0d7bd4;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(18, 146, 238, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 40px 0 0 0;
  
  .page-item {
    margin: 0 4px;
    
    &.active .page-link {
      background: #1292ee;
      border-color: #1292ee;
      color: white;
    }
    
    &.disabled .page-link {
      color: #ccc;
      pointer-events: none;
      background: #f8f9fa;
    }
  }
  
  .page-link {
    display: block;
    padding: 8px 16px;
    border: 1px solid #e8f8e8;
    border-radius: 6px;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
    background: white;
    cursor: pointer;
    position: relative;
    z-index: 5;
    
    &:hover {
      background: #f8f9fa;
      border-color: #1292ee;
      color: #1292ee;
    }
  }
}

/* Responsive */
@media (max-width: 1199.98px) {
  .document-card {
    padding: 20px;
  }
}

@media (max-width: 991.98px) {
  .filter-sidebar {
    margin-bottom: 30px;
  }
  
  .search-container {
    max-width: 100%;
    margin-left: 0;
    margin-top: 15px;
  }
  
  .documents-title {
    margin-bottom: 15px;
  }
  
  .results-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .sort-container {
    width: 100%;
  }
  
  .sort-select {
    width: 100%;
  }
}

@media (max-width: 767.98px) {
  .section-padding {
    padding: 30px 0;
  }
  
  .documents-grid .row {
    justify-content: center !important;
  }
  
  .col-xl-4, .col-lg-6, .col-md-6 {
    display: flex;
    justify-content: center;
  }
  
  .document-card {
    width: 100%;
    max-width: 350px;
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .filter-sidebar {
    padding: 20px;
  }
  
  .card-icon {
    align-self: center;
    width: 70px;
    height: 70px;
    
    i {
      font-size: 32px;
    }
  }
  
  .document-meta {
    align-items: center;
  }
  
  .card-footer {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  
  .view-link {
    width: 100%;
    justify-content: center;
  }
  
  .documents-header .row {
    flex-direction: column;
  }
  
  .dropdown-content.show {
    max-height: 400px;
  }
  
  .filter-options-scroll-mobile {
    max-height: 250px;
  }
  
  .documents-subtitle {
    font-size: 13px;
    
    .filter-badge, .btn-clear-all {
      font-size: 11px;
      padding: 3px 8px;
    }
  }
  
  .pagination {
    flex-wrap: wrap;
    
    .page-link {
      padding: 6px 12px;
      font-size: 14px;
    }
  }
}

/* Corrections spécifiques pour le clic */
.filter-item,
.filter-item-mobile,
.view-link,
.page-link,
.btn-reset-date,
.btn-reset-date-mobile,
.btn-clear-all,
.btn-clear-search,
.btn-reset-filters,
.dropdown-toggle,
.sort-select,
.filter-select {
  cursor: pointer;
  
  &:active {
    transform: scale(0.98);
  }
}

/* Empêcher la sélection de texte */
.filter-item,
.filter-item-mobile,
.btn-clear-all,
.btn-reset-filters {
  user-select: none;
  -webkit-user-select: none;
}

/* Assurer que les boutons sont cliquables */
.btn-clear-all,
.btn-reset-filters {
  position: relative;
  z-index: 10;
  
  &:hover, &:active, &:focus {
    outline: none;
  }
}

/* Correction pour le message aucun document */
.no-documents {
  .btn-reset-filters {
    margin-top: 10px;
    
    &:hover {
      text-decoration: none;
    }
  }
}

/* Correction pour les cartes */
.document-card {
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-footer {
  margin-top: auto;
}

/* S'assurer que tous les liens sont cliquables */
a {
  cursor: pointer;
}
</style>