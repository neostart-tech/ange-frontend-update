<template>
  <div class="container">
    <div class="flash-info-label">Flash info :</div>
    <div class="flash-info-content">
      <div class="flash-text-wrapper">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="10"
          class="flash-marquee"
        >
          <span v-for="(info, index) in flashInfos" :key="index" class="flash-item">
            {{ info.description_zone_pub }}
            <span class="separator" v-if="index < flashInfos.length - 1"> • </span>
          </span>
        </marquee>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flashInfos: [],
      isLoading: false,
    };
  },

  methods: {
    async fetchFlashInfos() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/zone-publicitaire/liste`);
        const data = await response.data.data;
        if (data && data.length > 0) {
          this.flashInfos = data;
        }
      } catch (error) {
        console.error("Error fetching flash infos:", error);
        this.flashInfos = [
          {
            libelle_zone_pub: null,
            description_zone_pub:
              "L'ANGE informe les promoteurs de projets de développement que les demandes de certificat de conformité environnementale se font en ligne sur le : https://service-public.gouv.tg/ et www.ange.tg depuis le 1er octobre 2025.",
          },
          {
            libelle_zone_pub: null,
            description_zone_pub:
              "L'agence nationale de gestion de l'environnement, au cœur de la gouvernance environnementale.",
          },
        ];
      } finally {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.fetchFlashInfos();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #e3f2fd;
  height: 50px;
  overflow: hidden;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 1200px;
  margin: 200px auto;
  width: calc(100% - 260px);
  padding: 0;
  margin-top: -80px !important;
  margin-bottom: -90px;
}

.container:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #0b9dd1;
}

.flash-info-label {
  background: linear-gradient(135deg, #146c53 0%, #146c53 100%);
  color: white;
  padding: 5px 20px;
  font-weight: 800;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 140px;
  text-align: left;
  position: relative;
  overflow: hidden;
  padding-left: 15px;
}

.flash-info-label::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.flash-info-content {
  flex: 1;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  background: white;
  overflow: hidden;
}

.flash-text-wrapper {
  width: 100%;
  overflow: hidden;
}

.flash-marquee {
  width: 100%;
  padding: 5px 0;
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
  text-align: left;
}

.flash-item {
  white-space: nowrap;
  display: inline-block;
}

.separator {
  color: #146c53;
  font-weight: bold;
  margin: 0 20px;
  font-size: 1.2rem;
}

@media (max-width: 2000px) {
  .container {
    max-width: 2500px !important;
    margin: 0px 30px;
    margin-left: 270px !important;
    width: calc(100% - 500px) !important;
    margin-top: 100px !important;
    margin-bottom: -70px;
  }
}

@media (max-width: 1600px) {
  .container {
    max-width: 2500px !important;
    margin: 0px 30px;
    margin-left: 270px !important;
    width: calc(100% - 500px) !important;
    margin-top: 100px !important;
    margin-bottom: -70px;
  }
}

@media (max-width: 1400px) {
  .container {
    max-width: 1000px;
    margin: 100px 100px;
    margin-left: 180px !important;
    width: calc(100% - 320px) !important;
    margin-top: 60px !important;
    margin-bottom: -90px;
  }
}

/* Responsive */
@media (max-width: 1245px) {
  .container {
    max-width: 1000px;
    margin: 20px 30px;
    margin-left: 160px !important;
    width: calc(100% - 290px) !important;
    margin-top: -350px !important;
    margin-bottom: -90px;
    height: 50px !important;
  }
}

@media (max-width: 1024px) {
  .container {
    max-width: 900px;
    margin: 18px 25px;
    margin-bottom: -50px;
    width: calc(100% - 50px);
    height: 60px !important;
  }

  .flash-info-label {
    min-width: 130px;
    padding: 14px 15px;
    padding-left: 12px;
    font-size: 1.05rem;
  }

  .flash-info-content {
    padding: 18px 22px;
  }

  .flash-marquee {
    font-size: 0.98rem;
  }
}

@media (max-width: 991px) {
  .container {
    margin-top: -150px !important;
    margin-bottom: -80px;
    height: 70px;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    margin: 0px 140px !important;
    margin-bottom: -90px !important;
    width: calc(100% - 270px) !important;
    margin-top: -150px !important;
    height: 100px !important;
  }

  .flash-info-label {
    min-width: auto;
    padding: 12px 15px;
    padding-left: 15px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
  }

  .flash-info-content {
    padding: 15px 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .flash-marquee {
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .separator {
    margin: 0 15px;
  }
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
    margin: 0px 40px !important;
    margin-bottom: -90px !important;
    width: calc(100% - 90px) !important;
    margin-top: 480px !important;
    height: 100px !important;
  }
}

@media (max-width: 576px) {
  .container {
    margin: 12px 40px !important;
    width: calc(100% - 80px) !important;
    border-width: 1.5px;
    margin-bottom: -80px !important;
    margin-top: 480px !important;

    height: 100px !important;
  }

  .flash-info-label {
    padding: 10px 12px;
    padding-left: 12px;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
  }

  .flash-info-content {
    padding: 12px 15px;
  }

  .flash-marquee {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .separator {
    margin: 0 10px;
  }
}

@media (max-width: 480px) {
  .container {
    margin: 10px 38px !important;
    width: calc(100% - 80px) !important;
    height: 100px !important;
    margin-top: 0px !important;
    margin-bottom: -50px !important;
  }

  .flash-info-label {
    padding: 8px 10px;
    padding-left: 10px;
    font-size: 0.9rem;
    letter-spacing: 0.3px;
  }

  .flash-info-content {
    padding: 10px 12px;
  }

  .flash-marquee {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .separator {
    margin: 0 8px;
  }
}

@media (max-width: 375px) {
  .container {
    margin: 8px 10px;
    width: calc(100% - 20px);
  }

  .flash-info-label {
    padding: 8px 8px;
    padding-left: 8px;
    font-size: 0.85rem;
  }

  .flash-info-content {
    padding: 8px 10px;
  }

  .flash-marquee {
    font-size: 0.8rem;
    line-height: 1.3;
  }

  .separator {
    margin: 0 5px;
  }
}

@media (min-width: 1600px) {
  .container {
    max-width: 1400px;
  }

  .flash-info-label {
    min-width: 160px;
    font-size: 1.2rem;
    padding: 18px 20px;
    padding-left: 18px;
  }

  .flash-info-content {
    padding: 25px 30px;
  }

  .flash-marquee {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .container {
    flex-direction: row;
    margin: 100px 15px;
  }

  .flash-info-label {
    min-width: 120px;
    width: auto;
    justify-content: flex-start;
    padding-left: 12px;
  }

  .flash-info-content {
    width: auto;
  }

  .flash-marquee {
    text-align: left;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flash-info-label::before {
    animation: none;
  }

  .container:hover {
    transform: none;
  }

  .flash-marquee {
    animation: none;
    white-space: normal;
  }
}

/* Alternative CSS si le marquee HTML n'est pas supporté */
.no-marquee .flash-text-wrapper {
  overflow: hidden;
  position: relative;
}

.no-marquee .flash-marquee {
  animation: scrollText 30s linear infinite;
  white-space: nowrap;
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
