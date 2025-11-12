<template>
  <div class="container mt-5 d-flex flex-column align-items-center section-padding">
      <div class="intro mb-5" data-aos="fade-up">
        <h4 class="subtitle">Informations</h4>
        <h2 class="main-title" style="color: #000 !important">
            Procédures, délais et coûts d'obtention des autorisations
        </h2>
        <p>Pour avoir plus d’informations  concernant couts et delais , la durée des processus et autres , téléchargez ce document ci-dessous.  </p>
    </div>

    <!-- LIEN PDF -->
    <div class="note-link mb-5" data-aos="fade-up">
        <a href="/pdf/plaintes.pdf" target="_blank" class="pdf-link">
            Informations complémentaires &nbsp;
            <i class="fa fa-download"></i>
        </a>
    </div>

    <div class="contain">
        <div class="title">
            <h3>A. Processus , délais , couts et responsables </h3>
        </div>
       
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Processus /Etapes IEIS</th>
                        <th>Delais des processus IEIS</th>
                        <th>Couts </th>
                        <th>Responsables</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(procedure, index) in procedures" :key="index">
                        <td>{{ procedure.nom }}</td>
                        <td>{{ procedure.delai }}</td>
                        <td>{{ procedure.cout }}</td>
                        <td>{{ procedure.responsable }}</td>
                    </tr>
                </tbody>
            </table>


    </div>
  </div>



</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    procedures: {
        type: Array,
        required: true
    }
});

</script>

<style scoped>

.section-padding {
  padding: 60px 0;
  text-align: center;
}

/* ===== TITRES ===== */
.subtitle {
  font-size: 16px;
  color: #007608;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.main-title {
  font-size: 26px;
  line-height: 1.4;
  color: #000;
}

/* ===== LIEN PDF (bouton) ===== */
.pdf-link {
  display: inline-block;
  background-color: #000;
  color: #fff !important;
  text-decoration: none;
  padding: 30px 22px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.pdf-link i {
  margin-left: 8px;
}

.pdf-link:hover {
  background-color: #1f4434;
  text-decoration: none;
  transform: translateY(-2px);
}
</style>