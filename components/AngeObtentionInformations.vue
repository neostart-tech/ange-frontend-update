<template>
    <div class="container">
        <div class="procedures-section">
            <!-- En-tête avec design moderne -->
            <div class="section-header" data-aos="fade-up">
                <div class="header-badge">
                    Procédures Administratives
                </div>
                <h1 class="section-title">
                    Autorisations Environnementales : <span class="highlight">Processus & Délais</span>
                </h1>
                <p class="section-description">
                    Toutes les informations concernant les procédures, délais, coûts et responsables 
                    pour l'obtention des autorisations environnementales au Togo
                </p>
            </div>
            <!-- Carte de téléchargement -->
            <div class="download-card" data-aos="fade-up" data-aos-delay="100">
                <div class="download-content">
                    <div class="download-info">
                        <div class="file-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                            </svg>
                        </div>
                        <div class="file-details">
                            <h3>Guide Complet des Procédures</h3>
                            <p>Document détaillé contenant toutes les informations sur les coûts, délais et processus</p>
                        </div>
                    </div>
                
                    <a href="" v-if="!doc" target="_blank" class="download-btn" >
                        <span>Télécharger le PDF</span>
                        <svg class="download-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </svg>
                    </a>
                     <a :href="doc.path" v-else target="_blank" class="download-btn" >
                        <span>Télécharger le PDF</span>
                        <svg class="download-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </svg>
                    </a>
                    
                </div>
            </div>

            <!-- Tableau des procédures - Version responsive -->
            <div class="procedures-table-section" data-aos="fade-up" data-aos-delay="200">
                <div class="table-header">
                    <h2 class="table-title">
                        <svg class="title-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3v2h2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9v2h10v16h2V5c0-1.1-.9-2-2-2zm-4 18h2v-2h-2v2zM13 7h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4 8h2v-2H9v2zm0-8h2v-2H9v2zm0-4h2V7H9v2zm0-4h2V3H9v2zm8 12h2v-2h-2v2zm-4 0h2v-2h-2v2z"/>
                        </svg>
                        Processus, Délais, Coûts et Responsables
                    </h2>
                    <p class="table-subtitle">
                        Vue d'ensemble complète des étapes d'obtention des autorisations environnementales
                    </p>
                </div>

                <!-- Version Desktop (tableau classique) -->
                <div class="table-container desktop-view">
                    <div class="table-wrapper">
                        <table class="procedures-table">
                            <thead>
                                <tr>
                                    <th class="col-processus">
                                        <div class="column-header">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3v2h2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9v2h10v16h2V5c0-1.1-.9-2-2-2zm-4 18h2v-2h-2v2zM13 7h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm-4 8h2v-2H9v2zm0-8h2v-2H9v2zm0-4h2V7H9v2zm0-4h2V3H9v2zm8 12h2v-2h-2v2zm-4 0h2v-2h-2v2z"/>
                                            </svg>
                                            Processus / Étapes IEIS
                                        </div>
                                    </th>
                                    <th class="col-delais">
                                        <div class="column-header">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                            </svg>
                                            Délais des Processus
                                        </div>
                                    </th>
                                    <th class="col-couts">
                                        <div class="column-header">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.24 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                                            </svg>
                                            Coûts
                                        </div>
                                    </th>
                                    <th class="col-responsables">
                                        <div class="column-header">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                            </svg>
                                            Responsables
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(procedure, index) in procedures" :key="index" 
                                    class="table-row" :class="{ 'row-even': index % 2 === 0 }">
                                    <td class="cell-processus">
                                        <div class="processus-content">
                                            <div class="step-indicator">
                                                <span class="step-number">{{ index + 1 }}</span>
                                                <div class="step-line" v-if="index < procedures.length - 1"></div>
                                            </div>
                                            <div class="step-details">
                                                <span class="step-description">{{ procedure.etape || '__' }}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="cell-delais">
                                        <div class="delais-tag" :class="{'empty-state': !procedure.delais}">
                                            <span class="delais-text">{{ procedure.delais || '__' }}</span>
                                        </div>
                                    </td>
                                    <td class="cell-couts">
                                        <div class="cout-badge">
                                            <span class="cout-value">{{ procedure.cout || '__' }}</span>
                                        </div>
                                    </td>
                                    <td class="cell-responsables">
                                        <div class="responsible-card" :class="{'empty-state': !procedure.responsable}">
                                            <span class="responsible-text">{{ procedure.responsable || 'À définir' }}</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Version Mobile (cartes) -->
                <div class="mobile-view">
                    <div class="mobile-cards">
                        <div v-for="(procedure, index) in procedures" :key="index" class="procedure-card">
                            <div class="card-header">
                                <div class="step-indicator-mobile">
                                    <span class="step-number-mobile">{{ index + 1 }}</span>
                                </div>
                                <div class="card-title">
                                    <h3>{{ procedure.etape || '__' }}</h3>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="info-row">
                                    <div class="info-label">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                        </svg>
                                        Délais
                                    </div>
                                    <div class="info-value" :class="{'empty-state': !procedure.delais}">
                                        {{ procedure.delais || '__' }}
                                    </div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.24 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                                        </svg>
                                        Coûts
                                    </div>
                                    <div class="info-value">
                                        {{ procedure.cout || '__' }}
                                    </div>
                                </div>
                                <div class="info-row">
                                    <div class="info-label">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                        </svg>
                                        Responsable
                                    </div>
                                    <div class="info-value" :class="{'empty-state': !procedure.responsable}">
                                        {{ procedure.responsable || 'À définir' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

import axios from "axios";

const doc = ref({});
const fetchDocument = async () => {
  const url = "/autre-consultant-agrees/get-procedure-des-autorisations";
  const req =await axios.get(url);
  const response = req.data.data;
  doc.value = response;
};

onMounted(() => {
  fetchDocument();
});


const props = defineProps({
    procedures: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.procedures-section {
    padding: 60px 0 30px;
    position: relative;
}

.procedures-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 10% 20%, rgba(0, 118, 8, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(0, 118, 8, 0.03) 0%, transparent 50%);
    pointer-events: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
}

/* En-tête de section */
.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.header-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: white;
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.8px;
    /* margin-bottom: 25px; */
    font-size:13px;
    color:#007608;

}


.section-title {
    font-size: 25px;
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 20px;
    line-height: 1.1;
}



.section-description {
    font-size: 13px;
    color: #4a5568;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
}

/* Carte de téléchargement */
.download-card {
    background: white;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    margin-bottom: 40px;
}

.download-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.download-info {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
}

.file-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #007608, #00a10d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}

.file-icon svg {
    width: 24px;
    height: 24px;
    display: block;
}

.file-details h3 {
    font-size: 1.3rem;
    color: #2d3748;
    font-weight: 700;
    margin-bottom: 8px;
}

.file-details p {
    color: #718096;
    line-height: 1.5;
    margin: 0;
}

.download-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #007608, #00a10d);
    color: white;
    text-decoration: none;
    padding: 14px 28px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 6px 18px rgba(0, 118, 8, 0.3);
    flex-shrink: 0;
}

.download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 118, 8, 0.4);
}

.download-icon {
    width: 16px;
    height: 16px;
    display: block;
}

/* Section tableau */
.procedures-table-section {
    margin-bottom: 40px;
}

.table-header {
    text-align: center;
    margin-bottom: 30px;
}

.table-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 12px;
}

.title-icon {
    width: 20px;
    height: 20px;
    color: #007608;
}

.table-subtitle {
    color: #718096;
    font-size: 1rem;
    margin: 0;
}

/* Version Desktop */
.desktop-view {
    display: block;
}

.table-container {
    background: white;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
}

.table-wrapper {
    overflow-x: auto;
}

.procedures-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;
}

.procedures-table thead {
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    border-bottom: 2px solid #007608;
}

.procedures-table th {
    padding: 20px 16px;
    text-align: left;
    font-weight: 700;
    color: #2d3748;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #e2e8f0;
}

.column-header {
    display: flex;
    align-items: center;
    gap: 8px;
}

.column-header svg {
    width: 16px;
    height: 16px;
    color: #007608;
    opacity: 0.8;
}

/* Largeurs des colonnes */
.col-processus { width: 45%; }
.col-delais { width: 18%; }
.col-couts { width: 17%; }
.col-responsables { width: 20%; }

/* Lignes du tableau */
.table-row {
    transition: all 0.3s ease;
    border-bottom: 1px solid #f1f5f9;
}

.table-row:hover {
    background: #f8fafc;
    transform: translateY(-1px);
}

.row-even {
    background: #fafafa;
}

.procedures-table td {
    padding: 20px 16px;
    vertical-align: middle;
}

/* Cellules spécifiques */
.cell-processus {
    border-right: 1px solid #f1f5f9;
}

.processus-content {
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.step-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

.step-number {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #007608, #00a10d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 118, 8, 0.3);
}

.step-line {
    width: 2px;
    flex: 1;
    background: linear-gradient(180deg, #007608, transparent);
}

.step-details {
    flex: 1;
    min-width: 0;
}

.step-description {
    color: #2d3748;
    font-weight: 500;
    line-height: 1.5;
    display: block;
}

/* Tags et badges */
.delais-tag, .cout-badge, .responsible-card {
    padding: 10px 14px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.delais-tag {
    background: rgba(0, 200, 83, 0.1);
    color: #007608;
    border: 1px solid rgba(0, 200, 83, 0.2);
}

.cout-badge {
    background: rgba(245, 158, 11, 0.1);
    color: #d69e2e;
    border: 1px solid rgba(245, 158, 11, 0.2);
}

.responsible-card {
    background: rgba(59, 130, 246, 0.05);
    color: #2d3748;
    border: 1px solid rgba(59, 130, 246, 0.1);
}

.empty-state {
    background: #f8f9fa !important;
    border: 1px dashed #dee2e6 !important;
    color: #6c757d !important;
}

/* Version Mobile */
.mobile-view {
    display: none;
}

.mobile-cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.procedure-card {
    background: white;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
}

.procedure-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.card-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f1f5f9;
}

.step-indicator-mobile {
    flex-shrink: 0;
}

.step-number-mobile {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #007608, #00a10d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 118, 8, 0.3);
}

.card-title h3 {
    font-size: 1.1rem;
    color: #2d3748;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
}

.info-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: #718096;
    font-weight: 500;
    flex: 1;
}

.info-label svg {
    width: 14px;
    height: 14px;
    opacity: 0.7;
}

.info-value {
    font-size: 0.9rem;
    font-weight: 600;
    color: #2d3748;
    text-align: right;
    flex: 1;
    padding: 6px 12px;

    background: #f8fafc;
}

.info-value.empty-state {
    background: #f8f9fa;
    border: 1px dashed #dee2e6;
    color: #6c757d;
    font-style: italic;
}

/* Barre de scroll pour desktop */
.table-wrapper::-webkit-scrollbar {
    height: 6px;
}

.table-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.table-wrapper::-webkit-scrollbar-thumb {
    background: #007608;
}

.table-wrapper::-webkit-scrollbar-thumb:hover {
    background: #00a10d;
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablette */
@media (max-width: 1024px) {
    .container {
        padding: 0 24px;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .download-content {
        flex-direction: column;
        text-align: center;
        gap: 24px;
    }
    
    .download-info {
        justify-content: center;
        text-align: center;
    }
    
    .procedures-table th,
    .procedures-table td {
        padding: 18px 14px;
    }
    
    .step-number {
        width: 30px;
        height: 30px;
    }
}

/* Mobile Large */
@media (max-width: 768px) {
    .procedures-section {
        padding: 40px 0 20px;
    }
    
    .section-header {
        margin-bottom: 30px;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .section-description {
        font-size: 1rem;
    }
    
    .download-card {
        padding: 24px 20px;
        margin-bottom: 30px;
    }
    
    .file-icon {
        width: 50px;
        height: 50px;
    }
    
    .file-icon svg {
        width: 20px;
        height: 20px;
    }
    
    .file-details h3 {
        font-size: 1.2rem;
    }
    
    .download-btn {
        width: 100%;
        justify-content: center;
    }
    
    .table-header {
        margin-bottom: 24px;
    }
    
    .table-title {
        font-size: 1.4rem;
        flex-direction: column;
        gap: 8px;
    }
    
    /* Switch to mobile view */
    .desktop-view {
        display: none;
    }
    
    .mobile-view {
        display: block;
    }
}

/* Mobile Small */
@media (max-width: 576px) {
    .container {
        padding: 0 16px;
    }
    
    .procedures-section {
        padding: 30px 0 15px;
    }
    
    .header-badge {
        padding: 8px 16px;
        font-size: 12px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .download-card {
        padding: 20px 16px;
    }
    
    .download-info {
        flex-direction: column;
        gap: 16px;
    }
    
    .procedure-card {
        padding: 16px;
    }
    
    .card-header {
        flex-direction: column;
        gap: 12px;
        text-align: center;
    }
    
    .step-indicator-mobile {
        align-self: center;
    }
    
    .info-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    }
    
    .info-value {
        align-self: stretch;
        text-align: left;
    }
}

@media (max-width: 400px) {
    .section-title {
        font-size: 1.4rem;
    }
    
    .table-title {
        font-size: 1.2rem;
    }
    
    .procedure-card {
        padding: 14px;
    }
    
    .step-number-mobile {
        width: 28px;
        height: 28px;
        font-size: 0.7rem;
    }
    
    .card-title h3 {
        font-size: 1rem;
    }
    
    .info-label,
    .info-value {
        font-size: 0.8rem;
    }
}

@media (max-width: 768px) and (orientation: landscape) {
    .procedures-section {
        padding: 30px 0 15px;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .mobile-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
    }
}

@media (max-height: 600px) and (orientation: landscape) {
    .procedures-section {
        padding: 20px 0 15px;
    }
    
    .section-header {
        margin-bottom: 20px;
    }
    
    .download-card {
        margin-bottom: 20px;
    }
}
</style>