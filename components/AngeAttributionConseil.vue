<template>
    <div class="container">
        <div class="section-title text-center">
            <h4>Roles</h4>
            <h2>Attributions du conseil d'administration</h2>
            <p class="text-center">
                Les membres du conseil d'administration sont nommés pour une période de trois (3) ans renouvelables une
                seule fois sur proposition de l'autorité de tutelle de l'agence. Le conseil d'administration est présidé
                par le ministre chargé de l'environnement. Le conseil d'administration est l'organe d'orientation, de
                surveillance et d'administration de l'agence. Le conseil d'administration est chargé de :
            </p>
        </div>
        <div class="section-attribution">
            <div class="left-attributions">
                <div 
                    class="attribution" 
                    v-for="(item, index) in leftAttributions" 
                    :key="index"
                    :style="{ animationDelay: `${index * 0.2}s` }"
                >
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{ item }}</p>
                </div>
            </div>
            <div class="right-attributions">
                <div 
                    class="attribution" 
                    v-for="(item, index) in rightAttributions" 
                    :key="index"
                    :style="{ animationDelay: `${index * 0.2 + 0.1}s` }"
                >
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{ item }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const leftAttributions = [
    "Recruter le directeur général de l'agence sur concours et de le révoquer;",
    "Définir l'orientation générale des activités de l'agence;",
    "Adopter l'organigramme et le manuel de procédure de l'agence;",
    "Voter chaque année le budget prévisionnel de l'agence;",
    "Approuver les emprunts à contracter par l'agence;"
];

const rightAttributions = [
    "Adopter les plans, programmes de travail et leurs budgets annuels ou pluriannuels et veiller à leur exécution;",
    "Adopter les rapports d'activités et d'exécution des programmes et projets ainsi que les états financiers de l'agence;",
    "Fixer le statut, le régime du personnel de l'agence ainsi que la grille des rémunérations;",
    "Approuver les acquisitions, aliénations et échanges de biens immobiliers;",
    "Approuver les conventions de maîtrise d'ouvrage déléguée."
];
</script>

<style scoped>
.container {
    padding: 60px 15px;
}

.section-title h4 {
    font-size: 16px;
    color: #60be66; 
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
}

.section-title h2 {
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 25px;
    text-align: center;
}

.section-title p {
    text-align: justify;
    margin-bottom: 30px;
    line-height: 1.6;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.section-attribution {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
}

.left-attributions,
.right-attributions {
    flex: 1 1 50%; 
    min-width: 0; 
}

.attribution {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    border-left: 4px solid #60be66;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
    transition: all 0.3s ease;
}

.attribution:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(96, 190, 102, 0.15);
    background: linear-gradient(135deg, #f8fff8 0%, #ffffff 100%);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.attribution i {
    color: #60be66;
    font-size: 20px;
    margin-top: 2px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.attribution:hover i {
    transform: scale(1.2);
}

.attribution p {
    margin: 0;
    line-height: 1.6;
    text-align: left;
    font-size: 15px;
    color: #333;
    font-weight: 500;
}

@media (max-width: 768px) {
    .container {
        padding: 40px 15px;
    }
    
    .section-attribution {
        flex-direction: column;
        gap: 15px;
        padding: 0 10px;
    }
    
    .left-attributions,
    .right-attributions {
        width: 100%;
    }
    
    .attribution {
        margin-bottom: 15px;
        padding: 18px 15px;
        border-radius: 10px;
        border-left: 3px solid #60be66;
        animation-delay: calc(var(--index, 0) * 0.15s) !important;
    }
    
    .attribution:hover {
        transform: translateY(-3px);
    }
    
    .attribution i {
        font-size: 18px;
    }
    
    .attribution p {
        font-size: 14px;
        line-height: 1.5;
    }
    
    .section-title h2 {
        font-size: 22px;
    }
    
    .section-title p {
        font-size: 14px;
        text-align: left;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 30px 10px;
    }
    
    .attribution {
        padding: 15px 12px;
        margin-bottom: 12px;
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
    }
    
    .attribution i {
        font-size: 16px;
        margin-top: 1px;
    }
    
    .attribution p {
        font-size: 13px;
        line-height: 1.4;
    }
    
    .section-title h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    
    .section-title h4 {
        font-size: 14px;
        margin-bottom: 10px;
    }
    
    .section-title p {
        font-size: 13px;
        margin-bottom: 25px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .attribution {
        animation: none;
        opacity: 1;
        transform: none;
    }
    
    .attribution:hover {
        transform: none;
    }
    
    .attribution i {
        transition: none;
    }
}
</style>