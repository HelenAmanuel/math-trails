<template>
  <div class="flex row">
    <a href="https://www.google.com">
        <img  src="src/assets/menu.svg" alt="">
    </a>
    <a href="/">
        <img src="src/assets/logo.svg" alt="">
    </a>
    <a href="/about">
        <img src="src/assets/user.svg" alt="">
    </a>
  </div>
</template>

<script setup>

</script>

<style>

  .flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
  }

</style>