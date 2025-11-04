<template>
  <div class="blog">
    <div class="thumbnail">
      <NuxtLink :to="`/actualite/${blog.slug}`" class="image">
        <img
          :src="`${img_url_back}/${blog.images[0].url}`"
          :alt="blog.titre"
          style="width: 100%; height: 230px; object-fit: cover"
        />
      </NuxtLink>
    </div>
    <div class="info">
      <ul class="meta">
        <li><i class="far fa-calendar"></i>{{ blog.created_at }}</li>
      </ul>
      <h3 class="title">
        <NuxtLink :to="`/actualite/${blog.slug}`" class="hover-actu-last">{{
          blog.short_titre
        }}</NuxtLink>
      </h3>
      <NuxtLink
        :to="`/actualite/${blog.slug}`"
        class="simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
      >
        Lire la suite &nbsp;
        <img src=" /images/svg/icons/right-arrow.svg" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import config from "~~/config";

export default {
  props: ["blog"],

  data() {
    return {
      img_url_back: null,
    };
  },

  mounted() {
    this.img_url_back = config.app_back_url_img;
  },
};
</script>
