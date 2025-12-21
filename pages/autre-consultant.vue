<template>
  <AngeRoot>

    <Head>
      <Title>ANGE-TOGO | Autres consultants</Title>
      <Meta name="description"
        content="Agence National de Gestion de l'environnement, LISTE DES AUTRES CONSULTANTS">
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
  title: 'AUTRES CONSULTANTS',
  description: 'LISTE DES AUTRES CONSULTANTS'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'Autres consultants', path: '/autre-consultant' }
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