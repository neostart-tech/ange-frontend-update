<template>
  <div class="section-padding-t90 section-padding-bottom overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="text-cnce fz-32 ange-sty-center">Nos actualités</h3>
        </div>
      </div>

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
        <!-- Blog Section Start -->
        <div
          class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
        >
          <div
            class="col mt-30"
            v-for="(blog, index) in paginatedBlogs"
            :key="index"
          >
            <AngeBlogItem :blog="blog" />
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
                class="page-item"
                v-for="pageNumber in totalPages"
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
      itemsPerPage: 6,
      currentPage: 1,
    };
  },

  computed: {
    // Calcul du nombre total de pages
    totalPages() {
      return Math.ceil(this.blogs.length / this.itemsPerPage);
    },
    // Calcul des blogs de la page actuelle
    paginatedBlogs() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.blogs.slice(startIndex, endIndex);
    },
  },

  methods: {
    // Aller  à la page précédente
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
