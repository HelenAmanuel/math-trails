<script setup>
import Nav from './components/Nav.vue'

</script>

<template>
  <div id="app">
     <Nav />
     <router-view/>
     <img src="/skyline.svg" alt="">
  </div>
</template>

<style>
#app {
  background: #13c6d6;
  background-image: url(/clouds.svg);
  background-repeat: no-repeat;
}

img{
  width:100%;
}
body{
  font-family: Volte, sans-serif;
  font-weight: 700;
}
</style>
