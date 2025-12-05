<template>
  <div class="section-padding overflow-hidden">
    <div class="container d-flex flex-column align-items-center text-center">

      <!-- TITRES -->
      <div class="intro mb-5" data-aos="fade-up">
        <h4 class="subtitle">Plaintes</h4>
        <h2 class="main-title" style="color: #285a43 !important">
         Pour en savoir plus sur les plaintes recues a l’ANGE , téléchargez la note relative aux plaintes 
        </h2>
      </div>

      <!-- LIEN PDF -->
      <div class="note-link mb-5" data-aos="fade-up">
        <a href="/pdf/plaintes.pdf" target="_blank" class="pdf-link">
          NOTE RELATIVE DES PLAINTES REÇUES &nbsp;
          <i class="fa fa-download"></i>
        </a>
      </div>

      <!-- FORMULAIRE -->
      <div class="form-container" data-aos="fade-up">
        <form @submit.prevent="savePlainte()" enctype="multipart/form-data">
          <div class="row g-3">
            <div class="col-md-6">
              <input
                type="text"
                name="nom_prenom"
                class="form-control"
                placeholder="Votre nom & prénom *"
                v-model="form.nom_prenom"
                required
              />
            </div>

            <div class="col-md-6">
              <input
                type="text"
                name="localite"
                class="form-control"
                placeholder="Localité *"
                v-model="form.localite"
                required
              />
            </div>

            <div class="col-md-6">
              <input
                type="text"
                name="telephone"
                class="form-control"
                placeholder="Numéro de téléphone *"
                v-model="form.telephone"
                required
              />
            </div>

            <div class="col-md-6">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="E-mail *"
                v-model="form.email"
                required
              />
            </div>

            <div class="col-12">
              <input
                type="file"
                class="form-control"
                @change="onFileSelected"
                accept="image/*"
                required
              />
            </div>

            <div class="col-12">
              <textarea
                name="message"
                cols="30"
                rows="6"
                class="form-control"
                placeholder="Votre message *"
                v-model="form.message"
                required
              ></textarea>
            </div>

            <div class="col-12 text-center mt-4">
              <button class="btn btn-success ange-btn-documentation" :disabled="isloading">
                Soumettre
                <i class="fa fa-paper-plane ml-2"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export default {
  data() {
    return {
      isloading: false,
      form: {
        nom_prenom: "",
        localite: "",
        telephone: "",
        email: "",
        message: "",
        fichier: null,
        localisation: "test",
      },
    };
  },

  methods: {
    onFileSelected(event) {
      this.form.fichier = event.target.files[0];
    },

    async savePlainte() {
      try {
        this.isloading = true;

        const response = await this.$axios.post("/plainte/send", this.form, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response) {
          const $toast = useToast();
          $toast.success("Plainte envoyée avec succès", {
            position: "top-right",
            duration: 4000,
          });

          this.form = {
            nom_prenom: "",
            localite: "",
            telephone: "",
            email: "",
            message: "",
            fichier: null,
            localisation: "localisation",
          };
        }
      } catch (error) {
        console.error("Erreur :", error);
      } finally {
        this.isloading = false;
      }
    },
  },
};
</script>

<style scoped>
.section-padding {
  padding: 60px 0;
  text-align: center;
}

/* ===== TITRES ===== */
.subtitle {
  font-size: 16px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.main-title {
  font-size: 26px;
  line-height: 1.4;
  color: #285a43;
}

/* ===== LIEN PDF (bouton) ===== */
.pdf-link {
  display: inline-block;
  background-color: #285a43;
  color: #fff !important;
  text-decoration: none;
  padding: 10px 22px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.pdf-link i {
  margin-left: 8px;
}

.pdf-link:hover {
  background-color: #1f4434;
  text-decoration: none;
  transform: translateY(-2px);
}

/* ===== FORMULAIRE ===== */
.form-container {
  width: 100%;
  max-width: 800px;
}

.form-control,
textarea {
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 10px 15px;
}

.form-control:focus,
textarea:focus {
  border-color: #285a43;
  box-shadow: 0 0 5px rgba(40, 90, 67, 0.3);
}

/* ===== BOUTON ENVOYER ===== */
button.btn-success {
  background-color: #285a43;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 6px;
  color: #fff;
  transition: all 0.3s ease;
}

button.btn-success:hover {
  background-color: #1f4434;
}
</style>
