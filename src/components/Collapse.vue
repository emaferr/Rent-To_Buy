<template>
  <div class="container">
    <h1>{{soggetto.name}}</h1>
    <img width="300" class="img-fluid my-5" :src="require( `../assets/${soggetto.img}`)" alt="">
    <div>
      <p>
        <button
          class="btn-lessor me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Vantaggi
        </button>
        <button
          class="btn-lessor ms-3"
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
        <div class="card card-body shadow-sm">
          <ul>
            <li v-for="vantaggio in soggetto.vantaggi" :key="vantaggio">
              {{ vantaggio }}
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse my-3" id="collapseExample2">
        <div class="card card-body shadow-sm">
          <ul>
            <li v-for="svantaggio in soggetto.svantaggi" :key="svantaggio">
              {{ svantaggio }}
            </li>
          </ul>
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

<style scoped>
ul{
  list-style: circle;
  line-height: 3rem;
  font-size: 1.3rem;
  color: #006669;
  text-align: start;
}
.card{
  border-radius: 1rem !important;
}

.container{
  max-height: 100%;
  min-height: 750px;
}
</style>