<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Missions et Attributions</Title>
      <Meta name="description" content="Nous sommes L'ANGE-TOGO"></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="Missions et Attributions"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-12">
          <AngeMissionAttributions />
        </div>
      </div>
    </div>
  </AngeRoot>
</template>