<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Documenthèques</Title>
      <Meta
        name="description"
        content="Documenthèques de l'Agence Nationale de Gestion de l'environnement"
      ></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="Documenthèque "
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Publications', url: '#' },
      ]"
    />
    <AngeTextLegislatif />
  </AngeRoot>
</template>
