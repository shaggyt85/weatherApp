<template>
  <div class="right">
    <IcTwotoneSync @click="handleReload" />
    <IcSharpPlus @click="handleOpenModal" />
  </div>
</template>

<script setup>
import IcSharpPlus from "../assets/icons/IcSharpPlus";
import IcTwotoneSync from "../assets/icons/IcTwotoneSync";
import { defineEmits } from "vue";

const emit = defineEmits(["open-modal", "reload"]);

function handleOpenModal() {
  emit("open-modal");
}

function handleReload() {
  emit("reload");
}
</script>

<style scoped>
.right {
  display: flex;
  font-size: 20px;
}
.right > * {
  margin-left: 16px;
}
.right > *:last-child {
  margin-right: 0;
}
</style>
