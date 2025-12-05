<template>
    <section class="consultants-green-section">
        <div class="container">
            <!-- En-tête -->
            <div class="section-header">
                <h6 class="main-title-first">Informations</h6>

                <h1 class="main-title">Procédures, délais et coûts d'obtention des autorisations</h1>
                <h2 class="sub-title">Pour avoir plus d’informations  concernant couts et delais , la durée des processus et autres , téléchargez ce document ci-dessous. </h2>

            </div>

            <!-- Bureaux d'études -->
            <div class="table-section">
                
                <div class="section-label">
                    <span class="label-text">CONSULTANTS INDÉPENDANTS ET BUREAUX D'ÉTUDES</span>
                </div>
                <div class="simple-table">
                    <div class="table-header">
                        <div class="col-entreprise">ENTREPRISE</div>
                        <div class="col-contact">CONTACT</div>
                    </div>
                    <div class="table-body">
                        <div class="table-row" v-for="(bureau, index) in bureauxEtudes" :key="'bureau-' + index">
                            <div class="col-entreprise">
                                <span class="entreprise-name">{{ bureau.name }}</span>
                            </div>
                            <div class="col-contact">
                                <span class="contact-number">{{ bureau.phone }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Consultants indépendants -->
            <div class="table-section">
                <div class="section-label">
                    <span class="label-text">CONSULTANTS INDÉPENDANTS ET BUREAUX D'ÉTUDES</span>
                </div>
                <div class="simple-table">
                    <div class="table-header consultant-header">
                        <div class="col-consultant">CONSULTANT</div>
                        <div class="col-contact">CONTACT</div>
                    </div>
                    <div class="table-body">
                        <div class="table-row consultant-row" v-for="(consultant, index) in consultantsIndependants"
                            :key="'consultant-' + index">
                            <div class="col-consultant">
                                <span class="consultant-name">{{ consultant.name }}</span>
                            </div>
                            <div class="col-contact">
                                <span class="contact-number">{{ consultant.phone }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bouton de téléchargement -->
            <div class="download-section">
                <a class="download-btn" href="/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf" download>
                    <i class="fas fa-download"></i>
                    TÉLÉCHARGER LA LISTE COMPLÈTE
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
// Données des bureaux d'études
const bureauxEtudes = [
    { name: "AFTOTECH", phone: "+228 90 79 78 54" },
    { name: "BETIA SARL", phone: "+228 90 14 24 90" },
    { name: "BTEDE", phone: "+228 90 36 69 68" },
    { name: "CITECED CONSULTING SARL", phone: "+228 90 37 07 63" },
    { name: "DECISION", phone: "+228 90 03 59 27" },
    { name: "ECOSAFE SARL U", phone: "+228 92 96 39 15" },
    { name: "ENDE Consulting", phone: "+228 90 10 99 97" },
    { name: "ENVIPUR", phone: "+228 98 34 09 72" },
    { name: "GLOBAL LEAD SA", phone: "+228 90 04 62 54" },
    { name: "GROUP SARL", phone: "+228 90 32 44 76" },
    { name: "JAT Consulting", phone: "+228 90 34 43 74 / 98 22 84 00" },
    { name: "QHSE CONSULTING", phone: "+228 93 04 17 69 / 79 86 10 74" },
    { name: "SEACHES", phone: "+228 90 91 94 89" },
    { name: "SECDE", phone: "+228 90 02 45 67" },
    { name: "SIBITTI CONSULT", phone: "+228 90 04 55 68" },
    { name: "WINIGA CONSULTING SARL U", phone: "+228 90 13 61 42" }
];

// Données des consultants indépendants
const consultantsIndependants = [
    { name: "ADANI Afiya Awarinèta", phone: "+228 90 90 85 59 / 98 22 33 31" },
    { name: "AGBLEMELO TSOMAFO Ahoahome", phone: "+228 90 34 43 74 / 98 22 84 00" },
    { name: "AKPAVI Sêmihinva", phone: "+228 90 22 46 70" },
    { name: "ALFA Essohanam", phone: "+228 90 32 81 19 / 96 99 02 52" },
    { name: "ASSOGBA Houéhanou Otoudé Kokouvi", phone: "+228 90 95 49 89" },
    { name: "ASSOGBA Kossi", phone: "+228 90 39 13 00 / 90 95 49 69" },
    { name: "AVOYI Yawo Eméfa", phone: "+228 90 83 82 80" },
    { name: "AYAH MASSABALO", phone: "+228 90 30 18 16" },
    { name: "BADASSAN Tchaa Esso-Essinam", phone: "+228 90 73 15 84" },
    { name: "BRUCE Ahlonko Koffi", phone: "+228 90 95 06 85" },
    { name: "DJABARE Komna", phone: "+228 96 67 80 05 / 91 43 39 78" },
    { name: "DJAKAMBI Banlipo", phone: "+228 91 20 53 17" },
    { name: "DZOGBEDO Agbényo", phone: "+228 90 03 87 15 / 98 22 55 65" },
    { name: "ESSI Edem Ankou", phone: "+228 90 93 45 84" },
    { name: "FETOR Yao Dovlo", phone: "+228 90 90 39 48" },
    { name: "GELI Etonam Kossiwa", phone: "+228 90 81 32 34" },
    { name: "KOBGE Lowanou", phone: "+228 90 11 94 70" },
    { name: "LAWSON Tévi Atator", phone: "+228 92 41 98 05" },
    { name: "NANTO Gnandi Raïdou", phone: "+228 93 04 17 69 / 79 86 10 74" },
    { name: "NIMAN Sarakawa Abalo", phone: "+228 93 07 75 30" },
    { name: "PALI Solim", phone: "+228 90 89 13 89" },
    { name: "POLO-AKPISSO Aniko", phone: "+228 90 38 62 04" },
    { name: "SAMARO Bimounam-Brèw", phone: "+228 90 10 56 97 / 97 79 81 81" },
    { name: "SENIOU Djao", phone: "+228 90 38 36 10" },
    { name: "SIDI ISSAH Aboudala", phone: "+228 90 12 31 19" },
    { name: "SIMTCHOOU Maliwèssong", phone: "+228 91 27 81 93" },
    { name: "Dr TCHEINTI NABINE", phone: "+228 90 10 99 97" },
    { name: "WALLA Esso-Simna", phone: "+228 90 88 33 18" }
];



</script>

<style scoped>
.consultants-green-section {
    padding: 40px 20px;
    background: #ffffff;
    min-height: 100vh;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

/* En-tête */
.section-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
}

.main-title-first{
    font-size:13px;
    color:#007608;

}

.main-title {
    font-size: 25px;
    font-weight: 700;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}




.sub-title {
    font-size:13px;
    font-weight: 500;
    color: #333;
    margin: 0;
    line-height: 1.4;
}

.header-line {
    width: 80px;
    height: 3px;
    background: #007608;
    margin: 15px auto 0;
}

/* Sections */
.table-section {
    margin-bottom: 40px;
}

.section-label {
    background: #007608;
    padding: 12px 20px;
    margin-bottom: 0;
}

.label-text {
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Tableau simple */
.simple-table {
    border: 1px solid #e0e0e0;
    border-top: none;
}

.table-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #f0f8f0;
    border-bottom: 2px solid #007608;
    font-weight: 600;
    color: #007608;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.3px;
}

.table-header.consultant-header {
    grid-template-columns: 1fr 1fr;
}

.table-header>div {
    padding: 15px 20px;
    border-right: 1px solid #e0e0e0;
}

.table-header>div:last-child {
    border-right: none;
}

.table-body {
    background: white;
}

.table-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s ease;
}

.table-row.consultant-row {
    grid-template-columns: 1fr 1fr;
}

.table-row:hover {
    background: #f8fdf8;
}

.table-row>div {
    padding: 15px 20px;
    border-right: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
}

.table-row>div:last-child {
    border-right: none;
}

.entreprise-name,
.consultant-name {
    font-weight: 600;
    color: #333;
    font-size: 0.95rem;
}

.contact-number {
    color: #007608;
    font-weight: 500;
    font-size: 0.9rem;
}

/* Section téléchargement */
.download-section {
    text-align: center;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 2px solid #f0f0f0;
}

.download-btn {
    background: #000000;
    color: #ffffff;
    border: none;
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.download-btn:hover {
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.download-btn:active {
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
    .consultants-green-section {
        padding: 20px 15px;
    }

    .main-title {
        font-size: 1.2rem;
    }

    .sub-title {
        font-size: 0.9rem;
    }

    .table-header {
        grid-template-columns: 1fr !important;
        display: none;
    }

    .table-row {
        grid-template-columns: 1fr !important;
        border: 1px solid #e0e0e0;
        margin-bottom: 10px;
        padding: 15px;
    }

    .table-row>div {
        border-right: none;
        border-bottom: 1px solid #f0f0f0;
        padding: 8px 0;
        display: flex;
         justify-content: flex-start; 
        align-items: center;    
    }

    .table-row>div:last-child {
        border-bottom: none;
    }

    .table-row>div::before {
        content: attr(data-label);
        font-weight: 600;
        color: #007608;
        font-size: 0.8rem;
        text-transform: uppercase;
        margin-right: 10px;
    }

    .col-entreprise::before {
        content: "Entreprise";
    }

    .col-consultant::before {
        content: "Consultant";
    }

    .col-contact::before {
        content: "Contact";
    }

    .download-btn {
        width: 100%;
        justify-content: center;
        padding: 12px 20px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 10px;
    }

    .main-title {
        font-size: 1.1rem;
    }

    .section-label {
        padding: 10px 15px;
    }

    .label-text {
        font-size: 0.9rem;
    }

    .table-row {
        padding: 12px;
    }
}
</style>