<template>
    <AngeRoot>
        <AngeBreadcrumb :activePageName="`${sousThematique.libelle}`" backgroundUrl="/images/bg/bg-ange-03.jpg" :others="[
            { title: 'Accueil', url: '/' },
            { title: 'Cnce', url: '/cnce' },
            { title: 'Sous-thématique' },

        ]" v-if="!isLoading" />
        <section class="service-details-wrapper section-padding pb-125">
            <div class="container">
                <div class="row" v-if="isLoading">
                    <ange-togo-blog class="text-center">
                        <div class="spinner-grow text-success " role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </ange-togo-blog>
                </div>

                <div class="row" v-else>
                    <div class="col-sm-12 col-lg-8 mb-5">
                        <div class="card">
                            <div class="table-border-style">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="table-color-sous-thematique">
                                                <th colspan="4" class="text-center">
                                                    <span class="span-sous-thematique">{{ sousThematique.libelle
                                                        }}</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="sous-thematique-cnce">Sigle</span>
                                                </td>
                                                <td colspan="3">{{ sousThematique.sigle }}</td>
                                            </tr>

                                            <tr v-if="sousThematique.mode_d_intevention">
                                                <td>
                                                    <span class="table-color-sous-thematique"> Mode
                                                        d’intervention</span>
                                                </td>
                                                <td colspan="3">{{ sousThematique.intervention }}</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <span class="sous-thematique-cnce"> Numero et date de
                                                        reconnaissance</span>
                                                </td>
                                                <td colspan="3">{{ sousThematique.reconnaissance }}</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <span class="sous-thematique-cnce">Classe</span>
                                                </td>
                                                <td colspan="3">{{ sousThematique.classe }}</td>
                                            </tr>

                                            <tr class="table-color-sous-thematique"
                                                v-if="sousThematique.objectifs.length > 0">
                                                <th colspan="4" class="text-center">
                                                    <span class="sous-thematique-cnce">Objectifs</span>
                                                </th>
                                            </tr>

                                            <tr v-if="sousThematique.objectifs.length > 0">
                                                <td colspan="4">
                                                    <ul>
                                                        <li v-for="(objectif, index) in sousThematique.objectifs"
                                                            :key="index">{{ objectif.libelle }}</li>
                                                    </ul>
                                                </td>
                                            </tr>

                                            <tr class="table-color-sous-thematique"
                                                v-if="sousThematique.domaines.length > 0">
                                                <th colspan="4" class="text-center">
                                                    <span class="sous-thematique-cnce">Principaux domaines
                                                        d’activités</span>
                                                </th>
                                            </tr>

                                            <tr v-if="sousThematique.domaines.length > 0"
                                                v-for="(domaine, index) in sousThematique.domaines" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td colspan="3">{{ domaine.libelle }}</td>
                                            </tr>

                                            <tr class="table-color-sous-thematique">
                                                <th colspan="4" class="text-center">
                                                    <span class="span-sous-thematique">Zones d’intervention</span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <span class="sous-thematique-cnce">Région</span>
                                                </td>
                                                <td>{{ sousThematique.thematique.region.libelle }}</td>
                                                <td>
                                                    <span class="sous-thematique-cnce">Cantons</span>
                                                </td>
                                                <td>{{ sousThematique.cantons }}</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <span class="sous-thematique-cnce">Préfecture</span>
                                                </td>
                                                <td>{{ sousThematique.prefecture }}</td>
                                                <td>
                                                    <span class="sous-thematique-cnce">Villages</span>
                                                </td>
                                                <td>{{ sousThematique.villages }}</td>
                                            </tr>

                                            <tr class="table-color-sous-thematique">
                                                <th colspan="4" class="text-center">
                                                    <span class="span-sous-thematique">Partenaires</span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <td colspan="4">{{ sousThematique.partenaire }}</td>
                                            </tr>

                                            <tr class="table-color-sous-thematique">
                                                <th colspan="4" class="text-center">
                                                    <span class="span-sous-thematique">Coordonnées et contacts</span>
                                                </th>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <span class="sous-thematique-cnce">Personne responsable</span>
                                                </td>
                                                <td colspan="3">{{ sousThematique.personne_responsable }}
                                                    <!-- {{ sousThematique.titre_responsable ? ', '.sousThematique.titre_personne_responsable : '' }} -->
                                                </td>
                                            </tr>

                                            <tr>
                                                <th rowspan="4">Adresse</th>
                                                <td v-if="sousThematique.bp">
                                                    <span class="sous-thematique-cnce">BP</span>
                                                </td>
                                                <td colspan="3" v-if="sousThematique.bp">{{ sousThematique.bp }}</td>
                                            </tr>

                                            <tr v-if="sousThematique.telephone">
                                                <td>Tél</td>
                                                <td colspan="3">{{ sousThematique.telephone }}</td>
                                            </tr>

                                            <tr v-if="sousThematique.e_mail">
                                                <td>E-Mail</td>
                                                <td colspan="3">{{ sousThematique.e_mail }}</td>
                                            </tr>

                                            <tr v-if="sousThematique.site_web">
                                                <td>Site- web</td>
                                                <td colspan="3">{{ sousThematique.site_web }}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-lg-4 col-sm-4 order-2 order-lg-1">
                        <div class="card sous-thematique-border">
                            <div class="card-header" style="text-align: center; font-weight: 700"> Résumé de
                                l'expérience</div>
                            <div class="card-body">
                                <div class="desc" style="text-align: justify;" v-html="sousThematique.description">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </AngeRoot>
</template>

<script>

export default {
    data() {
        return {
            isLoading: true,
            sousThematique: null
        }
    },

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            this.fetchData();
        },

        async fetchData() {
            try {
                const response = await this.$axios.get(`/sous-thematique/${this.$route.params.slug}/affiche-sous-thematique`);

                const data = await response.data.data;
                if (data) {
                    this.sousThematique = data
                    this.isLoading = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    },
}
</script>

<style lang="scss">
.sous-thematique-border {
    border: solid 3px;
    border-top-color: currentcolor;
    border-right-color: currentcolor;
    border-bottom-color: currentcolor;
    border-left-color: currentcolor;
    border-color: #1a654c;
    border-radius: 18px;
}

.procedure-nom-proc {
    color: var(--foundation-green-dark-active, #144C39) !important;
    font-family: sans-serif !important;
    font-size: 35px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: 120% !important;
}

.procedure-features {
    display: grid;
    -ms-grid-columns: 1fr 10px 1fr 10px 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--primary-light-gray);
    font-size: .875rem;
}

.bg-light-green {
    background: #DCFCE7;
}

.description-procedure {
    color: var(--foundation-green-dark-active, #144C39);
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}

.sous-thematique-cnce {
    font-weight: bolder;
}

.span-sous-thematique {
    font-size: 16px;
    line-height: 30px;
}

.table-color-sous-thematique {
    background: #dcfce7;
}
</style>
