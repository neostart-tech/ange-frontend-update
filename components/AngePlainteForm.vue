<template>
  <div class="section-padding overflow-hidden">
    <div class="container">
      <div class="row">
        <!-- About Content Start -->
        <div class="col-md-12 col-lg-8" data-aos="fade-up">
          <h2 class="text-cnce fz-32" style="color: #285a43 !important">
            Veuillez renseigner le formulaire suivant en cas de plaintes
          </h2>
        </div>
        <div class="col-md-12 col-lg-4 mb-5" data-aos="fade-up">
          <a href="/pdf/plaintes.pdf"
            target="_blank">
            <h4 class="text-cnce fz-32" style="color: #285a43 !important">
              NOTE RELATIVE DES PLAINTES REÇUES À l’ANGE&nbsp;
              <i class="fa fa-download"></i>
            </h4>
          </a>
        </div>
        <!-- About Content Start -->
      </div>

      <div class="container mb-5">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <form @submit.prevent="savePlainte()" enctype="multipart/form-data">
              <div class="row">
                <div class="mt-5 col-md-6 col-xl-6">
                  <input type="text" name="nom_prenom" class="form-control" placeholder="Votre nom & prénom *"
                    v-model="form.nom_prenom" required />
                </div>

                <div class="mt-5 col-md-6 col-xl-6">
                  <input type="text" name="localite" class="form-control" placeholder="Localité *"
                    v-model="form.localite" required />
                </div>

                <div class="mt-5 col-md-6 col-xl-6">
                  <input type="text" name="telephone" class="form-control" placeholder="Numéro de téléphone *"
                    v-model="form.telephone" required />
                </div>

                <div class="mt-5 col-md-6 col-xl-6">
                  <input type="email" name="email" class="form-control" placeholder="E-mail *" v-model="form.email"
                    required />
                </div>

                <div class="mt-5 col-md-12 col-xl-12">
                  <input type="file" class="form-control" @change="onFileSelected()" accept="image/*" required />
                </div>

                <div class="mt-5 col-md-12 col-xl-12">
                  <textarea name="message" id="" cols="30" rows="10" placeholder="votre message *"
                    v-model="form.message" required></textarea>
                </div>

                <div class="col-12 text-center mt-30">
                  <button class="btn btn-primary ange-btn-documentation" :loading="isloasding">
                    Envoyer votre plaintes
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-12 col-lg-4 mb-5">

          </div>
        </div>
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
      sendMessageBtn: false,
      isloasding: true,
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
    onFileSelected() {
      this.form.fichier = event.target.files[0];
    },

    async savePlainte() {
      try {
        this.isloasding = true;
        if (this.form) {
          // let formData = new FormData();
          // formData.append("nom_prenom", this.form.nom_prenom);
          // formData.append("localite", this.form.localite);
          // formData.append("telephone", this.form.telephone);
          // formData.append("email", this.form.email);
          // formData.append("message", this.form.message);
          // formData.append("localisation", this.form.localisation);
          // formData.append("fichier", this.form.fichier);

          const response = await this.$axios.post("/plainte/send", this.form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          const data = await response;
          if (data) {
            const $toast = useToast();
            $toast.success("Plainte envoyé avec succès", {
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
        } else {
          alert("Veuillez remplir tous les champs.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    validateEmail(email) {
      // Vérification de l'adresse email
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    },
  },
};
</script>

<style>
.text-cnce-processus {
  font-size: 20px;
}
</style>
