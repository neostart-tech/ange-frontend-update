<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Qui sommes-nous</Title>
      <Meta name="description" content="Nous sommes L'ANGE-TOGO"></Meta>
    </Head>
    <AngeBreadcrumb
      activePageName="Qui sommes-nous"
      backgroundUrl="/images/bg/bg-ange-03.jpg"
      :others="[{ title: 'Accueil', url: '/' }]"
    />

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-12">
          <AngeApropos />
        </div>
      </div>
    </div>
  </AngeRoot>
</template>