<template>
    <div class="section-padding-t90 section-padding-bottom overflow-hidden">
        <div class="container">
            <div class="section-title text-center" data-aos="fade-up">
                <h3 class="text-cnce fz-32">Pour vos formalités avec l'ANGE vous trouverez ci-dessous des procédures
                    pour effectuer vos demandes</h3>
                <p class="sub-title">&nbsp;</p>
            </div>

            <div class="row">
                <div v-if="isLoading" class="text-center">
                    <div class="spinner-grow text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div v-else class="col-md-6 col-xl-3 mb-3 proc-curcor" v-for="(catProc, index) in procedures"
                    :key="index" @click="goToPage(catProc.slug)">
                    <div class="py-3 px-md-2 d-flex flex-column align-items-center border border-1 bg-white bc-gray "
                        style="height: 100%; min-width: 226px;">
                        <img class="mb-4" :src="`${img_url_back}/${catProc.img_url}`" :alt="catProc.nom_categorie">
                        <span class="fs-6 fw-bold text-center">{{ catProc.nom_categorie }}</span>
                        <span class="fs-6 text-center" v-html="catProc.short_description"></span>
                    </div>
                </div>

            </div>
            <!-- About Wrapper End -->
        </div>
    </div>
</template>

<script>

import config from '~~/config';
export default {

    components: {
        ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
    },

    data() {
        return {
            isLoading: false,
            procedures: [],
        }
    },

    methods: {
        async fetchData() {
            try {
                this.isLoading = true;
                const response = await this.$axios.get(`/procedures/liste`);
               
                const data = await response.data.data;
                if (data) {
                    this.procedures = data;
                    this.isLoading = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        goToPage(slug) {
            this.$router.push(`/category/${slug}`);
        }
    },

    mounted() {
        this.fetchData();
        this.img_url_back = config.app_back_url_img;
    }
};
</script>

<style lang="scss">
.proc-curcor {
    cursor: pointer;
}
</style>