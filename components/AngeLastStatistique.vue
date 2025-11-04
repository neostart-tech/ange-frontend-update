<template>
  <div class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-leaf indicator-icon"></i>
                <h2 class="counter">78</h2>
                <p>TDR AE</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-globe indicator-icon"></i>
                <h2 class="counter">56</h2>
                <p>TDR EIES</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-clipboard-check indicator-icon"></i>
                <h2 class="counter">34</h2>
                <p>AE PROV</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-check-circle indicator-icon"></i>
                <h2 class="counter">23</h2>
                <p>AE FINAUX</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-file-alt indicator-icon"></i>
                <h2 class="counter">15</h2>
                <p>EIES AP PROV</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-file-contract indicator-icon"></i>
                <h2 class="counter">45</h2>
                <p>EIES SP PROV</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-file-signature indicator-icon"></i>
                <h2 class="counter">67</h2>
                <p>EIES AP FIN</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-file-invoice indicator-icon"></i>
                <h2 class="counter">89</h2>
                <p>EIES SP FIN</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-gavel indicator-icon"></i>
                <h2 class="counter">12</h2>
                <p>CCE</p>
              </div>
            </div>
            <div class="col">
              <div class="indicator-card">
                <i class="fa-solid fa-scale-balanced indicator-icon"></i>
                <h2 class="counter">99</h2>
                <p>CRE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import counterUp from "counterup2";

export default {
  mounted() {
    this.$nextTick(() => {
      const counterElements = this.$el.querySelectorAll(".counter");

      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 2000,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      };

      const observer = new IntersectionObserver(callback, { threshold: 1 });
      counterElements.forEach((el) => {
        observer.observe(el);
      });
    });
  },
};
</script>

<style scoped>
.indicator-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.indicator-card h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.indicator-card p {
  font-size: 1rem;
  color: #6c757d;
}
.indicator-icon {
  font-size: 2.5rem;
  background: linear-gradient(-90deg, #016a98 0%, #146c53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.counter {
  font-family: "Rampart One", cursive;
  font-size: 5em;
  margin: 0vh auto 40vh;
}
.counter:not(.is-visible) {
  visibility: hidden;
}
</style>
