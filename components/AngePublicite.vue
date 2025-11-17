<template>
  <div class="ange-publicite" :class="{ 'is-hidden': isSticky }">
    <div class="tickertape">     
      <span>L'agence nationale de gestion de l'environnement, au cœur de la gouvernance environnementale.</span> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      publicites: [],
    };
  },

  props: {
    isSticky: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/zone-publicitaire/liste`);
        const data = await response.data.data;
        if (data) {
          this.publicites = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.isLoading = false;
      }
    },

    emitHeightChange() {
      this.$nextTick(() => {
        const height = this.$el.offsetHeight;
        this.$emit('height-changed', height);
      });
    }
  },

  mounted() {
    this.fetchData();
    this.emitHeightChange();
    
    // Émettre le changement de hauteur quand le contenu est chargé
    setTimeout(() => {
      this.emitHeightChange();
    }, 100);
  },

  updated() {
    this.emitHeightChange();
  }
};
</script>

<style scoped>
.ange-publicite {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* En dessous du header */
  background-color: #007608;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.tickertape span {
  margin-right: 50px;
}

/* Responsive pour la publicité */
@media (max-width: 767px) {
  .ange-publicite {
    padding: 8px;
    font-size: 14px;
  }
}

@media (max-width: 575px) {
  .ange-publicite {
    padding: 6px;
    font-size: 12px;
  }
  
  .tickertape span {
    margin-right: 30px;
  }
}

.is-hidden {
  display: none !important;
}
</style>