<template>
  <AngeRoot>

    <Head>
      <Title>ANGE-TOGO | Procédures, délais et coûts d'obtention des autorisations</Title>
      <Meta name="description" content="Procédures, délais et coûts d'obtention des autorisations">
      </Meta>
    </Head>
    <AngeBreadcrumb activePageName="Procédures, délais et coûts d'obtention des autorisations"
                    backgroundUrl="/images/bg/bg-ange-03.jpg" :others="[{ title: 'Accueil', url: '/' }]"/>

    <!-- service section start -->
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col">
          <div class="d-flex justify-content-between">
            <NuxtLink to="" class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup">
            </NuxtLink>
            <a href="/pdf/Note relative aux delais pratiques des processus d'etude d'impact environnemental et social.pdf"
               target="_blank"
               class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup">
              NOTE RELATIVE AUX COÛTS ET DÉLAIS &nbsp;
              <i class="fa fa-download"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="section-title text-center" data-aos="fade-up" style="margin-top: -49px !important;">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              A. Processus, délais, coûts et responsables
            </h2>
          </div>
          <div class="dt-responsive table-responsive">
            <table id="dom-jquery" class="table table-striped table-bordered nowrap"
                   style="border: #285a43 solid !important">
              <thead>
              <tr>
                <th style="background-color: #285a43 !important" class="text-white">
                  N°
                </th>
                <th style="background-color: #285a43 !important" class="text-white">
                  Processus/Etapes EIES
                </th>
                <th style="background-color: #285a43 !important" class="text-white">
                  Délais pratiques des processus EIES
                </th>
                <th style="background-color: #285a43 !important" class="text-white">
                  Coûts
                </th>
                <th style="background-color: #285a43 !important" class="text-white">
                  Responsables
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(procedure, index) in procedures" :key="index">
                <td style="text-align: justify; font-size: 20px; padding: 20px">
                  {{ index + 1 }}
                </td>
                <td style="text-align: justify; font-size: 20px; padding: 20px">
                  {{ procedure.etape }}
                </td>
                <td style="text-align: justify; font-size: 20px; padding: 20px">
                  {{ procedure.delais }}
                </td>
                <td style="text-align: justify; font-size: 20px; padding: 20px">
                  {{ procedure.cout }}
                </td>
                <td style="text-align: justify; font-size: 20px; padding: 20px">
                  {{ procedure.responsable }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-md-12 col-lg-4 mb-5">
          <div class="card" style="border: #285a43 solid !important">
            <div class="card-header" style="background-color: #285a43 !important">
              <h4 class="text-white">Informations complémentaires</h4>
            </div>
            <div class="card-body">
              <div class="mb-5">
                <!-- <p style="font-weight: bold;"><u>NB :</u></p> -->
                <p style="text-align: justify; font-size: 20px">
                  La durée totale du processus est de 30 jours ouvrables du côté
                  des prestations de l’ANGE. Cependant les projets complexes qui
                  font l’objet d’audiences publiques et des consultations du
                  public en vue de recueillir l’avis des communautés riveraines
                  et des principales parties prenantes nécessitent 15 jours
                  ouvrables suplementaires. Le coût des audiences publiques et
                  des consultations du public varie suivant les paramètres tels
                  que la densité de la population et la couverture géographique
                  du projet.
                </p>
                <p style="text-align: justify; font-size: 20px">
                  Pour les projets dont les impacts environnementaux et sociaux
                  ne sont pas significatifs et qui ne sont pas soumis à une
                  étude d’impact simplifié ou approfondi, le processus se limite
                  à la visite du site du projet par l’ANGE et à l’élaboration
                  d’un plan de gestion environnementale et sociale spécial par
                  le promoteur. Celui-ci reçoit une approbation environnementale
                  et sociale du Ministre chargé de l’environnement. Le coût
                  total de ce processus est de trois cent cinquante mille francs
                  CFA (350 000 FCFA) soit deux cent milles francs CFA pour la
                  visite du site par l’ANGE et cent cinquante mille francs CFA
                  pour le retrait de l’approbation.
                </p>
                <p style="text-align: justify; font-size: 20px">
                  Au cours du retrait du CCE ou de l’approbation, une convention
                  de suivi intervient entre le promoteur et l’ANGE pour le
                  contrôle de la mise en œuvre des mesures environnementales et
                  sociales du projet. Le coût de l’appui du promoteur à l’ANGE
                  pour le suivi du PGES est mentionné dans cette convention.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12 col-lg-8 mt-3 dt-responsive table-responsive">
          <div class="section-title text-center" data-aos="fade-up" style="margin-top: 30px !important;">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              B. Coûts des prestations de l'ANGE
            </h2>
          </div>

          <div class="section-title" data-aos="fade-up" style="margin-bottom: 15px !important;">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              <h3 style="font-size: 25px">
                1. Coûts de visite de sites pour validation des TdRs</h3>
            </h2>
          </div>
          <table id="dom-jquery" class="table table-striped table-bordered nowrap mb-3"
                 style="border: #285a43 solid !important">
            <tbody>
            <tr>
              <td style="text-align: justify; font-size: 20px">Visite de sites</td>
              <td style="text-align: justify; font-size: 20px">200 000 - 500 000 / site</td>
            </tr>
            </tbody>
          </table>

          <div class="section-title" data-aos="fade-up" style="margin-bottom: 15px !important;">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              <h3 style="font-size: 25px">
                2. Coûts de validation des rapports provisoires</h3>
            </h2>
          </div>

          <table id="dom-jquery" class="table table-striped table-bordered nowrap"
                 style="border: #285a43 solid !important">
            <tbody>
            <tr>
              <th style="background-color: #285a43 !important; text-align: center; font-size: 20px; padding: 20px"
                  class="text-white">N°
              </th>
              <th style="background-color: #285a43 !important; text-align: center; font-size: 20px; padding: 20px"
                  class="text-white">Cout
                d’investissement HT
                (CI)
              </th>
              <th style="background-color: #285a43 !important; text-align: center; font-size: 20px; padding: 20px"
                  class="text-white">
                Montant de redevance
              </th>
            </tr>
            <tr>
              <td style="text-align: center; font-size: 20px">1</td>
              <td style="text-align: justify; font-size: 20px">&#8804; 100 000 000</td>
              <td style="text-align: justify; font-size: 20px">2% CI</td>
            </tr>
            <tr>
              <td style="text-align: center; font-size: 20px">2</td>
              <td style="text-align: justify; font-size: 20px">100 000 000 – 1 000 000 000
              </td>
              <td style="text-align: justify; font-size: 20px">2 000 000 + 2% CI</td>
            </tr>
            <tr>
              <td style="text-align: center; font-size: 20px">3</td>
              <td style="text-align: justify; font-size: 20px">1 000 000 000 – 50 000 000
                000
              </td>
              <td style="text-align: justify; font-size: 20px">4 600 000 + 0,1% CI</td>
            </tr>
            <tr>
              <td style="text-align: center; font-size: 20px">4</td>
              <td style="text-align: justify; font-size: 20px">&gt; 50 000 000 000</td>
              <td style="text-align: justify; font-size: 20px">14 400 000 + 0,1% CI</td>
            </tr>
            </tbody>
          </table>

          <p class="source" style="font-size: 18px; padding: 10px;text-align: center; font-weight: bold  ">
            Source
            : Extrait de l'arrêté interministériel n°0024 / MEF/MERF</p>

          <div class="section-title mt-3" data-aos="fade-up" style="margin-bottom: 15px !important;">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              <h4 style="font-size: 25px">3. Coûts de délivrance des autorisations environnementales</h4>
            </h2>
          </div>

          <table id="dom-jquery" class="table table-striped table-bordered nowrap"
                 style="border: #285a43 solid !important">
            <thead>
            <tr>
              <th style="background-color: #285a43 !important; text-align: center; font-size: 20px; padding: 20px"
                  class="text-white">N°
              </th>
              <th style="background-color: #285a43 !important; text-align: center; font-size: 20px; padding: 20px"
                  class="text-white">Désignation
              </th>
              <th style="background-color: #285a43 !important; text-align: center; font-size: 20px; padding: 20px"
                  class="text-white">Montant de redevance
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td style="text-align: center; font-size: 20px">1</td>
              <td style="text-align: justify; font-size: 20px">Délivrance du CCE / CRE</td>
              <td style="text-align: justify; font-size: 20px">5% Coût d’évaluation du
                rapport provisoire
              </td>
            </tr>
            <tr>
              <td style="text-align: center; font-size: 20px">2
              </td>
              <td style="text-align: justify; font-size: 20px">Approbation environnementale
              </td>
              <td style="text-align: justify; font-size: 20px">150 000 F</td>
            </tr>
            </tbody>
          </table>

          <p class="source" style="font-size: 18px; padding: 10px;text-align: center; font-weight: bold">
            Source :
            Extrait de l'arrêté interministériel n°0024 / MEF/MERF</p>
        </div>
      </div>

    </div>

    <!-- service section end -->
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