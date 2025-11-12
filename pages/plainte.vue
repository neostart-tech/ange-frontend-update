<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Plaintes</Title>
      <Meta name="description" content="Plaintes"></Meta>
    </Head>
    <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />
    <AngePlainteForm />
  </AngeRoot>
</template>
<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'Plaintes',
  description: 'Desirez-vous porter une plainte ? Veuillez renseigner le formulaire suivant.'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'Plaintes', path: '/plainte' }
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