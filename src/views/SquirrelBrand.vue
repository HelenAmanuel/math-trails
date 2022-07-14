<template>
 <div>
    <div class="container">
    <h3>Bob Moses Trail</h3>
    <h1>Squirrel Brand Park</h1>
    <div>
        <img src="/squirrel-map.svg" alt="">
    </div>
    </div>
    <div class="experiences">
        <h4>Experiences at this location:</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus urna, congue in in aliquam facilisi tristique dignissim cras. Mus tortor, massa ipsum non commodo. Faucibus dolor ac bibendum placerat convallis mauris. A in proin suspendisse pharetra.</p>    
        <h2>Squirrel Hop</h2>
        <img src="/playground.svg" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus urna, congue in in aliquam facilisi tristique dignissim cras. Mus tortor, massa ipsum non commodo. Faucibus dolor ac bibendum placerat convallis mauris. A in proin suspendisse pharetra.</p>    
        <img src="/teddy-hop.svg" alt="">
        <h2>Candy Circles</h2>
        <img src="/playground.svg" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus urna, congue in in aliquam facilisi tristique dignissim cras. Mus tortor, massa ipsum non commodo. Faucibus dolor ac bibendum placerat convallis mauris. A in proin suspendisse pharetra.</p>    
        <img src="/circle-puzzle.svg" alt="">
    </div>



    <!-- <div>
        <div>
         <p>Explore the AR game</p>
         <img src="" alt=""> 
        </div>
        <div>
         <img src="" alt="">
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
        </div>
        <div>
            <img src="" alt="">
            <span>Play Now</span>
        </div>
    </div>

     <h2>Candy Circles</h2>
    <img src="" alt="">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus urna, congue in in aliquam facilisi tristique dignissim cras. Mus tortor, massa ipsum non commodo. Faucibus dolor ac bibendum placerat convallis mauris. A in proin suspendisse pharetra.</p>    
    <div>
        <div>
         <p>Explore the AR game</p>
         <img src="" alt=""> 
        </div>
        <div>
         <img src="" alt="">
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
        </div>
        <div>
            <img src="" alt="">
            <span>Play Now</span>
        </div>
    </div> -->
 </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    background: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 1.625rem;
    text-align: center;
}
h3{
   color: #3620A5;
   padding: 0 3.75rem;
}
h1{
    color: #F46234;
    font-size: 1.875rem;
    font-weight: 700;
    padding: 0 3.75rem 1.25rem 3.75rem;
}
.experiences{
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 1rem;
}
p{
    font-weight: normal;
    letter-spacing: -0.02em;
    font-size: 1rem;
    padding: 1rem 0;
}
h2{
    font-size: 2rem;
    text-align: left;
    font-weight: 700;
    color:#3620A5;
    padding: 2.25rem 0 1.75rem 0;
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