<template>
  <div class="container mot-dg">
    <div class="row mt-4 card-dg">
      <!-- IMAGE -->
      <div class="col-md-6 p-0 image-col">
        <div class="image-container">
          <img
            src="/images/others/photoDG.jpg"
            alt="Directeur Général"
            class="img-dg"
          />
        </div>
      </div>

      <!-- TEXTE -->
      <div class="col-md-6 p-4 texte-col">
        <div class="texte-dg">
          <p>
            Chers usagers, acteurs de protection de l'environnement et de promotion du développement durable, la loi n°
            2008-005 portant loi-cadre sur l'environnement au Togo, en son article 15 alinéa 2, définit la vision
            stratégique de l'Agence Nationale de Gestion de l'Environnement (ANGE) : « Elle sert d'institution d'appui à
            la mise en œuvre de la politique nationale de l'environnement telle que définie par le gouvernement dans le
            cadre du plan national de développement ».
          </p>

          <p>
            Pour y parvenir, l'ANGE est chargée d'assurer, entre autres, « la mise en place et la gestion du système
            national d'information environnementale » mais aussi « le développement et la mise en œuvre des actions
            d'information, d'éducation, de communication et de formation relatives à la protection et à la gestion des
            ressources naturelles et de l'environnement ».
          </p>

          <p>
            La loi prévoit également que le système d'information et de suivi environnemental mette à la disposition de
            tous les acteurs de développement, des données d'analyse sectorielle et spatiale, accessibles et utilisables,
            nécessaires à l'évaluation environnementale et à des prises de décisions efficaces pour une gestion
            rationnelle de l'environnement.
          </p>

          <p>
            Assurer cette responsabilité d'information sur les missions de l'agence se justifie et se concrétise par le
            recours à une panoplie de mesures, y compris la création et la mise à jour régulière d'un site web.
          </p>

          <p>
            Le site web de l'ANGE se révèle comme l'un des canaux efficaces de mise à disposition en temps réel,
            d'informations fiables utiles à l'administration, aux promoteurs de projets, aux chercheurs, aux
            organisations de la société civile, bref à toutes les parties intéressées.
          </p>

          <p>
            La direction générale de l'ANGE s'engage à collaborer davantage avec tous les acteurs nationaux et
            internationaux pour combler autant que possible les attentes de plus en plus croissantes mais légitimes.
            Je suis heureux de vous compter parmi les visiteurs de notre site.
          </p>

          <p class="signature">
            Cordialement,<br>
            <strong>Dr Koffi Efanam ADADJI</strong><br />
            Le Directeur Général
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~~/config";

export default {
  data() {
    return {
      isLoading: false,
      configAnge: [],
      img_url_back: null,
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/configs/liste`);
        const data = await response.data.data;
        if (data) {
          this.img_url_back = config.app_back_url_img;
          this.configAnge = data;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
.mot-dg {
  margin-top: 40px;
  margin-bottom: 60px;
}

.card-dg {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  background: white;
  min-height: 850px;
}

/* Les deux colonnes ont la même hauteur */
.image-col,
.texte-col {
  flex: 1;
  min-width: 300px;
  display: flex;
  align-items: stretch; 
}

/* Colonne image - ALIGNÉE EN HAUT */
.image-col {
  background: #f8f9fa;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
}

.image-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 100%;
}

.img-dg {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Colonne texte - ALIGNÉE EN HAUT */
.texte-col {
  background: #f8f9fa;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  padding-top: 60px;
}

.texte-dg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.texte-dg p {
  font-size: 16px !important;
  text-align: justify;
  line-height: 1.7;
  color: #333;
  margin-bottom: 15px;
}

.signature {
  color: #1c412f;
  font-style: italic;
  margin-top: 20px;
}

/* Responsive */
@media (max-width: 1199.98px) {
  .card-dg {
    min-height: 650px;
  }
  
  .image-col,
  .texte-col {
    padding: 35px;
    padding-top: 50px;
  }
  
  .img-dg {
    max-height: 550px;
  }
}

@media (max-width: 991.98px) {
  .card-dg {
    flex-direction: column;
    min-height: auto;
  }

  .image-col,
  .texte-col {
    min-width: 100%;
    padding: 30px;
    padding-top: 40px;
  }

  .image-col {
    min-height: 450px;
    align-items: center;
    padding: 0 !important;
    margin: 0 !important;
  }

  .image-container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .img-dg {
    max-height: 400px;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .texte-col {
    align-items: flex-start;
  }

  .texte-dg {
    justify-content: flex-start;
  }
}

@media (max-width: 767.98px) {
  .image-col,
  .texte-col {
    padding: 25px;
    padding-top: 35px;
  }

  .image-col {
    min-height: 400px;
    padding: 0 !important;
    margin: 0 !important;
  }

  .image-container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .img-dg {
    max-height: 350px;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .texte-dg p {
    font-size: 15px !important;
    line-height: 1.6;
  }
}

@media (max-width: 575.98px) {
  .mot-dg {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .image-col,
  .texte-col {
    padding: 20px;
    padding-top: 30px;
  }

  .image-col {
    min-height: 350px;
    padding: 0 !important;
    margin: 0 !important;
  }

  .image-container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .img-dg {
    max-height: 300px;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
}

@media (max-width: 374.98px) {
  .image-col,
  .texte-col {
    padding: 15px;
    padding-top: 25px;
  }

  .image-col {
    min-height: 300px;
    padding: 0 !important;
    margin: 0 !important;
  }

  .image-container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .img-dg {
    max-height: 250px;
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
}
</style>