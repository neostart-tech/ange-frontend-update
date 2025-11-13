<template>
  <div>
    <AngePublicite :class="{ 'is-hidden' : isSticky}" />
    <div class="header-section" :class="{ 'is-sticky': isSticky, 'header-transparent': !isSticky }">
      <div class="header-inner">
        <div class="container">
          <!-- Version Desktop -->
          <div class="row align-items-center d-none d-xl-flex">
            <!-- Partie 1: Logo ANGE -->
            <div class="col-auto">
              <div class="header-logo">
                <NuxtLink to="/">
                  <img class="dark-logo" :src="logoSrc" alt="Logo ANGE" style="max-width: 100px" />
                </NuxtLink>
              </div>
            </div>

            <!-- Partie 2: Navigation principale -->
            <div class="col d-flex justify-content-center">
              <div class="menu-column-area">
                <AngeNavigation :class="{ 'is-sticky': isSticky }" />
              </div>
            </div>

            <!-- Partie 3: Bouton Contact -->
            <div class="col-auto">
              <NuxtLink to="/contactez-nous" class="contact-cta">
                <i class="fa fa-envelope me-2"></i>
                Contactez-nous
              </NuxtLink>
            </div>

            <!-- Partie 4: Logo secondaire -->
            <div class="col-auto">
              <NuxtLink to="/">
                <img src="/images/others/Blason-rt.jpg" alt="Blason RT" style="max-width: 100px;" />
              </NuxtLink>
            </div>
          </div>

          <!-- Version Mobile -->
          <div class="row align-items-center justify-content-between d-xl-none">
            <!-- Menu hamburger à gauche -->
            <div class="col-auto">
              <div class="header-mobile-menu-toggle">
                <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                  <i :class="['icon-top', { 'sticky-icon': isSticky }]"></i>
                  <i :class="['icon-middle', { 'sticky-icon': isSticky }]"></i>
                  <i :class="['icon-bottom', { 'sticky-icon': isSticky }]"></i>
                </button>
              </div>
            </div>

            <!-- Logo au centre -->
            <div class="col-auto">
              <div class="header-logo">
                <NuxtLink to="/">
                  <img class="dark-logo" :src="logoSrc" alt="Logo ANGE" style="max-width: 90px" />
                </NuxtLink>
              </div>
            </div>

            <!-- Blason à droite -->
            <div class="col-auto">
              <NuxtLink to="/">
                <img src="/images/others/Blason-rt.jpg" alt="Blason RT" style="max-width: 80px;" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isStickyImage: false,
      logoSrc: "/images/logo/logo-ANGE.png",
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) { // Réduit à 100px pour que ça colle plus tôt
        this.isSticky = true;
        this.logoSrc = "/images/logo/tird.png";
        this.isStickyImage = true;
      } else {
        this.isSticky = false;
        this.isStickyImage = false;
        this.logoSrc = "/images/logo/logo-ANGE.png";
      }
    },

    // offcanvas mobile menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>

<style scoped>
.header-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s ease;
  background:  rgba(255, 255, 255, 0.98);
  padding: 15px 0;
}

.header-section.is-sticky {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.is-hidden{
  display: none !important;
}

.header-section.header-transparent {
  background:  rgba(255, 255, 255, 0.98);
  box-shadow: none;
  border-bottom: none;
}

.header-inner {
  position: relative;
}

.contact-cta {
  background-color: #007608;
  color: white !important;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 14px;
  border: 2px solid #007608;
}

.contact-cta:hover {
  background-color: transparent;
  color: #007608 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 118, 8, 0.2);
}

/* Styles pour le menu hamburger */
.header-mobile-menu-toggle .toggle {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.header-mobile-menu-toggle .icon-top,
.header-mobile-menu-toggle .icon-middle,
.header-mobile-menu-toggle .icon-bottom {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
}

.header-section.header-transparent .header-mobile-menu-toggle .icon-top,
.header-section.header-transparent .header-mobile-menu-toggle .icon-middle,
.header-section.header-transparent .header-mobile-menu-toggle .icon-bottom {
  background-color: white;
}

.header-mobile-menu-toggle .sticky-icon {
  background-color: #007608;
}

.header-mobile-menu-toggle .toggle:hover .icon-top,
.header-mobile-menu-toggle .toggle:hover .icon-middle,
.header-mobile-menu-toggle .toggle:hover .icon-bottom {
  background-color: #007608;
}

/* Tailles pour le blason - Desktop */
.d-none.d-xl-flex .col-auto:last-child img {
  max-width: 100px !important;
  height: auto;
}

/* Version Mobile - Disposition corrigée */
.d-xl-none .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.d-xl-none .col-auto {
  flex: 0 0 auto;
}

/* Menu hamburger à gauche */
.d-xl-none .col-auto:first-child {
  order: 1;
}

/* Logo au centre */
.d-xl-none .col-auto:nth-child(2) {
  order: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* Blason à droite */
.d-xl-none .col-auto:last-child {
  order: 3;
  margin-left: auto;
}

/* Ajustement du logo en mode sticky */
.header-section.is-sticky .header-logo img {
  max-width: 90px !important;
  transition: all 0.3s ease;
}

.header-section.is-sticky .d-none.d-xl-flex .col-auto:last-child img {
  max-width: 90px !important;
}

.header-section.is-sticky .d-xl-none .col-auto:last-child img {
  max-width: 70px !important;
}

/* Responsive pour la version mobile */
@media (max-width: 1199px) {
  .header-logo img {
    max-width: 90px !important;
  }
}

@media (max-width: 767px) {
  .header-section {
    padding: 10px 0;
  }
  
  .header-section.is-sticky {
    padding: 6px 0;
  }
  
  .header-logo img {
    max-width: 80px !important;
  }
  
  /* Blason mobile */
  .d-xl-none .col-auto:last-child img {
    max-width: 70px !important;
  }
}

@media (max-width: 575px) {
  .header-logo img {
    max-width: 70px !important;
  }
  
  /* Blason mobile petit écran */
  .d-xl-none .col-auto:last-child img {
    max-width: 65px !important;
  }
  
  .header-mobile-menu-toggle .icon-top,
  .header-mobile-menu-toggle .icon-middle,
  .header-mobile-menu-toggle .icon-bottom {
    width: 22px;
    height: 2px;
  }
}

/* Pour les très petits écrans */
@media (max-width: 375px) {
  .header-logo img {
    max-width: 65px !important;
  }
  
  /* Blason mobile très petit écran */
  .d-xl-none .col-auto:last-child img {
    max-width: 60px !important;
  }
}

/* Correction pour l'espace sous le header fixe */
body {
  padding-top: 80px; /* Ajustez cette valeur selon la hauteur de votre header */
}

/* Ajustement pour les écrans mobiles */
@media (max-width: 767px) {
  body {
    padding-top: 70px;
  }
}
</style>