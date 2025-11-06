<template>
  <AngeQuiSommeNous/>
  <AngeRealisation/>
  <AngeMissionvaleurVision/>
  <AngeObjectifs/>
 
</template>

<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'Qui sommes-nous ?',
  description: 'Découvrez notre mission et notre vision'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' }
])

// Fonctions si besoin
const updatePageData = (newTitle, newDescription) => {
  pageData.value.title = newTitle
  pageData.value.description = newDescription
}

// Exposer des données/méthodes au template si nécessaire
defineExpose({
  pageData,
  breadcrumbs,
  updatePageData
})
</script>

<style scoped>
body{
    background: #f7f7f7;
    margin: 0;
    padding: 0;

}
.container {
  max-width: 1200px;
  margin: 0 ;
  padding: 0 ;
}

.grande-div {
  padding: 60px 0;
  align-items: flex-start;
}

.enfant-1-gauche {
  flex: 1;
  min-width: 0; 
}

.enfant-2.droite {
  flex-shrink: 0; 
}

.title {
  position: relative;
  margin-bottom: 30px;
}

.title h6 {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.title h1 {
  position: relative;
  display: inline-block;
  margin: 0;
  padding-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  color: #333;
  width: 100%;
}

/* Trait long (100%) - en dessous */
.title::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #e2ebee;
}

/* Trait court (largeur du texte) - au dessus */
.title h1::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 20%;
  height: 3px;
  background: #000;
  z-index: 2;
}

.content {
  gap: 30px;
}

.left, .right {
  flex: 1;
  min-width: 0;
}

.left p, .right p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

.text-justify {
  text-align: justify;
}

/* Styles pour les images */
.img1, .img2 {
  flex-shrink: 0;
}

.img1 img, .img2 img {
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Banner styles */
.banner {
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 331px !important;
  height: 150px !important;
  padding: 20px !important;
  margin-top: 0 !important;
}

.banner button {
  background: transparent !important;
  color: white !important;
  border: 1px solid #fff !important;
  border-radius: 0px !important;
  padding: 8px 20px !important;
}

.banner button:hover {
  transform: translateY(-1px);
  transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 1200px) {
  .grande-div {
    gap: 30px;
  }
  
  .content {
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .grande-div {
    flex-direction: column;
    gap: 40px;
  }
  
  .enfant-2.droite {
    align-self: center;
  }
  
  .title h1 {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .grande-div {
    padding: 40px 0;
  }
  
  .content {
    flex-direction: column;
    gap: 20px;
  }
  
  .title h1 {
    font-size: 1.4rem;
    padding-bottom: 15px;
  }
  
  .title::after,
  .title h1::after {
    bottom: 15px;
  }
  
  .img1 img,
  .img2 img,
  .banner {
    width: 100% !important;
    max-width: 331px;
  }
  
  .img1 img {
    height: 150px !important;
  }
  
  .img2 img {
    height: 400px !important;
  }
  
  .banner {
    height: auto !important;
    padding: 15px !important;
    border-radius: 0 0 8px 8px !important;
  }
}

@media (max-width: 480px) {
  .title h1 {
    font-size: 1.3rem;
  }
  
  .left p, .right p {
    font-size: 0.9rem;
  }
  
  .banner h1 {
    font-size: 2rem !important;
  }
  
  .banner span {
    font-size: 0.9rem !important;
  }
  
  .banner button {
    padding: 6px 16px !important;
    font-size: 0.9rem !important;
  }
}
</style>