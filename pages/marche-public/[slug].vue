<template>
  <AngeRoot>
    <!-- <Head>
      <Title>ANGE-TOGO |thywe</Title>
      <Meta name="description" :content="`srywriu`"></Meta>
    </Head> -->
    <AngeBreadcrumb
      activePageName="Marchés publics"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Publications', url: '#' },
      ]"
    />

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-12">
          <h3 v-if="!isLoading" class="text-center mb-5">
            {{ marchePublic.objet }}
          </h3>
        </div>
      </div>

      <div class="row">
        <div v-if="isLoading" class="text-center">
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

      <div v-if="!isLoading" class="row">
        <div class="col-lg-8 order-lg-1 order-2">
          <div class="slide-in mb-4">
            <h5 class="text-primary">Référence</h5>
            <p id="reference">{{ marchePublic.reference }}</p>
          </div>
          <div class="slide-in mb-4">
            <h5 class="text-primary">Description</h5>
            <p
              id="description"
              class="text-justify"
              v-html="marchePublic.description"
            ></p>
          </div>
        </div>

        <div class="col-lg-4 order-lg-2 order-1">
          <div class="sticky-top slide-in mb-4">
            <h5 class="text-primary">Informations</h5>
            <p>
              <strong>Type :&nbsp;</strong
              ><span id="type"
                >{{ marchePublic.type.nom }} ({{
                  marchePublic.type.definition
                }})</span
              >
            </p>
            <p>
              <strong>Date de publication :&nbsp;</strong>
              <span id="publication-date">{{ marchePublic.publish_date }}</span>
            </p>
            <p>
              <strong>Date limite :&nbsp;</strong>
              <span id="expiration-date">{{ marchePublic.delay }}</span>
            </p>
            <p>
              <strong>Statut :&nbsp;</strong>
              <span
                id="status"
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
            <h5 class="text-primary mt-4">Fichiers</h5>
            <ul id="file-list" class="list-unstyled">
              <li v-for="(document, index) in marchePublic.documents">
                <a
                  :href="`${url_back}/${document.file_link}`"
                  target="_BLANK"
                  class="btn btn-outline-primary btn-sm mb-2"
                  style="text-align: justify !important"
                  :key="index"
                  >{{ document.doc_name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </AngeRoot>
</template>

<script>
import { gsap } from "gsap";
import config from "~~/config";

export default {
  data() {
    return {
      isLoading: true,
      url_back: null,
      marchePublic: null,
    };
  },

  mounted() {
    this.fetchData();
    this.animateServices();
    this.url_back = config.app_back_url_img;
  },
  methods: {
    animateServices() {
      gsap.from(".slide-in", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      });
      // this.$gsap.from(this.$refs.serviceItem, {
      //   opacity: 0,
      //   y: 50,
      //   stagger: 0.2,
      //   duration: 1,
      //   ease: "power4.out",
      // });
    },
    async fetchData() {
      try {
        const response = await this.$axios.get(
          `/marche-publics/${this.$route.params.slug}`
        );
        const data = await response.data.data;
        if (data) {
          this.marchePublic = data;
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
<style>
.text-primary {
  color: #016a98;
}

.btn-outline-primary {
  background-image: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  color: white;
  border: none;
  transition: background-image 0.3s ease;
}

.btn-outline-primary:hover {
  background-image: linear-gradient(-90deg, #014f73 0%, #0e4b3b 100%);
}

.badge-success {
  background-color: #28a745;
  transition: background-color 0.3s ease;
}

.badge-danger {
  background-color: #dc3545;
  transition: background-color 0.3s ease;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}

.text-justify {
  text-align: justify;
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

/* .slide-in {
  animation: slideIn 0.5s ease-out;
} */

/* @keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
} */
</style>
