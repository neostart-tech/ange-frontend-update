<template>
  <div>
    
    <div
      class="page-title-section section-padding-top bg-cover ange-about"
      data-overlay="0.7"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
      <div class="page-breadcrumb position-static">
        <div class="container">
          <span style="font-size: 25px; font-weight: bold !important">{{
            activePageName
          }}</span>
          <ul class="breadcrumb">
            <li class="" v-for="(other, index) in others" :key="index">
              <nuxt-link :to="other.url ?? 'javascript::void(0)'">
                <span style="font-weight: 500">
                  {{ other.title }}
                </span>
              </nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <span style="font-weight: 500">{{ activePageName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["backgroundUrl", "activePageName", "others"],
};
</script>

<style>
.about-ange {
  color: #fff;
  font-family: sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.the-div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 60px;
  /* ajustez selon vos préférences */
  /* background-color: rgba(255, 255, 255, 0.7); */
}

.ange-about::before {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.68));
}
</style>
