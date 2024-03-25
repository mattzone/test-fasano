<!-- 
  UmiditaChartCard
  In questa pagine viene mostrata tramite un grafico l'umidtà delle province italiane.
  L'utente può selezionare la regione desiderata
 -->
<template>
  <v-card class="h-100 elevation-0 mt-5" color="transparent">
    <v-fade-transition appear>
      <v-card-title>
        <v-icon start>
          <svg-icon type="mdi" :path="mdiWaterPercent"></svg-icon>
        </v-icon>
        Umidità province regioni italiane

        <!-- combobox per la ricerca delle regioni -->
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
        <!-- /combobox -->
      </v-card-title>
    </v-fade-transition>

    <v-fade-transition appear>
      <v-card-text class="w-100">
        <!-- grafico di tipo PolarArea -->
        <PolarArea v-if="loaded && chartData" :data="chartData" :options="chartOptions" />

        <!-- div da mostrare prima della selezione -->
        <div v-if="!loaded" class="text-center pt-5">
          <h1 class="text-body font-weight-bold text-secondary">Selezionare una regione</h1>
          <p class="text-caption mt-5 font-weight-bold text-secondary">
            Per poter visualizzare le percentuali di umidità selezionare la regione desiderata
          </p>
        </div>
        <!-- /div -->
      </v-card-text>
    </v-fade-transition>
  </v-card>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWaterPercent } from '@mdi/js';
import provinceList from '@/assets/json/elenco_province.json';
</script>

<script>
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'vue-chartjs';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default {
  components: { PolarArea },
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
    randomColor() {
      const r = () => Math.floor(256 * Math.random());

      return `rgb(${r()}, ${r()}, ${r()}, .5)`;
    },
    async onSearch() {
      let provinceSelected = provinceList[this.selectedRegion];

      // Array di chiamate asincrone
      let promises = provinceSelected.map(async provincia => {
        // Recupera i dettagli della provincia ( lat e lon )
        let provinciaDetails = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${provincia}&limit=5&appid=${this.apiKey}`,
        );
        let provinciaDetailsData = await provinciaDetails.json();

        // Recupera il meteo della provincia
        let provinciaWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${provinciaDetailsData[0].lat}&lon=${provinciaDetailsData[0].lon}&appid=${this.apiKey}=metric`,
        );
        let provinciaWeatherData = await provinciaWeather.json();

        return {
          label: provincia,
          umidity: provinciaWeatherData.main.humidity, // Restituisce l'umidità
          color: this.randomColor(),
        };
      });

      // Aspetta che tutte le chiamate vengano completate
      let results = await Promise.all(promises);

      // Estrae i dati e le labels
      let labels = results.map(result => result.label);
      let data = results.map(result => result.umidity);
      let color = results.map(result => result.color);

      // Aggiorna chartData
      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Umidità',
            backgroundColor: color,
            data: data,
          },
        ],
      };

      this.loaded = true;
    },
  },
};
</script>
