<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Nos prestations</Title>
      <Meta
        name="description"
        content="Nos prestations à l'agence National de Gestion de l'Eenvironnement"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      :page-title="pageData.title"
      :page-description="pageData.description"
      :breadcrumbs="breadcrumbs"
    />
    <div class="container">
      <AngeBureauEtude />
      <AngeConsultantIndependant />
    </div>
  </AngeRoot>
</template>
<script setup>
import { ref } from "vue";

// Données réactives
const pageData = ref({
  title: "Agréments des consultants et bureaux d’études ",
  description: "Nous sommes toujours disponibles pour vous répondre.",
});

const breadcrumbs = ref([
  { name: "Accueil", path: "/" },
  { name: "Prestations", path: "/prestations" },
]);

// Fonctions si besoin
const updatePageData = (newTitle, newDescription) => {
  pageData.value.title = newTitle;
  pageData.value.description = newDescription;
};

// Exposer des données/méthodes au template si nécessaire
defineExpose({
  pageData,
  breadcrumbs,
  updatePageData,
});
</script>
<style scoped>
.container {
  max-width: 2000px !important;
  margin: 0 !important;
  padding: 0 !important;
  margin-bottom: 40px !important;
}
</style>
