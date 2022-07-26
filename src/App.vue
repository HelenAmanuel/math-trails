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
@font-face {
    font-family: 'Volte';
    src: url('/Volte-Light.eot');
    src: local('Volte Light'), local('Volte-Light'),
        url('/Volte-Light.eot?#iefix') format('embedded-opentype'),
        url('/Volte-Light.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Volte-bold';
    src: url('/Volte-Bold.eot');
    src: local('Volte Bold'), local('Volte-Bold'),
        url('/Volte-Bold.eot?#iefix') format('embedded-opentype'),
        url('/Volte-Bold.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}
#app {
  background: #13c6d6;
  background-image: url(/clouds.svg);
  background-repeat: no-repeat;
}

img{
  width:100%;
}
body{
  font-family: "Volte-bold";
  font-weight: 700;
}
</style>
