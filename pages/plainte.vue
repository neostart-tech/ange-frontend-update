<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Plaintes</Title>
      <Meta name="description" content="Plaintes"></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="Plaintes"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />
    <AngePlainteForm />
  </AngeRoot>
</template>
