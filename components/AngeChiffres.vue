<template>
    <div class="stats-main-container">
        <div class="row text-center" v-if="isLoading">
            <div class="col-lg-12">
                <div class="">
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
            </div>
        </div>
        <div class="stats-grid" v-else>

            <!-- Première colonne - Haut -->
            <div class="stats-text-col">
                <div class="stats-text-card">
                    <div class="stats-year">{{ statistique.annee }}</div>
                    <h3 class="stats-title">Statistiques en évaluation environnementale</h3>
                    <p class="stats-description">
                        Dans un coin tranquille de la ville, une petite boutique de curiosités attire les passants avec
                        sa lumière douce.
                    </p>
                    <NuxtLink to="/statistique" class="stats-cta">Voir plus</NuxtLink>
                </div>
            </div>

            <!-- Deuxième colonne - Haut (Statistiques environnementales) -->
            <div class="stats-numbers-col">
                <div class="stats-numbers-grid">
                    <!-- Première ligne - 2 statistiques -->
                    <div class="stat-item">
                        <div class="indicator-card h-100" style="background: #e0f9e0 !important;">
                            <h2 class="counter-stat-env">{{ statistique.tdr }}</h2>
                            <p class="font-weight-bold">
                                Termes de références reçus
                            </p>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="indicator-card h-100" style="background: #e0f9e0 !important;">
                            <h2 class="counter-stat-env">{{ statistique.cces }}</h2>
                            <p class="font-weight-bold">
                                Certificats de conformité environnementale et sociale délivrés (CCES)
                            </p>
                        </div>
                    </div>

                    <!-- Deuxième ligne - 2 statistiques -->
                    <div class="stat-item">
                        <div class="indicator-card h-100" style="background: #e0f9e0 !important;">
                            <h2 class="counter-stat-env">{{ statistique.cre }}</h2>
                            <p class="font-weight-bold">
                                Certificats de régularisation environnementale délivrés (CRE)
                            </p>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="indicator-card h-100" style="background: #e0f9e0 !important;">
                            <h2 class="counter-stat-env">{{ statistique.eies_ap_fin }}</h2>
                            <p class="font-weight-bold">
                                Approbation environnementale délivrée
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Troisième colonne - Bas -->
            <div class="stats-text-col flost">
                <div class="stats-text-card image-card" :style="{
                    backgroundImage: `url('/images/bg/bg-cascade.jpeg')`,
                }">
                    <!-- Overlay sombre comme sur les slides -->
                    <div class="background-overlay"></div>
                    <div class="content-overlay"></div>
                    
                    <div class="stats-content">
                        <div class="stats-year">2024</div>
                        <h3 class="stats-title">Statistiques des plaintes reçues à l'ANGE</h3>
                        <p class="stats-description">
                            Dans un coin tranquille de la ville, une petite boutique de curiosités attire les passants avec
                            sa lumière douce.
                        </p>
                        <NuxtLink to="/statistique" class="stats-cta">Voir plus</NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Quatrième colonne - Bas (Statistiques plaintes) -->
            <div class="stats-numbers-col">
                <div class="stats-numbers-grid mt-5">
                    <!-- Première ligne - 2 statistiques -->
                    <div class="stat-item">
                        <div class="indicator-card h-100" style=" border: 1px solid #40bc48;">
                            <h2 class="counter">05</h2>
                            <p class="font-weight-bold">
                                Nombre de plainte pour le secteur des Mines
                            </p>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="indicator-card h-100" style=" border: 1px solid #40bc48;">
                            <h2 class="counter">02</h2>
                            <p class="font-weight-bold">
                                Nombre de plainte pour le secteur de l'Agroalimentaire
                            </p>
                        </div>
                    </div>

                    <!-- Deuxième ligne - 2 statistiques -->
                    <div class="stat-item">
                        <div class="indicator-card h-100" style=" border: 1px solid #40bc48;">
                            <h2 class="counter">01</h2>
                            <p class="font-weight-bold">
                                Nombre de plainte pour le secteur de l'Agropastorale
                            </p>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="indicator-card h-100" style=" border: 1px solid #40bc48;">
                            <h2 class="counter">01</h2>
                            <p class="font-weight-bold">
                                Nombre de plainte pour le secteur de l'Industrie
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <AngeStatistiqueFeudeVegetation/>
</template>

<script>
import counterUp from "counterup2";
import AngeStatistiqueFeudeVegetation from "./AngeStatistiqueFeudeVegetation.vue";

export default {
    data() {
        return {
            isLoading: false,
            statistique: {}
        };
    },

    methods: {
        async fetchData() {
            this.isLoading = true;
            try {
                const response = await this.$axios.get(`/statistiques-eval-env`);
                const data = await response.data.data;
                if (data) {
                    this.statistique = data;
                    this.isLoading = false;
                }
                await this.$nextTick(() => {
                    const counterElements = this.$el.querySelectorAll(".counter-stat-env");
                    const callback = (entries) => {
                        entries.forEach((entry) => {
                            const el = entry.target;
                            if (entry.isIntersecting && !el.classList.contains("is-visible")) {
                                counterUp(el, {
                                    duration: 2000,
                                    delay: 16,
                                });
                                el.classList.add("is-visible");
                            }
                        });
                    };
                    const observer = new IntersectionObserver(callback, { threshold: 0.5 });
                    counterElements.forEach((el) => {
                        observer.observe(el);
                    });
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },

    mounted() {
        this.fetchData();
        this.$nextTick(() => {
            const counterElements = this.$el.querySelectorAll(".counter");
            const callback = (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
                        counterUp(el, {
                            duration: 2000,
                            delay: 16,
                        });
                        el.classList.add("is-visible");
                    }
                });
            };
            const observer = new IntersectionObserver(callback, { threshold: 0.5 });
            counterElements.forEach((el) => {
                observer.observe(el);
            });
        });
    },
};
</script>

<style scoped>
.stats-main-container {
    max-width: 1400px;
    margin: 40px auto;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 30px;
    width: 100%;
}

.stats-text-col {
    display: flex;
    width: 100%;
}

.stats-text-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 15px;
    padding: 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    box-sizing: border-box;
}

/* Carte avec image de fond */
.image-card {
    position: relative;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    overflow: hidden;
}

/* Overlay sombre comme sur les slides */
.background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg, 
        rgba(0, 0, 0, 0.5) 0%, 
        rgba(0, 0, 0, 0.4) 50%, 
        rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
}

.content-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.4) 30%,
        rgba(0, 0, 0, 0.4) 70%,
        rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 2;
}

.stats-content {
    position: relative;
    z-index: 3;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.stats-year {
    font-size: clamp(14px, 1.5vw, 16px);
    font-weight: 900;
    color: #146c53;
    margin-bottom: 10px;
    line-height: 1;
}

.image-card .stats-year {
    color: white !important;
}

.stats-title {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
    line-height: 1.3;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.image-card .stats-title {
    color: white !important;
}

.stats-description {
    color: #6c757d;
    line-height: 1.6;
    margin-bottom: 25px;
    font-size: clamp(14px, 1.5vw, 16px);
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.image-card .stats-description {
    color: white !important;
}

/* BOUTON CORRIGÉ - Largeur fixe entre 100px et 200px */
.stats-cta {
    color: white;
    background: #146c53;
    font-weight: 600;
    text-decoration: none;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 150px; /* Largeur fixe */
    padding: 10px 20px;
    transition: all 0.3s ease;
    border-radius: 5px;
    margin-top: auto;
    text-align: center;
}

.stats-cta:hover {
    transform: scale(1.05);
    background: #0e4f3c;
}

.stats-cta::after {
    content: '→';
    margin-left: 8px;
    transition: transform 0.3s ease;
}

.stats-cta:hover::after {
    transform: translateX(5px);
}

.stats-numbers-col {
    display: flex;
    width: 100%;
}

.stats-numbers-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    flex: 1;
    width: 100%;
}

.stat-item {
    display: flex;
    width: 100%;
}

.indicator-card {
    background: white;
    border-radius: 5px;
    padding: clamp(15px, 2vw, 25px);
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
}

.indicator-card:hover {
    transform: scale(1.1);
}

.counter-stat-env,
.counter {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 800;
    color: #000;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
    line-height: 1;
}

.font-weight-bold {
    font-weight: 600;
    color: #2c3e50;
    font-size: clamp(12px, 1.2vw, 14px);
    line-height: 1.4;
    margin: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.flost {
    backdrop-filter: blur(4px);
}


/* Tablettes grandes (992px - 1200px) */
@media (max-width: 1200px) {
    .stats-main-container {
        margin: 30px auto;
        padding: 0 15px;
    }
    
    .stats-grid {
        gap: 25px;
    }
    
    .stats-text-card {
        padding: 30px;
    }
    
    .stats-numbers-grid {
        gap: 15px;
    }
}

/* Tablettes (768px - 992px) */
@media (max-width: 992px) {
    .stats-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 20px;
    }
    
    .stats-numbers-grid {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    
    .stats-text-card {
        padding: 25px;
    }
}

/* Mobiles paysage (576px - 768px) */
@media (max-width: 768px) {
    .stats-main-container {
        margin: 20px auto;
        padding: 0 15px;
    }
    
    .stats-grid {
        gap: 15px;
    }
    
    .stats-numbers-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }
    
    .stats-text-card {
        padding: 20px;
    }
    
    .indicator-card {
        padding: 20px 15px;
    }
    
    /* Bouton légèrement plus petit sur tablette */
    .stats-cta {
        width: 140px;
        font-size: 15px;
        padding: 9px 18px;
    }
}

/* Mobiles portrait (480px - 576px) */
@media (max-width: 576px) {
    .stats-main-container {
        margin: 15px auto;
        padding: 0 10px;
    }
    
    .stats-grid {
        gap: 12px;
    }
    
    .stats-text-card {
        padding: 15px;
    }
    
    .stats-numbers-grid {
        gap: 10px;
    }
    
    .indicator-card {
        padding: 15px 10px;
    }
    
    /* Bouton taille réduite mais dans la plage 100-200px */
    .stats-cta {
        width: 130px;
        font-size: 14px;
        padding: 8px 16px;
    }
}

/* Très petits mobiles (< 480px) */
@media (max-width: 480px) {
    .stats-main-container {
        margin: 10px auto;
        padding: 0 8px;
    }
    
    .stats-grid {
        gap: 10px;
    }
    
    .stats-text-card {
        padding: 12px;
        border-radius: 10px;
    }
    
    .stats-numbers-grid {
        gap: 8px;
    }
    
    .indicator-card {
        padding: 12px 8px;
        border-radius: 8px;
    }
    
    .counter-stat-env,
    .counter {
        font-size: 1.3rem;
    }
    
    .font-weight-bold {
        font-size: 11px;
    }
    
    /* Bouton taille minimale dans la plage */
    .stats-cta {
        width: 110px;
        font-size: 13px;
        padding: 7px 14px;
    }
}

/* Garantir que tout reste dans les limites */
.stats-main-container,
.stats-grid,
.stats-text-col,
.stats-numbers-col,
.stats-text-card,
.stats-numbers-grid,
.stat-item,
.indicator-card {
    max-width: 100%;
    overflow: hidden;
}

/* Amélioration de la lisibilité sur petits écrans */
@media (max-width: 768px) {
    .stats-title {
        font-size: 1.3rem;
        margin-bottom: 15px;
    }
    
    .stats-description {
        font-size: 14px;
        margin-bottom: 20px;
    }
    
    .stats-year {
        font-size: 13px;
    }
}

/* Optimisation pour les très grandes écrans */
@media (min-width: 1600px) {
    .stats-main-container {
        max-width: 1500px;
    }
    
    .stats-grid {
        gap: 40px;
    }
    
    .stats-text-card {
        padding: 50px;
    }
    
    .stats-numbers-grid {
        gap: 25px;
    }
    
    /* Bouton légèrement plus grand sur très grands écrans */
    .stats-cta {
        width: 160px;
        font-size: 17px;
        padding: 11px 22px;
    }
}
</style>