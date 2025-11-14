<template>
  <div>
    <!-- Section principale du footer avec l'image de fond et l'overlay -->
    <div class="footer-section">
      <div class="container">
        <!-- En-tête du footer -->
        <div class="footer-header d-flex justify-content-between align-items-center mb-4">
          <div class="footer-title">
            <h3 class="footer-main-title">L'agence nationale de gestion de l'environnement, au cœur de la gouvernance
              environnementale</h3>
          </div>
          <div class="footer-header-actions d-flex align-items-center">
            <div class="contact-btn me-3">
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

        <hr class="footer-divider">

        <!-- Contenu principal du footer -->
        <div class="row section-padding pt-0 mtn-30">
          <!-- Colonne 1 - Logo et informations de contact -->
          <div class="col-xl-4 col-md-4 col-sm-6 col-12 mt-30">
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
                <div class="contact-info-item d-flex align-items-center mb-4">
                  <i class="fa-solid fa-envelope contact-icon"></i>
                  <span class="contact-text">angeenvironnement@gmail.com</span>
                </div>
                <div class="row mt-4" >
                  <div class="col-12" >
                    <div class="newsletter-section">
                      <div class="newsletter-form">
                        <input type="email" class="newsletter-input" placeholder="Votre email">
                        <button class="newsletter-btn" type="button">
                          <i class="fas fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Colonne 4 - Liens 3 -->
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 mt-30">
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

          <!-- Colonne 2 - Liens 1 -->
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
            <div class="footer-widget">
              <h4 class="footer-widget-title">
                {{ footerData.footerLinkTitleOne }}
              </h4>
              <div class="footer-widget-content">
                <ul class="footer-links-list">
                  <li v-for="(nav, index) in footerData.navListOne" :key="index" class="footer-li-link">
                    <NuxtLink :to="nav.navUrl" target="_BLANK" class="link-show">{{ nav.navTitle }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Colonne 3 - Liens 2 -->
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 mt-30">
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

    <!-- Section Copyright -->
    <div class="copyright-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="copyright">
              Copyright © 2024 ANGE. Tous droits réservés. Développé par
              <NuxtLink to="https://neostart.tech/" target="_blank" class="developer-link">
                NEO START TECHNOLOGY
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footerData from "~/data/footer.json";

export default {
  data() {
    return {
      footerData,
    };
  },
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

/* En-tête du footer */
.footer-header {
  padding: 20px 0;
}

.footer-main-title {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  white-space: nowrap;
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

  &:hover {
    background: #45a049;
    transform: translateY(-2px);
    color: white;
    text-decoration: none;
  }
}

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
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;

  &:hover {
    background: #45a049;
    color: white;
    transform: translateY(-2px);
  }
}

.footer-divider {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin: 20px 0;
}

/* Section Logo et informations */
.ange-logo-style-footer {
  background-color: white;
  border-radius: 200px;
  padding: 8px;
  transition: transform 0.3s ease;
  width: 80px;
  height: 80px;
  object-fit: contain;

  &:hover {
    transform: scale(1.05);
  }
}

.ange-title {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-info-item {
  margin-bottom: 15px;
}

.contact-icon {
  color: white;
  width: 16px;
  margin-right: 12px;
  font-weight: 900;
  flex-shrink: 0;
  font-size: 14px;
}

.contact-text {
  color: #e0e0e0;
  font-size: 14px;
  line-height: 1.4;
}

/* Newsletter - Longueur ajustée */
.newsletter-section {
  margin-top: 0;
  padding-top: 10px;

}

.newsletter-form {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  /* Prend toute la largeur disponible */
  max-width: 100%;
  /* Longueur augmentée */
  margin-top: 10px;

}

.newsletter-input {
  flex: 1;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  background: #fff;
  outline: none;
  width: 8px !important;

  &::placeholder {
    color: #999;
    font-size: 13px;
  }
}

.newsletter-btn {
  background: #4CAF50;
  border: none;
  color: white;
  padding: 12px 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 50px;
  flex-shrink: 0;

  &:hover {
    background: #45a049;
  }

  &:focus {
    outline: none;
  }
}

/* Widgets du footer */
.footer-widget {
  margin-bottom: 0;
}

.footer-widget-title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-li-link {
  margin-bottom: 12px;

  a {
    color: #e0e0e0;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 14px;
    display: block;
    padding: 4px 0;
    line-height: 1.4;

    &:hover {
      color: #fff;
      padding-left: 5px;
    }
  }
}

.link-show {
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateX(5px);
  }
}

/* Section copyright */
.copyright-section {
  background-color: #fff;
  overflow: hidden;
}

.copyright {
  color: #4CAF50;
  text-align: center;
  font-size: 13px;
  margin: 0;
  padding: 20px 0;
  border: none !important;
}

.developer-link {
  color: #4CAF50 !important;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 13px;

  &:hover {
    color: #66BB6A !important;
    text-decoration: underline;
  }
}

// Responsive Design
@media (max-width: 1200px) {
  .footer-main-title {
    font-size: 13px;
  }

  .ange-title {
    font-size: 20px;
  }

  .newsletter-form {
    max-width: 350px;
    /* Ajustement pour écrans moyens */
  }
}

@media (max-width: 992px) {
  .footer-header {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .footer-main-title {
    font-size: 14px;
    white-space: normal;
    text-align: center;
    line-height: 1.4;
  }

  .footer-header-actions {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .ange-logo-style-footer {
    width: 60px;
    height: 60px;
  }

  .ange-title {
    font-size: 18px;
  }

  .contact-btn {
    margin-right: 0 !important;
  }

  .newsletter-form {
    max-width: 100%;
    /* Prend toute la largeur sur tablettes */
    margin: 10px auto 0;
  }
}

@media (max-width: 768px) {
  .footer-section {
    background-attachment: scroll;
    padding: 25px 0 20px;
  }

  .footer-widget-title {
    font-size: 15px;
    margin-bottom: 15px;
  }

  .contact-text {
    font-size: 13px;
  }

  .newsletter-input {
    padding: 10px 15px;
    font-size: 13px;
  }

  .newsletter-btn {
    padding: 10px 15px;
  }

  .footer-li-link {
    margin-bottom: 10px;

    a {
      font-size: 13px;
    }
  }

  .newsletter-section {
    text-align: center;
    margin-top: 20px;
  }

  .newsletter-form {
    max-width: 100%;
    margin: 10px auto 0;
  }
}

@media (max-width: 576px) {
  .footer-widget {
    text-align: center;
    margin-bottom: 25px;
  }

  .ange-logo-style-footer {
    width: 50px;
    height: 50px;
  }

  .ange-title {
    font-size: 16px;
  }

  .footer-header-actions {
    flex-direction: column;
    gap: 15px;
  }

  .footer-main-title {
    font-size: 12px;
  }

  .contact-info-item {
    justify-content: center;
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  .footer-logo-section {
    justify-content: center;
  }

  .newsletter-form {
    max-width: 100%;
  }
}
</style>