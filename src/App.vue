<template>
  <v-app>
    <v-app-bar app clipped-left color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">infovis</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped :permanent="true" :expand-on-hover="!drawer">
      <v-list dense nav>
        <v-list-item link @click="goTo('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="goTo('/about')">
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-group v-model="vizTab" prepend-icon="mdi-drawing-box" no-action>
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Viz</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item
            v-for="child in getVizList()"
            :key="child.path"
            link
            @click="goTo('/viz/'.concat(child.path))"
          >
            <v-list-item-content>
              <v-list-item-title>{{ child.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import data from "./data";

export default {
  name: "App",

  data: () => ({
    drawer: null,

    viz: "viz",
    vizTab: true,
  }),

  methods: {
    goTo: function (to) {
      this.$router.push(to).catch((err) => {
        // portion of code 'borrowed' from:
        // https://stackoverflow.com/questions/62462276/how-to-solve-avoided-redundant-navigation-to-current-location-error-in-vue
        // Ignore the vue router err regarding  navigating to the page they are already on.
        if (
          err.name !== "NavigationDuplicated" &&
          !err.message.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          // But print any other errors to the console
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
    },

    getIconDir: function (b) {
      return b ? "mdi-chevron-up" : "mdi-chevron-down";
    },

    getVizList: function () {
      return data.VIZ_LIST;
    },
  },
};
</script>
