<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h3 class="text-cnce fz-32 ange-sty-center">Marchés publics</h3>
      </div>

      <div class="col-md-6 d-flex align-items-center mb-50">
        <h5 class="mb-0">
          Nombre de publication :
          <span id="offer-count">{{ marchePuclics.length }}</span>
        </h5>
      </div>

      <div class="col-md-6 mb-50">
        <!-- Formulaire de recherche -->
        <div class="sidebar-widget-search">
          <form>
            <input type="text"  v-model="search" placeholder="Saisir un terme ..." />
            <button><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>

      <div
        class="col-lg-4 col-md-6 mb-4"
        v-for="(marchePublic, index) in marchePuclics"
        :key="index"
      >
        <div
          class="card mb-4 h-100"
          :class="{
            encours: !marchePublic.expired && marchePublic.remaining_days > 7,
            expire: marchePublic.expired,
            imminent:
              marchePublic.remaining_days > 0 &&
              marchePublic.remaining_days <= 7,
          }"
        >
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ marchePublic.reference }}</h5>
            <p class="card-text">
              <strong
                >Type : {{ marchePublic.type.nom }} ({{
                  marchePublic.type.definition
                }})</strong
              >
            </p>
            <p class="card-text">
              <strong
                >Date de publication : {{ marchePublic.publish_date }}
              </strong>
            </p>
            <p class="card-text">
              <strong>Date limite : {{ marchePublic.delay }}</strong>
            </p>
            <p class="card-text">
              <strong>Statut :&nbsp;</strong>
              <span
                class="badge"
                :class="{
                  'badge-encours':
                    !marchePublic.expired && marchePublic.remaining_days > 7,
                  'badge-expire': marchePublic.expired,
                  'badge-imminent':
                    marchePublic.remaining_days > 0 &&
                    marchePublic.remaining_days <= 7,
                }"
                >{{
                  marchePublic.expired
                    ? "Expiré"
                    : marchePublic.remaining_days > 0 &&
                      marchePublic.remaining_days <= 7
                    ? `S'expire dans ${marchePublic.remaining_days} jour(s)`
                    : "En cours"
                }}</span
              >
            </p>

            <p class="card-text">
              <strong>Objet : </strong> {{ marchePublic.objet }}
            </p>
            <NuxtLink
              :to="`/marche-public/${marchePublic.slug}`"
              class="btn btn-gradient mt-auto"
              >Consulter</NuxtLink
            >
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
      isLoading: false,
      marchePuclics: [],
      img_url_back: null,
      search: "",
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/marche-publics`);

        const data = await response.data.data;
        if (data) {
          this.img_url_back = config.app_back_url_img;
          this.marchePuclics = data;
          this.isLoading = false;
          console.log("marcher-public", this.marchePuclics);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card h5 {
  margin-bottom: 10px;
}

.card p {
  margin: 5px 0;
  font-size: 16px;
}

.card .text-danger {
  font-weight: bold;
}

.encours {
  background-color: #e3f2fd;
  border-left: 5px solid #2196f3;
}

.encours:hover {
  background-color: #bbdefb;
}

.expire {
  background-color: #ffebee;
  border-left: 5px solid #f44336;
}

.expire:hover {
  background-color: #ffcdd2;
}

.imminent {
  background-color: #fff3e0;
  border-left: 5px solid #fb8c00;
}

.imminent:hover {
  background-color: #ffe0b2;
}

.badge-encours {
  background-color: #28a745;
}

.badge-expire {
  background-color: #dc3545;
}

.badge-imminent {
  background-color: #dba644;
}

.btn {
  margin-top: 10px;
  border-radius: 25px;
}

.btn-gradient {
  background-image: linear-gradient(
    -90deg,
    #016a98 0%,
    #146c53 100%
  ) !important;
  color: white !important;
  border: none !important;
}

.btn-gradient:hover {
  background-image: linear-gradient(
    -90deg,
    #014f73 0%,
    #0e4b3b 100%
  ) !important;
}
</style>
