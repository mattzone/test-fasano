<!--
  Index
  Pagina iniziale del sito
-->
<template>
  <v-fade-transition appear>
    <v-container class="fill-height d-flex align-center">
      <v-row align="center" no-gutters>
        <v-responsive>
          <div class="text-center">
            <h1
              :class="[isLargeScreen ? 'text-h2' : 'text-body']"
              class="font-weight-bold text-uppercase text-secondary"
            >
              Test Matteo Fasano
            </h1>
            <p class="text-body-1 font-weight-bold text-secondary">Interactive Data Visualization</p>
          </div>

          <div class="py-4 elevation-0"></div>

          <!-- mostra tutte le sezioni del sito -->
          <v-row>
            <!-- TemperatureChartCard -->
            <v-hover v-slot:default="{ isHovering, props }">
              <v-col :class="[isLargeScreen ? 'v-col-6' : 'v-col-12']">
                <v-card
                  v-bind="props"
                  append-icon="mdi-open-in-new"
                  class="py-4 elevation-0"
                  to="/temperature"
                  prepend-icon="mdi-thermometer"
                  rel="noopener noreferrer"
                  rounded="lg"
                  subtitle="Visaluzza le temperature in italia"
                  title="Temperature"
                  :color="isHovering ? 'primary' : undefined"
                >
                </v-card>
              </v-col>
            </v-hover>
            <!-- /TemperatureChartCard -->

            <!-- UmiditaChartCard -->
            <v-hover v-slot:default="{ isHovering, props }">
              <v-col :class="[isLargeScreen ? 'v-col-6' : 'v-col-12']">
                <v-card
                  append-icon="mdi-open-in-new"
                  class="py-4 elevation-0"
                  to="/temperature"
                  prepend-icon="mdi-water-percent"
                  rel="noopener noreferrer"
                  rounded="lg"
                  subtitle="Visaluzza le umidita in italia"
                  title="Umidita"
                  v-bind="props"
                  :color="isHovering ? 'primary' : undefined"
                >
                </v-card>
              </v-col>
            </v-hover>
            <!-- /UmiditaChartCard -->

            <!-- PressioneChartCard -->
            <v-hover v-slot:default="{ isHovering, props }">
              <v-col :class="[isLargeScreen ? 'v-col-6' : 'v-col-12']">
                <v-card
                  append-icon="mdi-open-in-new"
                  class="py-4 elevation-0"
                  to="/pressione"
                  prepend-icon="mdi-water-percent"
                  rel="noopener noreferrer"
                  rounded="lg"
                  subtitle="Visaluzza le pressioni atmosferiche in italia"
                  title="Pressione"
                  v-bind="props"
                  :color="isHovering ? 'primary' : undefined"
                >
                </v-card>
              </v-col>
            </v-hover>
            <!-- PressioneChartCard -->

            <!-- VentoChartCard -->
            <v-hover v-slot:default="{ isHovering, props }">
              <v-col :class="[isLargeScreen ? 'v-col-6' : 'v-col-12']">
                <v-card
                  append-icon="mdi-open-in-new"
                  class="py-4 elevation-0"
                  to="/vento"
                  prepend-icon="mdi-wind-power"
                  rel="noopener noreferrer"
                  rounded="lg"
                  subtitle="Visaluzza la velocità del vento in italia"
                  title="Vento"
                  v-bind="props"
                  :color="isHovering ? 'primary' : undefined"
                >
                </v-card>
              </v-col>
            </v-hover>
            <!-- /VentoChartCard -->
          </v-row>
        </v-responsive>
      </v-row>
    </v-container>
  </v-fade-transition>
</template>

<script>
import { useMediaQuery } from '@vueuse/core';

export default {
  name: 'IndexItem',
  data: () => ({
    isLargeScreen: useMediaQuery('(min-width: 670px)'),
  }),
};
</script>
