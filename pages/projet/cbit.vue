<template>
  <AngeRoot>
    <Head>
      <Title
        >ANGE-TOGO | Projet d'initiative de renforcement de capacités pour la
        transparence climatique (IRCT / CBIT Capacity Building Initiative for
        Transparency)
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
        { title: 'Projet', url: '#' },
      ]"
    />
    <AngeCbit />
  </AngeRoot>
</template>
