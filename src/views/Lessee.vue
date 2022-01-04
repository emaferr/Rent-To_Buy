<template>
  <Collapse v-if="soggetto" :key="soggetto.name" :soggetto="soggetto" />
</template>


<script>
import Collapse from "@/components/Collapse.vue";
import SlideServices from "@/services/SlideServices.js";

export default {
  name: "Lessor",
  components: {
    Collapse,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      soggetto: null,
    };
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    SlideServices.getLessee()
      .then((response) => {
        this.soggetto = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>