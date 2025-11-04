<template>
  <AngeRoot>
    <Head>
      <Title>ANGE-TOGO | Nos prestations</Title>
      <Meta
          name="description"
          content="Nos prestations à l'agence National de Gestion de l'Eenvironnement"
      ></Meta>
    </Head>
    <AngeBreadcrumb
        activePageName="Nos prestations"
        backgroundUrl="/images/bg/bg-ange-03.jpg"
        :others="[{ title: 'Accueil', url: '/' }]"
    />

    <div class="container mt-5 mb-50">
      <div class="row">
        <div class="col-lg-3 col-12 categories d-flex flex-column mb-5">
          <div class="category-list">
            <NuxtLink
                class="category-item"
                v-for="(domain, index) in domains"
                :key="index"
                @click.prevent="handleCategoryClick(domain)"
                :to="domain.accronym === 'CCES' ? null : domain.link"
                style="font-size: 20px !important;"
            >
              <div class="category-text">
                <i
                    :class="{
                'fa-solid fa-medal': domain.accronym === 'CCES',
                'fa-solid fa-thumbs-up': domain.accronym === 'ApE',
                'fa-solid fa-certificate': domain.accronym === 'CRE',
                'fa-solid fa-building': domain.accronym === 'ABE',
                'fa-solid fa-smog': domain.accronym === 'PEA',
                'fa-solid fa-water': domain.accronym === 'PREU',
                'text-legislative-active': selectedCat === domain.title,
              }"
                ></i>
                <span
                    :class="{
                'text-legislative-active': selectedCat === domain.title,
              }"
                    style="font-size: 20px !important;"
                >
              {{ domain.title }}
            </span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-9">
          <div v-if="selectedCat === 'Approbation environnementale (ApE)'">
            <h1 style="text-align: center;">Approbation environnementale (ApE)</h1>
          </div>
          <div v-if="selectedCat === 'Certificat de régulation environnemetale (CRE)'">
            <h1 style="text-align: center;">Certificat de régulation environnementale (CRE)</h1>

          </div>
          <div v-if="selectedCat === 'Agrément des bureaux d\'études (ABE)'">
            <AngeAgrementDE/>

          </div>
          <div v-if="selectedCat === 'Permis d\'émission atmosphérique (PEA)'">
            <h1 style="text-align: center;">Permis d'émission atmosphérique (PEA)</h1>

          </div>
          <div v-if="selectedCat === 'Permis de rejet d\'eau usuée (PREU)'">
            <h1 style="text-align: center;">Permis de rejet d'eau usuée (PREU)</h1>

          </div>
        </div>
      </div>
    </div>
  </AngeRoot>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      domains: [
        {
          iconClass: "fa-solid fa-certificate",
          title: "Certificat de conformité environnementale et sociale (CCES)",
          link: "/obtentions-des-autorisations",
          linkText: "En savoir plus",
          accronym: "CCES"
        },
        {
          iconClass: "fa fa-cogs",
          title: "Approbation environnementale (ApE)",
          link: "#",
          linkText: "En savoir plus",
          accronym: "ApE"
        },
        {
          iconClass: "fa fa-briefcase",
          title: "Certificat de régulation environnemetale (CRE)",
          link: "#",
          linkText: "En savoir plus",
          accronym: "CRE"
        },
        {
          iconClass: "fa fa-user-check",
          title: "Agrément des bureaux d'études (ABE)",
          link: "#",
          linkText: "En savoir plus",
          accronym: "ABE"
        },
        {
          iconClass: "fa fa-user-check",
          title: "Permis d'émission atmosphérique (PEA)",
          link: "#",
          linkText: "En savoir plus",
          accronym: "PEA"
        },
        {
          iconClass: "fa fa-user-check",
          title: "Permis de rejet d'eau usuée (PREU)",
          link: "#",
          linkText: "En savoir plus",
          accronym: "PREU"
        },
      ],
      selectedCat: 'Agrément des bureaux d\'études(ABE)', // Catégorie sélectionnée
    };
  },
  methods: {
    handleCategoryClick(domain) {
      if (domain.accronym === 'CCES') {
        // Ouvrir dans un nouvel onglet
        window.open(domain.link, '_blank');
      } else {
        // Mettre à jour la catégorie sélectionnée
        this.selectedCat = domain.title;
      }
    },
  },
};
</script>

<style lang="scss">
.portfolio-item:empty {
  display: none;
}

.documentation-file {
  display: flex;
  align-items: center;
}

.file-document-name {
  color: var(--foundation-green-dark-active, #144c39);
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.category-list {
  margin-top: 20px;
}

.category-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.category-item i {
  margin-right: 10px;
}

.category-item .category-text {
  display: flex;
  align-items: center;
}

@media (max-width: 991.98px) {
  .categories {
    flex-direction: column;
  }

  .search-bar {
    order: 2;
    margin-top: 20px;
  }

  .category-list {
    order: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .category-item {
    flex-direction: column;
    align-items: center;
    border: none;
    padding: 10px;
  }

  .category-item .category-text span,
  .category-item div:last-child {
    display: none;
  }
}

@media (min-width: 992px) {
  .categories {
    flex-direction: column;
  }

  .category-item {
    flex-direction: row;
    justify-content: space-between;
  }

  .category-item .category-text span {
    display: inline;
  }
}

.text-legislative-active {
  color: #007bff;
}
</style>
