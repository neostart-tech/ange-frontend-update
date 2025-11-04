<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Foires aux questions</Title>
      <Meta
        name="description"
        content="Foires aux questions FAQ à l'Agence National de Gestion de l'Eenvironnement"
      />
      <Meta property="og:title" content="Actualités" />
      <Meta
        property="og:description"
        content="Foires aux questions FAQ à l'Agence National de Gestion de l'Eenvironnement"
      />
      <Meta property="og:type" content="Foires aux questions FAQ" />
      <Meta property="og:url" :content="`https://ange.tg/${$route.fullPath}`" />
    </Head>
    <AngeBreadcrumb
      activePageName="FAQ"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />
    <AngeFaq />
  </AngeRoot>
</template>
