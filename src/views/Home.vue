<template>
  <div class="home">
    <h1>This is a home page</h1>
    <h2>Visualizations</h2>
    <v-container fluid>
      <v-row align="start" justify="start" style="height: 300px;">
        <v-col cols="3" v-for="card in getVizList()" :key="card.path">
          <v-card :to="'/viz/'.concat(card.path)" width="300px" class="ma-3" outlined tile>

          <v-img
      :src="require(`../assets/${card.path}.png`)"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="300"
      max-height="200"
    >
      
    </v-img>

    <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>

          <v-card-title v-text="card.name"></v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import data from "../data";

export default {
  name: "Home",

  methods: {
    getVizList: function () {
      return data.VIZ_LIST;
    },
  },
};
</script>
