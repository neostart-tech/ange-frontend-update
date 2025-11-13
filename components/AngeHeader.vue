<template>
  <div>
    <AngePublicite />
    <div class="header-section" :class="{ 'is-sticky header-transparent': isSticky }">
      <div class="header-inner">
        <div class="container" :class="{ 'position-relative': isSticky }">
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
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
        this.logoSrc = "/images/logo/tird.png";
        this.isStickyImage = true;
      } else {
        this.isSticky = false;
        this.isStickyImage = false;
        this.logoSrc = "/images/logo/logo-ANGE.png";
      }
    });
  },

  methods: {
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
  transition: all 0.3s ease;
  padding: 10px 0;
}

.header-section.is-sticky {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
}

.header-inner {
  position: relative;
  z-index: 999;
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

.header-mobile-menu-toggle .sticky-icon {
  background-color: #007608;
}

.header-mobile-menu-toggle .toggle:hover .icon-top,
.header-mobile-menu-toggle .toggle:hover .icon-middle,
.header-mobile-menu-toggle .toggle:hover .icon-bottom {
  background-color: #007608;
}

/* Tailles augmentées pour le blason */
/* Desktop */
.d-none.d-xl-flex .col-auto:last-child img {
  max-width: 100px !important;
  height: auto;
}

.d-xl-none .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.d-xl-none .col-auto {
  flex: 0 0 auto;
}

.d-xl-none .col-auto:first-child {
  order: 1;
}

.d-xl-none .col-auto:nth-child(2) {
  order: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.d-xl-none .col-auto:last-child {
  order: 3;
  margin-left: auto;
}

@media (max-width: 1199px) {
  .header-logo img {
    max-width: 90px !important;
  }
}

@media (max-width: 767px) {
  .header-section {
    padding: 8px 0;
  }
  
  .header-logo img {
    max-width: 80px !important;
  }
  
  .d-xl-none .col-auto:last-child img {
    max-width: 70px !important;
  }
}

@media (max-width: 575px) {
  .header-logo img {
    max-width: 70px !important;
  }
  
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

@media (max-width: 375px) {
  .header-logo img {
    max-width: 65px !important;
  }
  
  .d-xl-none .col-auto:last-child img {
    max-width: 60px !important;
  }
}

.header-section.is-sticky .col-auto:last-child img {
  max-width: 90px !important;
}

.header-section.is-sticky .d-xl-none .col-auto:last-child img {
  max-width: 70px !important; 
}
</style>