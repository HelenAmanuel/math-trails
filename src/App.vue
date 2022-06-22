<script setup>
import Nav from './components/Nav.vue'

</script>

<template>
  <div id="app">
     <Nav />
     <router-view/>
     <img src="./assets/skyline.svg" alt="">
  </div>
</template>

<style>
#app {
  font-family: Volte, sans-serif;
  background: #13c6d6;
  background-image: url(src/assets/clouds.svg);
  background-repeat: no-repeat;
}

img{
  width:100%;
}
</style>
