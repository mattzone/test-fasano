<template>
  <v-row no-gutters>
    <v-col v-if="isLargeScreen"></v-col>
    <v-col :class="[isLargeScreen ? 'v-col-6' : 'v-col-12']">
      <VentoChartCard />
    </v-col>
    <v-col v-if="isLargeScreen"></v-col>
  </v-row>
</template>

<script setup>
import VentoChartCard from '@/components/vento/VentoChartCard.vue';
</script>

<script>
import { useMediaQuery } from '@vueuse/core';

export default {
  data: () => ({
    isLargeScreen: useMediaQuery('(min-width: 1000px)'),
  }),
};
</script>
