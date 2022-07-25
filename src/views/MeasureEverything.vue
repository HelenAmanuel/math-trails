<template>
    <div class="main">
        <img src="/measure-everything.svg" alt="" />
        <div class="youtube">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-zPdqmMHrQU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>

        <div>
            <h2>About the experience:</h2>
            <p>
                The Measure! Everything! App, available for download on the
                Apple App Store and available in English and Spanish, uses
                Augmented Reality experiences to encourage young children’s math
                exploration and playful learning of math-related concepts.
            </p>
        </div>
    </div>
    <div class="download">
        <h3>Download Now!</h3>
        <div class="flex-row">
            <img src="/apple-play.svg" alt="" />
            <img src="/google-play.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: "MeasureEverything"
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 0 1.5rem 1.5rem 1.5rem;
}
h2 {
    color: #f46234;
    font-family: 'Volte-bold';
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 91.7%;
    padding: 2rem 0 1rem 0;
}
p {
    font-family: 'Volte';
    padding-bottom: 1rem;
}
.main img {
    padding: 2rem 6.25rem;
}
.flex-row{
    display: flex;
    flex-direction: row;
}
.youtube iframe {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.download {
    background-color: #3620a5;
    padding: 1rem 2rem;
    text-align: center;
    font-size: 1.25rem;
}
h3 {
    color: white;
    font-family: 'Volte-bold';
    padding-bottom: 1rem;
}

@media (min-width: 34rem) and (max-width: 59.375rem) {
.main img{
    padding: 4rem 12.5rem;
}
.youtube iframe {
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    padding: 0 2rem;
}
h2 {
    font-size: 2.75rem;
}
p {
    font-size: 1.5rem;;
}
}

</style>
