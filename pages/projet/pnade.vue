<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Programme nationale d'actions décentralisées de
        l'environnement (PNADE)</Title
      >
      <Meta
        name="description"
        content="Programme nationale d'actions décentralisées de
        l'environnement (PNADE)"
      ></Meta>
    </Head>
    <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />
    <AngePnade />
  </AngeRoot>
</template>

<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'PNADE',
  description: "Programme nationale d'actions décentralisées de l'environnement"
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/' }
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
