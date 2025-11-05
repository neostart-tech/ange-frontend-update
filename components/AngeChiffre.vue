<template>
  <AngeFlashInfo />
  <div class="section-padding-t90-b100">
    <div class="container">


      <AngeChiffres />

    </div>
  </div>
</template>

<script>
import counterUp from "counterup2";

export default {
  data() {
    return {
      isLoading: false,
      statistique: {}
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/statistiques-eval-env`);

        const data = await response.data.data;
        if (data) {
          this.statistique = data;
          this.isLoading = false;
        }
        await this.$nextTick(() => {
          const counterElements = this.$el.querySelectorAll(".counter-stat-env");

          const callback = (entries) => {
            entries.forEach((entry) => {
              const el = entry.target;
              if (entry.isIntersecting && !el.classList.contains("is-visible")) {
                counterUp(el, {
                  duration: 2000,
                  delay: 16,
                });
                el.classList.add("is-visible");
              }
            });
          };

          const observer = new IntersectionObserver(callback, { threshold: 1 });
          counterElements.forEach((el) => {
            observer.observe(el);
          });
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  mounted() {
    this.fetchData();
    this.$nextTick(() => {
      const counterElements = this.$el.querySelectorAll(".counter");

      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 2000,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      };

      const observer = new IntersectionObserver(callback, { threshold: 1 });
      counterElements.forEach((el) => {
        observer.observe(el);
      });
    });
  },
};
</script>

<style scoped>
.indicator-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.indicator-card h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.indicator-card p {
  font-size: 19px;
  color: #000;
  font-weight: bold;
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
}

.indicator-icon {
  font-size: 3rem;
  background: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.counter {
  font-family: "Rampart One", cursive;
  font-size: 5em;
  margin: 0vh auto 40vh;
}

.counter:not(.is-visible) {
  visibility: hidden;
}
</style>
