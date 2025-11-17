<template>
  <div class="container">
    <div class="flash-info-label">Flash info :</div>
    <div class="flash-info-content">
      <div class="flash-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
        magna ali
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #e3f2fd;
  /* border-radius: 12px; */
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 1200px; 
  margin: 200px auto; 
  margin-bottom: -20px;
  width: calc(100% - 40px); 
}

.container:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #0b9dd1;
}

.flash-info-label {
  background: linear-gradient(135deg, #146c53 0%, #146c53 100%);
  color: white;
  padding: 15px 20px;
  font-weight: 800;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Changé de center à flex-start */
  min-width: 140px;
  text-align: left; /* Changé de center à left */
  position: relative;
  overflow: hidden;
  padding-left: 15px; /* Réduction du padding gauche */
}

.flash-info-label::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.flash-info-content {
  flex: 1;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  background: white;
}

.flash-text {
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
  text-align: left;
}


@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
    margin: 20px 30px;
    width: calc(100% - 60px);
  }
}

/* Tablettes portrait */
@media (max-width: 1024px) {
  .container {
    max-width: 900px;
    margin: 18px 25px;
    width: calc(100% - 50px);
  }
  
  .flash-info-label {
    min-width: 130px;
    padding: 14px 15px; /* Padding réduit */
    padding-left: 12px; /* Padding gauche spécifique */
    font-size: 1.05rem;
    justify-content: flex-start; /* Maintenu */
  }
  
  .flash-info-content {
    padding: 18px 22px;
  }
  
  .flash-text {
    font-size: 0.98rem;
  }
}


@media (max-width: 991px) {
  .container {
    margin-top: 200px;
    /* width: 0%;
    align-content: center !important; */
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    margin: 15px 20px;
    width: calc(100% - 40px);
    border-radius: 10px;
  }

  .flash-info-label {
    min-width: auto;
    padding: 12px 15px; /* Padding réduit */
    padding-left: 15px; /* Padding gauche maintenu */
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start; /* Maintenu */
    text-align: left; /* Maintenu */
  }

  .flash-info-content {
    padding: 15px 20px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .flash-text {
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.5;
  }
}

@media (max-width: 576px) {
  .container {
    margin: 12px 15px;
    width: calc(100% - 30px);
    border-radius: 8px;
    border-width: 1.5px;
  }

  .flash-info-label {
    padding: 10px 12px; /* Padding réduit */
    padding-left: 12px; /* Padding gauche spécifique */
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    justify-content: flex-start; /* Maintenu */
  }

  .flash-info-content {
    padding: 12px 15px;
  }

  .flash-text {
    font-size: 0.9rem;
    line-height: 1.4;
  }
}

/* Petits mobiles */
@media (max-width: 480px) {
  .container {
    margin: 10px 12px;
    width: calc(100% - 24px);
    border-radius: 6px;
  }

  .flash-info-label {
    padding: 8px 10px; /* Padding réduit */
    padding-left: 10px; /* Padding gauche spécifique */
    font-size: 0.9rem;
    letter-spacing: 0.3px;
    justify-content: flex-start; /* Maintenu */
  }

  .flash-info-content {
    padding: 10px 12px;
  }

  .flash-text {
    font-size: 0.85rem;
    line-height: 1.4;
  }
}

@media (max-width: 375px) {
  .container {
    margin: 8px 10px;
    width: calc(100% - 20px);
  }

  .flash-info-label {
    padding: 8px 8px; /* Padding réduit */
    padding-left: 8px; /* Padding gauche spécifique */
    font-size: 0.85rem;
    justify-content: flex-start; /* Maintenu */
  }

  .flash-info-content {
    padding: 8px 10px;
  }

  .flash-text {
    font-size: 0.8rem;
    line-height: 1.3;
  }
}

/* Écrans très larges */
@media (min-width: 1600px) {
  .container {
    max-width: 1400px;
  }
  
  .flash-info-label {
    min-width: 160px;
    font-size: 1.2rem;
    padding: 18px 20px; /* Padding ajusté */
    padding-left: 18px; /* Padding gauche spécifique */
    justify-content: flex-start; /* Maintenu */
  }
  
  .flash-info-content {
    padding: 25px 30px;
  }
  
  .flash-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .container {
    flex-direction: row;
    margin: 100px 15px;

  }
  
  .flash-info-label {
    min-width: 120px;
    width: auto;
    justify-content: flex-start; /* Maintenu */
    padding-left: 12px; /* Padding gauche spécifique */
  }
  
  .flash-info-content {
    width: auto;
  }
  
  .flash-text {
    text-align: left;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flash-info-label::before {
    animation: none;
  }
  
  .container:hover {
    transform: none;
  }
}
</style>