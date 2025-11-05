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
            <div class="stats-text-col flost" 
            >
                <div class="stats-text-card " :style="{
                    backgroundImage: `url('/images/bg/bg-cascade.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backdropFilter: 'blur(15px)',

                }">
                    <div class="stats-year" style="color: white;">2024</div>
                    <h3 class="stats-title" style="color: white;">Statistiques des plaintes reçues à l'ANGE</h3>
                    <p class="stats-description" style="color: white;">
                        Dans un coin tranquille de la ville, une petite boutique de curiosités attire les passants avec
                        sa lumière douce.
                    </p>
                    <NuxtLink to="/statistique" class="stats-cta">Voir plus</NuxtLink>
                </div>
            </div>

            <!-- Quatrième colonne - Bas (Statistiques plaintes) -->
            <div class="stats-numbers-col">
                <div class="stats-numbers-grid">
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

                    const observer = new IntersectionObserver(callback, { threshold: 1 });
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

            const observer = new IntersectionObserver(callback, { threshold: 1 });
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
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 30px;
}

.stats-text-col {
    display: flex;
}

.stats-text-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    /* border: 2px solid #e3f2fd; */
    border-radius: 15px;
    padding: 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); */
}

.stats-year {
    font-size: 16px;
    font-weight: 900;
    color: #146c53;
    margin-bottom: 10px;
    line-height: 1;
}

.stats-title {
    font-size: 32px;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
    line-height: 1.3;
}

.stats-description {
    color: #6c757d;
    line-height: 1.6;
    margin-bottom: 25px;
    font-size: 16px;
}

.stats-cta {
    color: white;
    background: #146c53;
    font-weight: 600;
    text-decoration: none;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: 10px 12px;
    transition: color 0.3s ease;
    transition: 0.5s ease-in-out;
}

.stats-cta:hover {
    transform: scale(1.1);
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
}

.stats-numbers-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    flex: 1;
}

.stat-item {
    display: flex;
}

.indicator-card {
    background: white;
    border-radius: 5px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.indicator-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(11, 157, 209, 0.2);
}

.indicator-icon {
    font-size: 2.5rem;
    background: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
}

.counter-stat-env,
.counter {
    font-size: 2.5rem;
    font-weight: 800;
    color: #000;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
}

.font-weight-bold {
    font-weight: 600;
    color: #2c3e50;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
}

.flost {
    backdrop-filter: blur(4px);
}

/* Responsive */
@media (max-width: 1200px) {
    .stats-grid {
        gap: 20px;
    }

    .stats-text-card {
        padding: 30px;
    }

    .stats-year {
        font-size: 3rem;
    }
}

@media (max-width: 992px) {
    .stats-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    .stats-numbers-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .stats-main-container {
        margin: 20px auto;
        padding: 0 15px;
    }

    .stats-numbers-grid {
        grid-template-columns: 1fr;
    }

    .stats-text-card {
        padding: 25px;
    }

    .stats-year {
        font-size: 2.5rem;
    }

    .stats-title {
        font-size: 1.3rem;
    }
}

@media (max-width: 480px) {
    .stats-grid {
        gap: 15px;
    }

    .stats-text-card {
        padding: 20px;
    }

    .indicator-card {
        padding: 20px;
    }

    .counter-stat-env,
    .counter {
        font-size: 2rem;
    }

    .indicator-icon {
        font-size: 2rem;
    }
}
</style>