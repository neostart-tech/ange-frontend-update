<template>
    <div class="container d-flex flex-column align-items-center section-padding">
        <div class="contain">
            <div class="title">
                <h3>B. Couts des prestations de l’ ANGE</h3>
                <hr class="title-underline">
                
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="3" class="table-main-title">
                                    1.Couts de visite de sites pour validation des TdRs
                                </th>
                            </tr>
                            <tr>
                                <th>Numéro</th>
                                <th>Désignation</th>
                                <th>Couts</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(coutPrestation, index) in coutPrestations" :key="index">
                                <td>{{ coutPrestation.numero }}</td>
                                <td>{{ coutPrestation.designation }}</td>
                                <td>{{ coutPrestation.cout }}</td>
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
    },
    coutPrestations: {
        type: Array,
        required: true
    },
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
}

/* ===== TITRE PRINCIPAL DU TABLEAU ===== */
.table-main-title {
    background-color: #00970a !important;
    color: white !important;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding: 20px 15px !important;
    border: 1px solid #007608 !important;
}

/* ===== TABLEAU ===== */
.table-responsive {
    width: 100%;
    overflow-x: auto;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    margin-bottom: 0;
}

/* En-tête du tableau avec fond gris */
.table thead th {
    background-color: #f8f9fa;
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
    text-align: center;
    vertical-align: middle;
    word-wrap: break-word;
}

/* Alignement spécifique pour les colonnes */
.table tbody td:nth-child(1) {
    text-align: center;
    font-weight: 500;
}

.table tbody td:nth-child(2) {
    text-align: left;
}

.table tbody td:nth-child(3) {
    text-align: center;
    font-weight: 500;
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

/* RÉPARTITION DES COLONNES */
.table th:nth-child(1),
.table td:nth-child(1) {
    width: 20%;
}

.table th:nth-child(2),
.table td:nth-child(2) {
    width: 50%;
}

.table th:nth-child(3),
.table td:nth-child(3) {
    width: 30%;
}

/* Responsive */
@media (max-width: 768px) {
    .table {
        table-layout: auto;
        font-size: 14px;
    }

    .table thead th,
    .table tbody td {
        padding: 10px 8px;
    }

    .table-main-title {
        font-size: 16px;
        padding: 15px 10px !important;
    }

    .table th:nth-child(1),
    .table td:nth-child(1),
    .table th:nth-child(2),
    .table td:nth-child(2),
    .table th:nth-child(3),
    .table td:nth-child(3) {
        width: auto;
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
        padding: 8px 6px;
    }

    .table-main-title {
        font-size: 14px;
        padding: 12px 8px !important;
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

    .table tbody td:nth-child(2) {
        text-align: left;
    }
}
</style>