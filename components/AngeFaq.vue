33333
<template>
  <div class="section-padding-t90 section-padding-bottom overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center" data-aos="fade-up">
            <h2 class="text-cnce fz-32" style="color: #285a43 !important">
              Des préoccupations ? Parcourez notre foire aux questions
            </h2>
          </div>
        </div>
      </div>

      <div class="row" v-if="isLoading">
        <div class="text-center">
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <div v-if="!isLoading" class="agency-accordion">
        <div class="accordion" id="accordionExample">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="accordion-item card"
          >
            <h2 class="card-header" :id="'heading' + index">
              <button
                class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block"
                type="button"
                :data-bs-toggle="'collapse'"
                :data-bs-target="'#collapse' + index"
                :aria-expanded="index === 0 ? 'true' : 'false'"
                :aria-controls="'collapse' + index"
              >
                {{ index + 1 }} . {{ faq.question }}
              </button>
            </h2>
            <div
              :id="'collapse' + index"
              :class="[
                'accordion-collapse',
                'collapse',
                index === 0 ? 'show' : '',
              ]"
              :aria-labelledby="'heading' + index"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" v-html="faq.reponse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      faqs: [],
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/faqs`);

        const data = await response.data.data;
        if (data) {
          this.faqs = data;
          console.log("les faqs", this.faqs);

          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
