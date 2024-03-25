/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default new createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          secondary: '#D88F2E',
          primary: '#F3E4C2',
        },
      },
      dark: {
        colors: {
          primary: '#27403D',
          secondary: '#48725C',
        },
      },
    },
  },
});
