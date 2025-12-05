<template>
    <div class="container">
        <div class="procedures-container">
            <!-- Section des coûts de validation -->
            <div class="costs-section" data-aos="fade-up">
                <div class="section-header-mini">
                    <div class="accent-line-mini"></div>
                    <h2 class="section-title-mini">
                        Coûts de Validation des Rapports <span class="title-accent">Provisoires</span>
                    </h2>
                </div>

                <!-- Tableau des coûts - Version Desktop -->
                <div class="table-elegant costs-table" data-aos="fade-up" data-aos-delay="100">
                    <div class="table-header">
                        <div class="table-title">
                            <div class="title-decoration">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </div>
                            <h3>Validation des rapports provisoires</h3>
                        </div>
                        <div class="table-stats">
                            <span class="stat">{{ coutValidations.length }} éléments</span>
                        </div>
                    </div>

                    <div class="table-content desktop-view">
                        <table class="elegant-table">
                            <thead>
                                <tr>
                                    <th class="col-number">
                                        <div class="column-title">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M4 10v12h16V10H4zm14 10H6v-2h12v2zm0-4H6v-2h12v2zm2-6h-4V4H8v6H4l8 8 8-8z" />
                                            </svg>
                                            <span>Numéro</span>
                                        </div>
                                    </th>
                                    <th class="col-investment">
                                        <div class="column-title">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.24 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                            </svg>
                                            <span>Coût d'investissement</span>
                                        </div>
                                    </th>
                                    <th class="col-royalty">
                                        <div class="column-title">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                            </svg>
                                            <span>Montant de redevance</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(validation, index) in coutValidations" :key="index" class="table-row"
                                    :class="{ 'row-alt': index % 2 === 0 }">
                                    <td class="cell-number">
                                        <div class="number-tag">
                                            {{ validation.numero || '—' }}
                                        </div>
                                    </td>
                                    <td class="cell-investment">
                                        <div class="investment-content">
                                            <span class="investment-text">{{ validation.cout_investissement || '—'
                                                }}</span>
                                        </div>
                                    </td>
                                    <td class="cell-royalty">
                                        <div class="royalty-tag">
                                            {{ validation.montant_redevance || '—' }}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Version Mobile (cartes) -->
                    <div class="mobile-view">
                        <div class="mobile-cards">
                            <div v-for="(validation, index) in coutValidations" :key="index" class="cost-card">
                                <div class="card-header">
                                    <div class="number-indicator">
                                        <span class="number-badge">{{ validation.numero || '—' }}</span>
                                    </div>
                                    <div class="card-main-title">
                                        <h4>Élément {{ validation.numero }}</h4>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div class="info-row">
                                        <div class="info-label">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.24 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                            </svg>
                                            Coût d'investissement
                                        </div>
                                        <div class="info-value investment-mobile">
                                            {{ validation.cout_investissement || '—' }}
                                        </div>
                                    </div>
                                    <div class="info-row">
                                        <div class="info-label">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                            </svg>
                                            Montant de redevance
                                        </div>
                                        <div class="info-value royalty-mobile">
                                            {{ validation.montant_redevance || '—' }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Indicateur de fin -->
                    <div class="table-footer">
                        <div class="completion-indicator">
                            <div class="indicator-text">Liste des validations</div>
                            <div class="indicator-line"></div>
                        </div>
                    </div>
                </div>

                <!-- Source -->
                <div class="source-section" data-aos="fade-up" data-aos-delay="200">
                    <p class="source-text">
                        Source : Extrait de l'arrêté interministériel n°0024 / MEF/MERF
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    coutValidations: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.container{
    max-width: 1250px  !important;

}
.procedures-container {
    margin: 0 auto;
    padding: 20px 0 10px;
}

/* Section header mini */
.costs-section {
    margin-bottom: 25px;
    width: 100%;
}

.section-header-mini {
    margin-bottom: 20px;
    width: 100%;
    padding: 0 20px;
}

.accent-line-mini {
    width: 25px;
    height: 2px;
    background: linear-gradient(90deg, #007608, #00a10d);
    margin-bottom: 12px;
}

.section-title-mini {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
    width: 100%;
}

.title-accent {
    color: #007608;
    font-weight: 600;
}

/* Tableau élégant pour les coûts - PLEINE LARGEUR */
.costs-table {
    background: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border: 1px solid #f0f0f0;
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px 12px;
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
}

.table-title {
    display: flex;
    align-items: center;
    gap: 12px;
}

.title-decoration {
    display: flex;
    gap: 3px;
}

.dot {
    width: 5px;
    height: 5px;
    background: #007608;
}

.dot:nth-child(2) {
    background: #00a10d;
}

.dot:nth-child(3) {
    background: #4cd964;
}

.table-title h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}

.table-stats .stat {
    font-size: 0.8rem;
    color: #666;
    font-weight: 500;
    background: #f8f8f8;
    padding: 4px 10px;
}

/* Contenu du tableau desktop - PLEINE LARGEUR */
.table-content {
    overflow-x: auto;
    width: 100%;
}

.elegant-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.elegant-table thead {
    background: #fafafa;
    width: 100%;
}

.elegant-table th {
    padding: 14px 16px;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    border-bottom: 1px solid #f0f0f0;
}

.column-title {
    display: flex;
    align-items: center;
    gap: 6px;
}

.column-title svg {
    opacity: 0.7;
}

/* Largeurs des colonnes - OPTIMISÉES POUR PLEINE LARGEUR */
.col-number {
    width: 20%;
    min-width: 80px;
}

.col-investment {
    width: 50%;
    min-width: 200px;
}

.col-royalty {
    width: 30%;
    min-width: 120px;
}

/* Lignes du tableau */
.table-row {
    transition: background-color 0.2s ease;
    border-bottom: 1px solid #f8f8f8;
    width: 100%;
}

.table-row:last-child {
    border-bottom: none;
}

.table-row:hover {
    background: #fafafa;
}

.row-alt {
    background: #fcfcfc;
}

.elegant-table td {
    padding: 14px 16px;
    vertical-align: middle;
    width: 100%;
}

/* Cellules spécifiques */
.cell-number {
    border-right: 1px solid #f5f5f5;
}

.number-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    background: rgba(0, 118, 8, 0.1);
    color: #007608;
    font-weight: 600;
    font-size: 0.85rem;
    border: 1px solid rgba(0, 118, 8, 0.2);
    min-width: 40px;
    width: fit-content;
}

.cell-investment {
    border-right: 1px solid #f5f5f5;
}

.investment-content {
    min-width: 0;
    width: 100%;
}

.investment-text {
    color: #1a1a1a;
    font-weight: 500;
    line-height: 1.4;
    display: block;
    width: 100%;
    font-size: 0.9rem;
}

.cell-royalty .royalty-tag {
    display: inline-flex;
    align-items: center;
    padding: 7px 12px;
    background: rgba(245, 158, 11, 0.1);
    color: #d69e2e;
    font-weight: 600;
    font-size: 0.85rem;
    border: 1px solid rgba(245, 158, 11, 0.2);
    transition: all 0.3s ease;
    width: fit-content;
}

.cell-royalty .royalty-tag:hover {
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.15);
}

/* Version Mobile - PLEINE LARGEUR */
.mobile-view {
    display: none;
    width: 100%;
}

.mobile-cards {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 16px 16px;
    width: 100%;
}

.cost-card {
    background: white;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    width: 100%;
}

.cost-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
    width: 100%;
}

.number-indicator {
    flex-shrink: 0;
}

.number-badge {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #007608, #00a10d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(0, 118, 8, 0.25);
}

.card-main-title {
    flex: 1;
    min-width: 0;
}

.card-main-title h4 {
    font-size: 0.9rem;
    color: #2d3748;
    font-weight: 600;
    margin: 0;
    width: 100%;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.info-row {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 6px 0;
    width: 100%;
}

.info-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    color: #718096;
    font-weight: 500;
    width: 100%;
}

.info-label svg {
    width: 12px;
    height: 12px;
    opacity: 0.7;
}

.info-value {
    font-size: 0.85rem;
    font-weight: 500;
    color: #2d3748;
    padding: 6px 10px;
    background: #f8fafc;
    width: 100%;
    box-sizing: border-box;
}

.investment-mobile {
    line-height: 1.4;
    text-align: left;
}

.royalty-mobile {
    background: rgba(245, 158, 11, 0.1);
    color: #d69e2e;
    border: 1px solid rgba(245, 158, 11, 0.2);
    font-weight: 600;
    text-align: center;
}

/* Pied de tableau */
.table-footer {
    padding: 16px 20px;
    background: #fafafa;
    border-top: 1px solid #f0f0f0;
    width: 100%;
}

.completion-indicator {
    display: flex;
    align-items: center;
    gap: 12px;
    max-width: 350px;
    margin: 0 auto;
    width: 100%;
}

.indicator-text {
    font-size: 0.8rem;
    color: #666;
    font-weight: 500;
    white-space: nowrap;
}

.indicator-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #007608, transparent);
    min-width: 80px;
}

/* Section Source */
.source-section {
    text-align: center;
    padding: 0 20px;
    margin-top: 10px;
}

.source-text {
    font-size: 0.8rem;
    color: #666;
    font-style: italic;
    margin: 0;
    padding: 8px 0;
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablette */
@media (max-width: 1024px) {
    .procedures-container {
        padding: 15px 0 8px;
    }

    .section-header-mini {
        padding: 0 20px;
    }

    .section-title-mini {
        font-size: 1.3rem;
    }

    .elegant-table th,
    .elegant-table td {
        padding: 12px 14px;
    }

    .number-tag {
        padding: 5px 10px;
        font-size: 0.8rem;
    }

    /* Ajustement des largeurs pour tablette */
    .col-number {
        width: 20%;
    }

    .col-investment {
        width: 45%;
    }

    .col-royalty {
        width: 35%;
    }
}

/* Mobile Large */
@media (max-width: 768px) {
    .procedures-container {
        padding: 12px 0 6px;
    }

    .section-header-mini {
        margin-bottom: 16px;
        padding: 0 16px;
    }

    .section-title-mini {
        font-size: 1.2rem;
    }

    .table-header {
        padding: 16px 16px 10px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .table-title h3 {
        font-size: 0.95rem;
    }

    /* Switch to mobile view */
    .desktop-view {
        display: none;
    }

    .mobile-view {
        display: block;
    }

    .mobile-cards {
        padding: 0 16px 12px;
    }

    .cost-card {
        padding: 14px;
    }

    .card-header {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }

    .number-badge {
        width: 30px;
        height: 30px;
        font-size: 0.75rem;
    }

    .card-main-title h4 {
        font-size: 0.85rem;
    }

    .source-section {
        padding: 0 16px;
    }
}

/* Mobile Small */
@media (max-width: 576px) {
    .procedures-container {
        padding: 10px 0 5px;
    }

    .section-header-mini {
        padding: 0 12px;
    }

    .section-title-mini {
        font-size: 1.1rem;
    }

    .accent-line-mini {
        width: 20px;
    }

    .mobile-cards {
        padding: 0 12px 10px;
        gap: 10px;
    }

    .cost-card {
        padding: 12px;
    }

    .info-label,
    .info-value {
        font-size: 0.75rem;
    }

    .number-badge {
        width: 28px;
        height: 28px;
        font-size: 0.7rem;
    }

    .table-footer {
        padding: 12px 16px;
    }

    .completion-indicator {
        flex-direction: column;
        gap: 6px;
        text-align: center;
    }

    .indicator-line {
        width: 60px;
    }

    .source-text {
        font-size: 0.75rem;
    }
}

/* Mobile Extra Small */
@media (max-width: 400px) {
    .section-title-mini {
        font-size: 1rem;
    }

    .table-title h3 {
        font-size: 0.9rem;
    }

    .cost-card {
        padding: 10px;
    }

    .card-header {
        gap: 6px;
    }

    .info-row {
        padding: 4px 0;
    }

    .mobile-cards {
        padding: 0 10px 10px;
    }
}

/* Orientation paysage mobile */
@media (max-width: 768px) and (orientation: landscape) {
    .procedures-container {
        padding: 10px 0 5px;
    }

    .mobile-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 10px;
    }
}

/* Grands écrans */
@media (min-width: 1400px) {
    .procedures-container {
        max-width: none;
        padding: 30px 30px 15px;
    }

    .section-header-mini {
        padding: 0 30px;
    }

    .elegant-table th,
    .elegant-table td {
        padding: 16px 18px;
    }

    /* Ajustement des largeurs pour grands écrans */
    .col-number {
        width: 15%;
    }

    .col-investment {
        width: 55%;
    }

    .col-royalty {
        width: 30%;
    }
}

/* Correction du scrollbar au hover */
.table-row {
    transform: none !important;
}

.table-row:hover {
    transform: none !important;
}

/* Suppression des animations qui causent le scrollbar */
@media (prefers-reduced-motion: no-preference) {
    .table-row {
        transition: background-color 0.2s ease;
    }

    .table-row:hover {
        transform: none;
    }

    .cost-card {
        transition: all 0.3s ease;
    }
}

/* Assurer qu'il n'y a pas de débordement */
.table-content {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.table-content::-webkit-scrollbar {
    display: none;
}

.elegant-table {
    min-width: auto;
}
</style>