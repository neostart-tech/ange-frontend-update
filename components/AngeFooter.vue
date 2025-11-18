<template>
  <div>
    <!-- Section principale du footer -->
    <div class="footer-section">
      <div class="container">

        <!-- En-tête -->
        <div class="footer-header row align-items-center mb-4">
          <div class="col-12 col-lg-6 mb-3 mb-lg-0">
            <div class="footer-title">
              <h3 class="footer-main-title">
                L'agence nationale de gestion de l'environnement, au cœur de la gouvernance environnementale
              </h3>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="footer-header-actions d-flex flex-column flex-sm-row justify-content-lg-end align-items-start">
              <div class="contact-btn mb-3 mb-sm-0 me-sm-3">
                <a href="/contactez-nous" class="btn-contact">Contactez-nous</a>
              </div>

              <div class="social-icons">
                <NuxtLink :to="footerData.footerAboutWidget.fbUrl" class="social-icon" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </NuxtLink>

                <NuxtLink :to="footerData.footerAboutWidget.linkedinUrl" class="social-icon" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </NuxtLink>

                <NuxtLink :to="footerData.footerAboutWidget.twitterUrl" class="social-icon" target="_blank">
                  <i class="fab fa-twitter"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <hr class="footer-divider">

        <!-- Contenu principal -->
        <div class="row section-padding pt-0">

          <!-- Colonne 1 - Logo et contact -->
          <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="footer-widget">
              <div class="footer-logo-section d-flex align-items-center mb-4">
                <NuxtLink to="/" class="d-flex align-items-center text-decoration-none">
                  <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo ANGE" class="ange-logo-style-footer" />
                  <span class="ange-title ms-3">ANGE</span>
                </NuxtLink>
              </div>

              <div class="footer-widget-content">
                <div class="contact-info-item d-flex align-items-start mb-3">
                  <i class="fa-solid fa-location-crosshairs contact-icon mt-1"></i>
                  <span class="contact-text">575, rue de l'Entente (Ex rue de l'OCAM)</span>
                </div>

                <div class="contact-info-item d-flex align-items-center mb-3">
                  <i class="fa-solid fa-phone contact-icon"></i>
                  <span class="contact-text">+228 22 21 21 53</span>
                </div>

                <div class="contact-info-item d-flex align-items-start mb-3">
                  <i class="fa-solid fa-id-badge contact-icon mt-1"></i>
                  <span class="contact-text">01 BP : 2244 Lomé TOGO</span>
                </div>

                <div class="contact-info-item d-flex align-items-center mb-3">
                  <i class="fa-solid fa-envelope contact-icon"></i>
                  <span class="contact-text">angeenvironnement@gmail.com</span>
                </div>

                <!-- NEWSLETTER -->
                <div class="newsletter-section">
                  <form @submit.prevent="subScribeForm" class="newsletter-form">
                    <input
                      type="email"
                      class="newsletter-input"
                      placeholder="Votre email"
                      v-model="form.email"
                    >
                    <button class="newsletter-btn" type="submit">
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- Colonne 2 - Liens 1 -->
          <div class="col-6 col-md-3 col-lg-2 mb-4">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitleOne }}
              </h4>

              <div class="footer-widget-content">
                <ul class="footer-links-list">
                  <li v-for="(nav, index) in footerData.navListOne" :key="index" class="footer-li-link">
                    <NuxtLink :to="nav.navUrl" target="_BLANK" class="link-show">
                      {{ nav.navTitle }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Colonne 3 - Liens 2 -->
          <div class="col-6 col-md-3 col-lg-3 mb-4">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitleThree }}
              </h4>

              <div class="footer-widget-content">
                <ul class="footer-links-list">
                  <li v-for="(nav, index) in footerData.navListThree" :key="index" class="footer-li-link">
                    <NuxtLink :to="nav.navUrl" class="link-show">{{ nav.navTitle }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Colonne 4 - Liens 3 -->
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitlefour }}
              </h4>

              <div class="footer-widget-content">
                <ul class="footer-links-list">
                  <li v-for="(nav, index) in footerData.navListfour" :key="index" class="footer-li-link">
                    <NuxtLink :to="nav.navUrl" class="link-show">{{ nav.navTitle }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="copyright-section">
      <div class="container">
        <p class="copyright">
          Copyright © 2024 ANGE. Tous droits réservés.
          Développé par
          <NuxtLink to="https://neostart.tech/" target="_blank" class="developer-link">
            NEO START TECHNOLOGY
          </NuxtLink>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import footerData from "~/data/footer.json";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export default {
  data() {
    return {
      footerData,
      form: {
        email: ""
      }
    };
  },

  methods: {
    async subScribeForm() {
      const toast = useToast();

      if (!this.form.email) {
        toast.error("Veuillez entrer une adresse email.");
        return;
      }

      try {
        const response = await this.$axios.post("/subscribe/new-member", this.form);

        if (response.data.code !== 201) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          this.form.email = "";
        }
      } catch (error) {
        console.error(error);
        toast.error("Une erreur est survenue");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-section {
  position: relative;
  width: 100%;
  min-height: 500px;
  background:
    linear-gradient(rgba(10, 75, 4, 0.85), rgba(10, 75, 4, 0.85)),
    url('/images/bg/bg-footer.jpg') center/cover no-repeat fixed;
  padding: 38px 0 20px;
}

.footer-header {
  padding: 20px 0;
}

.footer-main-title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  text-align: left;
}

.btn-contact {
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid #fff;
  display: inline-block;

  &:hover {
    background: #45a049;
    transform: translateY(-2px);
    color: white;
    text-decoration: none;
  }
}

/* Social icons */
.social-icons { 
  display: flex; 
  gap: 10px; 
}

.social-icon {
  width: 35px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #45a049;
  transition: all 0.3s ease;
  font-size: 16px;

  &:hover {
    background: #45a049;
    color: white;
    transform: translateY(-2px);
  }
}

/* DIVIDER */
.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin: 20px 0;
}

/* Logo */
.ange-logo-style-footer {
  background-color: white;
  border-radius: 200px;
  padding: 8px;
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}

.ange-title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

/* Infos contact */
.contact-info-item { margin-bottom: 15px; }
.contact-icon { color: white; width: 16px; margin-right: 12px; font-size: 14px; flex-shrink: 0; }
.contact-text { color: #e0e0e0; font-size: 14px; }

/* NEWSLETTER */
.newsletter-section { margin-top: 15px; }

.newsletter-form {
  display: flex;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 100%;
}

.newsletter-input {
  flex: 1;
  border: none;
  padding: 12px 15px;
  font-size: 14px;
  min-width: 0;
}

.newsletter-btn {
  background: transparent;
  border: 2px solid #4CAF50;
  color: #4CAF50;
  padding: 12px 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0;

  &:hover {
    background: #4CAF50;
    color: white;
    transform: scale(1.05);
  }
}

/* Widgets */
.footer-widget-title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: left;
}

.footer-links-list { 
  list-style: none; 
  padding: 0; 
  margin: 0; 
  text-align: left;
}

.footer-li-link { 
  margin-bottom: 10px;
}

.footer-li-link a {
  color: #e0e0e0;
  text-decoration: none;
  transition: 0.3s;
  font-size: 14px;
  display: block;

  &:hover {
    color: #fff;
    padding-left: 5px;
  }
}

/* Copyright */
.copyright-section { 
  background-color: #fff; 
}

.copyright {
  color: #4CAF50;
  text-align: center;
  font-size: 13px;
  padding: 20px 0;
  margin: 0;
}

.developer-link {
  color: #4CAF50;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
}


/* Tablettes */
@media (max-width: 992px) {
  .footer-section {
    padding: 30px 0 15px;
    min-height: auto;
  }
  
  .footer-main-title {
    font-size: 15px;
  }
  
  .ange-logo-style-footer {
    width: 70px;
    height: 70px;
  }
  
  .ange-title {
    font-size: 22px;
  }
}

/* Mobiles */
@media (max-width: 768px) {
  .footer-section {
    padding: 25px 0 10px;
  }
  
  .footer-main-title {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .footer-header {
    padding: 10px 0;
  }
  
  .ange-logo-style-footer {
    width: 60px;
    height: 60px;
  }
  
  .ange-title {
    font-size: 20px;
  }
  
  .footer-widget-title {
    font-size: 15px;
    margin-top: 15px;
  }
  
  .newsletter-form {
    max-width: 100%;
  }
  
  .copyright {
    font-size: 12px;
    padding: 15px 0;
    line-height: 1.5;
  }

  /* Sur mobile, toutes les colonnes prennent 100% de largeur */
  .row > [class*="col-"] {
    width: 100% !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }

  /* Les colonnes de liens côte à côte sur mobile */
  .col-6 {
    width: 50% !important;
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }
}

/* Très petits écrans */
@media (max-width: 576px) {
  .footer-main-title {
    font-size: 13px;
  }
  
  .btn-contact {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  .social-icon {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  .ange-logo-style-footer {
    width: 50px;
    height: 50px;
  }
  
  .ange-title {
    font-size: 18px;
  }
  
  .contact-text {
    font-size: 13px;
  }
  
  .footer-widget-title {
    font-size: 14px;
  }
  
  .footer-li-link a {
    font-size: 13px;
  }
  
  .newsletter-input {
    padding: 10px 12px;
    font-size: 13px;
  }
  
  .newsletter-btn {
    padding: 10px 15px;
    font-size: 14px;
  }

  /* Sur très petits écrans, les liens passent en colonne */
  .col-6 {
    width: 100% !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
}
</style>