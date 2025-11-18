<template>
  <div class="header-wrapper">
    <!-- Publicité au-dessus du header -->
    <AngePublicite 
      :class="{ 'is-hidden': isSticky }" 
      ref="publicite"
      @height-changed="updateHeaderPosition"
    /> 
    
    <!-- Header fixe -->
    <div 
      class="header-section" 
      :class="{ 'is-sticky': isSticky, 'header-transparent': !isSticky }"
      :style="headerStyle"
    >
      <div class="header-inner">
        <div class="container">
          <!-- Version Desktop -->
          <div class="row align-items-center d-none d-xl-flex">
            <!-- Partie 1: Logo ANGE -->
            <div class="col-auto">
              <div class="header-logo">
                <NuxtLink to="/">
                  <img class="dark-logo" :src="logoSrc" alt="Logo ANGE" />
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
                <img src="/images/others/Blason-rt.jpg" alt="Blason RT" />
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
                  <img class="dark-logo" :src="logoSrc" alt="Logo ANGE" />
                </NuxtLink>
              </div>
            </div>

            <!-- Blason à droite -->
            <div class="col-auto">
              <NuxtLink to="/">
                <img src="/images/others/Blason-rt.jpg" alt="Blason RT" />
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
      publiciteHeight: 40,
      headerHeight: 80,
    };
  },

  computed: {
    headerStyle() {
      if (this.isSticky) {
        return { top: '0px' };
      }
      return { top: `${this.publiciteHeight}px` };
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.updateHeaderPosition();
    window.addEventListener('resize', this.updateHeaderPosition);
    this.$nextTick(() => {
      this.setupHeightObserver();
    });
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener('resize', this.updateHeaderPosition);
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },

  methods: {
    handleScroll() {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        this.isSticky = true;
        this.logoSrc = "/images/logo/tird.png";
        this.isStickyImage = true;
      } else {
        this.isSticky = false;
        this.isStickyImage = false;
        this.logoSrc = "/images/logo/logo-ANGE.png";
      }
    },

    updateHeaderPosition() {
      this.$nextTick(() => {
        const publiciteElement = this.$refs.publicite?.$el;
        if (publiciteElement && !this.isSticky) {
          this.publiciteHeight = publiciteElement.offsetHeight;
        } else {
          this.publiciteHeight = 0;
        }

        const headerElement = this.$el.querySelector('.header-section');
        if (headerElement) {
          this.headerHeight = headerElement.offsetHeight;
        }

        this.updateBodyPadding();
      });
    },

    updateBodyPadding() {
      const totalHeight = this.isSticky ? this.headerHeight : this.publiciteHeight + this.headerHeight;
      document.body.style.paddingTop = `${totalHeight}px`;
    },

    setupHeightObserver() {
      const publiciteElement = this.$refs.publicite?.$el;
      if (publiciteElement && 'ResizeObserver' in window) {
        this.resizeObserver = new ResizeObserver(() => {
          this.updateHeaderPosition();
        });
        this.resizeObserver.observe(publiciteElement);
      }
    },

    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },

  watch: {
    isSticky() {
      this.updateHeaderPosition();
    }
  }
};
</script>

<style scoped>
.header-wrapper {
  position: relative;
}

.header-section {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1001;
  transition: all 0.4s ease;
  background: rgba(255, 255, 255, 0.98);
  padding: 15px 200px;
}

.header-section.is-sticky {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.15);
  padding: 8px 0px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-section.header-transparent {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: none;
  border-bottom: none;

}

.header-inner {
  position: relative;
}

/* Container avec marges */
.container {
  width: 100%;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}

.contact-cta {
  background-color: #007608;
  color: white !important;
  padding: 10px 20px;
  /* border-radius: 6px; */
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



/* ========== TAILLES DES LOGOS AVEC MARGES ========== */

/* Logo ANGE Desktop */
.d-none.d-xl-flex .col-auto:first-child img {
  max-width: 100px;
  height: auto;
  margin-left: 10px; /* Marge à gauche */
}

/* Blason Desktop */
.d-none.d-xl-flex .col-auto:last-child img {
  max-width: 100px;
  height: auto;
  margin-right: 10px; /* Marge à droite */
}

/* Logo ANGE Mobile */
.d-xl-none .col-auto:nth-child(2) img {
  max-width: 90px;
  height: auto;
}

/* Blason Mobile */
.d-xl-none .col-auto:last-child img {
  max-width: 80px;
  height: auto;
  margin-right: 10px; /* Marge à droite */
}

/* Menu hamburger Mobile */
.d-xl-none .col-auto:first-child {
  margin-left: 10px; /* Marge à gauche */
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
  transition: all 0.3s ease;
}

.header-section.is-sticky .d-none.d-xl-flex .col-auto:first-child img {
  max-width: 90px;
}

.header-section.is-sticky .d-none.d-xl-flex .col-auto:last-child img {
  max-width: 90px;
}

.header-section.is-sticky .d-xl-none .col-auto:nth-child(2) img {
  max-width: 70px;
}

.header-section.is-sticky .d-xl-none .col-auto:last-child img {
  max-width: 70px;
}

/* Classe pour masquer la publicité */
.is-hidden {
  display: none !important;
}

/* ========== CORRECTIONS RESPONSIVE AVEC MARGES ========== */

/* Desktop (1200px+) */
@media (max-width: 1800px) {
  .header-section {
  padding: 15px 0px !important;
}
}



@media (min-width: 1200px) {
  .container {
    padding-left: 40px;
    padding-right: 40px;
  }
  
  .d-none.d-xl-flex .col-auto:first-child img {
    margin-left: 20px;
  }
  
  .d-none.d-xl-flex .col-auto:last-child img {
    margin-right: 20px;
  }
}


@media (max-width: 1800px) {
  .header-section {
  
  padding: 15px 100px;
}
}

/* Tablet (768px - 1199px) */
@media (max-width: 1199px) and (min-width: 768px) {
  .container {
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .header-section {
    padding: 12px 0;
  }
  
  .header-section.is-sticky {
    padding: 6px 0;
  }
  
  .d-xl-none .col-auto:nth-child(2) img {
    max-width: 85px;
  }
  
  .d-xl-none .col-auto:last-child img {
    max-width: 75px;
    margin-right: 15px;
  }
  
  .d-xl-none .col-auto:first-child {
    margin-left: 15px;
  }
}

/* Mobile (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .header-section {
    padding: 10px 0;
  }
  
  .header-section.is-sticky {
    padding: 5px 0;
  }
  
  .d-xl-none .col-auto:nth-child(2) img {
    max-width: 80px;
  }
  
  .d-xl-none .col-auto:last-child img {
    max-width: 70px;
    margin-right: 12px;
  }
  
  .d-xl-none .col-auto:first-child {
    margin-left: 12px;
  }
  
  .header-mobile-menu-toggle .icon-top,
  .header-mobile-menu-toggle .icon-middle,
  .header-mobile-menu-toggle .icon-bottom {
    width: 22px;
    height: 2.5px;
  }
}

/* Petit mobile (480px - 575px) */
@media (max-width: 575px) and (min-width: 480px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .header-section {
    padding: 8px 0;
  }
  
  .header-section.is-sticky {
    padding: 4px 0;
  }
  
  .d-xl-none .col-auto:nth-child(2) img {
    max-width: 75px;
  }
  
  .d-xl-none .col-auto:last-child img {
    max-width: 65px;
    margin-right: 10px;
  }
  
  .d-xl-none .col-auto:first-child {
    margin-left: 10px;
  }
  
  .header-mobile-menu-toggle .icon-top,
  .header-mobile-menu-toggle .icon-middle,
  .header-mobile-menu-toggle .icon-bottom {
    width: 20px;
    height: 2px;
  }
  
  .contact-cta {
    padding: 8px 16px;
    font-size: 13px;
  }
}

/* Très petit mobile (375px - 479px) */
@media (max-width: 479px) and (min-width: 375px) {
  .container {
    padding-left: 12px;
    padding-right: 12px;
  }
  
  .header-section {
    padding: 6px 0;
  }
  
  .header-section.is-sticky {
    padding: 3px 0;
  }
  
  .d-xl-none .col-auto:nth-child(2) img {
    max-width: 70px;
  }
  
  .d-xl-none .col-auto:last-child img {
    max-width: 60px;
    margin-right: 8px;
  }
  
  .d-xl-none .col-auto:first-child {
    margin-left: 8px;
  }
  
  .header-mobile-menu-toggle .icon-top,
  .header-mobile-menu-toggle .icon-middle,
  .header-mobile-menu-toggle .icon-bottom {
    width: 18px;
    height: 2px;
  }
  
  .contact-cta {
    padding: 6px 12px;
    font-size: 12px;
  }
}

/* Mobile extra small (< 375px) */
@media (max-width: 374px) {
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .header-section {
    padding: 5px 0;
  }
  
  .header-section.is-sticky {
    padding: 2px 0;
  }
  
  .d-xl-none .col-auto:nth-child(2) img {
    max-width: 65px;
  }
  
  .d-xl-none .col-auto:last-child img {
    max-width: 55px;
    margin-right: 6px;
  }
  
  .d-xl-none .col-auto:first-child {
    margin-left: 6px;
  }
  
  .header-mobile-menu-toggle .icon-top,
  .header-mobile-menu-toggle .icon-middle,
  .header-mobile-menu-toggle .icon-bottom {
    width: 16px;
    height: 1.5px;
  }
  
  .contact-cta {
    padding: 5px 10px;
    font-size: 11px;
  }
}

/* Ajustement pour le mode paysage mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .header-section {
    padding: 5px 0;
  }
}
</style>