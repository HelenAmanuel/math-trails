<template>
    <div class="main">
        <div class="top-section">
            <h3>Explore the AR game</h3>
            <div class="purple">
                <img src="/game-icon.svg" alt="" />
            </div>
        </div>
        <div>
            <slot name="game-desc"></slot>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
    background: white;
    border-radius: 1rem;
}
.purple {
    background-color: #f1ecff;
    height: 3.375rem;
    width: 3.375rem;
    border-bottom-left-radius: 0.6875rem;
    border-bottom-right-radius: 0.6875rem;
}
.purple img {
    padding: 0.5rem 0.75rem;
}
.top-section {
    display: flex;
    flex-direction: row;
    border-bottom: 1px #F2F2F2 solid;
}
@media (min-width: 26.25rem) and (max-width: 59.375rem) {
    .top-section{
        justify-content: space-between;
    }
}
h3 {
    font-weight: 700;
    font-size: 19px;
    line-height: 91.7%;
    color: #3620a5;
    margin: 1.625rem 4.4375rem 1.375rem 1.25rem;
}
p {
    color: red;
}
</style>
