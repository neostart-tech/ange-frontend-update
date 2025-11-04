<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Projet qualité de l'air au Togo (PQAT)</Title>
      <Meta
        name="description"
        content="Projet qualité de l'air au Togo (PQAT)"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="PQAT"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Projet', url: '#' },
      ]"
    />
    <AngePqat />
  </AngeRoot>
</template>
