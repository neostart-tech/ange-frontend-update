<template>
    <div class="contact-form-section section-padding-t90-b100" :style="{ backgroundColor: 'rgb(214, 216, 223);' }">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mtn-30 mb-5">
                    <div class="contact-form">
                        <form @submit.prevent="contactSend">
                            <div class="col-md-12 col-12 mt-30 col-lg-12">
                                <input type="text" placeholder="Nom & Prénom *" required v-model="form.nom">
                            </div>

                            <div class="col-md-12 col-12 mt-30 col-lg-12">
                                <input type="email" placeholder="Votre addresse Email *" required v-model="form.email">
                            </div>

                            <div class="col-md-12 col-12 mt-30 col-lg-12">
                                <input type="tel" placeholder="Votre numéro de téléphone *" required
                                    v-model="form.telephone">
                            </div>

                            <div class="col-12 mt-30">
                                <textarea name="message" placeholder="Message *" required
                                    v-model="form.message"></textarea>
                            </div>

                            <div class="col-12 text-center mt-30">
                                <button class="btn btn-primary ange-btn-documentation">Envoyer votre message</button>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="col-lg-5 ">
                    <div class="google-map-area section-padding-bottom">
                        <div class="container">
                            <div class="contact-map-area">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63471.90499099693!2d1.1704259216796893!3d6.131499000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e198420d666b%3A0xa1a4308dcac6a2f5!2sAgence%20nationale%20de%20Gestion%20de%20l&#39;Environnement%20(ANGE)!5e0!3m2!1sfr!2stg!4v1712149560177!5m2!1sfr!2stg"
                                    allowfullscreen="" loading="lazy" aria-hidden="false" tabindex="0"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    data() {
        return {
            sendMessageBtn: false,
            form: {
                nom: "",
                email: "",
                telephone: "",
                message: ""
            },
            nameRules: [
                v => !!v || 'Ce champs est obligatoire',
            ],
        }
    },

    methods: {
        async contactSend() {

            try {
                // Vérification de la validité du formulaire
                if (this.form) {
                    const response = await this.$axios.post('/message/send', this.form);
                    const data = await response;
                    if (data.data.code != 201) {
                        const $toast = useToast();
                        $toast.error(`${data.data.message}`, {
                            position: 'top-right',
                            duration: 4000,
                        });
                    }
                    else {
                        const $toast = useToast();
                        $toast.success(`${data.data.message}`, {
                            position: 'top-right',
                            duration: 4000,
                        });
                        this.form = {
                            nom: "",
                            email: "",
                            telephone: "",
                            message: ""
                        }
                    }
                } else {
                    // Afficher un message d'erreur si le formulaire est invalide
                    alert('Veuillez remplir tous les champs.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        validateEmail(email) {
            // Vérification de l'adresse email
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            return emailRegex.test(email);
        },
    }
}
</script>