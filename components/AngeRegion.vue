<template>
    <div class="section-padding-t90 section-padding-bottom overflow-hidden">
        <div class="container">
            <div class="section-title text-center" data-aos="fade-up">
                <h3 class="text-cnce fz-32">Retrouvez la liste des CNCE par région</h3>
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

                <div v-else class="col-md-6 col-xl-3 mb-3 proc-curcor" v-for="(region, index) in regions"
                    @click="goToPage(region.slug)" :key="index">
                    <div class="py-3 px-md-2 d-flex flex-column align-items-center border border-1 bg-white bc-gray "
                        style="height: 100%; min-width: 226px;">
                        <span class="fs-6 fw-bold text-center">{{ region.libelle }} ({{ region.Thematiques_count }})
                        </span>
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


    data() {
        return {
            isLoading: false,
            regions: []
        }
    },

    methods: {
        async fetchData() {
            try {
                this.isLoading = true;
                const response = await this.$axios.get(`/region/liste`);

                const data = await response.data.data;
                if (data) {
                    this.regions = data;
                    this.isLoading = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },


        goToPage(slug) {
            this.$router.push(`/cnce/region/${slug}`);
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