<template>
    <div class="consultants-section container mt-5">
        <div class="title mb-5 mt-5 text-center">
            <h5 class="subtitle">Consultants indépendants</h5>
            <h2 class="main-title">Bâtir un avenir durable par la gestion environnementale</h2>
        </div>

        <div class="row cards-row">
            <div class="card" v-for="(card, index) in cards" :key="index">
                <div class="icone">
                    <i class="fa fa-user"></i>
                </div>
                <div class="title-card">
                    <h3>{{ card.title }}</h3>
                    <ul>
                        <li v-for="(item, i) in card.content" :key="i">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cards = [
    {
        title: "L’obtention de l’agrément de consultant indépendant est soumise aux conditions ci-après:",
        content: [
            "Disposer d’un numéro d’identification fiscale",
            "Disposer d’un numéro d’identification fiscale",
            "Avoir un diplôme BAC + 5 en gestion de l’environnement ou en sociologie, attesté par une copie du programme de formation reçue comportant des modules d’évaluation environnementale et sociale",
            "Avoir effectué un stage de formation d’au moins deux (02) ans dans un bureau d’étude agréé ou avoir participé à la réalisation des missions d’évaluations environnementales et sociales auprès d’un consultant agréé en évaluations environnementales et sociales",
            "Avoir participé à l’élaboration de cinq (05) rapports dans le domaine des évaluations environnementales et sociales dont un (01) rapport en qualité de chef de mission"
        ]
    },
    {
        title: "L’obtention de l’agrément de consultant indépendant",
        content: [
            "Une demande timbrée adressée au ministre chargé de l’environnement ;",
            "Une copie de la pièce d’identité nationale en cours de validité ;",
            "Deux photos d’identité ;",
            "Une copie certifiée conforme des diplômes ;",
            "Une copie du programme de formation comportant les modules d’évaluation environnementale et sociale dument signé ;",
            "Un casier judiciaire datant de moins de trois (03) mois ;",
            "Un curriculum vitae dument signé ;",
            "Une copie des attestations de participation ou de réalisation des rapports d’évaluations environnementales et sociales ;",
            "Une copie de l’attestation de stage dans un bureau d’étude chargé des évaluations environnementales et sociales ou des attestations justifiant la participation à la réalisation des missions d’évaluations environnementales et sociales ;",
            "Une quittance des frais de délivrance de l’agrément."
        ]
    },
    {
        title: "L’agrément",
        content: [
            "L’agrément est accordé par décision du ministre chargé de l’environnement après avis du comité d’agrément pour une durée de cinq (05) ans.",
            "Le requérant se voit délivré l’attestation d’agrément par le Ministre chargé de l’environnement après versement à la comptabilité de l’ANGE des frais définis par arrêté conjoints des ministres chargés de l’environnement et des finances."
        ]
    }
];
</script>

<style scoped>
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

.cards-row {
    display: flex;
    flex-wrap: wrap;
    /* permet 2 cartes par ligne */
    gap: 20px;
    justify-content: center;
    /* centre les cartes */
}

.card {
    background-color: #e0f9e0;
    padding: 20px;
    border-radius: 10px;
    flex: 1 1 45%;
    /* 2 cartes par ligne */
    max-width: 45%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.icone {
    font-size: 30px;
    color: #007608;
    background-color: #e0f9e0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
}

.title-card h3 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #222;
}

.title-card ul {
    padding-left: 20px;
    list-style: disc;
}

.title-card li {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
}

/* Responsive */
@media (max-width: 768px) {
    .card {
        flex: 1 1 100%;
        max-width: 100%;
    }
}
</style>
