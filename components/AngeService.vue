<template>
    <div class="section-padding-t90 section-padding-bottom overflow-hidden">
        <div class="container">

            <!-- About Wrapper Start -->
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30 frame-31">
                <div class="col mt-30" data-aos="fade-up" v-for="(service, index) in services" :key="index">
                    <AngeServiceItem :service="service" addClassName="box-border" />
                </div>
                <ShapeWithAnimation addClassName="shape-1" data-depth="1"
                    imgSrc="/images/shape-animation/video-shape-1.png" />
            </div>
            <!-- About Wrapper End -->

        </div> 
    </div>
</template>

<script>

export default {
    components: {
        AngeServiceItem: () => import('@/components/AngeServiceItem'),
        ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
    },

    data() {
        return {
            isLoading: false,
            services: [],
            itemsPerPage: 8,
            currentPage: 1

        }
    },

    methods: {
        async fetchData() {
            try {
                this.isLoading = true;
                const response = await this.$axios.get(`/services/liste`);
               
                const data = await response.data.data;
                if (data) {
                    this.services = data;
                    this.isLoading = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        }
    },

    mounted() {
        this.fetchData();
    }
};
</script>