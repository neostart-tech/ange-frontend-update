<template>
  <main class="container my-5 ">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100 text-center shadow">
          <div class="card-body d-flex flex-column text-center">
            <div class="icon mb-3">
              <i class="fa fa-file-alt"></i>
            </div>
            <h4 class="card-title">
              Projets soumis à évaluation environnementale
            </h4>

            <div class="mt-auto">
              <a href="#" class="link-gradient">En savoir plus</a>
            </div>
          </div>
          <!-- <div class="loading-bar bg-success"></div> -->
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100 text-center shadow">
          <div class="card-body d-flex flex-column text-center">
            <div class="icon mb-3">
              <i class="fa fa-cogs"></i>
            </div>
            <h4 class="card-title">Nos Processus</h4>

            <div class="mt-auto">
              <a href="#" class="link-gradient">En savoir plus</a>
            </div>
          </div>

          <!-- <div class="loading-bar bg-danger"></div> -->
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100 text-center shadow">
          <div class="card-body d-flex flex-column text-center">
            <div class="icon mb-3">
              <i class="fa fa-briefcase"></i>
            </div>
            <h4 class="card-title">Nos Prestations</h4>

            <div class="mt-auto">
              <a href="#" class="link-gradient">En savoir plus</a>
            </div>
          </div>
          <!-- <div class="loading-bar bg-info"></div> -->
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100 text-center shadow">
          <div class="card-body d-flex flex-column text-center">
            <div class="icon mb-3">
              <i class="fa fa-user-check"></i>
            </div>
            <h4 class="card-title">Consultants agréés</h4>

            <div class="mt-auto">
              <a
                target="_blank"
                class="link-gradient"
                href="/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf"
                >En savoir plus</a
              >
            </div>
          </div>
          <!-- <div class="loading-bar bg-success"></div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<style>

header h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.banner {
  background: #e3ebf3;
}

.banner h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.banner p {
  font-size: 1.25rem;
  color: #555;
}

.card {
  border: none;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}

.card-body {
  transition: transform 0.3s;
}

.card-body:hover {
  transform: scale(1.05);
}

.loading-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

.card:hover .loading-bar {
  transform: scaleX(1);
}

.icon {
  font-size: 3rem;
  background: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.link-gradient {
  font-weight: bold;
  background: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.link-gradient:hover {
  text-decoration: underline;
}
</style>
