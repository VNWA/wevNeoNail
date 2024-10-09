<script setup>
import { VueImageZoomer } from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";

</script>

<template>
  <div>
    <vue-image-zoomer
      regular="https://samueljon.es/img/sky.jpg"
      zoom="https://samueljon.es/img/sky-zoom.jpg"
    />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
