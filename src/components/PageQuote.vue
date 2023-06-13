<script>

export default {
    name : "PageQuote",
}
</script>

<template>
    <div class="container-fluid">
        <h1>"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times"</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
        <h3>BRUCE LEE · QUOTE OF THE DAY</h3>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';


.container-fluid{
    background-image: url(../assets/images/home-testimonial-bg.jpg);
    background-size: cover;
    background-position: 50%;
    height: 500px;
    color: $quarto;
    
    h1{
        padding-top: 80px;
        width: 60%;
        text-align: center;
        margin: 0 auto;
        font-weight: 400;
    }
    
    img{
        display: block;
        color: $quarto;
        margin: 30px auto;
        filter: brightness(0) invert(1);
    }
    h3{
        text-align: center;
        margin: 0 auto;
    }
}


</style>