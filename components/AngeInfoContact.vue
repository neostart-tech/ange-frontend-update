<template>
    <div class="section-padding-t90-b100 overflow-hidden">
        <div class="container shape-animate">

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30 gsaTest" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Localisation</h4>
                            <span class="info-text"> 575, rue de l'Entente (Ex rue de l'OCAM)</span>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Téléphone</h4>
                            <span class="info-text"> +228 22 21 21 53 </span><br>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Boite mail</h4>
                            <span class="info-text">
                                <a href="mailto:demo@example.com">angeenvironnement@gmail.com</a>
                            </span><br>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <shape-with-animation add-class-name="shape-1" data-depth="4"
                img-src="/images/shape-animation/video-shape-1.png" />

        </div>
    </div>
</template>

<script>


export default {
    components: {
        ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
    },

};
</script>
