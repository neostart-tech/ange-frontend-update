<template>
    <section class="apropos-section container mb-5">
        <div class="content-wrapper">
            <div class="image-col">
                <img src="/images/bg/about-5.png" alt="Le PNADE">
            </div>

            <div class="text-col">
                <h4>A propos</h4>
                <h2>Le PASIET qu’est ce que c’est ?</h2>
                <p>
                    L’émergence de la problématique du développement durable consécutive à la recrudescence des risques
                    environnementaux de tout genre à l’échelle planétaire a placé le suivi environnemental et la
                    production des données au cœur des priorités des politiques publiques. Ainsi le Projet
                    d’amélioration du système d’information environnementale du Togo (PASIET) est conçu et a pour
                    objectif général de contribuer à l’édification et au renforcement d’un mécanisme de mesure et de
                    suivi des objectifs de développement durable ainsi que de la mesure de la durabilité
                    environnementale et écologique du Togo. Ce projet se met en œuvre sous l’initiative du Ministère de
                    l’Environnement et des Ressources Forestières avec l’appui des partenaires techniques et financiers
                    (BAD, GSPDD, UE, PNUE).
                </p>
            </div>
        </div>
       
    </section>
</template>

<style scoped>
.apropos-section {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
}

.content-wrapper {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 40px;
}

.image-col {
    flex: 1 1 0%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.image-col img {
    width: 330px;
    height: 432px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.text-col {
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    .content-wrapper {
        flex-direction: column;
        gap: 30px;
    }

    .image-col {
        justify-content: center;
    }

    .image-col img {
        height: auto;
        max-height: 400px;
        max-width: 100%;
    }

    .text-col {
        text-align: center;
    }

    .text-col h2 {
        font-size: 22px;
    }
}

@media (max-width: 768px) {
    .apropos-section {
        padding: 0 15px;
    }

    .content-wrapper {
        margin-top: 30px;
        gap: 25px;
    }

    .text-col h2 {
        font-size: 20px;
    }

    .text-col p {
        font-size: 13px;
    }
}

@media (max-width: 480px) {
    .apropos-section {
        padding: 0 10px;
    }

    .content-wrapper {
        margin-top: 20px;
        gap: 20px;
    }

    .text-col h4 {
        font-size: 13px;
    }

    .text-col h2 {
        font-size: 18px;
    }

    .text-col p {
        font-size: 12px;
    }
}
</style>