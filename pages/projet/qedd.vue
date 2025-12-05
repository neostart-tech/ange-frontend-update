<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Quinzaine de l'environnement et du développement durable
        (QEDD)</Title
      >
      <Meta
        name="description"
        content="Quinzaine de l'environnement et du développement durable
        (QEDD)"
      ></Meta>
    </Head>
     <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />
    <AngeQedd />
  </AngeRoot>
</template>

<script  setup >
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'QEDD',
  description: "Quinzaine de l'environnement et du développement durable"
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
