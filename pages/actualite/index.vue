<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Actualités</Title>
      <Meta
        name="description"
        content="Actualités à l'Agence National de Gestion de l'Eenvironnement"
      />
      <Meta property="og:title" content="Actualités" />
      <Meta
        property="og:description"
        content="Actualités à l'Agence National de Gestion de l'Eenvironnement"
      />
      <Meta property="og:type" content="Actualités" />
      <Meta property="og:url" :content="`https://ange.tg/${$route.fullPath}`" />
    </Head>
    <AngeBreadcrumb
      activePageName="Actualités"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[
        { title: 'Accueil', url: '/' },
        { title: 'Publications', url: '#' },
      ]"
    />
    <AngeBlog />
  </AngeRoot>
</template>