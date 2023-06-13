<script>

export default {
    name : "PageDescription",
}
</script>

<template>
    <section class="description container-fluid text-center">

        <h3>WORLD CLASS Fitness</h3>
        <img class="py-4" src="../assets/images/divider-xx-red.png" alt="">
        <p>At Avada Gym we do from top to bottom is of the highest quality to ensure we're equipped<br> to help you to reach your goals of a healthy and fit lifestyle.</p>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

.description{
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: $secondo;
    color: $quarto;
}
</style>