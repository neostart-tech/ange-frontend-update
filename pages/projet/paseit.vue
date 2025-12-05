<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Projet d'amélioration du système d'information
        environnementale au Togo (PASIET)</Title
      >
      <Meta
        name="description"
        content="Projet d'amélioration du système d'information environnementale au Togo (PASIET)"
      ></Meta>
    </Head>
    <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />
    <AngePasiet />
  </AngeRoot>
</template>

<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'PASEIT',
  description: "Projet d’amélioration du système d’information environnementale du Togo"
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