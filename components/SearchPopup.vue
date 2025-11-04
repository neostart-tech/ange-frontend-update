<template>
  <div class="main-search-active" id="search-popup">
    <div class="sidebar-search-icon">
      <button
        class="search-close"
        @click="toggleClass('removeClass', 'search-popup-open')"
      >
        <i class="fa fa-times"></i>
      </button>
    </div>
    <div class="sidebar-search-input">
      <form @submit.prevent="handleSubmit">
        <div class="form-search">
          <input
            id="search"
            class="input-text"
            v-model="query"
            placeholder=""
            type="search"
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
      <p class="form-description">Rechercher des éléments ici ...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    // offcanvas search close
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#search-popup");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    async handleSubmit() {
      if (this.query.trim()) {
        this.$router.push({
          name: "search",
           query: { q: this.query }, // Ajout du paramètre query
        });
      }
    },
  },
};
</script>
