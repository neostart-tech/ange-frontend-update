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
                    <AngeCoutPrestation :coutPrestations="coutPrestations"/>
                    <AngeCoutValidation :coutValidations="coutValidations" />
                    <AngeCoutDelivrance :coutDelivrances="coutDelivrances"/>

  
  </AngeRoot>
</template>

<script>
import procedures from "~/data/procedure.json";
import coutPrestations from "~/data/cout-prestation.json";
import coutValidations from "~/data/cout-validation.json";
import coutDelivrances from "~/data/cout-delivrance.json";

export default {
  data() {
    return {
      procedures,
      coutPrestations,
      coutValidations,
      coutDelivrances

    };
  },
};
</script>