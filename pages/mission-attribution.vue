<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Missions et Attributions</Title>
      <Meta name="description" content="Nous sommes L'ANGE-TOGO"></Meta>
    </Head>
    <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-12">
          <AngeMissionAttributions />
        </div>
      </div>
    </div>
  </AngeRoot>
</template>

<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'Mission & Attributions',
  description: 'Nous unissons expertise et engagement pour bâtir un avenir durable au service du développement national.'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'Mission & attribtions', path: '/mission-attribution' }
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