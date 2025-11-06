<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Qui sommes-nous</Title>
      <Meta name="description" content="Nous sommes L'ANGE-TOGO"></Meta>
    </Head>
    <!-- <AngeBreadcrumb
      activePageName="Qui sommes-nous"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    /> -->
      <AngeBreadcrumb 
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs" 
    />

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-12">
          <AngeApropos />
        </div>
      </div>
    </div>
  </AngeRoot>
</template>
<script setup>
import { ref } from 'vue'
import ShapeWithAnimation from '@/components/ShapeWithAnimation.vue'

// Données réactives
const pageData = ref({
  title: 'Qui sommes-nous ?',
  description: 'Découvrez notre mission et notre vision'
})

const breadcrumbs = ref([
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/presentation' }
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