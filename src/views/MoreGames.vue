<template>
    <div class="main">
        <p class="more-games">More Games:</p>
        <div class="grey section">
            <div class="card">
                <img src="/teddy-hop-icon.svg" alt="" />
                <p>
Players control the size of a teddy bear's hops as they guide it back and forth along a number line. Can they determine how far to hop to collect prizes without being swallowed by a traveling hole?
                </p>
            </div>
            <div class="bottom-section">
                <a
                    href="https://mathtalk.8thwall.app/teddy-onboarding/"
                    class="play-card"
                >
                    <img src="/triangle.svg" alt="" />
                    <span>Play Now</span>
                </a>
            </div>
        </div>
        <div class="white section">
            <div class="card">
                <img src="/circle-candy.svg" alt="" />
                <p>
                    MathTrail-blazers will delight in Candy Circles, which
                    displays circles of varying sizes and designs! This
                    installation lends itself to rich conversations around
                    shapes, describing attributes, and critical thinking.
                </p>
            </div>
            <div class="bottom-section">
                <a
                    href="https://mathtalk.8thwall.app/kohl-venn/"
                    class="play-card"
                >
                    <img src="/triangle.svg" alt="" />
                    <span>Play Now</span>
                </a>
            </div>
        </div>
        <div class="grey section">
            <div class="card">
                <img src="/teddy-roundup.svg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Mus tortor, massa ipsum non commodo.
                </p>
            </div>
            <div class="bottom-section">
                <a
                    href="https://mathtalk.8thwall.app/worcester-teddy-roundup/"
                    class="play-card"
                >
                    <img src="/triangle.svg" alt="" />
                    <span>Play Now</span>
                </a>
            </div>
        </div>
        <div class="white section">
            <div class="card">
                <img src="/whole-icon.svg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Mus tortor, massa ipsum non commodo.
                </p>
            </div>
            <div class="bottom-section">
                <a
                    href="https://mathtalk.8thwall.app/kohl-whole/"
                    class="play-card"
                >
                    <img src="/triangle.svg" alt="" />
                    <span>Play Now</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoreGames"
}
</script>

<style>
.main {
    width: 100%;
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}
.more-games {
    font-weight: 700;
    font-size: 2rem;
    line-height: 91.7%;
    align-items: center;
    text-align: center;
    color: #f46234;
    padding: 1.75rem 1rem;
}
.play-card {
    align-items: center;
    padding: 0;
    margin-top: 0.75rem;
    height: 2.625rem;
    width: 8.875rem;
    justify-content: center;
    display: flex;
    flex-direction: row;
}
.play-card img {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem 0 0;
}
.card img {
    margin: 0 1rem 0 0;
}
.card p {
    font-family: 'Volte';
}
.bottom-section {
    text-align: center;
    padding-left: 6rem;
}
.grey {
    background-color: #f2f2f2;
}
.white {
    background-color: white;
}
.section {
    padding: 2rem 1rem;
}

.card {
    display: flex;
    flex-direction: row;
}

@media (min-width: 34rem) and (max-width: 59.375rem) {
    .more-games {
        font-size: 3.5rem;
    }

    .card-text {
        font-weight: 500;
        font-size: 2rem;
    }

    .card p {
        font-size: 2rem;
        padding: 2rem;
    }
    .bottom-section {
        padding-left: 15rem;
    }
    .bottom-section .play-card {
        font-size: 1.5rem;
    }
}
</style>
