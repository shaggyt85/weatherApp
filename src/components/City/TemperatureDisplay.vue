<template>
  <div class="weather_top">
    <span class="celsius"
      >{{ Math.round(kelvinACelsius(weatherData?.main.temp_max)) }}&deg;</span
    >
    <h6>Alta temperaturas</h6>
    <span class="celsius"
      >{{ Math.round(kelvinACelsius(weatherData?.main.temp_min)) }}&deg;</span
    >
    <h6>Minimas Temperatura</h6>
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
.weather_top {
  display: flex;
  z-index: 1;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
}
.celsius {
  font-size: 35px;
  margin-right: 8px;
}
</style>
