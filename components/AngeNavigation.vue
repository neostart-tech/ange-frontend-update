<template>
  <nav class="site-main-menu">
    <ul>
      <li>
        <NuxtLink to="/" exact-active-class="active-link">Accueil</NuxtLink>
      </li>

      <li :class="{ 'active-link': isActiveAbout }" class="has-children">
        <NuxtLink to="#">ANGE</NuxtLink>
        <ul class="sub-menu">
          <li>
            <NuxtLink to="/presentation">À-propos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/mot-du-directeur">Mot du Directeur</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/mission-attribution">Missions & Attributions</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/organigramme">Conseil d'administration</NuxtLink>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink to="/prestations" exact-active-class="active-link">Prestations</NuxtLink>
      </li>

      <li :class="{ 'active-link': isActivePublications }" class="has-children">
        <NuxtLink to="#">Publications</NuxtLink>
        <ul class="sub-menu">
          <li>
            <NuxtLink to="/actualite">Actualités</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/documentation">Documenthèque</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/marche-public">Marchés publics</NuxtLink>
          </li>
        </ul>
      </li>

      <li :class="{ 'active-link': isActiveProjects }" class="has-children">
        <NuxtLink to="#">Projets</NuxtLink>
        <ul class="sub-menu">
         
          <li>
            <NuxtLink to="/projet/qedd">QEDD</NuxtLink>
          </li>
        
          <li>
            <NuxtLink to="/projet/paseit">PASIET</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projet/pnade">PNADE</NuxtLink>
          </li>
           <li>
            <NuxtLink to="/projet/pqat">PQAT</NuxtLink>
          </li>
            <li>
            <NuxtLink to="/projet/cbit">CBIT</NuxtLink>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink to="/plainte" exact-active-class="active-link">Plaintes</NuxtLink>
      </li>

      <li class="has-children">
        <NuxtLink to="#">Acteurs</NuxtLink>
        <ul class="sub-menu">
          <li>
            <a href="/pdf/CNCE-version-1.pdf" target="_blank">CNCE</a>
          </li>
          <li>
            <a href="/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf" target="_blank">
              Consultants agréés
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isActiveAbout() {
      const paths = ["/mot-du-directeur", "/presentation", "/organigramme", "/mission-attribution"];
      return paths.includes(this.$route.path);
    },
    isActivePublications() {
      const paths = ["/actualite", "/documentation", "/marche-public"];
      return paths.includes(this.$route.path);
    },
    isActiveProjects() {
      const paths = [
        "/projet/pqat",
        "/projet/qedd",
        "/projet/cbit",
        "/projet/paseit",
        "/projet/pnade",
      ];
      return paths.includes(this.$route.path);
    },
  },
};
</script>

<style scoped>
.site-main-menu {
  display: flex;
  justify-content: center;
}

.site-main-menu > ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
}

.site-main-menu > ul > li {
  position: relative;
}

.site-main-menu > ul > li > a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  display: block;
}

.site-main-menu > ul > li > a:hover,
.site-main-menu .active-link > a {
  color: #007608;
}

.site-main-menu .active-link {
  position: relative;
}

.site-main-menu .active-link::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  position: absolute;
  background-color: #007608;
  bottom: -5px;
  left: 0;
  border-radius: 2px;
}

/* ===== SOUS-MENUS EN COLONNE ===== */
.site-main-menu .has-children .sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 220px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 10px 0;
}

/* Les éléments du sous-menu en colonne */
.site-main-menu .sub-menu {
  display: block !important;
  flex-direction: column !important;
}

.site-main-menu .sub-menu li {
  margin: 0;
  width: 100%;
  display: block;
}

.site-main-menu .sub-menu a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
}

.site-main-menu .sub-menu a:hover {
  background-color: #f8f9fa;
  color: #007608;
  border-left-color: #007608;
}

.site-main-menu .has-children:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Indicateur flèche pour les menus déroulants */
.site-main-menu .has-children > a::after {
  content: "▾";
  margin-left: 6px;
  font-size: 12px;
  color: #666;
}

/* Responsive pour la navigation */
@media (max-width: 1399px) {
  .site-main-menu > ul {
    gap: 1.5rem;
  }
  
  .site-main-menu > ul > li > a {
    font-size: 14px;
  }
}

@media (max-width: 1199px) {
  .site-main-menu > ul {
    gap: 1rem;
  }
  
  .site-main-menu .has-children .sub-menu {
    min-width: 200px;
  }
}

/* Pour les très petits écrans */
@media (max-width: 480px) {
  .site-main-menu .has-children .sub-menu {
    min-width: 180px;
  }
  
  .site-main-menu .sub-menu a {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>