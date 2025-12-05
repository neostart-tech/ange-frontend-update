<template>
  <div class="feux-vegetation-section">
    <div class="feux-background">
      <div class="feux-content">
        <!-- Année en petit -->
        <!-- <div class="feux-year">2024</div> -->

        <!-- Titre principal -->
        <h2 class="feux-title">Statistiques des feux de végétation</h2>

        <!-- Les trois statistiques -->
        <div class="feux-stats-grid">
          <!-- 2020-2021 -->
          <div class="feux-stat-item" v-if="getStatistiqueByAnnee('2020-2021')">
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value counter-stat-env">
              {{ formatNumber(getStatistiqueByAnnee('2020-2021')?.valeur) }}
            </div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2020-2021
            </div>
          </div>
          <div class="feux-stat-item" v-else>
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value counter-stat-env">
              {{ "6843,22" }}
            </div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2020-2021
            </div>
          </div>

          <!-- 2021-2022 -->
          <div class="feux-stat-item" v-if="getStatistiqueByAnnee('2021-2022')">
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value counter-stat-env">
              {{ formatNumber(getStatistiqueByAnnee('2021-2022')?.valeur) }}
            </div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2021-2022
            </div>
          </div>
          <div class="feux-stat-item" v-else>
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value counter-stat-env">
              {{ "15397,27" }}
            </div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2021-2022
            </div>
          </div>


          <!-- 2022-2023 -->
          <div class="feux-stat-item" v-if="getStatistiqueByAnnee('2022-2023')">
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value counter-stat-env">
              {{ formatNumber(getStatistiqueByAnnee('2022-2023')?.valeur) }}
            </div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2022-2023
            </div>
          </div>
          <div class="feux-stat-item" v-else>
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value counter-stat-env">
              {{ "11568,68" }}
            </div>
            <div class="feux-description">
              Nombre de superficie brulée (km²) année 2022-2023
            </div>
          </div>

          <!-- Fallback si aucune donnée -->
          <!-- <div v-if="!hasData" class="feux-stat-item">
            <div class="feux-icon">
              <i class="fa fa-fire-flame-curved"></i>
            </div>
            <div class="feux-value">
              Aucune donnée
            </div>
            <div class="feux-description">
              Chargement des données...
            </div>
          </div> -->
        </div>

        <!-- Call to action -->
        <div class="feux-cta">
          <NuxtLink to="feux-de-vegetation" class="feux-btn">
            Voir plus <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      statistique: [],
    };
  },

  computed: {
    hasData() {
      return this.statistique && this.statistique.length > 0;
    }
  },

  methods: {
    // Récupérer les données
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/feux-de-vegetation/liste`);
        const data = await response.data.data;
        if (data) {
          this.statistique = data;
          this.isLoading = false;

          // Initialiser le compteur après le chargement des données
          this.$nextTick(() => {
            this.initCounter();
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        this.isLoading = false;
      }
    },

    // Trouver une statistique par année
    getStatistiqueByAnnee(annee) {
      if (!this.hasData) return null;
      return this.statistique.find(item => item.annee === annee);
    },

    // Formater les nombres (remplacer le point par une virgule)
    formatNumber(value) {
      if (!value) return '0';
      return value.toString().replace('.', ',');
    },

    // Initialiser l'animation du compteur
    initCounter() {
      const counterElements = this.$el.querySelectorAll(".counter-stat-env");
      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            // Utiliser counterUp si disponible, sinon afficher directement
            if (typeof counterUp === 'function') {
              counterUp(el, {
                duration: 2000,
                delay: 16,
              });
            }
            el.classList.add("is-visible");
          }
        });
      };

      const observer = new IntersectionObserver(callback, { threshold: 0.5 });
      counterElements.forEach((el) => {
        observer.observe(el);
      });
    }
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* Vos styles CSS restent exactement les mêmes */
.feux-vegetation-section {
  margin: 0;
  width: 100%;
  position: relative;
}

.feux-background {
  background: url('/images/bg/bg-statistique.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feux-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e0f9e0;
  opacity: 0.8;
  z-index: 1;
}

.feux-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Année - 16px */
.feux-year {
  font-size: 16px;
  font-weight: 600;
  color: #007608;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Titre - 32px */
.feux-title {
  font-size: 32px;
  font-weight: 700;
  color: #007608;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
}

.feux-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;
  width: 100%;
}

/* Statistiques sans cadre - juste en l'air */
.feux-stat-item {
  background: transparent;
  padding: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.feux-stat-item:hover {
  transform: translateY(-5px);
}

/* Icône - responsive */
.feux-icon {
  width: 100px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.feux-icon i {
  font-size: 70px;
  color: #007608;
}

/* Valeur - responsive */
.feux-value {
  font-size: 28px;
  font-weight: 800;
  color: #007608;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.1;
  min-height: 40px;
}

/* Description - responsive */
.feux-description {
  font-size: 14px;
  color: #007608;
  font-weight: 500;
  line-height: 1.4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 280px;
  min-height: 50px;
}

.feux-cta {
  margin-top: 40px;
}

.feux-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #007608;
  color: white;
  padding: 15px 35px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feux-btn:hover {
  background: transparent;
  color: #007608;
  transform: translateY(-3px);
}

.feux-btn i {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.feux-btn:hover i {
  transform: translateX(5px);
}

/* ========== RESPONSIVE CORRECTIONS ========== */

/* Grands écrans (≥1400px) */
@media (min-width: 1400px) {
  .feux-content {
    max-width: 1320px;
  }

  .feux-stats-grid {
    gap: 60px;
  }

  .feux-icon {
    width: 124px;
    height: 146px;
  }

  .feux-icon i {
    font-size: 80px;
  }

  .feux-value {
    font-size: 32px;
  }
}

/* Desktop standard (1200px - 1399px) */
@media (max-width: 1399px) and (min-width: 1200px) {
  .feux-stats-grid {
    gap: 50px;
  }

  .feux-icon {
    width: 110px;
    height: 130px;
  }

  .feux-icon i {
    font-size: 75px;
  }
}

/* Tablette paysage (992px - 1199px) */
@media (max-width: 1199px) and (min-width: 992px) {
  .feux-background {
    padding: 70px 20px;
    min-height: 50vh;
  }

  .feux-stats-grid {
    gap: 35px;
  }

  .feux-title {
    font-size: 28px;
    margin-bottom: 50px;
  }

  .feux-icon {
    width: 90px;
    height: 110px;
    margin-bottom: 20px;
  }

  .feux-icon i {
    font-size: 60px;
  }

  .feux-value {
    font-size: 26px;
    margin-bottom: 12px;
  }

  .feux-description {
    font-size: 13px;
    max-width: 220px;
  }
}

/* Tablette portrait (768px - 991px) */
@media (max-width: 991px) and (min-width: 768px) {
  .feux-background {
    padding: 60px 20px;
    min-height: auto;
  }

  .feux-stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-bottom: 50px;
  }

  .feux-title {
    font-size: 26px;
    margin-bottom: 45px;
    padding: 0 20px;
  }

  .feux-year {
    font-size: 15px;
  }

  .feux-icon {
    width: 85px;
    height: 100px;
    margin-bottom: 18px;
  }

  .feux-icon i {
    font-size: 55px;
  }

  .feux-value {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .feux-description {
    font-size: 13px;
    max-width: 250px;
    min-height: 60px;
  }

  .feux-btn {
    padding: 14px 32px;
    font-size: 15px;
  }
}

/* Mobile paysage (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
  .feux-background {
    padding: 50px 15px;
  }

  .feux-content {
    padding: 0 15px;
  }

  .feux-stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 45px;
  }

  .feux-title {
    font-size: 24px;
    margin-bottom: 40px;
    padding: 0 15px;
  }

  .feux-year {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .feux-icon {
    width: 75px;
    height: 90px;
    margin-bottom: 15px;
  }

  .feux-icon i {
    font-size: 50px;
  }

  .feux-value {
    font-size: 22px;
    margin-bottom: 8px;
    min-height: 35px;
  }

  .feux-description {
    font-size: 12px;
    max-width: 200px;
    min-height: 70px;
    line-height: 1.3;
  }

  .feux-cta {
    margin-top: 35px;
  }

  .feux-btn {
    padding: 12px 28px;
    font-size: 14px;
  }
}

/* Mobile portrait (480px - 575px) */
@media (max-width: 575px) and (min-width: 480px) {
  .feux-background {
    padding: 40px 12px;
  }

  .feux-content {
    padding: 0 12px;
  }

  .feux-stats-grid {
    grid-template-columns: 1fr;
    gap: 35px;
    margin-bottom: 40px;
  }

  .feux-title {
    font-size: 22px;
    margin-bottom: 35px;
    padding: 0 10px;
  }

  .feux-year {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .feux-icon {
    width: 70px;
    height: 85px;
    margin-bottom: 15px;
  }

  .feux-icon i {
    font-size: 45px;
  }

  .feux-value {
    font-size: 20px;
    margin-bottom: 8px;
    min-height: 30px;
  }

  .feux-description {
    font-size: 12px;
    max-width: 280px;
    min-height: 50px;
    line-height: 1.4;
  }

  .feux-cta {
    margin-top: 30px;
  }

  .feux-btn {
    padding: 12px 25px;
    font-size: 14px;
  }
}

/* Petit mobile (375px - 479px) */
@media (max-width: 479px) and (min-width: 375px) {
  .feux-background {
    padding: 35px 10px;
  }

  .feux-content {
    padding: 0 10px;
  }

  .feux-stats-grid {
    gap: 30px;
    margin-bottom: 35px;
  }

  .feux-title {
    font-size: 20px;
    margin-bottom: 30px;
    padding: 0;
  }

  .feux-year {
    font-size: 12px;
    margin-bottom: 8px;
  }

  .feux-icon {
    width: 65px;
    height: 80px;
    margin-bottom: 12px;
  }

  .feux-icon i {
    font-size: 40px;
  }

  .feux-value {
    font-size: 18px;
    margin-bottom: 6px;
    min-height: 25px;
  }

  .feux-description {
    font-size: 11px;
    max-width: 250px;
    min-height: 45px;
    line-height: 1.3;
  }

  .feux-cta {
    margin-top: 25px;
  }

  .feux-btn {
    padding: 10px 22px;
    font-size: 13px;
  }
}

/* Mobile extra small (< 375px) */
@media (max-width: 374px) {
  .feux-background {
    padding: 30px 8px;
  }

  .feux-content {
    padding: 0 8px;
  }

  .feux-stats-grid {
    gap: 25px;
    margin-bottom: 30px;
  }

  .feux-title {
    font-size: 18px;
    margin-bottom: 25px;
  }

  .feux-year {
    font-size: 11px;
    margin-bottom: 6px;
  }

  .feux-icon {
    width: 60px;
    height: 70px;
    margin-bottom: 10px;
  }

  .feux-icon i {
    font-size: 35px;
  }

  .feux-value {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .feux-description {
    font-size: 10px;
    max-width: 220px;
    min-height: 40px;
    line-height: 1.2;
  }

  .feux-cta {
    margin-top: 20px;
  }

  .feux-btn {
    padding: 8px 20px;
    font-size: 12px;
  }
}

/* Mode paysage sur mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .feux-background {
    padding: 30px 15px;
    min-height: auto;
  }

  .feux-stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }

  .feux-icon {
    width: 60px;
    height: 70px;
    margin-bottom: 10px;
  }

  .feux-icon i {
    font-size: 35px;
  }

  .feux-value {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .feux-description {
    font-size: 10px;
    min-height: 35px;
  }
}
</style>