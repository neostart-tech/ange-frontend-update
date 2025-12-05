<template>
  <div class="container mt-5">
    <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-actualites-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-actualites"
          type="button"
          role="tab"
          aria-controls="pills-actualites"
          aria-selected="true"
        >
          Actualités (14)
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-marches-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-marches"
          type="button"
          role="tab"
          aria-controls="pills-marches"
          aria-selected="false"
        >
          Marchés publics (2)
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-observatoire-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-observatoire"
          type="button"
          role="tab"
          aria-controls="pills-observatoire"
          aria-selected="false"
        >
          Observatoire (65)
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-documentation-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-documentation"
          type="button"
          role="tab"
          aria-controls="pills-documentation"
          aria-selected="false"
        >
          Documenthèque (25)
        </button>
      </li>
    </ul>

    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-actualites"
        role="tabpanel"
        aria-labelledby="pills-actualites-tab"
      >
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/150"
                class="card-img-top"
                alt="Image 1"
              />
              <div class="card-body">
                <p class="text-muted">6 Juin 2024 à 22h00 · COMPTES RENDUS</p>
                <h5 class="card-title">
                  Participation du Bénin à la 63ème réunion du Comité Permanent
                  de la convention de Ramsar
                </h5>
                <a href="#">LIRE L'ARTICLE ENTIER →</a>
              </div>
            </div>
          </div>
          <!-- Répéter pour chaque article -->
          <!-- Exemple d'un autre article -->
          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/150"
                class="card-img-top"
                alt="Image 2"
              />
              <div class="card-body">
                <p class="text-muted">4 Juin 2024 à 23h39 · COMPTES RENDUS</p>
                <h5 class="card-title">
                  Mise en oeuvre des initiatives pilotes en Éducation Relative à
                  l’Environnement
                </h5>
                <a href="#">LIRE L'ARTICLE ENTIER →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Autres onglets -->
      <div
        class="tab-pane fade"
        id="pills-marches"
        role="tabpanel"
        aria-labelledby="pills-marches-tab"
      >
        <p>Contenu des marchés publics.</p>
      </div>
      <div
        class="tab-pane fade"
        id="pills-observatoire"
        role="tabpanel"
        aria-labelledby="pills-observatoire-tab"
      >
        <p>Contenu de l'observatoire.</p>
      </div>
      <div
        class="tab-pane fade"
        id="pills-documentation"
        role="tabpanel"
        aria-labelledby="pills-documentation-tab"
      >
        <p>Contenu de la documenthèque.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f8f9fa;
}

.nav-pills .nav-link.active {
  background-color: #d9e8da;
  color: #212529;
}

.tab-content {
  padding: 20px;
  /* background-color: #e5f3e5; */
  border: #4d6b4d solid !important;
  border-radius: 8px;
  margin-top: 20px;
}

.card {
  border: none;
  border-radius: 10px;
  background-color: #e5f3e5;
}

.card img {
  border-radius: 10px;
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
}

.card-text {
  color: #606060;
  font-size: 0.9rem;
}

.card a {
  color: #4caf50;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
}
</style>
