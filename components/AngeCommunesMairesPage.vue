<template>
    <section class="communes-section">
        <div class="container">
            <!-- En-tête -->
            <div class="section-header">
                <h6 class="main-title-first">Administration Territoriale</h6>
                <h1 class="main-title">Liste des Communes et Leurs Maires du Togo</h1>
                <h2 class="sub-title">
                    Répertoire officiel des {{ totalCommunes }} communes togolaises et leurs maires
                    <span class="date-badge">Données du {{ dataDate }}</span>
                </h2>
            </div>

            <!-- Carte de téléchargement -->
            <div class="download-card" v-if="hasData">
                <div class="download-content">
                    <div class="download-info">
                        <div class="file-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                            </svg>
                        </div>
                        <div class="file-details">
                            <h3>Guide Complet des Communes Togolaises</h3>
                            <p>Document détaillé contenant la liste officielle des communes et leurs maires</p>
                        </div>
                    </div>
                    <a :href="pdfDownloadLink" target="_blank" class="download-btn">
                        <span>Télécharger le PDF</span>
                        <svg class="download-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- État de chargement -->
            <div v-if="loading" class="loading-state">
                <div class="spinner">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <h3>Chargement des données...</h3>
                <p>Veuillez patienter pendant que nous récupérons la liste des communes.</p>
            </div>

            <!-- État d'erreur -->
            <div v-else-if="error" class="error-state">
                <div class="error-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Données non disponibles</h3>
                <p>Impossible de charger la liste des communes. Veuillez réessayer plus tard.</p>
                <button @click="fetchCommunes" class="retry-btn">
                    <i class="fas fa-redo"></i>
                    Réessayer
                </button>
            </div>

            <!-- État vide -->
            <div v-else-if="noData" class="empty-state">
                <div class="empty-icon">
                    <i class="fas fa-city"></i>
                </div>
                <h3>Aucune commune disponible</h3>
                <p>La liste des communes n'est pas disponible pour le moment.</p>
            </div>

            <!-- Affichage des données -->
            <div v-else-if="hasData" class="data-section">
                <!-- Version Desktop -->
                <div class="table-section desktop-view">
                    <div class="table-container">
                        <div class="table-wrapper">
                            <table class="communes-table">
                                <thead>
                                    <tr>
                                        <th class="col-numero">
                                            <div class="column-header">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M4 17v2h16v-2H4zM4 5v2h16V5H4zm10 7V9h-4v3H8l4 4 4-4h-2z"/>
                                                </svg>
                                                N°
                                            </div>
                                        </th>
                                        <th class="col-commune">
                                            <div class="column-header">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                                                </svg>
                                                Communes
                                            </div>
                                        </th>
                                        <th class="col-maire">
                                            <div class="column-header">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                                </svg>
                                                Maires
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(commune, index) in communes" :key="commune.id" 
                                        class="table-row" :class="{ 'row-even': index % 2 === 0 }">
                                        <td class="cell-numero">
                                            <div class="numero-badge">
                                                {{ commune.numero }}
                                            </div>
                                        </td>
                                        <td class="cell-commune">
                                            <div class="commune-info">
                                                <span class="commune-name">{{ commune.commune }}</span>
                                            </div>
                                        </td>
                                        <td class="cell-maire">
                                            <div class="maire-card">
                                                <span class="maire-name">{{ commune.maire }}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Version Mobile -->
                <div class="mobile-view">
                    <div class="mobile-cards">
                        <div v-for="commune in communes" :key="'mobile-' + commune.id" class="commune-card">
                            <div class="card-header">
                                <div class="numero-badge-mobile">
                                    <span>{{ commune.numero }}</span>
                                </div>
                                <div class="card-title">
                                    <h3>{{ commune.commune }}</h3>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="info-row">
                                    <div class="info-label">
                                        <i class="fas fa-user-tie"></i>
                                        Maire
                                    </div>
                                    <div class="info-value">
                                        {{ commune.maire }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Statistiques -->
                <div class="stats-section" v-if="hasData">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-city"></i>
                            </div>
                            <div class="stat-info">
                                <h3>{{ totalCommunes }}</h3>
                                <p>Communes au total</p>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <div class="stat-info">
                                <h3>{{ hommesMaires }}</h3>
                                <p>Maires hommes</p>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-female"></i>
                            </div>
                            <div class="stat-info">
                                <h3>{{ femmesMaires }}</h3>
                                <p>Maires femmes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import config from "~~/config";
import axios from 'axios'; // Assurez-vous d'avoir installé axios

export default defineComponent({
    name: 'CommunesMairesPage',
    
    setup() {
        // Réactives pour les données
        const categories = ref([]);
        const selectedRegion = ref("all");
        const isLoading = ref(false);
        const typeCommunes = ref([]);
        const communes = ref([]);
        const totalCommunes = ref(0);
        const file_url_back = ref(null);
        const search = ref("");
        const itemsPerPage = ref(9);
        const currentPage = ref(1);
        const dataDate = ref("10 février 2020");
        const pdfDownloadLink = ref("/pdf/liste-communes-maires-togo-2020.pdf");

        // Computed properties
        const filteredCommunes = computed(() => {
            let ma_var = [];
            
            if (typeCommunes.value.length > 0) {
                if (selectedRegion.value === "all") {
                    typeCommunes.value.forEach((typeCommune) => {
                        // Adaptez cette ligne selon votre structure de données
                        // Ici, je suppose que vous avez "communes" au lieu de "documentations"
                        (typeCommune.communes || []).forEach((commune) => {
                            if (matchesSearch(commune)) {
                                ma_var.push(commune);
                            }
                        });
                    });
                } else {
                    typeCommunes.value.forEach((typeCommune) => {
                        // Adaptez cette condition selon vos critères de filtrage
                        if (typeCommune.region === selectedRegion.value || 
                            typeCommune.titre === selectedRegion.value) {
                            (typeCommune.communes || []).forEach((commune) => {
                                if (matchesSearch(commune)) {
                                    ma_var.push(commune);
                                }
                            });
                        }
                    });
                }
                communes.value = ma_var;
                return communes.value;
            }
            return [];
        });

        const totalPages = computed(() => {
            return Math.ceil(filteredCommunes.value.length / itemsPerPage.value);
        });
        
        const paginatedCommunes = computed(() => {
            const startIndex = (currentPage.value - 1) * itemsPerPage.value;
            const endIndex = startIndex + itemsPerPage.value;
            return filteredCommunes.value.slice(startIndex, endIndex);
        });

        // Méthodes
        const matchesSearch = (commune) => {
            if (!search.value) return true;
            const searchTerm = search.value.toLowerCase();
            
            // Adaptez ces propriétés selon votre structure de données
            return (
                (commune.nom && commune.nom.toLowerCase().includes(searchTerm)) ||
                (commune.maire && commune.maire.toLowerCase().includes(searchTerm)) ||
                (commune.doc_name && commune.doc_name.toLowerCase().includes(searchTerm))
            );
        };

        const fetchCommunes = async () => {
            try {
                isLoading.value = true;
                
                // Appel API similaire à votre exemple Vue 2
                const response = await axios.get('/autre-consultant-agrees');
                const data = response.data.data; // Adaptez selon la structure de votre réponse
                
                if (data) {
                    typeCommunes.value = data;
                    file_url_back.value = config.app_back_url_img;
                    
                    // Met à jour la date et le lien PDF si disponibles dans la réponse
                    if (response.data.date) {
                        dataDate.value = response.data.date;
                    }
                    if (response.data.pdfFile) {
                        pdfDownloadLink.value = response.data.pdfFile;
                    }
                    
                    AllCommunesNumber();
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Vous pouvez aussi gérer les erreurs ici
            } finally {
                isLoading.value = false;
            }
        };

        const filterHandler = (selection) => {
            selectedRegion.value = selection;
            currentPage.value = 1; // Reset à la première page
        };

        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
            }
        };
        
        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
            }
        };
        
        const goToPage = (pageNumber) => {
            currentPage.value = pageNumber;
        };

        const AllCommunesNumber = () => {
            let total = 0;
            typeCommunes.value.forEach((typeCommune) => {
                total += (typeCommune.communes || []).length;
            });
            totalCommunes.value = total;
            
            // Calcul pour hommes/femmes maires si les données existent
            hommesMaires.value = communes.value.filter(c => c.maire && c.maire.startsWith('M.')).length;
            femmesMaires.value = communes.value.filter(c => c.maire && c.maire.startsWith('Mme')).length;
        };

        // Computed pour les statistiques
        const hommesMaires = ref(0);
        const femmesMaires = ref(0);
        const hasData = computed(() => communes.value && communes.value.length > 0);
        const noData = computed(() => !isLoading.value && !hasData.value);

        // Lifecycle hook
        onMounted(() => {
            fetchCommunes();
        });

        return {
            // Réactives
            categories,
            selectedRegion,
            isLoading,
            typeCommunes,
            communes,
            totalCommunes,
            file_url_back,
            search,
            itemsPerPage,
            currentPage,
            dataDate,
            pdfDownloadLink,
            
            // Computed
            filteredCommunes,
            totalPages,
            paginatedCommunes,
            hasData,
            noData,
            hommesMaires: computed(() => hommesMaires.value),
            femmesMaires: computed(() => femmesMaires.value),
            
            // Méthodes
            matchesSearch,
            fetchCommunes,
            filterHandler,
            prevPage,
            nextPage,
            goToPage,
            AllCommunesNumber
        };
    }
});
</script>

<style scoped>
.communes-section {
    padding: 40px 20px;
    background: #ffffff;
    min-height: 100vh;
    position: relative;
}

.communes-section::before {
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
    position: relative;
    z-index: 1;
}

/* En-tête */
.section-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
}

.main-title-first {
    font-size: 13px;
    color: #007608;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.main-title {
    font-size: 25px;
    font-weight: 700;
    margin: 0 0 15px 0;
    color: #1a202c;
    line-height: 1.2;
}

.sub-title {
    font-size: 13px;
    font-weight: 500;
    color: #4a5568;
    margin: 0 auto;
    line-height: 1.6;
    max-width: 700px;
}

.date-badge {
    display: inline-block;
    background: rgba(0, 118, 8, 0.1);
    color: #007608;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-left: 10px;
}

/* Carte de téléchargement */
.download-card {
    background: white;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    margin-bottom: 40px;
    border-radius: 8px;
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
    border-radius: 8px;
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
    font-size: 0.95rem;
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
    border-radius: 6px;
    font-size: 0.95rem;
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

/* États */
.loading-state, .error-state, .empty-state {
    text-align: center;
    padding: 60px 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    margin-bottom: 40px;
}

.spinner, .error-icon, .empty-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.spinner {
    color: #007608;
}

.error-icon {
    color: #d32f2f;
}

.empty-icon {
    color: #718096;
}

.loading-state h3, .error-state h3, .empty-state h3 {
    font-size: 1.5rem;
    color: #2d3748;
    margin-bottom: 10px;
}

.loading-state p, .error-state p, .empty-state p {
    color: #718096;
    font-size: 1rem;
    max-width: 400px;
    margin: 0 auto 20px;
}

.retry-btn {
    background: #007608;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.retry-btn:hover {
    background: #00a10d;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 118, 8, 0.3);
}

/* Version Desktop */
.desktop-view {
    display: block;
}

.table-section {
    margin-bottom: 40px;
}

.table-container {
    background: white;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    border-radius: 8px;
}

.table-wrapper {
    overflow-x: auto;
    border-radius: 8px;
}

.communes-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
}

.communes-table thead {
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    border-bottom: 2px solid #007608;
}

.communes-table th {
    padding: 20px 16px;
    text-align: left;
    font-weight: 700;
    color: #2d3748;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
.col-numero { width: 10%; }
.col-commune { width: 40%; }
.col-maire { width: 50%; }

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

.communes-table td {
    padding: 18px 16px;
    vertical-align: middle;
}

/* Cellules spécifiques */
.cell-numero {
    border-right: 1px solid #f1f5f9;
}

.numero-badge {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #007608, #00a10d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.9rem;
    font-weight: 700;
    border-radius: 50%;
    margin: 0 auto;
}

.commune-info {
    padding-left: 10px;
}

.commune-name {
    color: #2d3748;
    font-weight: 600;
    font-size: 1rem;
}

.maire-card {
    padding: 12px 16px;
    background: rgba(59, 130, 246, 0.05);
    border: 1px solid rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.95rem;
    color: #2d3748;
}

.maire-name {
    display: block;
    line-height: 1.4;
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

.commune-card {
    background: white;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    border-radius: 8px;
}

.commune-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f1f5f9;
}

.numero-badge-mobile {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #007608, #00a10d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 50%;
    flex-shrink: 0;
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
    align-items: center;
    gap: 12px;
    padding: 8px 0;
}

.info-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: #718096;
    font-weight: 500;
    flex-shrink: 0;
    min-width: 80px;
}

.info-label i {
    font-size: 14px;
    opacity: 0.7;
}

.info-value {
    font-size: 0.9rem;
    font-weight: 500;
    color: #2d3748;
    flex: 1;
    padding: 8px 12px;
    background: #f8fafc;
    border-radius: 6px;
    line-height: 1.4;
}

/* Statistiques */
.stats-section {
    margin-top: 40px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.stat-card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.stat-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #007608, #00a10d);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 12px;
    font-size: 24px;
}

.stat-info h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0 0 4px 0;
    line-height: 1;
}

.stat-info p {
    color: #718096;
    font-size: 0.9rem;
    margin: 0;
    font-weight: 500;
}

/* Barre de scroll pour desktop */
.table-wrapper::-webkit-scrollbar {
    height: 6px;
}

.table-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.table-wrapper::-webkit-scrollbar-thumb {
    background: #007608;
    border-radius: 10px;
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
    
    .main-title {
        font-size: 2rem;
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
    
    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Mobile Large */
@media (max-width: 768px) {
    .communes-section {
        padding: 30px 15px;
    }
    
    .section-header {
        margin-bottom: 30px;
    }
    
    .main-title {
        font-size: 1.6rem;
    }
    
    .sub-title {
        font-size: 1rem;
    }
    
    .date-badge {
        display: block;
        margin: 10px auto 0;
        width: fit-content;
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
    
    /* Switch to mobile view */
    .desktop-view {
        display: none;
    }
    
    .mobile-view {
        display: block;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .stat-card {
        padding: 20px;
    }
    
    .stat-icon {
        width: 50px;
        height: 50px;
        font-size: 20px;
    }
    
    .stat-info h3 {
        font-size: 1.8rem;
    }
}

/* Mobile Small */
@media (max-width: 576px) {
    .container {
        padding: 0 16px;
    }
    
    .communes-section {
        padding: 20px 10px;
    }
    
    .main-title-first {
        font-size: 12px;
    }
    
    .main-title {
        font-size: 1.4rem;
    }
    
    .sub-title {
        font-size: 0.9rem;
    }
    
    .download-card {
        padding: 20px 16px;
    }
    
    .download-info {
        flex-direction: column;
        gap: 16px;
    }
    
    .commune-card {
        padding: 16px;
    }
    
    .card-header {
        flex-direction: column;
        text-align: center;
        gap: 12px;
    }
    
    .numero-badge-mobile {
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
    
    .loading-state, .error-state, .empty-state {
        padding: 40px 16px;
    }
    
    .spinner, .error-icon, .empty-icon {
        font-size: 36px;
    }
    
    .loading-state h3, .error-state h3, .empty-state h3 {
        font-size: 1.3rem;
    }
}

@media (max-width: 400px) {
    .main-title {
        font-size: 1.2rem;
    }
    
    .commune-card {
        padding: 14px;
    }
    
    .card-title h3 {
        font-size: 1rem;
    }
    
    .info-label, .info-value {
        font-size: 0.8rem;
    }
}

@media (max-width: 768px) and (orientation: landscape) {
    .communes-section {
        padding: 20px 15px;
    }
    
    .mobile-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
    }
}

@media (max-height: 600px) and (orientation: landscape) {
    .communes-section {
        padding: 15px 10px;
    }
    
    .section-header {
        margin-bottom: 20px;
    }
    
    .download-card {
        margin-bottom: 20px;
    }
}
</style>