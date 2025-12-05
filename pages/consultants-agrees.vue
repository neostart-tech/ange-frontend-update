<template>
  <AngeRoot>

    <Head>
      <Title>ANGE-TOGO | Conseil d'administration</Title>
      <Meta name="description"
        content="Agence National de Gestion de l'environnement, LISTE DES CONSULTANTS INDIVIDUELS ET BUREAUX D’ETUDES AYANT OBTENU L’AGREMENT POUR LES EVALUATIONSENVIRONNEMENTALES ET SOCIALES">
      </Meta>
    </Head>
    <AngeBreadcrumb :page-title="pageData.title" :page-description="pageData.description" :breadcrumbs="breadcrumbs" />
    <div class="container mt-5 mb-5">

      <AngeActeursindependants />

    </div>
  </AngeRoot>
</template>
<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'CONSULTANTS INDÉPENDANTS ET BUREAUX D\'ÉTUDES',
  description: 'LISTE DES CONSULTANTS INDÉPENDANTS ET BUREAUX D\'ÉTUDES'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'CONSULTANTS INDÉPENDANTS ET BUREAUX D\'ÉTUDES', path: '/consultants-agrees' }
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