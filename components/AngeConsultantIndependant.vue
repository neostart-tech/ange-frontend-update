<template>
    <div class="consultants-section container">
        <div class="section-header">
            <h5 class="subtitle">Consultants indépendants</h5>
            <h2 class="main-title">Bâtir un avenir durable par la gestion environnementale</h2>
        </div>

        <div class="cards-grid">
            <div class="consultant-card" v-for="(card, index) in cards" :key="index">
                <div class="card-content">
                    <h3 class="card-title">{{ card.title }}</h3>
                    <ul class="requirements-list">
                        <li v-for="(item, i) in card.content" :key="i">
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cards = [
    {
        title: "Conditions d'obtention de l'agrément",
        content: [
            "Disposer d'un numéro d'identification fiscale",
            "Être titulaire d'un diplôme BAC + 5 en gestion de l'environnement ou en sociologie",
            "Stage de formation d'au moins 2 ans dans un bureau d'étude agréé",
            "Participation à la réalisation de missions d'évaluations environnementales",
            "Élaboration de 5 rapports dans le domaine dont 1 en qualité de chef de mission"
        ]
    },
    {
        title: "Dossier de demande d'agrément",
        content: [
            "Demande timbrée adressée au ministre chargé de l'environnement",
            "Copie de la pièce d'identité nationale en cours de validité",
            "Deux photos d'identité récentes",
            "Copie certifiée conforme des diplômes",
            "Programme de formation avec modules d'évaluation",
            "Casier judiciaire datant de moins de 3 mois",
            "Curriculum vitae détaillé et signé",
            "Attestations de participation aux rapports d'évaluation",
            "Attestation de stage ou de missions réalisées",
            "Quittance des frais de délivrance de l'agrément"
        ]
    },
    {
        title: "Procédure d'agrément et validité",
        content: [
            "Agrément accordé par décision ministérielle après avis du comité",
            "Durée de validité : 5 ans renouvelable",
            "Délivrance de l'attestation d'agrément par le Ministre",
            "Versement des frais à la comptabilité de l'ANGE",
            "Conformité aux arrêtés conjoints des ministères concernés"
        ]
    }
];
</script>

<style scoped>
.consultants-section {
    padding: 60px 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.subtitle {
    font-size: 14px;
    color: #007608; /* Vert */
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    font-weight: 600;
}

.main-title {
    font-size: 28px;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
    line-height: 1.3;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}

.consultant-card {
    background: #e0f9e0; /* Background vert clair */
    padding: 30px;
    border: none; /* Pas de bordure */
    box-shadow: none; /* Pas d'ombre */
    transition: all 0.3s ease;
}

.consultant-card:hover {
    transform: translateY(-2px);
}

.card-content {
    height: 100%;
}

.card-title {
    font-size: 18px;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
    line-height: 1.4;
    border-bottom: 2px solid #007608;
    padding-bottom: 10px;
}

.requirements-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.requirements-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 118, 8, 0.1); /* Légère séparation */
}

.requirements-list li:last-child {
    border-bottom: none;
}

.requirements-list li span {
    color: #555;
    line-height: 1.5;
    font-size: 14px;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .cards-grid {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .consultants-section {
        padding: 40px 15px;
    }
    
    .main-title {
        font-size: 24px;
    }
    
    .cards-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .consultant-card {
        padding: 25px 20px;
    }
    
    .card-title {
        font-size: 17px;
    }
}

@media (max-width: 576px) {
    .consultants-section {
        padding: 30px 10px;
    }
    
    .main-title {
        font-size: 22px;
    }
    
    .consultant-card {
        padding: 20px 15px;
    }
    
    .card-title {
        font-size: 16px;
    }
    
    .requirements-list li span {
        font-size: 13px;
    }
    
    .subtitle {
        font-size: 13px;
    }
}
</style>