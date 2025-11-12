<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Contactez-nous</Title>
      <Meta property="og:title" content="Agence National de Gestion de l'Environnement contactez nous" />
      <Meta property="og:type" content="Agence National de Gestion de l'Environnement contactez nous" />
    </Head>
   <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />
    <AngeFormContact />
        <AngeInfoContact />

  </AngeRoot>
</template>
<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'Contact',
  description: 'Nous sommes toujours disponible pour vous repondre.'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'Contactez-nous', path: '/contactez-nous' }
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