<template>

 <section class="objectifs-section container mb-5 mt-5">
        <div class="text-col mt-5">
            <h4>A propos</h4>
            <h2>Limites et défis persistants</h2>
            <p>
                Malgré ces résultats, il existe toujours un déficit en statistiques environnementales, ce qui constitue
                un sérieux handicap pour le secteur et occulte les efforts du Gouvernement et des partenaires techniques
                et financiers pour le Développement durable et la protection de la Nature. En effet, de tous les travaux
                réalisés essentiellement basé sur le CDSE 2013 et l’approche Driving
                Forces-Pressures-State-Impact-Réponses (DPSIR) pour l’analyse des problèmes environnementaux, il
                n’existe pas pour l’heure le système de la comptabilité économique et environnementale (SCEE) et une
                plateforme web au Togo pour faciliter l'accès aux données environnementales aux acteurs impliqués dans
                la gestion de l'environnement et décloisonner les secteurs pour ainsi relever des défis interdépendants,
                notamment la perte de biodiversité, la disponibilité de l’eau douce, la dégradation des sols, la
                pollution et le changement climatique
            </p>
        </div>
    </section>

</template>

<style scoped>
.objectifs-section {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
}

.title h4 {
    font-size: 13px;
    color: #007608;
    text-transform: uppercase;
    margin-bottom: 6px;
    letter-spacing: 1px;
}

.title h2 {
    font-size: 25px;
    margin-bottom: 25px;
    line-height: 1.3;
    color: #222;
}

.cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
}

.card {
    flex: 0 0 calc(33.333% - 30px);
    background: #e7fbe7;
    border-radius: 10px;
    padding: 25px 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 300px;
    max-height: 330px;
    transition: all 0.3s ease;
}

.card:hover {
    background: #d9f7d9;
    transform: translateY(-5px);
}

/* --- Icônes centrées --- */
.icone {
    font-size: 36px;
    color: #007608;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

/* --- Texte --- */
.desc {
    font-size: 15px;
    line-height: 1.6;
    color: #444;
    text-align: justify;
    flex: 1;
}

.text-col h4 {
    font-size: 14px;
    color: #007608;
    text-transform: uppercase;
    margin-bottom: 6px;
    letter-spacing: 1px;
}

.text-col h2 {
    font-size: 25px;
    margin-bottom: 15px;
    line-height: 1.3;
    color: #222;
}

.text-col p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    text-align: justify;
}

/* --- Responsive --- */
@media (max-width: 992px) {
    .card {
        flex: 0 0 calc(50% - 25px);
        /* 2 par ligne */
        min-height: 280px;
        max-height: 320px;
    }
}

@media (max-width: 600px) {
    .card {
        flex: 0 0 100%;
        /* 1 par ligne */
        min-height: auto;
        max-height: none;
    }
}
</style>
