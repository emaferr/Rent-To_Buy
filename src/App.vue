<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Rent to Buy</router-link> |
    <router-link :to="{ name: 'Lessor' }">Venditore</router-link> |
    <router-link :to="{ name: 'Lessee' }">Acquirente</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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
