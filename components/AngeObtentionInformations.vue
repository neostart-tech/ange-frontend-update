<template>
    <div class="container mt-5 d-flex flex-column align-items-center section-padding">
        <div class="intro mb-5" data-aos="fade-up">
            <h4 class="subtitle">Informations</h4>
            <h2 class="main-title" style="color: #000 !important">
                Procédures, délais et coûts d'obtention des autorisations
            </h2>
            <p>Pour avoir plus d'informations concernant couts et delais , la durée des processus et autres ,
                téléchargez ce document ci-dessous. </p>
        </div>

        <!-- LIEN PDF -->
        <div class="note-link mb-5" data-aos="fade-up">
            <a href="/pdf/plaintes.pdf" target="_blank" class="pdf-link">
                Informations complémentaires &nbsp;
                <i class="fa fa-download"></i>
            </a>
        </div>

        <div class="contain">
            <div class="title mt-5">
                <h3>A. Processus , délais , couts et responsables </h3>
                <hr class="title-underline">
                
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Processus /Etapes IEIS</th>
                                <th>Delais des processus IEIS</th>
                                <th>Couts</th>
                                <th>Responsables</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(procedure, index) in procedures" :key="index">
                                <td>{{ procedure.etape }}</td>
                                <td>{{ procedure.delais }}</td>
                                <td>{{ procedure.cout }}</td>
                                <td>{{ procedure.responsable }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    procedures: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.section-padding {
    padding: 60px 0;
    text-align: center;
}

.subtitle {
    font-size: 16px;
    color: #007608;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
}

.main-title {
    font-size: 26px;
    line-height: 1.4;
    color: #000;
}

/* ===== LIEN PDF (bouton) ===== */
.pdf-link {
    display: inline-block;
    background-color: #000;
    color: #fff !important;
    text-decoration: none;
    padding: 30px 22px;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.pdf-link i {
    margin-left: 8px;
}

.pdf-link:hover {
    background-color: #1f4434;
    text-decoration: none;
    transform: translateY(-2px);
}

/* ===== TITRE AVEC HR BIEN CENTRÉ ===== */
.title {
    text-align: center;
    margin-bottom: 30px;
}

.title h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
    text-align: center;
}

.title-underline {
    width: 80px;
    height: 3px;
    background-color: #007608;
    border: none;
    margin: 0 auto 20px auto;
    /* Centrage automatique */
}

/* ===== TABLEAU ===== */
.table-responsive {
    width: 100%;
    overflow-x: auto;
}

.table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    /* Force les colonnes à avoir la même largeur */
}

/* En-tête du tableau avec fond gris */
.table thead th {
    background-color: #f8f9fa;
    /* Gris clair */
    color: #333;
    font-weight: 600;
    text-align: center;
    padding: 15px 10px;
    border: 1px solid #dee2e6;
    vertical-align: middle;
}

/* Cellules du tableau */
.table tbody td {
    padding: 12px 10px;
    border: 1px solid #dee2e6;
    text-align: justify;
    vertical-align: middle;
    word-wrap: break-word;
    /* Permet de casser les mots longs */
}

/* Alternance des couleurs des lignes pour meilleure lisibilité */
.table tbody tr:nth-child(even) {
    background-color: #f8f9fa;
}

.table tbody tr:nth-child(odd) {
    background-color: #ffffff;
}

/* Effet au survol */
.table tbody tr:hover {
    background-color: #e9ecef;
    transition: background-color 0.3s ease;
}

/* Répartition égale des colonnes */
.table th:nth-child(1),
.table td:nth-child(1) {
    width: 25%;
    /* Chaque colonne prend 25% de la largeur */
}

.table th:nth-child(2),
.table td:nth-child(2) {
    width: 25%;
}

.table th:nth-child(3),
.table td:nth-child(3) {
    width: 25%;
}

.table th:nth-child(4),
.table td:nth-child(4) {
    width: 25%;
}

/* Responsive */
@media (max-width: 768px) {
    .table {
        table-layout: auto;
        font-size: 14px;
    }

    .table thead th,
    .table tbody td {
        padding: 8px 6px;
    }

    .table th:nth-child(1),
    .table td:nth-child(1),
    .table th:nth-child(2),
    .table td:nth-child(2),
    .table th:nth-child(3),
    .table td:nth-child(3),
    .table th:nth-child(4),
    .table td:nth-child(4) {
        width: auto;
        /* Largeur automatique sur mobile */
    }

    .main-title {
        font-size: 22px;
    }

    .title h3 {
        font-size: 18px;
    }

    .title-underline {
        width: 60px;
        height: 2px;
    }
}

@media (max-width: 576px) {
    .section-padding {
        padding: 40px 0;
    }

    .table {
        font-size: 12px;
    }

    .table thead th,
    .table tbody td {
        padding: 6px 4px;
    }

    .pdf-link {
        padding: 20px 16px;
        font-size: 14px;
    }

    .title h3 {
        font-size: 16px;
    }

    .title-underline {
        width: 50px;
        height: 2px;
    }
}
</style>