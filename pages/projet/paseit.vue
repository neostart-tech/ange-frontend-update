<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Projet d'amélioration du système d'information
        environnementale au Togo (PASIET)</Title
      >
      <Meta
        name="description"
        content="Projet d'amélioration du système d'information environnementale au Togo (PASIET)"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="PASIET"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Projet', url: '#' },
      ]"
    />
    <AngePasiet />
  </AngeRoot>
</template>
