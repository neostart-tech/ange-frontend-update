<template>
  <div class="section-padding">
    <div class="container-fluid px-0">
      <div class="row" v-if="isLoading">
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

      <div class="container" v-else>
        <div class="row">
          <div class="col-lg-3 col-12 categories d-flex flex-column mb-5">
            <div class="search-bar">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="search"
                  placeholder="Recherche un document..."
                />
              </div>
            </div>
            <div class="category-list">
              <NuxtLink
                to="javascript:void(0);"
                class="category-item"
                @click="filterHandler('all')"
              >
                <div
                  class="category-text"
                  :class="{ 'mixitup-control-active': selectedCat === 'all' }"
                >
                  <i class="fa fa-seedling"></i
                  ><span
                    :class="{ 'mixitup-control-active': selectedCat === 'all' }"
                  >
                    Tous les documents</span
                  >
                </div>
                <div>{{ totalDocuements }}</div>
              </NuxtLink>
              <NuxtLink
                to="javascript:void(0);"
                class="category-item"
                v-for="(typeDocument, index) in typeDocuments"
                :key="index"
                @click="filterHandler(typeDocument.titre)"
              >
                <div
                  class="category-text"
                  :class="{
                    'mixitup-control-active':
                      selectedCat === typeDocument.titre,
                  }"
                >
                  <i
                    :class="{
                      'fa fa-leaf':
                        typeDocument.titre == 'Évaluations environnementales',
                      'fa fa-info-circle':
                        typeDocument.titre == 'Informations environnementales',
                    }"
                  ></i
                  ><span>{{ typeDocument.titre }}</span>
                </div>
                <div>{{ typeDocument.documentations.length }}</div>
              </NuxtLink>
            </div>
          </div>
          <div class="col-lg-9">
            <div v-if="paginatedDocuments.length == 0" class="row">
              <div class="text-center">
                <span class="file-document-name"
                  >Aucune documentation correspondante ...
                </span>
              </div>
            </div>

            <div v-else class="row">
              <div
                class="col-md-4 col-xl-4 mb-3"
                v-for="(doc, index) in paginatedDocuments"
              >
                <div class="card">
                  <div class="card-body">
                    <div class="avtar bg-light-primary">
                      <img
                        class="img-fluid"
                        src="/images/svg/icons/img-file-pdf.svg"
                      />
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <span class="file-document-name">
                          <NuxtLink
                            class="text-truncate w-100"
                            :to="`${file_url_back}/${doc.file_link}`"
                            style="padding: 20px"
                          >
                            {{ doc.doc_name }}
                          </NuxtLink>
                        </span>
                      </div>
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
      documentations: [],
      totalDocuements: 0,
      file_url_back: null,
      search: "",
      itemsPerPage: 8,
      currentPage: 1,
    };
  },
  computed: {
    filteredDocuments() {
      this.documentations = [];
      let ma_var = [];
      // Vérifier si les typeDocuments sont disponibles avant de filtrer les documents
      if (this.typeDocuments.length > 0) {
        if (this.selectedCat === "all") {
          this.typeDocuments.forEach((typeDocument) => {
            typeDocument.documentations.forEach((doc) => {
              if (
                doc.doc_name.toLowerCase().includes(this.search.toLowerCase())
              ) {
                ma_var.push(doc);
              }
            });
          });
        } else {
          this.typeDocuments.forEach((typeDocument) => {
            if (typeDocument.titre === this.selectedCat) {
              typeDocument.documentations.forEach((doc) => {
                if (
                  doc.doc_name.toLowerCase().includes(this.search.toLowerCase())
                ) {
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
        const response = await this.$axios.get(`/documentations`);

        const data = await response.data.data;
        if (data) {
          this.typeDocuments = data;
          console.log("servcice", this.typeDocuments);
          this.file_url_back = config.app_back_url_img;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    filterHandler(selection) {
      this.selectedCat = selection;
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
        total += typeDocument.documentations.length;
      });
      this.totalDocuements = total;
    },
  },
  mounted() {
    // this.fetchDataDocument();
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
</style>
