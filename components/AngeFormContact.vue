<template>
    <div class="contact-form-section section-padding-t90-b100" :style="{ backgroundColor: '#fff' }">
        <div class="container">
            <div class="row">

                <!-- Description + coordonnées -->
                <div class="col-lg-5 mb-5">
                    <div class="desc">
                        <div class="section-title mb-30">
                            <h4>Contact</h4>
                            <h2>Contactez-nous</h2>
                            <p>
                                L’Agence Nationale de Gestion de l’Environnement (ANGE) reste à votre écoute pour tout
                                besoin d’information, de partenariat ou d’accompagnement en matière de gestion durable
                                de l’environnement. N’hésitez pas à nous contacter pour toute question relative à nos
                                programmes, projets ou services.
                            </p>
                        </div>

                        <!-- Adresses -->
                        <div class="adresses">
                            <p><i class="fa fa-map-marker"></i>575, rue de l'Entente (Ex rue de l'OCAM)</p>
                            <p><i class="fa-solid fa-phone"></i> +228 22 21 21 53 </p>
                            <p><i class="fa fa-envelope"></i> angeenvironnement@gmail.com</p>
                        </div>

                        <!--  Réseaux sociaux -->
                        <div class="reseau-sociaux">
                            <a href="https://www.facebook.com/ange.togo" target="_blank" rel="noopener noreferrer"
                                class="facebook">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/ange-togo" target="_blank"
                                rel="noopener noreferrer" class="linkedin">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/ange_togo" target="_blank" rel="noopener noreferrer"
                                class="twitter">
                                <i class="fa-brands fa-twitter"></i>

                            </a>
                        </div>
                    </div>
                </div>

                <!--  Formulaire de contact -->
                <div class="col-lg-7 mtn-30 mb-5">
                    <div class="contact-card">
                        <div class="contact-header">
                            <h5>Formulaire</h5>
                        </div>

                        <div class="contact-form">
                            <form @submit.prevent="contactSend">
                                <div class="row">
                                    <div class="col-md-6 mt-30">
                                        <input type="text" placeholder="Nom & Prénom *" required v-model="form.nom" />
                                    </div>
                                    <div class="col-md-6 mt-30">
                                        <input type="tel" placeholder="Téléphone *" required v-model="form.telephone" />
                                    </div>
                                </div>

                                <div class="col-12 mt-30">
                                    <input type="email" placeholder="Adresse Email *" required v-model="form.email" />
                                </div>

                                <div class="col-12 mt-30">
                                    <textarea placeholder="Message *" required v-model="form.message"></textarea>
                                </div>

                                <div class="col-12 mt-30 text-right" style="height: 58px;">
                                    <button type="submit"
                                        class="btn btn-primary ange-btn-documentation d-flex align-items-center justify-content-center"
                                        :disabled="sendMessageBtn">
                                        <span v-if="!sendMessageBtn">Soumettre</span>
                                        <i class="fa fa-paper-plane ml-2" v-if="!sendMessageBtn"></i>
                                        <span v-else>Envoi...</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export default {
    name: 'ContactForm',
    data() {
        return {
            sendMessageBtn: false,
            form: {
                nom: '',
                email: '',
                telephone: '',
                message: ''
            }
        }
    },
    methods: {
        async contactSend() {
            const $toast = useToast()

            if (!this.form.nom || !this.form.email || !this.form.telephone || !this.form.message) {
                $toast.error('Veuillez remplir tous les champs obligatoires.', { position: 'top-right', duration: 4000 })
                return
            }

            if (!this.validateEmail(this.form.email)) {
                $toast.error('Adresse email invalide.', { position: 'top-right', duration: 4000 })
                return
            }

            this.sendMessageBtn = true
            try {
                const response = await this.$axios.post('/message/send', this.form)
                const data = response.data

                if (data.code !== 201) {
                    $toast.error(data.message, { position: 'top-right', duration: 4000 })
                } else {
                    $toast.success(data.message, { position: 'top-right', duration: 4000 })
                    this.resetForm()
                }
            } catch (error) {
                console.error('Erreur lors de l’envoi du message:', error)
                $toast.error('Une erreur est survenue, veuillez réessayer plus tard.', { position: 'top-right', duration: 4000 })
            } finally {
                this.sendMessageBtn = false
            }
        },
        validateEmail(email) {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            return emailRegex.test(email)
        },
        resetForm() {
            this.form = { nom: '', email: '', telephone: '', message: '' }
        }
    }
}
</script>

<style scoped>
.contact-form-section {
    padding-top: 90px;
    padding-bottom: 100px;
}

.desc {
    /* padding: 20px; */
    margin-bottom: 50px;
} 

.section-title h4 {
    font-size: 13px;
    color: #60be66;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: justify;
}

.section-title h2 {
    font-weight: bold;
    margin-bottom: 15px;
}

.section-title p {
    color: #555;
    font-size: 15px;
    line-height: 1.6;
}

.adresses p {
    margin: 8px 0;
    font-size: 15px;
    color: #333;
    display: flex;
    align-items: center;
}

.adresses i {
    color: #004622;
    font-size: 18px;
    margin-right: 10px;
}

.reseau-sociaux {
    margin-top: 20px;
    display: flex;
    gap: 15px;
}

.reseau-sociaux a {
    color: white;
    font-size: 18px;
    background-color: #004622;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 50%; */
    transition: 0.3s;
}

.reseau-sociaux a.facebook:hover {
    background-color: #3b5998;
}

.reseau-sociaux a.linkedin:hover {
    background-color: #0e76a8;
}

.reseau-sociaux a.twitter:hover {
    background-color: #1da1f2;
}

.contact-card {
    background-color: #fff;
    border: 1px solid #f5f5f5;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    padding: 30px 40px;
    border-radius: 6px;
}

.contact-header {
    background-color: #004622;
    padding: 25px 40px;
    border-radius: 6px 6px 0 0;
    margin: -30px -40px 20px -40px;
    display: flex;
    align-items: center;
}

.contact-header h5 {
    color: #fff;
    margin: 0;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    border: 1px solid #ddd;
    padding: 12px;
    border-radius: 4px;
    font-size: 14px;
}

.contact-form textarea {
    height: 150px;
    resize: none;
}

.contact-form button {
    background-color: #004622;
    border: none;
    color: white;
    font-weight: 500;
    transition: 0.3s;
    height: 58px;
    border-radius: 4px;
}

.contact-form button:hover {
    background-color: #006f33;
}

.contact-form button[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
}

.btn i {
    margin-left: 8px;
    font-size: 16px;
}
</style>
