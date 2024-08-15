<template>
  <div>
    <input v-model="newCity" placeholder="Nombre de la ciudad" />
    <button @click="handleAddCity">Agregar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-city"]);
const newCity = ref("");

// Manejar la adición de la ciudad
function handleAddCity() {
  const trimmedCity = newCity.value.trim(); // Eliminar espacios en blanco
  if (trimmedCity) {
    emit("add-city", trimmedCity);
    resetNewCity(); // Limpiar el campo
  }
}

// Función para reiniciar el campo de entrada
function resetNewCity() {
  newCity.value = "";
}
</script>

<style scoped>
input {
  color: #fff;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  padding: 6px 4px;
  margin: 10px 0 20px;
  width: 100%;
}
input:focus {
  outline: none;
}
button {
  background-color: #232325;
  color: #fff;
  padding: 6px 20px;
  border-radius: 8px;
  border: none;
}
</style>
