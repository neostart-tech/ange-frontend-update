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
          <!-- Zone de filtre refaite -->
          <div class="col-lg-3 col-12 mb-5">
            <div class="mobile-filter-dropdown d-lg-none mb-3">
              <button 
                class="dropdown-toggle" 
                @click="toggleMobileDropdown"
              >
                <span>Types de documents</span>
              </button>
              
              <div class="dropdown-content" :class="{ show: mobileDropdownOpen }">
                <div class="filter-list-mobile">
                  <button
                    class="filter-item-mobile"
                    :class="{ active: selectedCat === 'all' }"
                    @click="selectFilter('all')"
                  >
                    <span class="filter-text">Tout voir</span>
                    <span class="filter-count">{{ totalDocuements }}</span>
                  </button>

                  <button
                    class="filter-item-mobile"
                    v-for="(typeDocument, index) in typeDocuments"
                    :key="index"
                    :class="{ active: selectedCat === typeDocument.type }"
                    @click="selectFilter(typeDocument.type)"
                  >
                    <span class="filter-text">{{ typeDocument.type }}</span>
                    <span class="filter-count">{{ typeDocument.documents.length }}</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Sidebar normal pour desktop -->
            <div class="filter-sidebar d-none d-lg-block">
              <h3 class="filter-main-title">Types de documents</h3>
              
              <div class="filter-list">
                <button
                  class="filter-item"
                  :class="{ active: selectedCat === 'all' }"
                  @click="filterHandler('all')"
                >
                  <span class="filter-text">Tout voir</span>
                  <span class="filter-count">{{ totalDocuements }}</span>
                </button>

                <button
                  class="filter-item"
                  v-for="(typeDocument, index) in typeDocuments"
                  :key="index"
                  :class="{ active: selectedCat === typeDocument.type }"
                  @click="filterHandler(typeDocument.type)"
                >
                  <span class="filter-text">{{ typeDocument.type }}</span>
                  <span class="filter-count">{{ typeDocument.documents.length }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Zone des documents refaite -->
          <div class="col-lg-9 mb-3">
            <div class="documents-header">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                  <h3 class="documents-title">Documents</h3>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="search-container">
                    <input
                      type="text"
                      v-model="search"
                      placeholder="Rechercher un document..."
                      class="search-input"
                    />
                    <i class="fa fa-search search-icon"></i>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="paginatedDocuments.length === 0" class="no-documents">
              <div class="text-center">
                <i class="fa fa-file-alt no-doc-icon"></i>
                <p class="no-doc-text">Aucun texte correspondant...</p>
              </div>
            </div>

            <div v-else class="documents-grid">
              <div class="row">
                <div
                  class="col-xl-4 col-lg-6 col-md-6 mb-4"
                  v-for="(doc, index) in paginatedDocuments"
                  :key="index"
                >
                  <div class="document-card">
                    <div class="card-icon">
                      <i class="fa fa-file-pdf"></i>
                    </div>
                    <div class="card-content">
                      <h6 class="document-name">{{ doc.doc_name }}</h6>
                      <a
                        :href="`${file_url_back}/${doc.file_link}`"
                        class="download-link"
                        target="_blank"
                        download
                      >
                        Voir document
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination groupée par 5 -->
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
      totalDocuements: 0,
      file_url_back: null,
      search: "",
      itemsPerPage: 9,
      currentPage: 1,
      mobileDropdownOpen: false,
      pagesPerGroup: 5, // Groupes de 5 pages
    };
  },

  computed: {
    filteredDocuments() {
      this.documents = [];
      let ma_var = [];
      
      if (this.typeDocuments.length > 0) {
        if (this.selectedCat === "all") {
          this.typeDocuments.forEach((typeDocument) => {
            typeDocument.documents.forEach((doc) => {
              if (this.matchesSearch(doc)) {
                ma_var.push(doc);
              }
            });
          });
        } else {
          this.typeDocuments.forEach((typeDocument) => {
            if (typeDocument.type === this.selectedCat) {
              typeDocument.documents.forEach((doc) => {
                if (this.matchesSearch(doc)) {
                  ma_var.push(doc);
                }
              });
            }
          });
        }
        this.documents = ma_var;
        return this.documents;
      }
      return [];
    },

    totalPages() {
      return Math.ceil(this.filteredDocuments.length / this.itemsPerPage);
    },

    paginatedDocuments() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredDocuments.slice(startIndex, endIndex);
    },

    // Calcul du groupe actuel
    currentGroup() {
      return Math.ceil(this.currentPage / this.pagesPerGroup);
    },
    
    // Calcul du nombre total de groupes
    totalGroups() {
      return Math.ceil(this.totalPages / this.pagesPerGroup);
    },
    
    // Calcul des pages visibles dans le groupe actuel
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
    matchesSearch(doc) {
      if (!this.search) return true;
      return doc.doc_name.toLowerCase().includes(this.search.toLowerCase());
    },

    async fetchDataDocument() {
      try {
        this.isLoading = true;
        const response = await this.$axios.get(`/texte-legislatifs`);
        const data = await response.data.data;
        
        if (data) {
          this.typeDocuments = data;
          this.file_url_back = config.app_back_url_img;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        this.isLoading = false;
      }
    },

    filterHandler(selection) {
      this.selectedCat = selection;
      this.currentPage = 1;
    },

    selectFilter(selection) {
      this.filterHandler(selection);
      this.mobileDropdownOpen = false;
    },

    toggleMobileDropdown() {
      this.mobileDropdownOpen = !this.mobileDropdownOpen;
    },

    // Aller à la page précédente
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    // Aller à la page suivante
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    // Aller à une page spécifique
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },

    // Aller au groupe précédent
    prevGroup() {
      if (this.currentGroup > 1) {
        const newPage = (this.currentGroup - 2) * this.pagesPerGroup + 1;
        this.currentPage = newPage;
      }
    },

    // Aller au groupe suivant
    nextGroup() {
      if (this.currentGroup < this.totalGroups) {
        const newPage = this.currentGroup * this.pagesPerGroup + 1;
        this.currentPage = newPage;
      }
    },

    AllDocumentNumber() {
      let total = 0;
      this.typeDocuments.forEach((typeDocument) => {
        total += typeDocument.documents.length;
      });
      this.totalDocuements = total;
    },
  },

  mounted() {
    this.fetchDataDocument().then(() => {
      this.AllDocumentNumber();
    });
  },
};
</script>

<style lang="scss" scoped>
/* Zone de filtre */
.filter-sidebar {
  background: #f0fcf0;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: fit-content;
}

.filter-main-title {
  color: #000;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 2px solid #e8f8e8;
  padding-bottom: 15px;
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
    max-height: 400px;
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
  margin: 0;
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
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
}

/* Cartes de documents */
.documents-grid {
  margin-top: 20px;
}

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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

.card-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 24px;
    color: #000;
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
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.download-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 10px 20px;
  transition: all 0.3s ease;
  border: 1px solid #e8f8e8;
  border-radius: 6px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    color: #000;
    background: #f8f9fa;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    transform: translateY(-2px);
  }
}

/* État aucun document */
.no-documents {
  padding: 60px 20px;
  text-align: center;
  
  .no-doc-icon {
    font-size: 48px;
    color: #e2f5e2;
    margin-bottom: 15px;
  }
  
  .no-doc-text {
    color: #666;
    font-size: 16px;
    margin: 0;
  }
}

/* Pagination */
.pagination {
  .page-link {
    color: #000;
    border: 1px solid #e8f8e8;
    background: white;
    
    &:hover {
      background: #f8f9fa;
      border-color: #1292ee;
      color: #1292ee;
    }
  }
  
  .page-item.active .page-link {
    background: #1292ee;
    border-color: #1292ee;
    color: white;
  }
  
  .page-item.disabled .page-link {
    color: #666;
    background: #f8f9fa;
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
    margin-top: 15px;
  }
  
  .documents-title {
    margin-bottom: 15px;
  }
}

@media (max-width: 767.98px) {
  .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .filter-sidebar {
    padding: 20px;
  }
  
  .document-card {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .card-icon {
    align-self: center;
  }
  
  .documents-header .row {
    flex-direction: column;
  }
  
  .search-container {
    margin-left: 0;
  }
}
</style>