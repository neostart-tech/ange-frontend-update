<template>
  <div class="section-padding-top section-padding-bottom-180 overflow-hidden">
    <!-- <Angecbitdefault/> -->
     <div class="container mb-30">
         <Angecbitcontextjustification/>
         <AngecbitObjectifs/>
          <AngecbitActivite/>
          <AngecbitProjectInfo/>
          <AngecbitResultat/>
     </div>
  
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>

<style lang="scss">
.text-justify-mission {
  text-align: justify !important;
}
</style>
