<template>
  <div class="section-padding">
    <div class="container-fluid px-0">
      <div v-if="isLoading" class="row">
        <!-- Afficher un indicateur de chargement si les données sont en cours de chargement -->
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
          <div class="col-lg-3 col-12 categories d-flex flex-column mb-3">
            <div class="row">
              <div class="col-lg-12">
                <h3>Types documents</h3>
              </div>
            </div>
            <div class="category-list">
              <NuxtLink
                to="javascript:void(0);"
                class="category-item"
                @click="filterHandler('all')"
              >
                <div class="category-text">
                  <i class="fa fa-seedling"></i
                  ><span
                    :class="{
                      'text-legislative-active': selectedCat === 'all',
                    }"
                  >
                    Tous les textes</span
                  >
                </div>
                <div
                  :class="{ 'text-legislative-active': selectedCat === 'all' }"
                >
                  {{ totalDocuements }}
                </div>
              </NuxtLink>

              <NuxtLink
                to="javascript:void(0);"
                class="category-item"
                v-for="(typeDocument, index) in typeDocuments"
                :key="index"
                @click="filterHandler(typeDocument.type)"
              >
                <div class="category-text">
                  <i
                    :class="{
                      'fa fa-gavel': typeDocument.type == 'Lois',
                      'fa fa-balance-scale': typeDocument.type == 'Décisions',
                      'fa fa-book': typeDocument.type == 'Guides',
                      'fa fa-file-alt': typeDocument.type == 'Arrêtés',
                      'fa fa-scroll': typeDocument.type == 'Décrets',
                      'fa fa-ellipsis-h': typeDocument.type == 'Autres',
                      'fa fa-file-contract': typeDocument.type == 'Rapports',
                      'text-legislative-active':
                        selectedCat === typeDocument.type,
                    }"
                  ></i
                  ><span
                    :class="{
                      'text-legislative-active':
                        selectedCat === typeDocument.type,
                    }"
                    >{{ typeDocument.type }}</span
                  >
                </div>
                <div
                  :class="{
                    'text-legislative-active':
                      selectedCat === typeDocument.type,
                  }"
                >
                  {{ typeDocument.documents.length }}
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="col-lg-9 mb-3">
            <div class="row mb-3">
              <div class="col-lg-6 col-md-6">
                <div class="row">
                  <div class="col-lg-12">
                    <h3 class="">Documents</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="sidebar-widget-search">
                  <input
                    type="text"
                    v-model="search"
                    placeholder="Recherche un document ..."
                  />
                </div>
              </div>
            </div>

            <div v-if="paginatedDocuments.length == 0" class="row">
              <div class="text-center">
                <span class="file-document-name"
                  >Aucun texte correspondant ...
                </span>
              </div>
            </div>

            <div v-else class="row">
              <div class="col-md-12 col-xl-12 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="avtar bg-light-primary">
                      <ol>
                        <li
                          v-for="(doc, index) in paginatedDocuments"
                          :key="index"
                          style="padding: 10px 0"
                        >
                          <NuxtLink :to="`${file_url_back}/${doc.file_link}`">
                            {{ doc.doc_name }}
                          </NuxtLink>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-50">
          <div class="col">
            <ul class="pagination center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a href="#" class="page-link" @click.prevent="prevPage"
                  ><i class="fa fa-angle-left"></i
                ></a>
              </li>
              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
              >
                <a href="#" class="page-link" @click.prevent="goToPage(page)">{{
                  page
                }}</a>
              </li>
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <a href="#" class="page-link" @click.prevent="nextPage"
                  ><i class="fa fa-angle-right"></i
                ></a>
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
      itemsPerPage: 7,
      currentPage: 1,
    };
  },

  computed: {
    filteredDocuments() {
      this.documents = [];
      let ma_var = [];
      // Vérifier si les typeDocuments sont disponibles avant de filtrer les documents
      if (this.typeDocuments.length > 0) {
        if (this.selectedCat === "all") {
          this.typeDocuments.forEach((typeDocument) => {
            typeDocument.documents.forEach((doc) => {
              if (
                doc.doc_name.toLowerCase().includes(this.search.toLowerCase())
              ) {
                ma_var.push(doc);
              }
            });
          });
        } else {
          this.typeDocuments.forEach((typeDocument) => {
            if (typeDocument.type === this.selectedCat) {
              typeDocument.documents.forEach((doc) => {
                if (
                  doc.doc_name.toLowerCase().includes(this.search.toLowerCase())
                ) {
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

    // Calcul du nombre total de pages
    totalPages() {
      return Math.ceil(this.filteredDocuments.length / this.itemsPerPage);
    },

    // Calcul des documents de la page actuelle
    paginatedDocuments() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredDocuments.slice(startIndex, endIndex);
    },
  },

  methods: {
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
      }
    },

    filterHandler(selection) {
      this.selectedCat = selection;
      this.filteredDocuments;
    },
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
      this.filteredDocuments;
      this.AllDocumentNumber();
    });
  },
};
</script>

<style lang="scss">
.portfolio-item:empty {
  display: none;
}

.documentation-file {
  display: flex;
  align-items: center;
}

.file-document-name {
  color: var(--foundation-green-dark-active, #144c39);
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.category-list {
  margin-top: 20px;
}

.category-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.category-item i {
  margin-right: 10px;
}

.category-item .category-text {
  display: flex;
  align-items: center;
}

.category-list a:hover {
  transform: translateY(-5px);
}

@media (max-width: 991.98px) {
  .categories {
    flex-direction: column;
  }

  .search-bar {
    order: 2;
    margin-top: 20px;
  }

  .category-list {
    order: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .category-item {
    flex-direction: column;
    align-items: center;
    border: none;
    padding: 10px;
  }

  .category-item .category-text span,
  .category-item div:last-child {
    display: none;
  }
}

@media (min-width: 992px) {
  .categories {
    flex-direction: column;
  }

  .category-item {
    flex-direction: row;
    justify-content: space-between;
  }

  .category-item .category-text span {
    display: inline;
  }
}

.text-legislative-active {
  color: #1292ee !important;
}
</style>
