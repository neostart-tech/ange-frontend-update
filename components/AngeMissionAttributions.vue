<template>
  <!-- <div class="section-padding-top section-padding-bottom-180 overflow-hidden"> -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/mot-du-directeur"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; Mot du Directeur
          </NuxtLink>

          <NuxtLink
            to="/organigramme"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            Organigramme &nbsp;
            <i class="fas fa-arrow-alt-circle-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="section-title text-center" data-aos="fade-up">
          <h2 class="text-cnce fz-32" style="color: #285a43 !important">
            Nos Missions
          </h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <section class="mission-section">
          <div class="container">
            <!-- <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              Nos Missions
            </h2> -->
            <!-- <h3 class="text-cnce fz-32 ange-sty-center"></h3> -->
            <div class="accordion" id="missionAccordion">
              <!-- Évaluation Environnementale Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEvaluation">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEvaluation"
                    aria-expanded="true"
                    aria-controls="collapseEvaluation"
                    style="
                      text-align: justify;
                      font-size: 24px;
                      font-weight: bold;
                    "
                  >
                    En matière d’évaluation environnementale
                  </button>
                </h2>
                <div
                  id="collapseEvaluation"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingEvaluation"
                  data-bs-parent="#missionAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li
                        style="
                          text-align: justify;
                          font-size: 24px;
                          margin-bottom: 20px;
                        "
                      >
                        La promotion et la mise en œuvre du système national des
                        évaluations environnementales, notamment les études
                        d’impact environnemental et social, les évaluations
                        environnementales stratégiques et les audits
                        environnementaux ; il s’agit là de l’exécution
                        opérationnelle du décret sur les études d’impacts de
                        2017.
                      </li>
                      <li
                        style="
                          text-align: justify;
                          font-size: 24px;
                          margin-bottom: 20px;
                        "
                      >
                        L’appui à l’intégration de la dimension environnementale
                        dans les politiques, stratégies, programmes et projets
                        de développement national et local ; autant la question
                        des évaluations environnementales stratégiques est
                        abordée dans l’alinéa précédent, autant il s’agit ici
                        d’en apporter les procédures d’accompagnement
                        nécessaires.
                      </li>
                      <li
                        style="
                          text-align: justify;
                          font-size: 24px;
                          margin-bottom: 20px;
                        "
                      >
                        L’élaboration et la promotion des outils techniques
                        d’analyse, de planification et d’intégration de
                        l’environnement aux politiques, plans, programmes,
                        projets et activités de développement ; la question des
                        outils est ici prise au sens large : il s’agit à la fois
                        de la capacité à effectuer des mesures (outils
                        techniques d’analyse) mais aussi des outils de suivi
                        évaluation nécessaires à la planification, y compris à
                        travers les études d’impact environnemental et social
                        (EIES), les audits environnementaux (AE) et les
                        évaluations environnementales stratégiques (EES).
                      </li>
                      <li
                        style="
                          text-align: justify;
                          font-size: 24px;
                          margin-bottom: 20px;
                        "
                      >
                        L’appui technique aux collectivités territoriales, aux
                        organisations communautaires à la base, aux privés et
                        aux ONG en matière de gestion de l’environnement ; Cet
                        appui passe essentiellement par la formation et le
                        transfert de compétences. C’était notamment le thème
                        central du Programme National d’Actions Décentralisées
                        de gestion de l’Environnement (PNADE) qui pourtant a été
                        développé de manière parallèle.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Information & Suivi Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingInformation">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseInformation"
                    aria-expanded="false"
                    aria-controls="collapseInformation"
                    style="
                      text-align: justify;
                      font-size: 24px;
                      font-weight: bold;
                    "
                  >
                    En matière d’information et de suivi de l’environnement
                  </button>
                </h2>
                <div
                  id="collapseInformation"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingInformation"
                  data-bs-parent="#missionAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li
                        style="
                          text-align: justify;
                          font-size: 24px;
                          margin-bottom: 20px;
                        "
                      >
                        La mise en place et la gestion du système national
                        d’information environnementale. La notion d’information
                        porte essentiellement sur la recherche, la compilation
                        le traitement et la restitution de données qualitatives
                        et quantitatives en vue d’une analyse de l’état de
                        l’environnement et du suivi des indicateurs
                        environnementaux.
                      </li>
                      <li
                        style="
                          text-align: justify;
                          font-size: 24px;
                          margin-bottom: 20px;
                        "
                      >
                        La coordination de l’élaboration du rapport annuel sur
                        l’état de l’environnement ; c’est un corollaire de
                        l’information environnementale souvent nécessaire non
                        seulement pour faire le point mais également pour
                        identifier la place de la progression de la prise en
                        compte de l’environnement vis-à-vis des pays voisins et
                        au niveau planétaire notamment dans le cadre des
                        conventions internationales. Il est également l’outil de
                        restitution du suivi assuré par l’évaluation
                        environnementale.
                      </li>
                      <li
                        style="
                          text-align: justify;
                          font-size: 24px;
                          margin-bottom: 20px;
                        "
                      >
                        Le développement et la mise en œuvre des actions
                        d’information, d’éducation, de communication et de
                        formation relatives à la protection et à la gestion des
                        ressources naturelles et de l’environnement ; le champ
                        couvert est ici particulièrement vaste, voire
                        considérable. Il ne faut pas négliger que de très
                        nombreux opérateurs travaillent sur ces sujets mais il
                        ne s’agit pas de les occulter pour autant dans la
                        mission de l’ANGE.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="attribution-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title text-center" data-aos="fade-up">
                  <h2 class="text-cnce fz-32" style="color: #285a43 !important">
                    Nos Attributions
                  </h2>
                </div>
              </div>
            </div>

            <!-- <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              Nos Attributions
            </h2> -->
            <!-- <h3 class="text-cnce fz-32 ange-sty-center">Nos Attributions</h3> -->
            <div class="attribution-item">
              <ul>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  L’élaboration et la coordination de la mise en œuvre du
                  Programme national de gestion de l’environnement.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  La promotion et la mise en œuvre du système national des
                  évaluations environnementales, notamment les études d’impact,
                  les évaluations environnementales stratégiques, les audits
                  environnementaux.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  L’appui à l’intégration de la dimension environnementale dans
                  les politiques, stratégies, programmes et projets de
                  développement national et local.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  L’élaboration et la promotion des outils techniques d’analyse,
                  de planification et d’intégration de l’environnement aux
                  politiques, plans, programmes, projets et activités de
                  développement.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  L’appui technique aux collectivités territoriales, aux
                  organisations communautaires à la base, aux privés et aux ONG
                  en matière de gestion de l’environnement.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  La mise en place et la gestion du système national
                  d’information environnementale.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  La coordination de l’élaboration du rapport annuel sur l’état
                  de l’environnement.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  Le développement et la mise en œuvre des actions
                  d’information, d’éducation, de communication et de formation
                  relatives à la protection et à la gestion des ressources
                  naturelles et de l’environnement.
                </li>
                <li
                  style="
                    text-align: justify;
                    font-size: 24px;
                    margin-bottom: 20px;
                  "
                >
                  La recherche et la mobilisation des ressources financières et
                  techniques nécessaires à l’exécution de ses missions
                  spécifiques et des autres missions qui pourront lui être
                  confiées.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <!-- <AccordionStyleOne /> -->
    </div>

    <div class="row mt-5">
      <div class="col">
        <div class="d-flex justify-content-between">
          <NuxtLink
            to="/mot-du-directeur"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            &nbsp; Mot du Directeur
          </NuxtLink>

          <NuxtLink
            to="/organigramme"
            class="ml-auto simalary info-ange-actu hover-actu-last-lire-suite plan-nav-sup"
          >
            Organigramme &nbsp;
            <i class="fas fa-arrow-alt-circle-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>

<style scoped>
.about-section,
.mission-section,
.attribution-section {
  padding: 60px 0;
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
}

.mission-section {
  /* background-color: #f8f9fa; */
  padding: 18px 0;
}

.mission-section h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  text-align: center;
}

.mission-item {
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.mission-item h3 {
  font-size: 1.75rem;
  margin-bottom: 15px;
}

.mission-item p {
  margin-bottom: 10px;
  text-align: justify;
  font-size: 24px;
}

.mission-item ul,
.attribution-item ul {
  list-style-type: disc;
  padding-left: 20px;
  text-align: justify;
  font-size: 24px;
}

.mission-item ul li,
.attribution-item ul li {
  margin-bottom: 10px;
}
.a-porpos-ange-style {
  font-family: "Mulish", sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  font-style: normal;
  line-height: 1.74 !important;
  visibility: visible !important;
  color: #444 !important;
}

.apropos-p {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.section-content {
  margin-bottom: 20px;
}
</style>
