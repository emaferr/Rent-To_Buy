<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-interval="false"
    data-ride="carousel"
    data-pause="hover"
  >
    <div class="carousel-inner">
      <div v-for="slide in slides" :key="slide.id" :class="{active : slide.id == 1}" class="carousel-item">
        <div class="slide">
          <h2>{{slide.question}}</h2>
          <p>
            {{slide.p1}}
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <b-icon-arrow-left-circle-fill />
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <b-icon-arrow-right-circle-fill />
    </button>
  </div>
</template>

<script>
import SlideServices from "@/services/SlideServices.js";

export default {
  data() {
    return {
      slides: null,
    };
  },

  created() {
    SlideServices.getSlides()
      .then((response) => {
        this.slides = response.data;
        console.log(this.slides);
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>


<style scoped >
button,
button:focus,
button:hover {
  font-size: 3rem;
  color: forestgreen;
}
.slide{
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>



