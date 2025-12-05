<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="image" class="card-img" alt="Department Image" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ departmentName }}</h5>
          <p class="card-text">
            <strong>Responsable:</strong> {{ responsible }}
          </p>
          <NuxtLink to="#" @click="toggleObjectives" class="text-primary">
            {{ showObjectives ? "Afficher moins" : "Afficher plus" }}
          </NuxtLink>
          <!-- <transition name="fade">
            <div v-if="showObjectives" class="objectives">
              <h6>Objectifs:</h6>
              <ul>
                <li v-for="objective in objectives" :key="objective">
                  {{ objective }}
                </li>
              </ul>
            </div>
          </transition> -->
          <div class="row">
            <div class="col-lg-6">
              <transition name="fade">
                <div v-if="showObjectives" class="objectives">
                  <h6>Objectifs:</h6>
                  <ul>
                    <li v-for="objective in objectives" :key="objective">
                      {{ objective }}
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
            <div class="col-lg-6">
              <transition name="fade">
                <div v-if="showObjectives" class="objectives">
                  <h6>Objectifs:</h6>
                  <ul>
                    <li v-for="objective in objectives" :key="objective">
                      {{ objective }}
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    departmentName: {
      type: String,
      required: true,
    },
    responsible: {
      type: String,
      required: true,
    },
    objectives: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showObjectives: false,
    };
  },
  methods: {
    toggleObjectives() {
      this.showObjectives = !this.showObjectives;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 1rem;
}

.card-img {
  width: 100%;
  height: auto;
}

.objectives {
  margin-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
