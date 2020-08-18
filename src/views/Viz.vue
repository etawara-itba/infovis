<template>
  <div>
    <div v-if="id !== undefined && id!== null">
      <h1>{{ id.name }}</h1>
      <div ref="tableau"></div>
    </div>

    <div v-else>
      <h1>{{ path }} couldn't be found</h1>
      <error404/>
    </div>
    
    
    
    
  </div>
</template>

<script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
<script>

import error404 from '../components/404.vue'

export default {
  name: "Viz",

  methods: {
    initViz: function () {
      let viz = new tableau.Viz(this.$refs.tableau, this.id.url, this.options);
    },
  },

  components: {
    error404
  },

  mounted: function() {

    this.initViz();
  },

  data() {
    return {

      vizList: [
        {
            name:   'InfoVis 2020/W33: The state of the Digital Nation',
            path:   '2020W33',
            url:    'https://public.tableau.com/views/InfoVis2020W33ThestateoftheDigitalNation/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link'
        },
        {
            name:   'InfoVis 2020/W32: Benefits of Remote Work',
            path:   '2020W32',
            url:    'https://public.tableau.com/views/InfoVis2020W32BenefitsofRemoteWork/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link'
        }
      ],

      options: {
        hideTabs: true,
        width: "1200px",
        height: "800px",
      },
    };
  },

  computed: {
    path: function() {
      return this.$route.params.vizId;
    },

    id: function() {
      return this.vizList.find(item => item.path == this.path);
    }

  }
}
</script>