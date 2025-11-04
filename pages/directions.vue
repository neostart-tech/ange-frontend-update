<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Directions</Title>
      <Meta
        name="description"
        content="Directions de L'ANGE-TOGO"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="Directions"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-12"></div>
        <AngeDirection />
      </div>
    </div>
  </AngeRoot>
</template>

<style>
.nav-pills .nav-link {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Aligner les éléments au début */
  flex-direction: row;
  color: black;
  /* Couleur des icônes et du texte inactif */
}

.nav-pills .nav-link i {
  margin-right: 5px;
}

.nav-pills .nav-link.active {
  background-color: transparent;
  background-image: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  /* Couleur de fond pour l'élément actif */
  color: white;
  /* Couleur des icônes et du texte actif */
}

.nav-pills .nav-link.active i {
  color: white;
  /* Couleur de l'icône active */
}

@media (max-width: 767.98px) {
  .nav-pills {
    flex-direction: row !important;
    justify-content: space-around;
  }

  .nav-pills .nav-link {
    flex-direction: column;
    justify-content: center;
  }

  .nav-pills .nav-link span {
    display: none;
  }
}

@media (min-width: 768px) {
  .nav-pills {
    flex-direction: column;
  }

  .nav-item {
    margin-bottom: 35px; /* Ajouter de l'espace entre les éléments */
  }

  .nav-pills .nav-link {
    flex-direction: row;
    justify-content: flex-start; /* Aligner les éléments au début */
  }
}
</style>