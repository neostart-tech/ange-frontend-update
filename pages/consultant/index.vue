<template>
  <AngeRoot>
    <Head>
      <Title
        >Consultants agrées par l'Agence Nationnal de Gestion de l'Environnement
      </Title>
      <Meta
        name="description"
        content=" Projet d'initiative de renforcement de capacités pour la
          transparence climatique (IRCT / CBIT Capacity Building Initiative for Transparency)"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="IRCT / CBIT"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Acteurs', url: '#' },
      ]"
    />
    <AngeCbit />
  </AngeRoot>
</template>
