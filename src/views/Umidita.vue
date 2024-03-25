<template>
  <v-row no-gutters>
    <v-col v-if="isLargeScreen"></v-col>
    <v-col :class="[isLargeScreen ? 'v-col-6' : 'v-col-12']">
      <UmiditaChartCard />
    </v-col>
    <v-col v-if="isLargeScreen"></v-col>
  </v-row>
</template>

<script setup>
import UmiditaChartCard from '@/components/umidita/UmiditaChartCard.vue';
</script>

<script>
import { useMediaQuery } from '@vueuse/core';

export default {
  data: () => ({
    isLargeScreen: useMediaQuery('(min-width: 1000px)'),
  }),
};
</script>
