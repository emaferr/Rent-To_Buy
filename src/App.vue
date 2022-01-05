<template>
  <div id="nav">
    <img
      width="70"
      class="img-fluid d-block mx-auto mb-4"
      src="./assets/WeCanBuy.png"
      alt=""
    />
    <router-link :to="{ name: 'Home' }">Rent to Buy</router-link>
    <router-link class="mx-4" :to="{ name: 'Lessor' }">Venditore</router-link>
    <router-link :to="{ name: 'Lessee' }">Acquirente</router-link>
  </div>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #03989e;
  font-size: 1.2rem;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #5ce1e6;
}

.btn-lessor {
  background-color: #03989e;
  border: 1px solid #5ce1e6;
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

h1, h2{
  font-weight: bold !important;
  color: #006669 !important;
}
</style>

