<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-interval="false"
    data-ride="carousel"
    data-pause="hover"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="slide">
          <h2>Che cosa è il Rent to buy?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            laboriosam.
          </p>
        </div>
      </div>
      <!-- <div class="carousel-item">
        <h1>Test</h1>
      </div> -->
      <!-- <div class="carousel-item">
        <h1>Test</h1>
      </div> -->
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
    <!-- <button>
      <b-icon-arrow-right-circle-fill />
    </button> -->
  </div>
</template>

<script>
export default {};
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



