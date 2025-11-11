<template>
  <div class="section-padding">
    <div class="container-fluid px-0">
      <div class="row" v-if="isLoading">
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

      <div class="container" v-else>
        <div class="row">
          <!-- Zone de filtre avec nouveau design -->
          <div class="col-lg-3 col-12 mb-5">
            <div class="filter-sidebar">
              <div class="search-bar mb-4">
                <div class="form-group position-relative">
                  <input
                    type="text"
                    class="form-control search-input"
                    v-model="search"
                    placeholder="Rechercher un document..."
                  />
                  <i class="fa fa-search search-icon"></i>
                </div>
              </div>
              
              <div class="filter-section">
                <h5 class="filter-title">Types de documents</h5>
                <div class="filter-list">
                  <button
                    class="filter-item"
                    :class="{ active: selectedCat === 'all' }"
                    @click="filterHandler('all')"
                  >
                    <span class="filter-text">Tous les documents</span>
                    <span class="filter-count">{{ totalDocuements }}</span>
                  </button>
                  
                  <button
                    class="filter-item"
                    v-for="(typeDocument, index) in typeDocuments"
                    :key="index"
                    :class="{ active: selectedCat === typeDocument.titre }"
                    @click="filterHandler(typeDocument.titre)"
                  >
                    <span class="filter-text">{{ typeDocument.titre }}</span>
                    <span class="filter-count">{{ typeDocument.documentations.length }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Liste des documents avec nouveau design -->
          <div class="col-lg-9">
            <div v-if="paginatedDocuments.length === 0" class="row">
              <div class="text-center no-documents">
                <i class="fa fa-file-alt no-doc-icon"></i>
                <p class="no-doc-text">Aucune documentation correspondante...</p>
              </div>
            </div>

            <div v-else class="row">
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
                      <i class="fa fa-download"></i>
                      Voir document
                    </a>
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
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a href="#" class="page-link" @click.prevent="prevPage">
                  <i class="fa fa-angle-left"></i>
                </a>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
              >
                <a href="#" class="page-link" @click.prevent="goToPage(page)">
                  {{ page }}
                </a>
              </li>
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
      documentations: [],
      totalDocuements: 0,
      file_url_back: null,
      search: "",
      itemsPerPage: 9, // 3 cartes par ligne × 3 lignes
      currentPage: 1,
    };
  },
  
  computed: {
    filteredDocuments() {
      this.documentations = [];
      let ma_var = [];
      
      if (this.typeDocuments.length > 0) {
        if (this.selectedCat === "all") {
          this.typeDocuments.forEach((typeDocument) => {
            typeDocument.documentations.forEach((doc) => {
              if (this.matchesSearch(doc)) {
                ma_var.push(doc);
              }
            });
          });
        } else {
          this.typeDocuments.forEach((typeDocument) => {
            if (typeDocument.titre === this.selectedCat) {
              typeDocument.documentations.forEach((doc) => {
                if (this.matchesSearch(doc)) {
                  ma_var.push(doc);
                }
              });
            }
          });
        }
        this.documentations = ma_var;
        return this.documentations;
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
  },

  methods: {
    matchesSearch(doc) {
      if (!this.search) return true;
      return doc.doc_name.toLowerCase().includes(this.search.toLowerCase());
    },

    async fetchDataDocument() {
      try {
        this.isLoading = true;
        const response = await this.$axios.get(`/documentations`);
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
      this.currentPage = 1; // Reset à la première page lors du changement de filtre
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

    AllDocumentNumber() {
      let total = 0;
      this.typeDocuments.forEach((typeDocument) => {
        total += typeDocument.documentations.length;
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
.filter-sidebar {
  background: #f0fcf0;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.search-input {
  border: 2px solid #e2f5e2;
  border-radius: 8px;
  padding: 12px 45px 12px 15px;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #144c39;
    box-shadow: 0 0 0 3px rgba(20, 76, 57, 0.1);
    outline: none;
  }
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #144c39;
}

.filter-section {
  margin-top: 20px;
}

.filter-title {
  color: #144c39;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 16px;
}

.filter-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  
  &:hover {
    background: #e8f8e8;
    transform: translateX(5px);
  }
  
  &.active {
    background: #144c39;
    color: white;
    
    .filter-text,
    .filter-count {
      color: white;
    }
  }
}

.filter-text {
  color: #144c39;
  font-weight: 500;
  font-size: 14px;
}

.filter-count {
  background: #e8f8e8;
  color: #144c39;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  
  .filter-item.active & {
    background: rgba(255, 255, 255, 0.2);
    color: white;
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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #144c39;
  }
}

.card-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: #f0fcf0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 24px;
    color: #144c39;
  }
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.document-name {
  color: #144c39;
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
  color: #144c39;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  
  &:hover {
    color: #0d3528;
    border-bottom-color: #144c39;
    
    i {
      transform: translateY(2px);
    }
  }
  
  i {
    transition: transform 0.3s ease;
    font-size: 12px;
  }
}

/* État aucun document */
.no-documents {
  padding: 60px 20px;
  
  .no-doc-icon {
    font-size: 48px;
    color: #e2f5e2;
    margin-bottom: 15px;
  }
  
  .no-doc-text {
    color: #6b7280;
    font-size: 16px;
    margin: 0;
  }
}

/* Pagination */
.pagination {
  .page-link {
    color: #144c39;
    border: 1px solid #e8f8e8;
    
    &:hover {
      background: #f0fcf0;
      border-color: #144c39;
    }
  }
  
  .page-item.active .page-link {
    background: #144c39;
    border-color: #144c39;
    color: white;
  }
  
  .page-item.disabled .page-link {
    color: #6b7280;
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
  
  .document-card {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .card-icon {
    align-self: center;
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
  
  .search-input {
    padding: 10px 40px 10px 12px;
  }
}
</style>