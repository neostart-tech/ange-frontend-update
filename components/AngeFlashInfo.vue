<template>
     <div class="flash-info-container mt-5" style="margin-top: 200px !important; ">
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

.flash-info-container {
  display: flex;
  align-items: stretch;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #e3f2fd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 1200px;
  margin: 20px auto;
  width: calc(100% - 40px);
}

.flash-info-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #0b9dd1;
}

.flash-info-label {
  background: linear-gradient(135deg, #146c53 0%, #146c53 100%);
  color: white;
  padding: 10px 10px;
  font-weight: 800;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  text-align: center;
  position: relative;
  overflow: hidden;
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
}

/* Responsive */
@media (max-width: 1024px) {
  .flash-info-container {
    margin: 20px 30px;
    width: calc(100% - 60px);
  }
}

@media (max-width: 768px) {
  .flash-info-container {
    flex-direction: column;
    margin: 15px 20px;
    width: calc(100% - 40px);
  }

  .flash-info-label {
    min-width: auto;
    padding: 15px 20px;
    font-size: 1rem;
  }

  .flash-info-content {
    padding: 15px 20px;
  }
}

@media (max-width: 480px) {
  .flash-info-container {
    margin: 10px 15px;
    width: calc(100% - 30px);
  }

  .flash-info-label {
    padding: 12px 15px;
    font-size: 0.9rem;
  }

  .flash-info-content {
    padding: 12px 15px;
  }

  .flash-text {
    font-size: 0.9rem;
  }
}
</style>