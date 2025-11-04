<template>
    <div class="section-padding-top section-padding-bottom-180 overflow-hidden mb-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-xl-12 col-lg-12 col-12" data-aos="fade-up">
                    <div class="about-content-area about-four">
                        <div class="section-title-two">
                            <h3 class="text-cnce">Nos Domaines d'interventions</h3>
                        </div>
                        <div>
                            <span class="text-span-domaine">
                                L’ <strong>A</strong>gence <strong>N</strong>ationale de <strong>G</strong>estion de
                                l’<strong>E</strong>nvironnement intervient dans les
                                domaines suivants
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row frame-31">

                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/preventt-epidemic.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Evaluations et Audits environnementaux</p>
                        </div>
                    </div>

                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/preventt-epidemic.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Surveillance des paramètres environnementaux</p>
                        </div>
                    </div>

                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/save-the-earth.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Renforcement des capacités des acteurs en gestion durable de l’environnement
                            </p>
                        </div>
                    </div>

                    <div class="frame-31-1 col-md-6 col-xl-3">
                        <div class="ange-cnce-svg">
                            <img src="/images/svg/cnce-svg/preventt-epidemic.svg" alt="save-the-earth">
                        </div>
                        <div class="ange-cnce-svg-info">
                            <p>Information, Education et Communication sur l’environnement</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        ShapeWithAnimation: () => import('@/components/ShapeWithAnimation')
    },
};
</script>

<style lang="scss">
.text-span-domaine {
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 500;
    line-height: 1.2;
}
</style>