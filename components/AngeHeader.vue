<template>
  <div>
    <AngePublicite />
    <div class="header-section" :class="{ 'is-sticky header-transparent': isSticky }">
      <div class="header-inner">
        <div class="container" :class="{ 'position-relative': isSticky }">
          <div class="row justify-content-between align-items-center">
            <!-- Header Logo Start -->
            <div class="col-xl-2 col-auto order-0">
              <div class="header-logo">
                <NuxtLink to="/">
                  <img class="dark-logo" src="/images/logo/logo-ANGE.png" alt="Agency Logo" style="max-width: 100px" />
                  <img class="light-logo" src="/images/others/armoirie.png" alt="Agency Logo" />
                </NuxtLink>
              </div>
            </div>
            <!-- Header Logo End -->

            <!-- Header Main Menu Start -->
            <div
              class="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
              <div class="menu-column-area d-none d-xl-block position-static">
                <AngeNavigation :class="{ 'is-sticky': isSticky }" />
              </div>
              <!-- Header Search Start -->
              <div class="header-search-area">
                <!-- Header Login Start -->
                <!--                <div class="header-search">-->
                <!--                  <button-->
                <!--                    class="header-search-toggle"-->
                <!--                    :class="{ 'is-sticky': isSticky, 'sticky-icon': isSticky }"-->
                <!--                    @click="toggleClass('addClass', 'search-popup-open')"-->
                <!--                  >-->
                <!--                    <i class="fa fa-search"></i>-->
                <!--                  </button>-->
                <!--                </div>-->

                <!-- Header Login End -->
              </div>
              <!-- Header Search End -->

              <!-- Header Mobile Menu Toggle Start -->
              <div class="header-mobile-menu-toggle d-xl-none ml-sm-2" :class="{ 'is-sticky': isSticky }">
                <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                  <i :class="['icon-top', { 'sticky-icon': isSticky }]"></i>
                  <i :class="['icon-middle', { 'sticky-icon': isSticky }]"></i>
                  <i :class="['icon-bottom', { 'sticky-icon': isSticky }]"></i>
                </button>
              </div>

              <!-- Header Mobile Menu Toggle End -->
            </div>
            <!-- Header Main Menu End -->

            <!-- Header Right Start -->
            <div class="col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2">
              <NuxtLink to="/">
                <img src="/images/others/Blason-rt.jpg" alt="Agency Logo" style="max-width: 120px;" />
              </NuxtLink>
            </div>
            <!-- Header Right End -->
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

    //offcanvas search
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#search-popup");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>