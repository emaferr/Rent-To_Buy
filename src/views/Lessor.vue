<template>
  <div class="container">
    <h1>Venditore</h1>
    <div>
      <p>
        <button
          class="btn-lessor mx-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Vantaggi
        </button>
        <button
          class="btn-lessor mx-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample2"
          aria-expanded="false"
          aria-controls="collapseExample2"
        >
          Svantaggi
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni animi eaque similique, recusandae alias distinctio odit
          voluptates provident, accusamus praesentium eveniet labore. Veniam
          aliquid delectus magnam et minus, expedita blanditiis ducimus enim
          voluptatum totam, perferendis molestiae minima excepturi sit in!
        </div>
      </div>
      <div class="collapse my-3" id="collapseExample2">
        <div class="card card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste
          fugiat illo dicta ducimus id debitis beatae ex voluptatibus fugit!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-lessor {
  background-color: #42b983;
  border: 1px solid grey;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  opacity: 0.8;
}
.btn-lessor:hover {
  opacity: 1;
}
.btn-lessor:active {
  transform: scale(0.9);
}
</style>