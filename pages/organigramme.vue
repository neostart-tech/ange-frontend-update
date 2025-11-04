<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Organigramme</Title>
      <Meta name="description" content="Organigramme à L'ANGE-TOGO"></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="Organigramme"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-12">
          <AngeOrganigrame />
        </div>
      </div>
    </div>
  </AngeRoot>
</template>