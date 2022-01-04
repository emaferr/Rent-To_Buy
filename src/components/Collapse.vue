<template>
  <div class="container">
    <h1>{{soggeto.name}}</h1>
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
          {{ soggetto.vantaggi }}
          <!-- Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni animi eaque similique, recusandae alias distinctio odit
          voluptates provident, accusamus praesentium eveniet labore. Veniam
          aliquid delectus magnam et minus, expedita blanditiis ducimus enim
          voluptatum totam, perferendis molestiae minima excepturi sit in! -->
        </div>
      </div>
      <div class="collapse my-3" id="collapseExample2">
        <div class="card card-body">
          {{ soggetto.svantaggi }}
          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste
          fugiat illo dicta ducimus id debitis beatae ex voluptatibus fugit! -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    soggetto: {
      type: Object,
      required: true,
    },
  },
};
</script>