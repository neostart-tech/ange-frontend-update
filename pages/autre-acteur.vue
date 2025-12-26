<template>
  <AngeRoot>

    <Head>
      <Title>ANGE-TOGO | Autres acteurs</Title>
      <Meta name="description"
        content="Agence National de Gestion de l'environnement, LISTE DES AUTRES ACTEURS">
      </Meta>
    </Head>
    <AngeBreadcrumb :page-title="pageData.title" :page-description="pageData.description" :breadcrumbs="breadcrumbs" />
    <div class="container mt-5 mb-5">

      <AngeCommunesMairesPage />

    </div>
  </AngeRoot>
</template>
<script setup>
import { ref } from 'vue';

// Données réactives
const pageData = ref({
  title: 'AUTRES ACTEURS',
  description: 'LISTE DES AUTRES ACTEURS'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'Autres acteurs', path: '/autre-acteur' }
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