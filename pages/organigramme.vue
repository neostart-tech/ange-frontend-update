<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Organigramme</Title>
      <Meta name="description" content="Organigramme à L'ANGE-TOGO"></Meta>
    </Head>
    <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-12">
          <AngeConseilAdministration />
          <AngeAttributionConseil/>
          <AngeOrganigrame />
        </div>
      </div>
    </div>
  </AngeRoot>
</template>
<script setup>
import { ref } from 'vue'

// Données réactives
const pageData = ref({
  title: 'Conseil d’administration et Organigramme',
  description: ''
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'A propos', path: '/organigramme' }
])

// Fonctions si besoin
const updatePageData = (newTitle, newDescription) => {
  pageData.value.title = newTitle
  pageData.value.description = newDescription
}

defineExpose({
  pageData,
  breadcrumbs,
  updatePageData
})

</script>