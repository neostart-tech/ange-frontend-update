<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Programme nationale d'actions décentralisées de
        l'environnement (PNADE)</Title
      >
      <Meta
        name="description"
        content="Programme nationale d'actions décentralisées de
        l'environnement (PNADE)"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="PNADE"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Projet', url: '#' },
      ]"
    />
    <AngePnade />
  </AngeRoot>
</template>
