<template>
  <section class="apropos-section container mb-5">
    <div class="content-wrapper">
      <div class="image-col">
        <img src="/images/bg/bg-ange-04.jpg" alt="Le PNADE">
      </div>

      <div class="text-col">
        <h4>A propos</h4>
        <h2>Le PNADE qu’est-ce que c’est ?</h2>
        <p>
          Le PNADE a vu le jour en Février 2009. Son objectif global est de promouvoir « Le développement
          durable du pays ». Spécifiquement, il s’agit de « Renforcer et appuyer les capacités des différents
          acteurs à intégrer les questions environnementales dans les stratégies et actions de développement
          locales ».
          Sa mise en œuvre a duré 5 ans (02/2009 - 02/2014). Son budget initial de 5 millions d’Euros a été
          réduit à 3 millions d’euros suite à des problèmes stratégiques et à de nouvelles orientations.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.apropos-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 40px;
}

.image-col {
  flex: 1 1 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.image-col img {
  width: 641px;
  height: 363px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.text-col {
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-col h4 {
  font-size: 14px;
  color: #007608;
  text-transform: uppercase;
  margin-bottom: 6px;
  letter-spacing: 1px;
}

.text-col h2 {
  font-size: 26px;
  margin-bottom: 15px;
  line-height: 1.3;
  color: #222;
}

.text-col p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
    gap: 30px;
  }

  .image-col {
    justify-content: center;
  }

  .image-col img {
    height: auto;
    max-height: 400px;
    max-width: 100%;
  }

  .text-col {
    text-align: center;
  }

  .text-col h2 {
    font-size: 22px;
  }
}

@media (max-width: 768px) {
  .apropos-section {
    padding: 0 15px;
  }
  
  .content-wrapper {
    margin-top: 30px;
    gap: 25px;
  }
  
  .text-col h2 {
    font-size: 20px;
  }
  
  .text-col p {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .apropos-section {
    padding: 0 10px;
  }
  
  .content-wrapper {
    margin-top: 20px;
    gap: 20px;
  }
  
  .text-col h4 {
    font-size: 13px;
  }
  
  .text-col h2 {
    font-size: 18px;
  }
  
  .text-col p {
    font-size: 12px;
  }
}
</style>