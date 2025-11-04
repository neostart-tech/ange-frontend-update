<template>
    <div class="tickertape">
        
            <span >L'agence nationale de gestion de l'environnement, au cœur de la gouvernance environnementale.</span>
        
    </div>


</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            publicites: [],
        };
    },

    methods: {
        async fetchData() {
            this.isLoading = true;
            try {

                const response = await this.$axios.get(`/zone-publicitaire/liste`);
               
                const data = await response.data.data;
                if (data) {
                    this.publicites = data;
                    this.isLoading = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.isLoading = false;
            }
        },
    },

    mounted() {
        this.fetchData();
    }
};
</script>

<style>
.tickertape {
    background-color:#007608;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    text-align: center;
}

.tickertape  span {
    margin-right: 50px;
    /* Ajuster l'espacement entre les éléments */
}
</style>