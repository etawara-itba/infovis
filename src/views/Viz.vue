<template>
  <div>
    <div v-if="id() !== undefined && id()!== null">
      <h1>{{ id().name }}</h1>
      <div ref="tableau"></div>
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
import vizList from "../vizList";

export default {
  name: "Viz",

  methods: {
    getVizList: function () {
      return vizList.VIZ_LIST;
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

  data() {
    return {
      options: {
        hideTabs: true,
        width: "1200px",
        height: "800px",
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