<template>
    <div class="section-padding overflow-hidden">
        <div class="container">
            <div class="row">
                <!-- About Content Start -->
                <div class="col-lg-12" data-aos="fade-up">
                    <div class="about-content-area">
                        <div class="row mtn-30 mb-60">
                            <div class="col-md-5 col-sm-6 col-12 mt-30" data-aos="fade-up">
                                <div class="about-funfact">
                                    <h6 class="text-cnce">CNCE</h6>
                                    <p class="text-info-cnce">Retrouvez la carte nationale des capacités
                                        environnementales
                                        au Togo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- About Content Start -->
            </div>

            <div class="container mb-5">
                <div class="row ange-cnce-cover">

                    <div class="mt-5 col-md-6 col-xl-6" v-for="(thematique, index) in groupeThematiqueData"
                        :key="index">
                        <div class="ange-cnce-img intro-section overlay my-overlay bg-cover"
                            :style="{ backgroundImage: `url('${thematique.image}')` }">
                            <div class="container">
                                <div class="row row-cols-lg-1 row-cols-1">
                                    <div class="col">
                                        <div class="intro-content m-auto">
                                            <NuxtLink to="#">
                                                <h4 class="cnce-title-info">{{ thematique.nom_secteur }}</h4>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row frame-31">
                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/save-the-earth.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Sauvegardes environnementales et sociales</p>
                        </div>
                    </div>

                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/air-pollution.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Pollutions, dégradations environnementales nuisances et assainissement
                            </p>
                        </div>
                    </div>

                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/drone-surveillance.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Surveillance et suivi de l’environnement </p>
                        </div>
                    </div>

                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/preventt-epidemic.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Préservation des forêts et de la faune</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import groupeThematiqueData from "~/data/groupe-thematique.json"

export default {
    data() {
        return {
            groupeThematiqueData
        }
    },
};
</script>

<style lang="scss">
.text-cnce {
    color: var(--foundation-green-dark-active, #00a651);
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}

.text-info-cnce {
    color: var(--foundation-green-dark-active, #144C39);
    font-family: "Work Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

.frame-31 {
    display: flex;
    padding: 32.43px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    background: #DCFCE7;
}

.frame-31-1 {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.895px;
}

.ange-cnce-svg {
    max-width: 63.924px;
    max-height: 47.139px;
    border-radius: 7.592px;
}

.ange-cnce-svg-info {
    color: var(--foundation-green-dark-hover, #1A654C);
    font-family: sans-serif;
    font-size: 16.89px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    max-width: 263.963px;
}

.ange-cnce-cover {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
}

.ange-cnce-img {
    max-width: 583px;
    max-height: 261px;
    border-radius: 7.592px;
    gap: 2.895px;
}

.my-overlay::before {
    border-radius: 7.592px;
    background: linear-gradient(rgb(0 0 0 / 19%), rgb(104 109 103 / 60%)) !important;
}

.cnce-title-info {
    max-width: 420px;
    max-height: 67px;
    flex-shrink: 0;
    color: #FFF;
    font-family: sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}

@media (min-width: 1400px) {
    .my-lg-cnce {
        margin-right: -32px;
    }
}
</style>
