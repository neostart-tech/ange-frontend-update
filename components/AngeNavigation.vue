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
            <NuxtLink to="/mot-du-directeur"> Mot du Directeur </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/mission-attribution">
              Missions & Attributions
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/organigramme"> Organigramme </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/conseil-d-administration"> Conseil d'administration </NuxtLink>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink to="/prestations" exact-active-class="active-link"
          >Prestations</NuxtLink
        >
      </li>

      <li :class="{ 'active-link': isActivePublications }" class="has-children">
        <NuxtLink to="#">Publications</NuxtLink>
        <ul class="sub-menu">
          <li>
            <NuxtLink to="/actualite"> Actualités </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/documentation"> Documenthèque </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/marche-public"> Marchés publics </NuxtLink>
          </li>
        </ul>
      </li>

      <li :class="{ 'active-link': isActiveProjects }" class="has-children">
        <NuxtLink to="#">Projets</NuxtLink>
        <ul class="sub-menu">
          <li>
            <NuxtLink to="/projet/pqat"> PQAT </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projet/qedd"> QEDD </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projet/cbit"> CBIT </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projet/paseit"> PASIET </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projet/pnade"> PNADE </NuxtLink>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink to="/plainte" exact-active-class="active-link">
          Plaintes
        </NuxtLink>
      </li>

      <li class="has-children">
        <NuxtLink to="#">Acteurs</NuxtLink>
        <ul class="sub-menu">
          <li>
            <a href="/pdf/CNCE-version-1.pdf"> CNCE </a>
          </li>

          <li>
            <a href="/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf">
              Consultants agréés
            </a>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink to="/contactez-nous" exact-active-class="active-link">
          Contact
        </NuxtLink>
      </li>
      
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isActiveAbout() {
      const paths = ["/mot-du-directeur", "/presentation", "/organigramme"];
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

<style>
.site-main-menu .active-link {
  font-weight: bold;
  position: relative;
}

.site-main-menu .active-link::after {
  content: "";
  display: block;
  width: 48%;
  height: 4px;
  position: absolute;
  background-color: #0a9cce;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>