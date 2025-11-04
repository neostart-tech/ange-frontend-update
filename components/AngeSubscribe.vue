<template>
    <div class="section-padding-t110-b120 newsletter-section bg-cover overflow-hidden" data-overlay="0.7"
        :style="{ backgroundImage: `url('/images/bg/arto-unsplash.png')` }">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-6 col-md-6">
                    <p class="subscribe-text">Entrez votre adresse e-mail pour plus d’info</p>
                </div>

                <div class="col-lg-6 col-md-6">
                    <form @submit.prevent="subScribeForm">
                        <div class="row">
                            <div class="col-lg-9 col-md-9 mb-4">
                                <input type="email" placeholder="Entrez votre email" name="email" v-model="form.email">
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <button class="btn btn-primary ange-btn-documentation">Soumettre</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <ShapeWithAnimation add-class-name="shape-1" data-depth="1"
            img-src="/images/shape-animation/newsletter-shape.png" />
    </div>
</template>

<script>
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    components: {
        ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
    },
    data() {
        return {
            form: {
                email: ""
            },
            nameRules: [
                v => !!v || 'Ce champs est obligatoire',
            ],
        }
    },

    methods: {
        async subScribeForm() {
            try {
                // Vérification de la validité du formulaire
                if (this.form) {
                    const response = await this.$axios.post('/subscribe/new-member', this.form);
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
                            email: ""
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

};
</script>

<style lang="scss">
.subscribe-text {
    max-width: 570px;
    color: #FFF;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
}
</style>