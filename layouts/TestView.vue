<template>
  <v-layout>
    <v-navigation-drawer
      style="position: fixed; top: 0; left: 0; overflow-y: scroll"
      absolute
      v-model="activeDrawer"
      color="primary"
      opacity="0.6"
      class="elevation-3 border-0"
    >
      <v-list>
        <v-list-item @click="toggleTheme">
          <v-list-item-title>
            <v-icon start>
              <svg-icon type="mdi" :path="mdiThemeLightDark"></svg-icon>
            </v-icon>
            Theme mode
          </v-list-item-title>
        </v-list-item>

        <v-list-item to="/home">
          <template v-slot:prepend>
            <v-icon start>
              <svg-icon type="mdi" :path="mdiHome"></svg-icon>
            </v-icon>
          </template>
          Home
        </v-list-item>

        <v-list-item to="/temperature">
          <template v-slot:prepend>
            <v-icon start>
              <svg-icon type="mdi" :path="mdiThermometer"></svg-icon>
            </v-icon>
          </template>
          Temperature
        </v-list-item>

        <v-list-item to="/umidita">
          <template v-slot:prepend>
            <v-icon start>
              <svg-icon type="mdi" :path="mdiWaterPercent"></svg-icon>
            </v-icon>
          </template>
          Umidità
        </v-list-item>

        <v-list-item to="/pressione">
          <template v-slot:prepend>
            <v-icon start>
              <svg-icon type="mdi" :path="mdiArrowCollapseAll"></svg-icon>
            </v-icon>
          </template>
          Pressione atmosferica
        </v-list-item>

        <v-list-item to="/vento">
          <template v-slot:prepend>
            <v-icon start>
              <svg-icon type="mdi" :path="mdiWindPower"></svg-icon>
            </v-icon>
          </template>
          Vento
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar style="position: fixed; overflow-y: scroll" class="elevation-0" color="transparent">
      <v-app-bar-nav-icon class="me-2" @click="activeDrawer = !activeDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiThermometer,
  mdiWaterPercent,
  mdiHome,
  mdiArrowCollapseAll,
  mdiWindPower,
  mdiThemeLightDark,
} from '@mdi/js';
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const activeDrawer = ref(true);
const theme = useTheme();

const toggleTheme = () => (theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark');
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap');
* {
  font-family: 'Rubik', sans-serif;
}

html {
  overflow-y: none;
}

/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}
</style>
