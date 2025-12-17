<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Projet d'initiative de renforcement de capacités pour la
        transparence climatique (IRCT / CBIT Capacity Building Initiative for
        Transparency)
      </Title>
      <Meta
        name="description"
        content=" Projet d'initiative de renforcement de capacités pour la
        transparence climatique (IRCT / CBIT Capacity Building Initiative for Transparency)"
      ></Meta>
    </Head>
   <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />
    <AngeCbit />
  </AngeRoot>
</template>
<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'CBIT',
  description: "Capacity-Building Initiative for Transparency(Initiative de Renforcement des Capacités pour la Transparence) "
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'CBIT', path: '/projet/cbit' }
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