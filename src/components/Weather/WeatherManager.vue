<template>
  <div>
    <CityList
      :city="city"
      @update-city="updateCity"
      :localidades="localidades"
      :weatherData="weatherData"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import fetchWeather from "@/src/plugins/fetchWeather";
import LocalStorageService from "@/src/services/LocalStorageService";
import CityList from "../City/CityList.vue";

const props = defineProps(["city"]);
const emit = defineEmits(["update-city"]);

const weatherData = ref([]);
const localidades = ref([]);

onMounted(() => {
  loadLocalidades();
});

// Cargar localidades desde Local Storage
function loadLocalidades() {
  localidades.value = LocalStorageService.getLocalidades();
  weatherData.value = LocalStorageService.getWeatherData() || [];
}

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
    updateWeatherData(response, city);
  } catch (error) {
    console.error(error);
  }
}

// Actualiza los datos del clima y las localidades
function updateWeatherData(response, city) {
  weatherData.value.push(response);
  LocalStorageService.addLocalidad(city);
  LocalStorageService.saveWeatherData(weatherData.value);
  loadLocalidades();
}

function updateCity(newCity) {
  if (newCity) {
    emit("update-city", newCity);
  } else {
    console.warn("No se proporciono nueva ciudad para actualizar!");
  }
}
</script>
