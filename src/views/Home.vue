<template>
    <div class="main">
        <h1>Enjoy math everywhere!</h1>
        <a href="https://m.youtube.com/channel/UC5BIqP1YG8e7uMALndz5YTQ">
            <img src="/home-child.svg" alt="intro video" />
        </a>
        <router-link to="/moses-trail">
            <button type="submit" class="visit">Visit a Math Trail!</button>
        </router-link>
        <div class="ad">
            <p>SPONSORED BY:</p>
            <img src="/ad.svg" alt="" />
        </div>
    </div>
</template>

<script>
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 3rem;
}
h1 {
    font-size: 2.25rem;
    padding-top: 2.75rem;
    text-align: center;
    font-weight: 700;
    line-height: 2rem;
    color: white;
    /* letter-spacing: .005rem; */
}

.visit {
    background: #ff960a;
    border-radius: 1rem;
    font-weight: 700;
    box-shadow: 0 9px #d8810d;
    padding: 1.5rem 3.75rem;
    color: white;
    font-size: 1.375rem;
}
a {
    margin: 1.25rem 0;
}
.ad {
    position: absolute;
    bottom: 1rem;
    /* z-index: 3; */
    text-align: center;
    color: #f4aee4;
    font-size: 1rem;
}
</style>
