<template>
  <section class="consultants-green-section">
    <div class="container">

      <!-- En-tête -->
      <div class="section-header">
        <h6 class="main-title-first">Consultants & Bureaux d'études</h6>
        <h1 class="main-title">Liste des consultants agréés et bureaux d'études</h1>
        <h2 class="sub-title">
          Retrouvez ci-dessous la liste complète des consultants indépendants et bureaux
          d'études agréés pour vous accompagner dans vos démarches.
          <span v-if="document?.date_publication" class="date-badge">
            Données du {{ document.date_publication }}
          </span>
        </h2>
      </div>

      <!-- ================= CARTE TÉLÉCHARGEMENT ================= -->
      <div class="download-card" v-if="document && document.path">
        <div class="download-content">
          <div class="download-info">
            <div class="file-icon">
              📄
            </div>
            <div class="file-details">
              <h3>Liste officielle des consultants agréés</h3>
              <p>
                Document PDF contenant les consultants indépendants et bureaux d’études agréés
              </p>
            </div>
          </div>

          <a
            :href="document.path"
            target="_blank"
            download
            class="download-btn"
          >
            Télécharger le PDF
          </a>
        </div>
      </div>

      <!-- ================= BUREAUX D’ÉTUDES ================= -->
      <div class="table-section">
        <div class="section-label">
          <span class="label-text">BUREAUX D'ÉTUDES</span>
        </div>

        <div v-if="loadingBureaux" class="loading">
          Chargement des bureaux d'études...
        </div>

        <div v-else-if="errorBureaux" class="error">
          Erreur de chargement des bureaux d'études
        </div>

        <div v-else-if="bureauxEtudes.length === 0" class="empty">
          Aucun bureau d’étude disponible
        </div>

        <div v-else class="list-container">
          <div
            v-for="(bureau, index) in bureauxEtudes"
            :key="bureau.id"
            class="list-item"
          >
            <div class="item-content">
              <span class="item-name">{{ bureau.nom }}</span>
              <span class="item-contact">{{ bureau.contact }}</span>
            </div>
            <div v-if="index < bureauxEtudes.length - 1" class="item-divider"></div>
          </div>
        </div>
      </div>

      <!-- ================= CONSULTANTS INDÉPENDANTS ================= -->
      <div class="table-section">
        <div class="section-label">
          <span class="label-text">CONSULTANTS INDÉPENDANTS</span>
        </div>

        <div v-if="loadingConsultants" class="loading">
          Chargement des consultants...
        </div>

        <div v-else-if="errorConsultants" class="error">
          Erreur de chargement des consultants
        </div>

        <div v-else-if="consultantsIndependants.length === 0" class="empty">
          Aucun consultant disponible
        </div>

        <div v-else class="list-container">
          <div
            v-for="(consultant, index) in consultantsIndependants"
            :key="consultant.id"
            class="list-item"
          >
            <div class="item-content">
              <span class="item-name">{{ consultant.nom }}</span>
              <span class="item-contact">{{ consultant.contact }}</span>
            </div>
            <div
              v-if="index < consultantsIndependants.length - 1"
              class="item-divider"
            ></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  name: "ConsultantsAgrees",

  data() {
    return {
      bureauxEtudes: [],
      consultantsIndependants: [],

      document: null,

      loadingBureaux: true,
      loadingConsultants: true,
      loadingDocument: true,

      errorBureaux: false,
      errorConsultants: false,
      errorDocument: false,
    };
  },

  methods: {
    async fetchBureauxEtudes() {
      try {
        this.loadingBureaux = true;
        const res = await this.$axios.get("/consultant-agrees/bureau-etude");
        this.bureauxEtudes = res.data.data || [];
      } catch (e) {
        this.errorBureaux = true;
      } finally {
        this.loadingBureaux = false;
      }
    },

    async fetchConsultantsIndependants() {
      try {
        this.loadingConsultants = true;
        const res = await this.$axios.get(
          "/consultant-agrees/consultant-independant"
        );
        this.consultantsIndependants = res.data.data || [];
      } catch (e) {
        this.errorConsultants = true;
      } finally {
        this.loadingConsultants = false;
      }
    },

    async fetchDocument() {
      try {
        this.loadingDocument = true;
        const res = await this.$axios.get(
          "/autre-consultant-agrees/get-consultant-agree-document"
        );
        this.document = res.data.data;
      } catch (e) {
        this.errorDocument = true;
      } finally {
        this.loadingDocument = false;
      }
    },

    async fetchData() {
      await Promise.all([
        this.fetchBureauxEtudes(),
        this.fetchConsultantsIndependants(),
        this.fetchDocument(),
      ]);
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
<style scoped>

.consultants-green-section {
  padding: 40px 20px;
  background: #ffffff;
  min-height: 100vh;
  position: relative;
}

.consultants-green-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 10% 20%, rgba(0,118,8,0.03), transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(0,118,8,0.03), transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.main-title-first {
  font-size: 13px;
  color: #007608;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.main-title {
  font-size: 26px;
  font-weight: 700;
  margin: 10px 0;
  color: #1a202c;
}

.sub-title {
  font-size: 14px;
  color: #4a5568;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.6;
}

.date-badge {
  display: inline-block;
  background: rgba(0,118,8,0.1);
  color: #007608;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-left: 8px;
}

.download-card {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  margin-bottom: 40px;
}

.download-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.download-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.file-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #007608, #00a10d);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  border-radius: 10px;
}

.file-details h3 {
  font-size: 1.3rem;
  color: #2d3748;
  font-weight: 700;
  margin-bottom: 6px;
}

.file-details p {
  color: #718096;
  font-size: 0.95rem;
}

.download-btn {
  background: linear-gradient(135deg, #007608, #00a10d);
  color: white;
  text-decoration: none;
  padding: 14px 30px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,118,8,0.35);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0,118,8,0.45);
}

.table-section {
  margin-bottom: 40px;
}

.section-label {
  background: linear-gradient(135deg, #007608, #00a10d);
  padding: 14px 20px;
  border-radius: 8px 8px 0 0;
}

.label-text {
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.list-container {
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}

.list-item {
  padding: 20px;
  transition: background 0.3s ease;
}

.list-item:hover {
  background: #f8fafc;
}

.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.item-name {
  font-weight: 600;
  font-size: 1rem;
  color: #2d3748;
}

.item-contact {
  color: #007608;
  font-weight: 500;
  font-size: 0.95rem;
}

.item-divider {
  height: 1px;
  background: #edf2f7;
  margin-top: 16px;
}

.loading,
.error,
.empty {
  padding: 50px 20px;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  color: #4a5568;
  margin-bottom: 30px;
}

.error {
  color: #c53030;
}

@media (max-width: 768px) {
  .download-content {
    flex-direction: column;
    text-align: center;
  }

  .item-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .download-btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.4rem;
  }

  .file-details h3 {
    font-size: 1.1rem;
  }
}


</style>