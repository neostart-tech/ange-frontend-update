<template>
  <AngeRoot>

    <Head>
      <Title>ANGE-TOGO | Procédures, délais et coûts d'obtention des autorisations</Title>
      <Meta name="description" content="Procédures, délais et coûts d'obtention des autorisations">
      </Meta>
    </Head>
    <AngeBreadcrumb activePageName="Procédures, délais et coûts d'obtention des autorisations"
                    backgroundUrl="/images/bg/bg-ange-03.jpg" :others="[{ title: 'Accueil', url: '/' }]"/>

                    <AngeObtentionInformations :procedures="procedures" />

  
  </AngeRoot>
</template>

<script>
import procedures from "~/data/procedure.json";

export default {
  data() {
    return {
      procedures,
    };
  },
};
</script>