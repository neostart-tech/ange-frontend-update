<template>
         
 
</template>

<script>
export default {
  props: ["backgroundUrl", "activePageName", "others"],
};
</script>

<style>
.about-ange {
  color: #fff;
  font-family: sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.the-div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 60px;
  /* ajustez selon vos préférences */
  /* background-color: rgba(255, 255, 255, 0.7); */
}

.ange-about::before {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.68));
}
</style>
