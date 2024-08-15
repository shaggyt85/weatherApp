<template>
  <div>
    <WeatherManager :city="city" @update-city="updateCity" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import WeatherManager from "./WeatherManager.vue";

const props = defineProps(["city"]);
const emit = defineEmits(["update-city"]);

function updateCity(newCity) {
  emit("update-city", newCity);
}
</script>
