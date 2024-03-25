<template>
  <v-card class="h-100 elevation-0 mt-5" color="transparent">
    <v-fade-transition appear>
      <v-card-title>
        <v-icon start>
          <svg-icon type="mdi" :path="mdiArrowCollapseAll"></svg-icon>
        </v-icon>
        Pressione atmosferica province regioni italiane

        <v-row align="center" class="my-5">
          <v-combobox
            v-model="selectedRegion"
            :items="regions"
            label="Seleziona una regione"
            class="mt-5 mr-5 ml-5"
          ></v-combobox>
          <v-btn
            class="px-10 elevation-0 text-secondary"
            color="primary"
            @click="onSearch"
            icon="mdi-magnify"
            rounded="lg"
            size="large"
            :disabled="!selectedRegion"
          >
          </v-btn>
        </v-row>
      </v-card-title>
    </v-fade-transition>

    <v-fade-transition appear>
      <v-card-text class="w-100 h-75">
        <Line v-if="loaded && chartData" :data="chartData" :options="chartOptions" />
        <div v-if="!loaded" class="text-center pt-5">
          <h1 class="text-body font-weight-bold text-secondary">Selezionare una regione</h1>
          <p class="text-caption mt-5 font-weight-bold text-secondary">
            Per poter visualizzare le pressioni atmosferiche selezionare la regione desiderata
          </p>
        </div>
      </v-card-text>
    </v-fade-transition>
  </v-card>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowCollapseAll } from '@mdi/js';
import provinceList from '@/assets/json/elenco_province.json';
</script>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
  components: { Line },
  data: () => ({
    loaded: false,
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    chartData: {},
    selectedRegion: null,
    regions: Object.keys(provinceList),
    apiKey: '4709d26ec89e5922da5bd77b350e3dc8&units',
  }),
  methods: {
    async onSearch() {
      let provinceSelected = provinceList[this.selectedRegion];

      // Array di promesse per le chiamate asincrone
      let promises = provinceSelected.map(async provincia => {
        let provinciaDetails = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${provincia}&limit=5&appid=${this.apiKey}`,
        );
        let provinciaDetailsData = await provinciaDetails.json();

        let provinciaWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${provinciaDetailsData[0].lat}&lon=${provinciaDetailsData[0].lon}&appid=${this.apiKey}=metric`,
        );
        let provinciaWeatherData = await provinciaWeather.json();

        return {
          label: provincia,
          umidity: provinciaWeatherData.main.pressure,
        };
      });

      // Aspetta che tutte le promesse vengano risolte
      let results = await Promise.all(promises);

      // Estrae i dati e le labels
      let labels = results.map(result => result.label);
      let data = results.map(result => result.umidity);

      // Aggiorna chartData
      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Pressione',
            backgroundColor: '#f87979',
            data: data,
          },
        ],
      };

      this.loaded = true;
    },
  },
};
</script>
