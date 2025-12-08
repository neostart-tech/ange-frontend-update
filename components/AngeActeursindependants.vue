<template>
    <section class="consultants-green-section">
        <div class="container">
            <!-- En-tête -->
            <div class="section-header">
                <h6 class="main-title-first">Consultants & Bureaux d'études</h6>
                <h1 class="main-title">Liste des consultants agréés et bureaux d'études</h1>
                <h2 class="sub-title">Retrouvez ci-dessous la liste complète des consultants indépendants et bureaux d'études agréés pour vous accompagner dans vos démarches.</h2>
            </div>

            <!-- Bureaux d'études -->
            <div class="table-section">
                <div class="section-label">
                    <span class="label-text">BUREAUX D'ÉTUDES</span>
                </div>
                <div v-if="loadingBureaux" class="loading">
                    <i class="fas fa-spinner fa-spin"></i> Chargement des bureaux d'études...
                </div>
                <div v-else-if="errorBureaux" class="error">
                    <i class="fas fa-exclamation-triangle"></i> Erreur de chargement des bureaux d'études
                </div>
                <div v-else class="list-container">
                    <div class="list-item" v-for="(bureau, index) in bureauxEtudes" :key="'bureau-' + bureau.id">
                        <div class="item-content">
                            <span class="item-name">{{ bureau.nom }}</span>
                            <span class="item-contact">{{ bureau.contact }}</span>
                        </div>
                        <div v-if="index < bureauxEtudes.length - 1" class="item-divider"></div>
                    </div>
                </div>
            </div>

            <!-- Consultants indépendants -->
            <div class="table-section">
                <div class="section-label">
                    <span class="label-text">CONSULTANTS INDÉPENDANTS</span>
                </div>
                <div v-if="loadingConsultants" class="loading">
                    <i class="fas fa-spinner fa-spin"></i> Chargement des consultants...
                </div>
                <div v-else-if="errorConsultants" class="error">
                    <i class="fas fa-exclamation-triangle"></i> Erreur de chargement des consultants
                </div>
                <div v-else class="list-container">
                    <div class="list-item" v-for="(consultant, index) in consultantsIndependants" :key="'consultant-' + consultant.id">
                        <div class="item-content">
                            <span class="item-name">{{ consultant.nom }}</span>
                            <span class="item-contact">{{ consultant.contact }}</span>
                        </div>
                        <div v-if="index < consultantsIndependants.length - 1" class="item-divider"></div>
                    </div>
                </div>
            </div>

            <!-- Bouton de téléchargement -->
            <div class="download-section">
                <a class="download-btn" href="/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf" download>
                    <i class="fas fa-download"></i>
                    TÉLÉCHARGER LA LISTE COMPLÈTE
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            // États pour les bureaux d'études
            bureauxEtudes: [],
            loadingBureaux: true,
            errorBureaux: false,
            
            // États pour les consultants indépendants
            consultantsIndependants: [],
            loadingConsultants: true,
            errorConsultants: false
        };
    },

    methods: {
        // Méthode pour charger les bureaux d'études
        async fetchBureauxEtudes() {
            try {
                this.loadingBureaux = true;
                this.errorBureaux = false;
                
                const response = await this.$axios.get('/consultant-agrees/bureau-etude');
                const data = response.data.data || [];
                
                this.bureauxEtudes = data;
            } catch (error) {
                console.error("Erreur lors du chargement des bureaux d'études:", error);
                this.errorBureaux = true;
            } finally {
                this.loadingBureaux = false;
            }
        },

        // Méthode pour charger les consultants indépendants
        async fetchConsultantsIndependants() {
            try {
                this.loadingConsultants = true;
                this.errorConsultants = false;
                
                const response = await this.$axios.get('/consultant-agrees/consultant-independant');
                const data = response.data.data || [];
                
                this.consultantsIndependants = data;
            } catch (error) {
                console.error("Erreur lors du chargement des consultants indépendants:", error);
                this.errorConsultants = true;
            } finally {
                this.loadingConsultants = false;
            }
        },

        // Méthode pour charger toutes les données
        async fetchData() {
            await Promise.all([
                this.fetchBureauxEtudes(),
                this.fetchConsultantsIndependants()
            ]);
        }
    },

    mounted() {
        this.fetchData();
    }
};
</script>

<style scoped>
.consultants-green-section {
    padding: 40px 20px;
    background: #ffffff;
    min-height: 100vh;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

/* En-tête */
.section-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
}

.main-title-first {
    font-size: 13px;
    color: #007608;
}

.main-title {
    font-size: 25px;
    font-weight: 700;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.sub-title {
    font-size: 13px;
    font-weight: 500;
    color: #333;
    margin: 0;
    line-height: 1.4;
}

/* Sections */
.table-section {
    margin-bottom: 40px;
}

.section-label {
    background: #007608;
    padding: 12px 20px;
    margin-bottom: 15px;
    border-radius: 4px 4px 0 0;
}

.label-text {
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* List container */
.list-container {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 0 0 4px 4px;
}

.list-item {
    padding: 15px 20px;
}

.item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.item-name {
    font-weight: 600;
    color: #333;
    font-size: 0.95rem;
    flex: 1;
    min-width: 200px;
}

.item-contact {
    color: #007608;
    font-weight: 500;
    font-size: 0.9rem;
    text-align: right;
}

.item-divider {
    height: 1px;
    background: #f0f0f0;
    margin: 10px 0;
}

/* États de chargement et d'erreur */
.loading, .error {
    padding: 30px 20px;
    text-align: center;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 0 0 4px 4px;
    color: #666;
}

.loading {
    color: #007608;
}

.error {
    color: #d32f2f;
}

.loading i, .error i {
    margin-right: 10px;
}

/* Section téléchargement */
.download-section {
    text-align: center;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 2px solid #f0f0f0;
}

.download-btn {
    background: #000000;
    color: #ffffff;
    border: none;
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    text-decoration: none;
}

.download-btn:hover {
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.download-btn:active {
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
    .consultants-green-section {
        padding: 20px 15px;
    }

    .main-title {
        font-size: 1.2rem;
    }

    .sub-title {
        font-size: 0.9rem;
    }

    .item-content {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    .item-name {
        min-width: auto;
        width: 100%;
    }

    .item-contact {
        text-align: left;
        width: 100%;
    }

    .list-item {
        padding: 12px 15px;
    }

    .download-btn {
        width: 100%;
        justify-content: center;
        padding: 12px 20px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 10px;
    }

    .main-title {
        font-size: 1.1rem;
    }

    .section-label {
        padding: 10px 15px;
    }

    .label-text {
        font-size: 0.9rem;
    }

    .list-item {
        padding: 10px;
    }
}
</style>