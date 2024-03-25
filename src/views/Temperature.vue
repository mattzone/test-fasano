<template>
  <v-row no-gutters>
    <v-col v-if="isLargeScreen"></v-col>
    <v-col :class="[isLargeScreen ? 'v-col-6' : 'v-col-12']">
      <TemperatureChartCard />
    </v-col>
    <v-col v-if="isLargeScreen"></v-col>
  </v-row>
</template>

<script setup>
import TemperatureChartCard from '@/components/temperature/TemperatureChartCard.vue';
</script>

<script>
import { useMediaQuery } from '@vueuse/core';

export default {
  data: () => ({
    isLargeScreen: useMediaQuery('(min-width: 1000px)'),
  }),
};
</script>
