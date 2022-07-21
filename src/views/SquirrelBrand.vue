<template>
    <div>
        <div class="container">
            <h3>Bob Moses Trail</h3>
            <h1>Squirrel Brand Park</h1>
            <div>
                <img src="/squirrel-map.svg" alt="" />
            </div>
        </div>
        <div class="experiences">
            <h4>Experiences at this location:</h4>
            <h2>Squirrel Hop</h2>
            <img src="/playground.svg" alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                urna, congue in in aliquam facilisi tristique dignissim cras.
                Mus tortor, massa ipsum non commodo. Faucibus dolor ac bibendum
                placerat convallis mauris. A in proin suspendisse pharetra.
            </p>
            <GameCard class="card-component">
                <template v-slot:game-desc>
                    <div class="flex row">
                        <img class="game-icon" src="/teddy-hop-icon.svg" alt="" />
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                    </div>
                    <div class="flex row games">
                        <div></div>
                        <a href="https://mathtalk.8thwall.app/teddy-onboarding/" class="play flex row">
                            <img src="/triangle.svg" alt="">
                            <span>Play Now</span>
                        </a>
                    </div>

                </template>
            </GameCard>
            <h2>Candy Circles</h2>
            <img src="/playground.svg" alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                urna, congue in in aliquam facilisi tristique dignissim cras.
                Mus tortor, massa ipsum non commodo. Faucibus dolor ac bibendum
                placerat convallis mauris. A in proin suspendisse pharetra.
            </p>
            <GameCard class="card-component">
                <template v-slot:game-desc>
                    <div class="flex row">
                        <img  class="game-icon" src="/circle-candy.svg" alt="" />
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                    </div>
                    <div class="flex row games">
                        <div></div>
                        <a href="https://mathtalk.8thwall.app/kohl-venn/" class="play flex row">
                            <img src="/triangle.svg" alt="">
                            <span>Play Now</span>
                        </a>
                    </div>
                </template>
            </GameCard>
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
import GameCard from '../components/GameCard.vue'
export default {
    components: {
        GameCard,
    },
}
</script>

<style scoped>
.container {
    background: white;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    padding: 1.625rem;
    text-align: center;
    max-width: 100%;
}
h3 {
    color: #3620a5;
    padding: 0 3.75rem;
    font-weight: 700;
    font-size: 1.3125rem;
    line-height: 91.7%;
}
h1 {
    color: #f46234;
    font-size: 1.875rem;
    font-weight: 700;
    padding: 0 3.75rem 1.25rem 3.75rem;
    margin-top: 0.625rem;
    font-size: 2rem;
    line-height: 91.7%;
}
h4 {
    font-weight: 600;
    font-size: 1.3125rem;
    line-height: 123.1%;
    font-family: 'Volte-bold';
}
.experiences {
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 1rem;
}
p {
    font-weight: 500;
    line-height: 144.1%;
    letter-spacing: -0.02em;
    font-size: 1rem;
    padding: 1rem 0;
    font-family: 'Volte';
}
h2 {
    font-size: 2rem;
    line-height: 106.2%;
    text-align: left;
    font-weight: 700;
    color: #3620a5;
    padding: 2.25rem 0 1.75rem 0;
}

.login-btn {
    background: #6a3fd1;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0.2rem 0.3rem #3620a5;
}
.card-text {
    font-weight: 500;
    font-size: 1rem;
    line-height: 108.1%;
}
.games{
    flex-direction: space-between;
    padding: 0;
}
.card-component img {
    width: 5.8125rem;
    height: 3.4375rem;
    margin: 1.8125rem 1.25rem 4.125rem 1.25rem;
}
.login-btn img,
.signup-btn img {
    margin-right: 0.75rem;
    height: 1.5rem;
    width: 1.5rem;
}
.play span{
    color: #3620A5;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 94.1%;
}
.play{
    background-color: #FF960A;
    margin: 0 0 0 12.5rem;
    align-items: center;
    padding: 0;
    height: 2.625rem;
    width:8.875rem;
    justify-content: center;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    flex-direction: flex-end;
}
.play img{
    width: 1rem;
    height: 1rem;
    margin: 0 .5rem 0 0;
}
@media (min-width: 34rem) and (max-width: 59.375rem) {

.card-text {
    font-weight: 500;
    font-size: 2rem;
}

.game-section a{
    display: flex;
    flex-direction: flex-end;
}
.play{
    height: 4.625rem;
    display: flex;
    width:18.875rem;
    padding: 0;
    margin-right: 0;
}
h1{
    font-size: 3.5rem;
}
h3{
    font-size: 2rem;;
}

}
</style>
