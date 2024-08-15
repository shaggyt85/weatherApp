<template>
  <div class="weather_right">
    <div class="weather-center">
      <h6>Dirección</h6>
      <MdiWeatherWindy />
      <span class="weather">{{ weatherData?.wind.deg }}&deg;</span>
    </div>
    <div class="weather-center">
      <h6>Humedad</h6>
      <span class="weather">{{ weatherData?.main.humidity }}%</span>
    </div>
    <div class="weather-center">
      <h6>Visibilidad</h6>
      <MaterialSymbolsVisibilityOutlineRounded />
      <span class="weather"
        >{{ Math.round(weatherData?.visibility) / 1000 }} km</span
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import MdiWeatherWindy from "../../assets/icons/MdiWeatherWindy.vue";
import MaterialSymbolsVisibilityOutlineRounded from "../../assets/icons/MaterialSymbolsVisibilityOutlineRounded.vue";

const props = defineProps({
  weatherData: Object,
});
</script>

<style scoped>
.weather_right {
  display: flex;
  z-index: 1;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.weather-center {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
