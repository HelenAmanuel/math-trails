<template>
    <div class="container">
        <h1>Bob Moses Trail</h1>
        <div>
            <img src="/moses-trail-map-old.svg" alt="" />
        </div>
        <img class="sponsor" src="/kohl-museum.svg" alt="" />
        <h2>About this trail:</h2>
        <p>
            The Bob Moses MathTrail is named after Robert Moses, a
            Cambridge-based educator and civil rights activist who considered
            math literacy a civil right and founded The Algebra Project, a
            nonprofit organization dedicated to helping students from
            historically marginalized communities develop math literacy. The
            goal of this mile-long path in The Port neighborhood is to encourage
            Cambridge residents, especially children and families, to find the
            fun in math and explore math in the world around them.
        </p>
        <div class="login-btn">
            <img src="/union-arrow.svg" alt="" />
            <router-link to="/squirrel-brand">
                <button>Get Started</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

const router = useRouter()

export default {
    name: "MosesTrail"
}
</script>

<style scoped>
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
.container {
    background: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 1.3125rem 1.0625rem 1.6875rem 1.0625rem;
    text-align: center;
    max-width: 100%;
}
h1 {
    color: #f46234;
    font-size: 1.875rem;
    font-weight: 700;
    font-family: Volte-bold;
    padding: 0 3.75rem 1.25rem 3.75rem;
}
h2 {
    color: #f46234;
    font-size: 1.5rem;
    font-family: Volte-bold;
}

.sponsor {
    align-self: center;
    margin: 1.125rem 0 2rem 0;
    height: 4rem;
    width: 7.125rem;
}

p {
    font-family: Volte;
    letter-spacing: -0.02em;
    font-size: 1rem;
    padding: 1rem 0;
}

.login-btn {
    background: #6a3fd1;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0.2rem 0.3rem #3620a5;
}

.login-btn img,
.signup-btn img {
    margin-right: 0.75rem;
    height: 1.5rem;
    width: 1.5rem;
}

@media (min-width: 34rem) and (max-width: 59.375rem) {
h1 {
    font-size: 2.75rem;
    padding: 0 3.75rem 1.25rem 3.75rem;
}
h2 {
    font-size: 2.5rem;
}
p {
    font-size: 1.5rem;
    padding: 1rem 0;
}
.sponsor{
    margin-top: 0;
}
.login-btn {
    font-size: 1.75rem;
}
}
</style>
