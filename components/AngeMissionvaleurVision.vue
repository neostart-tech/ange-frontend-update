<template>
    <section style="">
    <div class="container">
        <div class="row d-flex justify-content-between">
            <div class="col-item">
                <div class="title">
                    <h3><i class="fa fa-bullseye"></i> Mission</h3>
                </div>
                <div class="desc">
                    <p>L’ANGE a pour mission de coordonner, suivre
                        et évaluer la mise en œuvre des politiques nationales en matière d’environnement</p>
                </div>
            </div>
            <div class="col-item">
                <div class="title">
                    <h3><i class="fa fa-eye"></i> Vision</h3>
                </div>
                <div class="desc">
                    <p>Servir d’institution d’appui au gouvernement.
                        Faire du Togo un pays modèle en matière de développement durable et de gestion écologique</p>
                </div>
            </div>
            <div class="col-item">
                <div class="title">
                    <h3><i class="fa fa-heart"></i> Valeurs</h3>
                </div>
                <div class="desc">
                    <p>Les principes qui guident ses actions,
                        transparence, équité, responsabilité, durabilité innovation.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
// Aucune donnée réactive nécessaire pour le moment
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
    background: #e0f9e0;
}

.row {
    gap: 30px;
    flex-wrap: nowrap;
}

.col-item {
    flex: 1;
    min-width: 0;
    padding: 30px 20px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.col-item:hover {
    transform: translateY(-5px);
}

.title i{
    color: #007608;
}

.title h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.title i {
    font-size: 1.5rem;
    width: 30px;
    text-align: center;
}

.desc p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
    margin: 0;
    text-align: justify;
}

/* Responsive */
@media (max-width: 992px) {
    .row {
        gap: 20px;
    }
    
    .col-item {
        padding: 25px 15px;
    }
    
    .title h3 {
        font-size: 1.2rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 40px 20px;
    }
    
    .row {
        flex-direction: column;
        gap: 20px;
    }
    
    .col-item {
        padding: 20px;
    }
    
    .title h3 {
        font-size: 1.1rem;
    }
    
    .desc p {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 30px 15px;
    }
    
    .col-item {
        padding: 15px;
    }
    
    .title h3 {
        font-size: 1rem;
        flex-direction: column;
        gap: 5px;
        text-align: center;
    }
    
    .desc p {
        font-size: 0.85rem;
    }
}
</style>