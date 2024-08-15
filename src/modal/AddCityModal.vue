<template>
  <div class="modal" v-if="isVisible" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <label>Agregar Ciudad</label>
      <CityInput @add-city="addCity" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import CityInput from "../utils/CityInput.vue";
const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["close", "add-city"]);

// Cerrar el modal
function closeModal() {
  emit("close");
}

// Agregar ciudad
function addCity(city) {
  emit("add-city", city);
  closeModal(); // Cerrar el modal después de agregar la ciudad
}
</script>

<style scoped>
.modal {
  z-index: 80;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background-color: #31363d;
  padding: 20px;
  max-width: 500px;
  border-radius: 8px;
  width: 80%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.close {
  color: #fff;
  cursor: pointer;
  float: right;
  font-size: 20px;
}
label {
  color: #fff;
}
</style>
