<template>
  <div class="main">
    <Navigation @add-city="addCity" />
    <WeatherSearch :city="city" @update-city="updateCity" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LocalStorageService from "./src/services/LocalStorageService";
import Navigation from "./src/components/Navigation/Navigation.vue";
import WeatherSearch from "./src/components/Weather/WeatherSearch.vue";

const city = ref("");
const localidades = ref([]);

onMounted(() => {
  localidades.value = LocalStorageService.getLocalidades();
});

function addCity(newCity) {
  city.value = newCity; // Establecer la ciudad desde el modal
}

function updateCity(newCity) {
  city.value = newCity; // Actualizar la ciudad cuando se selecciona una localidad
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "sans-serif";
}
body {
  margin: 0 auto;
  max-width: 1440px;
}
.main {
  max-width: 1440px;
  height: 100vh;
}

.container {
  padding: 0 20px;
}
</style>
