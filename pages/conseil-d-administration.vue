<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Conseil d'administration</Title>
      <Meta
          name="description"
          content="Agence National de Gestion de l'environnement, Conseil d'administration de L'ANGE-TOGO"
      ></Meta>
    </Head>
    <AngeBreadcrumb
        activePageName="Conseil d'administration"
        backgroundUrl="/images/bg/bg-ange-03.jpg"
        :others="[{ title: 'Accueil', url: '/' }]"
    />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-12">
          <AngeConseilAdministration/>
        </div>
      </div>
    </div>
  </AngeRoot>
</template>