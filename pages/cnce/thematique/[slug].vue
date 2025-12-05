<template>
    <div class="main-container">
        <AngeHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <br>
        <br>
        <br>
        <br>
        <AngeBreadcrumb :activePageName="`${slug}`" backgroundUrl="/images/bg/nature.jpeg" />

        <!-- service section start -->


        <!-- service section end -->
        <AngeFooter />
    </div>

    <AngeRoot>
        <AngeBreadcrumb activePageName="Plainte" backgroundUrl="/images/bg/nature.jpeg" :others="[
            { title: 'Accueil', url: '/' },
        ]" v-if="!isLoading" />
        <section class="service-details-wrapper section-padding pb-125">
            <div class="container">
                <div class="row" v-if="isLoading">
                    <ange-togo-blog class="text-center">
                        <div class="spinner-grow text-success" role="status">
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
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5 align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="fs-2 bold-600 col-sm-12 " tabindex="0"> Liste des sous thématiques de la région
                                {{ region.libelle }}</div>
                        </div>
                    </div>

                    <div class="col-12 mtn-40 order-2 order-lg-1" v-if="region.Thematiques.length > 0">
                        <div class="service-details-widget">
                            <div class="service-single-widget mt-40" :style="{ backgroundColor: '#f8faff' }">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6" v-for="(thematique, index ) in region.Thematiques"
                                        :key="index">
                                        <NuxtLink class="mb-3" to="#" data-toggle="collapse"
                                            :data-target="`#${thematique.libelle}`" aria-expanded="true"
                                            :aria-controls="`${thematique.libelle}`">{{ thematique.libelle }}
                                        </NuxtLink>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8 mtn-40 order-2 order-lg-1" v-else>
                        <ange-aucun-document class="text-center">
                            <span class="file-document-name">Aucune thématique ... </span>
                        </ange-aucun-document>
                    </div>
                </div>
            </div>
        </section>
    </AngeRoot>
</template>

<script>
import config from '~~/config';

export default {
    data() {
        return {
            isLoading: true,
            img_url_back: null,
            region: null,
        }
    },
    created() {
        this.initialize();
    },

    mounted() {
        this.img_url_back = config.app_back_url_img;
    },

    methods: {
        initialize() {
            this.fetchData();
        },

        async fetchData() {
            try {
                const response = await this.$axios.get(`/region/${this.$route.params.slug}/affiche-thematiques`);

                const data = await response.data.data;
                if (data) {
                    this.region = data
                    this.isLoading = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>
