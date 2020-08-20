<template>
  <div>
    <div v-if="id() !== undefined && id()!== null">
      <div>
        <h1>{{ id().title }}</h1>
      </div>
      <div ref="tableau" :key="id().path"></div>
    </div>

    <div v-else>
      <h1>{{ path }} couldn't be found</h1>
      <error404 />
    </div>
  </div>
</template>

<script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
<script>
import error404 from "../components/404.vue";
import data from "../data";

export default {
  name: "Viz",

  methods: {
    getVizList: function () {
      return data.VIZ_LIST;
    },

    id: function () {
      return this.getVizList().find((item) => item.path == this.path);
    },

    initViz: function () {
      let viz = new tableau.Viz(
        this.$refs.tableau,
        this.id().url,
        this.options
      );
    },
  },

  components: {
    error404,
  },

  mounted: function () {
    this.initViz();
  },

  updated: function () {
    this.initViz();
  },

  data() {
    return {
      options: {
        hideTabs: true,
        width: "100%",
        // TODO - modify the size of the containing div, instead of using vh here
        height: "85vh",
      },
    };
  },

  computed: {
    path: function () {
      return this.$route.params.vizId;
    },
  },
};
</script>