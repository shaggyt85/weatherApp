<template>
  <div class="video">
    <video
      autoplay
      loop
      muted
      :src="`/assets/videos/${weatherData?.weather[0].icon}.mp4`"
    ></video>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  weatherData: Object,
});
</script>

<style scoped>
.video {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Esto asegura que el video cubra toda la caja */
  transform: translate(-50%, -50%); /* Centra el video */
}
</style>
