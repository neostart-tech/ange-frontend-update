<template>
  <div class="section-padding-t90 section-padding-bottom overflow-hidden">
    <div class="container">
      
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
      <div v-else>
        <!-- Barre de recherche et filtre -->
        <div class="row mb-50">
          <div class="col-12">
            <div class="search-filter-container">
              <!-- Barre de recherche automatique - GAUCHE -->
              <div class="search-box">
                <input 
                  type="text" 
                  v-model="searchQuery"
                  placeholder="Rechercher un article..."
                  class="search-input"
                />
                <i class="fa fa-search search-icon"></i>
              </div>
              
              <!-- Sélecteur de filtre - DROITE -->
              <div class="filter-select">
                <select v-model="selectedFilter" class="filter-dropdown">
                  <option value="all">Voir tout</option>
                  <option value="recent">Plus récents</option>
                  <option value="oldest">Plus anciens</option>
                  <option value="popular">Plus populaires</option>
                  <option value="title">Par titre</option>
                </select>
                <i class="fa fa-chevron-down select-arrow"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Blog Section Start -->
        <div
          class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
        >
          <div
            class="col mt-30"
            v-for="(blog, index) in filteredAndPaginatedBlogs"
            :key="index"
          >
            <AngeBlogItem :blog="blog" />
          </div>
        </div>

        <!-- Pagination -->
        <div class="row mt-50">
          <div class="col">
            <ul class="pagination center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a href="#" class="page-link" @click.prevent="prevPage"
                  ><i class="fa fa-angle-left"></i
                ></a>
              </li>
              
              <li class="page-item" :class="{ disabled: currentGroup === 1 }">
                <a href="#" class="page-link" @click.prevent="prevGroup">
                  <i class="fa fa-angle-double-left"></i>
                </a>
              </li>
              
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
              
              <li class="page-item" :class="{ disabled: currentGroup === totalGroups }">
                <a href="#" class="page-link" @click.prevent="nextGroup">
                  <i class="fa fa-angle-double-right"></i>
                </a>
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
        <!-- Blog Section End -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },

  data() {
    return {
      isLoading: false,
      blogs: [],
      img_url_back: null,
      itemsPerPage: 8,
      currentPage: 1,
      pagesPerGroup: 5,
      searchQuery: '',
      selectedFilter: 'all'
    };
  },

  computed: {
    // Blogs filtrés et triés
    filteredBlogs() {
      let filtered = this.blogs;

      // Filtre par recherche
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(blog => 
          blog.titre?.toLowerCase().includes(query) ||
          blog.short_titre?.toLowerCase().includes(query) ||
          blog.description?.toLowerCase().includes(query)
        );
      }

      // Tri selon le filtre sélectionné
      switch (this.selectedFilter) {
        case 'recent':
          return filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        case 'oldest':
          return filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        case 'title':
          return filtered.sort((a, b) => a.titre?.localeCompare(b.titre));
        case 'popular':
          // Supposons que vous avez un champ 'views' pour la popularité
          return filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        default:
          return filtered;
      }
    },

    totalPages() {
      return Math.ceil(this.filteredBlogs.length / this.itemsPerPage);
    },
    
    filteredAndPaginatedBlogs() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredBlogs.slice(startIndex, endIndex);
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

    async fetchData() {
      try {
        this.isLoading = true;
        const response = await this.$axios.get(`/blogs/liste`);
        const data = await response.data.data;
        if (data) {
          this.blogs = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.search-filter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
}

.search-box {
  position: relative;
  min-width: 300px;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: white;
}

.search-input:focus {
  outline: none;
  border-color: #0b9dd1;
  box-shadow: 0 0 0 3px rgba(11, 157, 209, 0.1);
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
}

.filter-select {
  position: relative;
  min-width: 180px;
}

.filter-dropdown {
  width: 100%;
  padding: 12px 35px 12px 15px;
  border: 2px solid #0b9dd1;
  font-size: 14px;
  background: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-dropdown:focus {
  outline: none;
  border-color: #0b9dd1;
  box-shadow: 0 0 0 3px rgba(11, 157, 209, 0.1);
}

.select-arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 768px) {
  .search-filter-container {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }
  
  .search-box {
    min-width: 100%;
    max-width: 100%;
  }
  
  .filter-select {
    min-width: 100%;
  }
}

.mtn-30 {
  display: flex;
  flex-wrap: wrap;
}

.col.mt-30 {
  display: flex;
}

.blog {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog:hover {
  transform: translateY(-5px);
}

.thumbnail {
  flex-shrink: 0;
}

.thumbnail img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.meta {
  margin-bottom: 10px;
}

.title {
  flex: 1;
  margin-bottom: 15px;
  line-height: 1.4;
}

.title a {
  text-decoration: none;
  color: inherit;
}

.read-more-blue {
  margin-top: auto;
  align-self: flex-start;
}
</style>