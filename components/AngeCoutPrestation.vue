<template>
    <div class="container">
    <div class="procedures-container">
        <!-- Section des coûts de prestations -->
        <div class="costs-section" data-aos="fade-up">
            <div class="section-header-mini">
                <div class="accent-line-mini"></div>
                <h2 class="section-title-mini">
                    Coûts des Prestations de <span class="title-accent">l'ANGE</span>
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
                        <h3>Visites de sites pour validation des TdR</h3>
                    </div>
                    <div class="table-stats">
                        <span class="stat">{{ coutPrestations.length }} éléments</span>
                    </div>
                </div>

                <div class="table-content desktop-view">
                    <table class="elegant-table">
                        <thead>
                            <tr>
                                <th class="col-number">
                                    <div class="column-title">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4 10v12h16V10H4zm14 10H6v-2h12v2zm0-4H6v-2h12v2zm2-6h-4V4H8v6H4l8 8 8-8z"/>
                                        </svg>
                                        <span>Numéro</span>
                                    </div>
                                </th>
                                <th class="col-designation">
                                    <div class="column-title">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                        </svg>
                                        <span>Désignation</span>
                                    </div>
                                </th>
                                <th class="col-cost">
                                    <div class="column-title">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.24 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                                        </svg>
                                        <span>Coûts</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(prestation, index) in coutPrestations" :key="index" 
                                class="table-row" :class="{'row-alt': index % 2 === 0}">
                                <td class="cell-number">
                                    <div class="number-tag">
                                        {{ prestation.numero || '—' }}
                                    </div>
                                </td>
                                <td class="cell-designation">
                                    <div class="designation-content">
                                        <span class="designation-text">{{ prestation.designation || '—' }}</span>
                                    </div>
                                </td>
                                <td class="cell-cost">
                                    <div class="cost-tag-main">
                                        {{ prestation.cout || '—' }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Version Mobile (cartes) -->
                <div class="mobile-view">
                    <div class="mobile-cards">
                        <div v-for="(prestation, index) in coutPrestations" :key="index" class="cost-card">
                            <div class="card-header">
                                <div class="number-indicator">
                                    <span class="number-badge">{{ prestation.numero || '—' }}</span>
                                </div>
                                <div class="card-main-title">
                                    <h4>Élément {{ prestation.numero }}</h4>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="info-row">
                                    <div class="info-label">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                        </svg>
                                        Désignation
                                    </div>
                                    <div class="info-value designation-mobile">
                                        {{ prestation.designation || '—' }}
                                    </div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.24 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                                        </svg>
                                        Coût
                                    </div>
                                    <div class="info-value cost-mobile">
                                        {{ prestation.cout || '—' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Indicateur de fin -->
                <div class="table-footer">
                    <div class="completion-indicator">
                        <div class="indicator-text">Liste des prestations</div>
                        <div class="indicator-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    coutPrestations: {
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
    /* width: 100%; */
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
    width: 15%; 
    min-width: 80px;
}
.col-designation { 
    width: 60%; 
    min-width: 180px;
}
.col-cost { 
    width: 25%; 
    min-width: 100px;
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
    transform: none; /* Supprime le décalage qui causait le scrollbar */
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

.cell-designation {
    border-right: 1px solid #f5f5f5;
}

.designation-content {
    min-width: 0;
    width: 100%;
}

.designation-text {
    color: #1a1a1a;
    font-weight: 500;
    line-height: 1.4;
    display: block;
    width: 100%;
    font-size: 0.9rem;
}

.cell-cost .cost-tag-main {
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

.cell-cost .cost-tag-main:hover {
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

.designation-mobile {
    line-height: 1.4;
    text-align: left;
}

.cost-mobile {
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
    .col-number { width: 20%; }
    .col-designation { width: 55%; }
    .col-cost { width: 25%; }
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
    .col-number { width: 12%; }
    .col-designation { width: 63%; }
    .col-cost { width: 25%; }
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
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.table-content::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
}

.elegant-table {
    min-width: auto;
}
</style>