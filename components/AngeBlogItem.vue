<template>
  <div class="blog">
    <div class="thumbnail">
      <NuxtLink :to="`/actualite/${blog.slug}`" class="image">
        <img
          :src="`${img_url_back}/${blog.images[0].url}`"
          :alt="blog.titre"
        />
      </NuxtLink>
    </div>
    <div class="info">
      <ul class="meta">
        <li>
          <span class="date-underline">{{ formattedDate }}</span>
        </li>
      </ul>
      <h3 class="title">
        <NuxtLink :to="`/actualite/${blog.slug}`" class="hover-actu-last">
          {{ blog.short_titre }}
        </NuxtLink>
      </h3>
      <NuxtLink
        :to="`/actualite/${blog.slug}`"
        class="read-more-blue"
      >
        Lire la suite &nbsp;
        <i class="fa fa-arrow-right"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import config from "~~/config";
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
});

const img_url_back = ref(null);

const formattedDate = computed(() => {
  if (!props.blog.created_at) return '';
  
  const date = new Date(props.blog.created_at);
  const options = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('fr-FR', options) ?? props.blog.created_at;
});

onMounted(() => {
  img_url_back.value = config.app_back_url_img;
});
</script>

<style scoped>
.blog {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.thumbnail {
  flex-shrink: 0;
}

.thumbnail img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog:hover .thumbnail img {
  transform: scale(1.05);
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.meta {
  margin: 0 0 10px 0;
  padding: 0;
  list-style: none;
}

.meta li {
  margin: 0;
}

.date-underline {
  display: inline-block;
  position: relative;
  font-weight: 700;
  padding-bottom: 2px;
  font-size: 13px;
}

.date-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 1px;
  background-color: #0b9dd1;
  opacity: 0.8;
  transition: width 0.3s ease;
}

.meta li:hover .date-underline::after {
  width: 80%;
}

.title {
  flex: 1;
  margin: 0 0 15px 0;
  font-size: 13px !important;
  line-height: 1.4;
  min-height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.title a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.title a:hover {
  color: #0b9dd1;
}

.read-more-blue {
  color: #0b9dd1 !important;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 4px;
  background: transparent;
  margin-top: auto;
  align-self: flex-start;
}

.read-more-blue:hover {
  background-color: #0b9dd1;
  color: white !important;
  text-decoration: none;
  transform: translateY(-2px);
}

.read-more-blue i {
  transition: transform 0.3s ease;
}

.read-more-blue:hover i {
  transform: translateX(3px);
}
</style>