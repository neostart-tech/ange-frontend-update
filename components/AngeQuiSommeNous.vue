<template>
  <div class="container">
    <div class="grande-div d-flex gap-5">
      <div class="enfant-1-gauche mt-5">
        <div class="title mt-5">
          <h6>Qui sommes-nous ?</h6>
          <h1>Batir un avenir durable par la gestion environnementale</h1>
        </div>
        <div class="content d-flex gap-5">
          <div class="left  mt-5">
            <p class="mb-3 text-justify"> L'Agence Nationale de Gestion de l'Environnement
              (ANGE) est un établissement public administratif , doté d'une
              personnalité morale et d'une autonomie financière.</p>

            <p class="text-justify">
              Créée par la loi n° 2008-005 du 30 mai 2008 portant loi-cadre sur l'environnement. La
              vision de l'ANGE est de « servir d'institution d'appui à la mise en
              œuvre de la politique nationale de l'environnement telle que définie
              par le gouvernement dans le cadre du plan national de développement
            </p>
          </div>
          <div class="right  mt-5">
            <p class="mb-3 text-justify">À travers nos missions, nous nous engageons à offrir un service de qualité en matière
              d'évaluation, de suivi et d'information environnementale, au bénéfice d'un
              développement durable à l'horizon 2030.</p>
            <p class="text-justify">

              Nos domaines d'action couvrent L'évaluation environnementale,La diffusion de l'information
              environnementale,
              Le suivi de la mise
              en œuvre des politiques environnementales, L'appui à la durabilité des projets de développement
            </p>
          </div>
        </div>

      </div>
      <div class="enfant-2 droite">
        <div class="d-flex flex-column">
          <div class="img1 mb-3">
            <img src="/images/others/batiment.jpg" alt="image" class="img-fluid"
              style="width: 331px; height: 187px; object-fit: cover;" />
          </div>
          <div class="img2 mb-0">
            <div class="img" style=" border-radius: 0px; ">
              <img src="/images/others/batiment.jpg" alt="image" class="img-fluid"
                style="width: 331px; height: 478px; object-fit: cover; border-radius: 0px; " />
            </div>
          </div>
          <div class="banner d-flex justify-center text-center flex-column"
               style="width: 331px; height: 180px !important; background: #007608; color: #fff; padding: 20px; margin-top: 0;">
            <div class="top">
              <h1 style="font-size: 2.5rem; margin: 0; line-height: 1;color: #fff;">13 +</h1>
              <span style="font-size: 1rem;">années d'expériences</span>
            </div>
            <div class="bottom mt-2">
              <button style="background: transparent; color: #fff; border: 1px solid #fff; padding: 8px 20px; 
                            border-radius: 0px; font-weight: 600; cursor: pointer; 
                            display: flex; align-items: center; gap: 8px; margin: 0 auto;margin-bottom: 500px !important;">
                Contactez-nous
                <i class="fa fa-arrow-right" style="font-size: 0.9rem;"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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