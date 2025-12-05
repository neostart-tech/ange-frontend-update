<template>
    <div class=" container">
        <div class="google-map-area section-padding-bottom">
            <div class="contact-map-area">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63471.90499099693!2d1.1704259216796893!3d6.131499000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e198420d666b%3A0xa1a4308dcac6a2f5!2sAgence%20nationale%20de%20Gestion%20de%20l'Environnement%20(ANGE)!5e0!3m2!1sfr!2stg!4v1712149560177!5m2!1sfr!2stg"
                    allowfullscreen loading="lazy" aria-hidden="false" tabindex="0"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.contact-map-area iframe {
    width: 100% !important;
    height: 550px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.google-map-area {
    padding: 10px;
}
</style>
