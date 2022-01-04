<template>
  <div class="container">
    <h1>{{soggetto.name}}</h1>
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
        </div>
      </div>
      <div class="collapse my-3" id="collapseExample2">
        <div class="card card-body">
          {{ soggetto.svantaggi }}
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