<template>
  <Collapse :soggetto="soggetto" />
</template>


<script>
import Collapse from "@/components/Collapse.vue";
import SlideServices from "@/services/SlideServices.js";

export default {
  name: "Home",
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
    SlideServices.getLessor()
      .then((response) => {
        this.soggetto = response.data;
        console.log(this.soggetto);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>