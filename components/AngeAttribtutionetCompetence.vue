<template>
    <div class="container mt-5" ref="sectionRef">
        <div class="title">
            <h5 class="subtitle" style="color: #0b9dd1;">Qui sommes-nous</h5>
            <h2 class="main-title">Nos attributions et compétence</h2>
            <p   style="text-align: left !important;">
                Nous unissons expertise et engagement pour bâtir un avenir durable au service
                du développement national.
            </p>
        </div>
        <div class="cards-grid">
            <div 
                v-for="(attribution, index) in attributions" 
                :key="index" 
                class="card text-center"
                :class="{ 'animate-in': isVisible }"
                :style="{ animationDelay: `${index * 0.1}s` }"
            >
                <div class="icone">
                    <i :class="attribution.icon"></i>
                </div>
                <div class="desc">
                    <p>{{ attribution.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const attributions = [
    {
        icon: 'fa fa-cogs',
        text: "L'élaboration et la coordination de la mise en œuvre du Programme national de gestion de l'environnement."
    },
    {
        icon: 'fa fa-chart-line',
        text: "La promotion et la mise en œuvre du système national des évaluations environnementales, notamment les études d'impact, les évaluations environnementales stratégiques, les audits environnementaux."
    },
    {
        icon: 'fa fa-puzzle-piece',
        text: "L'appui à l'intégration de la dimension environnementale dans les politiques, stratégies, programmes et projets de développement national et local."
    },
    {
        icon: 'fa fa-tools',
        text: "L'élaboration et la promotion des outils techniques d'analyse, de planification et d'intégration de l'environnement aux politiques, plans, programmes, projets et activités de développement."
    },
    {
        icon: 'fa fa-hands-helping',
        text: "L'appui technique aux collectivités territoriales, aux organisations communautaires à la base, aux privés et aux ONG en matière de gestion de l'environnement."
    },
    {
        icon: 'fa fa-database',
        text: "La mise en place et la gestion du système national d'information environnementale."
    }
]

const checkVisibility = () => {
    if (!sectionRef.value) return
    
    const rect = sectionRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    
    if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
        isVisible.value = true
        window.removeEventListener('scroll', checkVisibility)
    }
}

onMounted(() => {
    setTimeout(checkVisibility, 100)
    window.addEventListener('scroll', checkVisibility)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility)
})
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.title {
    margin-bottom: 50px;
}

.subtitle {
    font-size: 13px;
    color: #0b9dd1;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    font-weight: 600;
}

.main-title {
    font-size: 25px;
    margin-bottom: 15px;
    color: #222;
    font-weight: 700;
}

.des {
    font-size: 13px;
    color: #555;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
    text-align: start !important;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.card {
    background: #0b9dd1;
    color: white;
    padding: 30px 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
}

.card.animate-in {
    opacity: 1;
    transform: translateY(0);
    animation: slideUp 0.6s ease forwards;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(11, 157, 209, 0.3);
}

.icone {
    margin-bottom: 20px;
}

.icone i {
    font-size: 2.5rem;
    color: white;
}

.desc p {
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
    color: white;
}

/* Responsive */
@media (max-width: 992px) {
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
    
    .cards-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        max-width: 500px;
        margin: 0 auto;
    }
    
    .card {
        padding: 25px 15px;
    }
    
    .icone i {
        font-size: 2rem;
    }
    
    .main-title {
        font-size: 22px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 10px;
    }
    
    .title {
        margin-bottom: 30px;
    }
    
    .card {
        padding: 20px 15px;
    }
    
    .desc p {
        font-size: 13px;
    }
    
    .icone i {
        font-size: 1.8rem;
    }
}
</style>