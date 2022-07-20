<template>
  <div class="container">
    <h1>Bob Moses Trail</h1>
    <div>
        <img src="/moses-trail-map.svg" alt="">
    </div>
    <img class="sponsor" src="/kohl-museum.svg" alt="">
    <h2>About this trail:</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus urna, congue in in aliquam facilisi tristique dignissim cras. Mus tortor, massa ipsum non commodo. Faucibus dolor ac bibendum placerat convallis mauris. A in proin suspendisse pharetra.</p>    
    <div class="login-btn">
        <img  src="/union-arrow.svg" alt="">
        <router-link to="/moses-trail/squirrel-brand">
        <button>Get Started</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

const router = useRouter()



</script>

<style scoped>
.container{
    background: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1.063rem;
    text-align: center;
}
h1{
    color: #F46234;
    font-size: 1.875rem;
    font-weight: 700;
    padding: 0 3.75rem 1.25rem 3.75rem;
}

.sponsor{
    padding:1.875rem 8.125rem;
}

p{
    font-weight: normal;
    letter-spacing: -0.02em;
    font-size: 1rem;
    padding: 1rem 0;
}

.login-btn{
  background: #6A3FD1;
  display: flex;
  flex-direction: row;
  box-shadow: 0 .2rem .3rem #3620A5;
}

.login-btn img, .signup-btn img {
  margin-right: .75rem;
  height: 1.5rem;
  width: 1.5rem;
}

</style>