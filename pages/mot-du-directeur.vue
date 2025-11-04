<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Mot du Directeur Général</Title>
      <Meta
        name="description"
        content="Agence National de Gestion de l'Eenvironnement, Mot du Directeur Général de L'ANGE-TOGO"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="Mot du Directeur Général"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-12">
          <AngeMotDG />
        </div>
      </div>
    </div>
  </AngeRoot>
</template>