<template>
  <header class="container add-city">
    <nav>
      <span>Agregar Ciudad</span>
      <IconButtons @open-modal="openModal" @reload="reloadApp" />
    </nav>
    <AddCityModal
      :isVisible="isModalVisible"
      @close="closeModal"
      @add-city="handleAddCity"
    />
  </header>
</template>

<script setup>
import { ref } from "vue";
import IconButtons from "../../utils/IconButtons.vue";
import AddCityModal from "../../modal/AddCityModal.vue";

const isModalVisible = ref(false);
const emit = defineEmits(["add-city"]);

function openModal() {
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}

function handleAddCity(city) {
  emit("add-city", city);
}

function reloadApp() {
  location.reload();
}
</script>

<style scoped>
header {
  z-index: 10;
  position: fixed;
  max-width: 1440px;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.add-city {
  background-color: #313640;
}
nav {
  display: flex;
  color: #fff;
  padding: 30px 0;
  justify-content: space-between;
}
</style>
