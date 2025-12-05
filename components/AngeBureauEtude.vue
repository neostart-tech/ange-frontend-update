<template>
    <section class="requirements-elegant">
        <div class="container">
            <!-- Nouveau design d'en-tête -->
            <div class="elegant-header">
                <!-- Badge d'identification -->
                <!-- <div class="header-badge">
                    <span class="badge-text">Agrément Professionnel</span>
                </div> -->
                
                <!-- Titre principal avec effet visuel -->
                <div class="title-wrapper">
                    <h1 class="main-title">
                        Bureaux d'études
                        <span class="title-line"></span>
                    </h1>
                    
                </div>
                
                <!-- Introduction -->
                <div class="header-intro">
                    <div class="intro-content">
                        <p class="intro-text">
                            Aux fins d'obtention d'agrément pour les évaluations environnementales et sociales, 
                            le responsable du bureau d'études demandeur doit disposer d'un minimum de Bac + 5 
                            en sciences environnementales et/ou en sciences sociales. En sus de la condition 
                            visée à l'alinéa premier, le bureau d'études doit :
                        </p>
                    </div>
                </div>
            </div>

            <!-- Grille raffinée -->
            <div class="elegant-grid">
                <div v-for="(item, index) in conditions" :key="index" 
                     class="elegant-card"
                     :style="{ '--delay': index * 0.1 + 's' }">
                    
                    <div class="card-decoration">
                        <div class="card-number">0{{ index + 1 }}</div>
                        <div class="card-line"></div>
                    </div>

                    <div class="card-content">
                        <!-- <h3 class="card-title">{{ item.title }}</h3> -->
                        <p class="card-description">{{ item.desc }}</p>
                    </div>

                    <div class="card-status">
                        <div class="status-indicator"></div>
                        <span class="status-text">Obligatoire</span>
                    </div>
                </div>
            </div>

            <!-- Note élégante -->
            <div class="elegant-note">
                <div class="note-decoration">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="note-content">
                    <p class="note-text">
                        <span class="note-emphasis">Toutes les conditions sont requises</span>
                        pour l'obtention de l'agrément. Aucune dérogation n'est acceptée.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const conditions = [
    {
        title: "Inscription au registre",
        desc: "Être inscrit au registre du commerce et du crédit mobilier avec conformité complète",
    },
    {
        title: "Conformité fiscale",
        desc: "Disposer d'une attestation de régularité fiscale à jour et valide",
    },
    {
        title: "Implantation nationale",
        desc: "Avoir une installation régulière et vérifiable sur le territoire national",
    },
    {
        title: "Expert permanent",
        desc: "Expert titulaire avec 5 ans d'expérience minimum en évaluations environnementales et sociales",
    },
    {
        title: "Équipe d'experts",
        desc: "Au moins deux experts certifiés BAC+5 en sciences environnementales ou sociales",
    },
    {
        title: "Siège social national",
        desc: "Siège social officiellement enregistré sur le territoire national",
    }
];
</script>

<style scoped>
.requirements-elegant {
    padding: 100px 0;
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
}

.requirements-elegant::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #007608, transparent);
    opacity: 0.2;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
}

/* Nouveau design d'en-tête */
.elegant-header {
    margin-bottom: 80px;
    position: relative;
}

/* Badge d'identification */
.header-badge {
    display: inline-block;
    margin-bottom: 30px;
}

.badge-text {
    display: inline-block;
    /* background: linear-gradient(135deg, #007608, #00a854); */
    color: white;
    padding: 10px 25px;
    /* border-radius: 6px; */
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(0, 118, 8, 0.15);
    position: relative;
    overflow: hidden;
}

.badge-text::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shine 3s infinite;
}

/* Wrapper du titre */
.title-wrapper {
    position: relative;
    margin-bottom: 40px;
}

.main-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 15px 0;
    line-height: 1.2;
    letter-spacing: -0.5px;
    position: relative;
    display: inline-block;
}

/* .title-line {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #007608, #00a854);
    border-radius: 2px;
} */

/* Décoration du titre */
/* .title-decoration {
    display: flex;
    gap: 8px;
    margin-top: 20px;
} */

.decoration-item {
    width: 12px;
    height: 12px;
    background: #e8f5e9;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.decoration-item:nth-child(1) {
    background: #007608;
    transform: scale(1.2);
}

.decoration-item:nth-child(2) {
    background: #00a854;
}

.decoration-item:nth-child(3) {
    background: #4cd964;
}

.title-wrapper:hover .decoration-item:nth-child(1) {
    transform: translateX(-5px);
}

.title-wrapper:hover .decoration-item:nth-child(2) {
    transform: translateY(5px);
}

.title-wrapper:hover .decoration-item:nth-child(3) {
    transform: translateX(5px);
}

/* Introduction */
.header-intro {
    background: white;
    /* border-radius: 12px; */
    padding: 40px;
    position: relative;
    border: 1px solid rgba(0, 118, 8, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.header-intro::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #007608, #00a854);
}

.intro-content {
    position: relative;
    z-index: 1;
}

.intro-text {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.2px;
    text-align: left;
}

/* Grille élégante */
.elegant-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 80px;
    position: relative;
}

.elegant-card {
    background: white;
    padding: 40px;
    position: relative;
    border: 1px solid rgba(0, 118, 8, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(20px);
    animation: cardAppear 0.6s ease-out forwards;
    animation-delay: var(--delay, 0s);
}

.elegant-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 118, 8, 0.3);
    box-shadow: 
        0 20px 40px rgba(0, 118, 8, 0.08),
        0 1px 3px rgba(0, 0, 0, 0.04);
}

/* Décoration de la carte */
.card-decoration {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    position: relative;
}

.card-number {
    font-size: 2.5rem;
    font-weight: 300;
    color: rgba(0, 118, 8, 0.1);
    line-height: 1;
    position: relative;
}

.card-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(0, 118, 8, 0.1), transparent);
}

/* Contenu de la carte */
.card-content {
    margin-bottom: 30px;
}

.card-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 15px 0;
    line-height: 1.4;
    position: relative;
    padding-left: 0;
}

.card-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: #007608;
    transition: height 0.3s ease;
}

.elegant-card:hover .card-title::before {
    height: 24px;
    left: -10px;
}

.card-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.3px;
}

/* Statut */
.card-status {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 118, 8, 0.1);
}

.status-indicator {
    width: 10px;
    height: 10px;
    background: #007608;
    border-radius: 50%;
    position: relative;
}

.status-indicator::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 1px solid rgba(0, 118, 8, 0.2);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.status-text {
    font-size: 0.85rem;
    color: #007608;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Note élégante */
.elegant-note {
    background: rgba(0, 118, 8, 0.03);
    border: 1px solid rgba(0, 118, 8, 0.1);
    padding: 40px;
    display: flex;
    align-items: flex-start;
    gap: 25px;
    position: relative;
    overflow: hidden;
}

.elegant-note::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #007608;
}

.note-decoration {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: rgba(0, 118, 8, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #007608;
}

.note-content {
    flex: 1;
}

.note-text {
    font-size: 1.1rem;
    color: #1a1a1a;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
}

.note-emphasis {
    color: #007608;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
}

/* Animations */
@keyframes cardAppear {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.5;
    }
}

@keyframes shine {
    0% {
        left: -100%;
    }
    100% {
        left: 200%;
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .elegant-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .main-title {
        font-size: 2.3rem;
    }
    
    .header-intro {
        padding: 30px;
    }
    
    .intro-text {
        font-size: 1.05rem;
    }
}

@media (max-width: 768px) {
    .requirements-elegant {
        padding: 60px 0;
    }
    
    .elegant-header {
        margin-bottom: 50px;
    }
    
    .main-title {
        font-size: 1.8rem;
    }
    
    .badge-text {
        font-size: 0.8rem;
        padding: 8px 20px;
    }
    
    .header-intro {
        padding: 25px;
    }
    
    .intro-text {
        font-size: 1rem;
        line-height: 1.6;
    }
    
    .elegant-grid {
        grid-template-columns: 1fr;
        gap: 25px;
        margin-bottom: 50px;
    }
    
    .elegant-card {
        padding: 30px;
    }
    
    .card-number {
        font-size: 2rem;
    }
    
    .card-title {
        font-size: 1.2rem;
    }
    
    .elegant-note {
        padding: 30px;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
    }
    
    .elegant-note::before {
        width: 100%;
        height: 4px;
        top: 0;
        left: 0;
    }
}

@media (max-width: 480px) {
    .requirements-elegant {
        padding: 40px 0;
    }
    
    .container {
        padding: 0 20px;
    }
    
    .main-title {
        font-size: 1.6rem;
    }
    
    .badge-text {
        font-size: 0.75rem;
        padding: 6px 15px;
    }
    
    .header-intro {
        padding: 20px;
    }
    
    .intro-text {
        font-size: 0.95rem;
        line-height: 1.6;
    }
    
    .elegant-card {
        padding: 25px;
    }
    
    .card-number {
        font-size: 1.8rem;
    }
    
    .card-title {
        font-size: 1.1rem;
    }
    
    .card-description {
        font-size: 0.95rem;
    }
    
    .note-text {
        font-size: 1rem;
    }
}
</style>