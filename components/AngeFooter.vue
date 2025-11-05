<template>
  <div
    class="footer-section"
    style="background-image: linear-gradient(-90deg, #016a98 0%, #146C53 100%),url('');
  padding: 38px 0 0;"
   
  >
    <div class="container">
      <!-- Footer Top Widgets Start -->
      <div class="row section-padding pt-0 mtn-30">
        <!-- Footer Widget Start -->
        <div class="col-xl-3 col-md-4 col-sm-6 col-12 mt-30">
          <div class="footer-widget">
            <div class="footer-logo">
              <NuxtLink to="/">
                <img
                  :src="footerData.footerAboutWidget.logoSrc"
                  alt="Logo"
                  class="ange-logo-style-footer"
                  style="max-width: 65% !important"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->

        <!-- Footer Widget Start -->
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleOne }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li
                  v-for="(nav, index) in footerData.navListOne"
                  :key="index"
                  class="footer-li-link"
                >
                  <NuxtLink :to="nav.navUrl" target="_BLANK" class="link-show"
                    >{{ nav.navTitle }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->

        <!-- Footer Widget Start -->
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleTwo }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li
                  v-for="(nav, index) in footerData.navListTwo"
                  :key="index"
                  class="footer-li-link"
                >
                  <NuxtLink :to="nav.navUrl" class="link-show">{{
                    nav.navTitle
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->

        <!-- Footer Widget Start -->
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleThree }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li
                  v-for="(nav, index) in footerData.navListThree"
                  :key="index"
                  class="footer-li-link"
                >
                  <NuxtLink :to="nav.navUrl" class="link-show">{{
                    nav.navTitle
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Footer Widget End -->
      </div>
      <!-- Footer Top Widgets End -->
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-5 text-center mb-2">
          <div class="row">
            <span class="nous-contacter">Nous contacter avec liberté</span>
            <div class="row mt-5 mb-4">
              <div class="col-4">
                <NuxtLink
                  :to="footerData.footerAboutWidget.linkedinUrl"
                  target="_blank"
                  class="icon-reseaux-sociaux"
                >
                  <div class="icon-reseaux-sociaux">
                    <img
                      src="/images/svg/icons/linkedIn.svg"
                      class="text-center"
                      style="padding: 12px"
                    />
                  </div>
                </NuxtLink>
              </div>

              <div class="col-4">
                <NuxtLink
                  :to="footerData.footerAboutWidget.fbUrl"
                  target="_blank"
                  class="icon-reseaux-sociaux"
                >
                  <div class="icon-reseaux-sociaux">
                    <img
                      src="/images/svg/icons/facebook.svg"
                      alt=""
                      class="text-center"
                      style="padding: 12px"
                    />
                  </div>
                </NuxtLink>
              </div>

              <div class="col-4">
                <NuxtLink
                  :to="footerData.footerAboutWidget.twitterUrl"
                  target="_blank"
                  class="icon-reseaux-sociaux"
                >
                  <div class="icon-reseaux-sociaux">
                    <img
                      src="/images/svg/icons/twitter.svg"
                      alt=""
                      class="text-center"
                      style="padding: 12px"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  </div>

  <div style="overflow: hidden" :style="{ backgroundColor: '#121212' }">
    <div class="container">
      <!-- Footer Copyright Start -->
      <div class="row">
        <div class="col">
          <p class="copyright" style="border: none !important">
            Copyright © 2024 ANGE. Tous droits réservés. Développé par
            <NuxtLink to="https://neostart.tech/" target="_blank"
              >NEO START TECHNOLOGY
            </NuxtLink>
          </p>
        </div>
      </div>
      <!-- Footer Copyright End -->
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

<style lang="scss">
.ange-logo-style-footer {
  background-color: white;
  border-radius: 200px;
}

.footer-li-link {
  color: whitesmoke;
}

.link-show:hover {
  color: #fff;
}

.nous-contacter {
  color: #fff;
  text-align: center;
  font-family: sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.icon-reseaux-sociaux {
  width: 57px;
  height: 57px;
  flex-shrink: 0;
  border: 0.5px solid #fff;
  border-radius: 50%;
  background-color: transparent;
}
</style>
