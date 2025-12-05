<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Projet qualité de l'air au Togo (PQAT)</Title>
      <Meta
        name="description"
        content="Projet qualité de l'air au Togo (PQAT)"
      ></Meta>
    </Head>
    <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
      :show-download-section="true"
  download-button-text="Téléchargez le bulletin d'information du PQAT"
  :download-document-url="pageData.downloadUrl"
      
    />
    <AngePqat />
  </AngeRoot>
</template>
<script  setup >
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'PQAT',
  description: "Projet qualité de l'air au Togo",
  downloadUrl:"/pdf/PQAT Version finale.pdf"
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'PQAT', path: '/projet/pqat' }
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