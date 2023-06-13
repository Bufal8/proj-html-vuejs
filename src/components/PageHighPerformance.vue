<script>

export default {
    name : "PageResultsCard",
}
</script>

<template>
    <div class="container-fluid">
        <div class="title">
            <h2>HIGH PERFORMANCE FACILITIES</h2>
            <img src="../assets/images/divider-xx-red.png" alt="">
        </div>
        <div class="row riga row-cols-3 g-5">
        
            <div class="img-performance col">
                <img src="../assets/images/home-image1.jpg" alt="">
            </div>
            <div class="img-performance col">
                <img src="../assets/images/home-image2.jpg" alt="">
            </div>
            <div class="img-performance col">
                <img src="../assets/images/home-image3.jpg" alt="">
            </div>
            <div class="img-performance col">
                <img src="../assets/images/home-image4.jpg" alt="">
            </div>
            <div class="img-performance col">
                <img src="../assets/images/home-image54.jpg" alt="">
            </div>
            <div class="img-performance col">
                <img src="../assets/images/home-image6.jpg" alt="">
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

.container-fluid{
    background-color: $secondo;
    color: $quarto;
    padding-bottom: 100px;
    .title{
        text-align: center;
        padding-top: 100px;
        padding-bottom: 20px;
        h2{
            padding-bottom: 25px;
            font-weight: 700
        }
    }
    .riga{
        width: 80%;
        margin: 0 auto;
        
    }
}
</style>

