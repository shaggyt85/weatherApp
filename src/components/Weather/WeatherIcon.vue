<template>
  <div class="weather">
    <span class="celsius"
      >{{ Math.round(kelvinACelsius(weatherData?.main.temp)) }}&deg;</span
    >
    <img
      :src="`/assets/condition/${weatherData?.weather[0].icon}.svg`"
      alt=""
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  weatherData: Object,
});

function kelvinACelsius(kelvin) {
  return kelvin - 273.15;
}
</script>

<style scoped>
.weather {
  display: flex;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  gap: 6px;
}
img {
  height: 20px;
  width: auto;
}
.celsius {
  font-size: 35px;
  margin-right: 8px;
}
</style>
