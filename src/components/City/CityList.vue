<template>
  <div class="grid">
    <CityCard
      v-for="localidad in localidades"
      :key="localidad"
      :weatherData="getWeatherData(localidad)"
      :removeLocalidad="() => removeLocalidad(localidad)"
      @click="selectLocalidad(localidad)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import LocalStorageService from "../../services/LocalStorageService.vue";
import CityCard from "./CityCard.vue";
import fetchWeather from "../../plugins/fetchWeather.vue";

const props = defineProps(["city"]);
const emit = defineEmits(["update-city"]);

const localidades = ref([]);
const weatherData = ref([]);

onMounted(() => {
  localidades.value = LocalStorageService.getLocalidades();
  weatherData.value = LocalStorageService.getWeatherData() || [];
});

// Watch para actualizar el clima cuando cambie la ciudad
watch(
  () => props.city,
  (newCity) => {
    if (newCity) {
      getWeather(newCity);
    }
  }
);

async function getWeather(city) {
  if (!city) {
    console.warn("Por favor ingresa una ciudad");
    return;
  }
  try {
    const response = await fetchWeather(city);

    // Agregar la respuesta al array y guardar en Local Storage
    weatherData.value.push(response);
    LocalStorageService.addLocalidad(city);
    LocalStorageService.saveWeatherData(weatherData.value); // Guardar datos en Local Storage
    localidades.value = LocalStorageService.getLocalidades();
  } catch (error) {
    console.error(error);
  }
}

function removeLocalidad(localidad) {
  LocalStorageService.removeLocalidad(localidad);
  localidades.value = LocalStorageService.getLocalidades();
  weatherData.value = weatherData.value.filter(
    (data) => data.name !== localidad
  );
  LocalStorageService.saveWeatherData(weatherData.value);
}

function selectLocalidad(localidad) {
  emit("update-city", localidad);
}

function getWeatherData(localidad) {
  return weatherData.value.find((item) => item.name === localidad) || null;
}
</script>

<style>
.grid {
  display: grid;
  padding-top: 81px;
  background-color: #31363d;
  width: 100%;
  min-height: 100vh;
}
@media (min-width: 400px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
