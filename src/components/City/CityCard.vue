<template>
  <div class="city">
    <IcRoundDelete class="edit" @click.stop="removeLocalidad" />
    <span>{{ weatherData?.name }}</span>
    <TemperatureDisplay :weatherData="weatherData" />
    <WeatherDetails :weatherData="weatherData" />
    <WeatherIcon :weatherData="weatherData" />
    <VideoBackground :weatherData="weatherData" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import IcRoundDelete from "../../assets/icons/IcRoundDelete.vue";
import TemperatureDisplay from "./TemperatureDisplay.vue";
import WeatherDetails from "../Weather/WeatherDetails.vue";
import WeatherIcon from "../Weather/WeatherIcon.vue";
import VideoBackground from "../../utils/VideoBackground.vue";

const props = defineProps({
  weatherData: Object,
  removeLocalidad: Function,
});
</script>

<style scoped>
.city {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  flex-basis: 50%;
  min-height: 250px;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
}
.edit {
  border-radius: 0px 12px 0 0;
  background-color: rgb(141 109 109);
  z-index: 5;
  font-size: 30px;
  position: absolute;
  bottom: 0;
  left: 0px;
}
span {
  z-index: 2;
  text-transform: capitalize;
  display: block;
  font-size: 25px;
  font-weight: 600;
}
</style>
