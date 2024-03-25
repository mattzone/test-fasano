# Test Matteo Fasano

Test per la posizione di Front end presso Across

## 📃 Richiesta del test

API to use [https://openweathermap.org/api](https://openweathermap.org/api)

Creare una dashboard utilizzando una libreria a scelta JS per la creazione di grafici (e.g., D3.js,
Chart.js).

L&#39;applicativo dovra&#39; fetchare i dati dalle api indicate e permettere all&#39;utente di visualizzare, interagire
e filtrare i dati visualizzati.

I dati dovranno essere interrogati dall&#39;utente tramite un&#39;apposita barra di ricerca e relativi filtri
impostabili.

**Key points**:

Implementazione di varie tipologie di grafici (e.g., bar, line, pie) e permettere l&#39;interazione dell&#39;utente
(ad esempio la possibile tramite l&#39;hover di avere informazioni dettagliate)

Visualizzazion responsive sulle varie tipologie di device.

Includere animazioni o transizioni per migliorare l&#39;esperienza utente.

Produrre unit test a piacere

Produrre documentazione

Il progetto dovra&#39; essere dockerizzato e utilizzabile tramite docker

Test da sviluppare utilizzando VueJs3 o Nuxt.

Al suo termine il candidato dovrà condividere il repo github o gitlab.

## ✨ Il sito

Il sito creato permette di ricevere varie informazioni riguardo il meteo nelle provincie di italia racchiuse per regione. Questi valori vengono mostrati sotto forma di grafico e l'utente potrà selezionare la regione per cui mostrare i valori desiderati.

Sono presenti 5 pagine e sulla parte sinistra è presente un menu per poter navigare nel sito.

| Pagina                | Descrizione                               |
| --------------------- | ----------------------------------------- |
| Home                  | Contiene i link alle altri parti del sito |
| Temperatura           | Temperatura attuale in gradi celsius      |
| Umidità               | Percentuale di umidità presente           |
| Pressione atmosferica | Pressione atmosferica attuale             |
| Vento                 | Velocità del vento in m/s                 |

## 💻 Tecnologie utilizzate

Il sito è stato sviluppato utilizzando [Vuejs](https://vuejs.org/) insieme al framework di componenti di Material Design [Vuetify](https://vuetifyjs.com/en/).

Per i grafici è stata utilizzata la libreria [vue-chartjs](https://vue-chartjs.org/)

## 💿 Install

Per installare e utilizzare il progetto in locale si può utilizzare npm o docker + nginx
| NPM | |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| `npm install` | installla tutte le dipendenze necessarie |
| `npm run dev` | esegue il deploy in locale e il sito sarà disponibile al link [http://localhost:3001/](http://localhost:3001/) |

| Docker + nginx      |                                                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `docker-compose up` | crea l'immagine e i container negessari e esegue l'applicativo al link [http://localhost:8080/](http://localhost:8080/) |
