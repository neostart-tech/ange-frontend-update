<template>
  <div class="media">
    <h2 class="media-title">Médiathèque</h2>
    <p class="media-sub">Consultez et téléchargez les documents du projet PQAT</p>

    <div v-if="documents.length === 0" class="media-empty">
      Aucun document disponible pour le moment.
    </div>

    <div v-else class="media-grid">
      <div v-for="doc in documents" :key="doc.file" class="media-card">
        <div class="media-ico">PDF</div>
        <h3>{{ doc.title }}</h3>
        <p v-if="doc.description">{{ doc.description }}</p>
        <div class="media-actions">
          <button class="btn btn-view" @click="openDoc(doc)">Voir</button>
          <a class="btn btn-download" :href="doc.file" :download="doc.title + '.pdf'">Télécharger</a>
        </div>
      </div>
    </div>

    <!-- Fenêtre de visualisation -->
    <div v-if="current" class="media-modal" @click.self="closeDoc">
      <div class="media-modal-box">
        <div class="media-modal-head">
          <strong>{{ current.title }}</strong>
          <div class="media-modal-btns">
            <a :href="current.file" target="_blank" rel="noopener">Ouvrir dans un onglet</a>
            <button class="close" @click="closeDoc" aria-label="Fermer">&times;</button>
          </div>
        </div>
        <iframe :src="current.file" title="Visionneuse PDF"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/*
  POUR AJOUTER UN DOCUMENT :
  1) Mettre le fichier PDF dans le dossier  public/documents/
  2) Ajouter une ligne dans la liste ci-dessous.
*/
const documents = ref([
  // { title: 'Bulletin d\'information PQAT', description: 'Édition 2026', file: '/documents/bulletin-pqat.pdf' },
])

const current = ref(null)
const openDoc = (doc) => { current.value = doc }
const closeDoc = () => { current.value = null }
</script>

<style scoped>
.media { padding: 10px 0 30px; text-align: center; }
.media-title { color: #1e293b; font-size: 32px; margin: 0 0 8px; }
.media-sub { color: #64748b; font-size: 17px; margin: 0 0 36px; }
.media-empty { color: #64748b; padding: 40px 0; font-size: 16px; }

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}
.media-card {
  background: #fff;
  border-radius: 10px;
  padding: 28px 22px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.media-ico {
  width: 56px; height: 56px; margin: 0 auto 16px;
  background: #1ba5d4; color: #fff; font-weight: 700;
  border-radius: 8px; display: flex; align-items: center; justify-content: center;
}
.media-card h3 { margin: 0 0 8px; font-size: 18px; color: #1e293b; }
.media-card p { margin: 0 0 16px; color: #64748b; font-size: 14px; }
.media-actions { display: flex; gap: 10px; justify-content: center; margin-top: 16px; }

.btn {
  padding: 10px 18px; border-radius: 8px; font-weight: 600; font-size: 14px;
  cursor: pointer; text-decoration: none; border: 2px solid #1ba5d4;
}
.btn-view { background: #fff; color: #1ba5d4; }
.btn-view:hover { background: #eaf7fc; }
.btn-download { background: #1ba5d4; color: #fff; }
.btn-download:hover { background: #1593c2; border-color: #1593c2; }

.media-modal {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; padding: 16px;
}
.media-modal-box {
  background: #fff; border-radius: 10px; width: 100%; max-width: 1000px;
  height: 90vh; display: flex; flex-direction: column; overflow: hidden;
}
.media-modal-head {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 16px; border-bottom: 1px solid #e2e8f0; gap: 12px; text-align: left;
}
.media-modal-btns { display: flex; align-items: center; gap: 16px; }
.media-modal-btns a { color: #1ba5d4; font-size: 14px; font-weight: 600; text-decoration: none; }
.close { background: none; border: none; font-size: 30px; line-height: 1; cursor: pointer; color: #475569; }
.media-modal-box iframe { flex: 1; width: 100%; border: 0; }
</style>
