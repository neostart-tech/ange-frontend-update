<template>
    <section class="attributions-section container mt-5">


        <div class="row d-flex">

            <!-- Colonne gauche -->
            <div class="left d-flex flex-column" ref="leftCol">
                <div class="title  mb-5">
                    <h5 class="subtitle">Bureaux d’etudes</h5>
                    <h2 class="main-title">Bâtir un avenir durable par
                        la gestion environnementale</h2>
                    <p class="description">
                        Aux fins d’obtention d’agrément pour les évaluations environnementales et sociales, le
                        responsable du bureau d’études demandeur doit disposer d’un minimum de Bac + 5 en sciences
                        environnementales et ou en science sociales. En sus de la condition visée à l’alinéa premier le
                        bureau d’études doit :
                    </p>
                </div>
                <div v-for="(item, index) in attributions" :key="index" class="attributions-items flex-column">
                    <div class="title">
                        <h3>{{ item.title }}</h3>
                    </div>
                    <div class="desc">
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>

            <!-- Colonne droite -->
            <div class="right">
                <img ref="rightImg" src="/images/bg/about-4.png" alt="Image environnement">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const attributions = [
    {
        title: "Coordination environnementale nationale",
        desc: "Être inscrit au registre du commerce et du crédit mobilier."
    },
    {
        title: "Évaluation et suivi environnemental",
        desc: "Être en règle vis-à-vis de l’administration fiscale."
    },
    {
        title: "Coordination environnementale nationale",
        desc: "Être régulièrement installé sur le territoire national."
    },
    {
        title: "Évaluation et suivi environnemental",
        desc: "Disposer en son sein d’un expert permanent (avec contrat de travail) justifiant d’une expérience de cinq (05) ans au moins en évaluations environnementales et sociales et avoir réalisé cinq (05) rapports dans le domaine. L’expert permanent doit disposer d’un diplôme en gestion de l’environnement ou d’un diplôme de sociologie attesté par une copie du programme de formation reçue comportant des modules d’évaluation environnementale et sociale ;"
    },
    {
        title: "Évaluation et suivi environnemental",
        desc: "Disposer, hormis l’expert permanent, d’au moins deux (02) experts ayant un minimum de formation BAC+5 ans, en gestion de l’environnement et/ou des sciences sociales ;"
    },
    {
        title: "Évaluation et suivi environnemental",
        desc: "Avoir un siège localisé sur le territoire national."
    },
   
];

const leftCol = ref(null);
const rightImg = ref(null);

// Synchroniser la hauteur de l'image avec la hauteur de la colonne gauche
onMounted(async () => {
    await nextTick();
    const leftHeight = leftCol.value.offsetHeight;
    rightImg.value.style.height = leftHeight + "px";
});
</script>

<style scoped>
.container {
   overflow: hidden;
}
.subtitle {
    font-size: 13px;
    color: #007608;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
}

.main-title {
    font-size: 26px;
    margin: 10px 0;
    line-height: 1.4;
    color: #222;
}

.description {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    /* aligne les deux colonnes */
    gap: 40px;
    margin-top: 40px;
}

.left {
    flex: 1 1 55%;
}

.right {
    flex: 1 1 40%;
    display: flex !important;
    justify-content: center !important; 
    align-items: center !important;    
    height: 100px;
    margin-top: 400px;
   
}

.right img {
    width: 100%;
    max-width: 480px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.attributions-items {
    position: relative;
    padding-left: 25px;
    margin-bottom: 30px;
    border-left: 2px solid rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.attributions-items::before {
    content: "";
    position: absolute;
    left: -2px;
    width: 2px;
    height: 50%;
    background-color: #000;
}

.attributions-items:hover {
    border-color: #00a800;
    transform: translateX(5px);
}

.attributions-items .title h3 {
    font-size: 18px;
    color: #222;
    margin-bottom: 6px;
}

.attributions-items .desc p {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
    .row {
        flex-direction: column;
    }

    .right {
        order: -1;
        margin-bottom: 30px;
    }

    .main-title {
        font-size: 22px;
    }
}
</style>
