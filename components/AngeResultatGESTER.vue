<template>
    <div class="container mb-5">
        <div class="content-wrapper">


            <!-- Colonne texte -->
            <div class="text-col">
                <h4>Résultats</h4>
                <h2>Cursus de formation en Gestion Territoriale des Espaces et des Ressources (GESTER)</h2>
                <p>
                    L’outil a pour objectif de renforcer les compétences des acteurs du développement local en matière
                    d’intégration des enjeux environnementaux dans leurs stratégies et leurs actions.
                    Il comprend cinq modules de formation ainsi que huit fiches techniques diffusant des exemples de
                    bonnes pratiques environnementales.
                </p>
            </div>
            <!-- Colonne image / carte -->
            <div class="image-col">
                <div class="card">
                    <div class="icone">
                        <i class="fa fa-user-check"></i>
                    </div>
                    <div class="desc">
                        <strong>Près de 600 acteurs locaux</strong> ont été formés lors de 19 sessions réparties sur
                        l’ensemble du pays.
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

}

.content-wrapper {
    display: flex;
    gap: 40px;
    align-items: stretch;
    margin-top: 40px;
    width: 100%;
}

/* Texte à gauche */
.text-col {
    flex: 1 1 50%;
    background: #007608;
    padding: 50px;
}

.text-col h4 {
    font-size: 14px;
    color: #007608;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
        color: #fff !important;

}

.text-col h2 {
    font-size: 26px;
    color: #fff !important;
    margin-bottom: 15px;
    line-height: 1.3;
}

.text-col p {
    font-size: 14px;
    color: #fff !important;
    line-height: 1.6;
}

/* Carte / info à droite */
.image-col {
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-col .card {

    color: #000;
    border: 2px solid #007608;
    padding: 30px 20px;
    text-align: center;
    width: 100%;
}

.image-col .icone {
    font-size: 40px;
    margin-bottom: 15px;
}

.image-col .desc {
    font-size: 16px;
    line-height: 1.5;
}

/* --- Responsive --- */
@media (max-width: 992px) {
    .content-wrapper {
        flex-direction: column;
    }

    .image-col {
        margin-top: 20px;
    }

    .text-col h2 {
        font-size: 22px;
    }
}
</style>
