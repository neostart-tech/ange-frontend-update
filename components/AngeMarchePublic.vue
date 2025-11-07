<template>
  <div class="container">
    <div v-if="marchePuclics.length > 0">
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
              <input type="text" v-model="search" placeholder="Saisir un terme ..." />
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

    <!-- Message quand aucun marché n'est disponible -->
    <div v-else class="no-markets-container">
      <div class="no-markets-content">
        <div class="image-wrapper">
          <img src="/images/others/Contact us-rafiki.png" alt="Aucun marché disponible" class="illustration">
        </div>
        <h3 class="no-markets-title">Aucun marché public disponible</h3>
        <p class="no-markets-message">
          Il n'y a actuellement aucun marché public à consulter. 
          Revenez plus tard pour découvrir les nouvelles opportunités.
        </p>
        <button class="btn-refresh" @click="fetchData">
          <i class="fa fa-refresh"></i>
          Actualiser
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import config from "~~/config";

const isLoading = ref(false)
const marchePuclics = ref([])
const img_url_back = ref(null)
const search = ref("")

const fetchData = async () => {
  isLoading.value = true;
  try {
    const response = await $axios.get(`/marche-publics`);

    const data = await response.data.data;
    if (data) {
      img_url_back.value = config.app_back_url_img;
      marchePuclics.value = data;
      isLoading.value = false;
      console.log("marcher-public", marchePuclics.value);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchData();
})
</script>

<style scoped>
.container {
  min-height: 400px;
}

/* Styles pour la section des marchés */
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

/* Styles pour le message "Aucun marché" */
.no-markets-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  padding: 60px 20px;
}

.no-markets-content {
  text-align: center;
  max-width: 600px;
  padding: 0;
}

.image-wrapper {
  margin-bottom: 40px;
}

.illustration {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.no-markets-title {
  font-size: 2rem;
  color: #007608;
  margin-bottom: 20px;
  font-weight: 600;
}

.no-markets-message {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.btn-refresh {
  background: #007608;
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
}

.btn-refresh:hover {
  background: #005a06;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 118, 8, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .no-markets-container {
    min-height: 500px;
    padding: 40px 15px;
  }
  
  .illustration {
    max-width: 350px;
  }
  
  .no-markets-title {
    font-size: 1.7rem;
  }
  
  .no-markets-message {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .no-markets-container {
    min-height: 450px;
    padding: 30px 10px;
  }
  
  .illustration {
    max-width: 300px;
  }
  
  .no-markets-title {
    font-size: 1.5rem;
  }
  
  .no-markets-message {
    font-size: 1rem;
  }
  
  .btn-refresh {
    padding: 12px 30px;
    font-size: 1rem;
  }
}
</style>