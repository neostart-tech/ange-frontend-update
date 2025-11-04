<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Quinzaine de l'environnement et du développement durable
        (QEDD)</Title
      >
      <Meta
        name="description"
        content="Quinzaine de l'environnement et du développement durable
        (QEDD)"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="QEDD"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Projet', url: '#' },
      ]"
    />
    <AngeQedd />
  </AngeRoot>
</template>
