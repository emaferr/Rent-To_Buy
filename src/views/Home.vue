<template>
  <div class="home container">
    <h1>Rent to Buy</h1>
    <Presentation />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Presentation from "@/components/Presentation.vue";

@Options({
  components: {
    Presentation,
  },
})
export default class Home extends Vue {}
</script>

<style scoped></style>
