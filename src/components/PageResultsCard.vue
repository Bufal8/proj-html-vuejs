<script>

export default {
    name : "PageResultsCard",
}
</script>

<template>
    <div class="container-fluid">
        <div class="title">
            <h2>REAL WORLD RESULTS</h2>
            <img src="../assets/images/divider-xx-red.png" alt="">
        </div>
        <div class="row riga row-cols-1 row-cols-md-2 g-4">
            <div class="col">
            <div class="card">
                <div class="row align-items-center g-0">
                    <div class="card-img col-4">
                    <img src="../assets/images/review_1-compressor.jpg" class="card-img-top" alt="...">
                </div>
            <div class="card-body col-4">
                <em class="card-text">"The trainers at Avada Gym have helped me rach my fitness goals beyond anything I could of hoped for. I love it!"</em>
                <p>- <b>Tara Smith</b></p>
            </div>
                </div>
                
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="row align-items-center g-0">
                    <div class="card-img col-4">
                    <img src="../assets/images/review_3-compressor-2.jpg" class="card-img-top" alt="...">
                </div>
            <div class="card-body col-4">
                <em class="card-text">"The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out."</em>
                <p>-<b>Simon Chel</b></p>
            </div>
                </div>
                
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="row align-items-center g-0">
                    <div class="card-img col-4">
                    <img src="../assets/images/review_2-compressor.jpg" class="card-img-top" alt="...">
                </div>
            <div class="card-body col-4">
                <div class="testo">

                    <em class="card-text">"The facilities at Avada Gym stood out to me the most. They are well maintainer and have high quality equipment."</em>
                    <p>-<b>Jen Wirth</b></p>

                </div>
            </div>
                </div>
                
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="row g-0">
                    <div class="card-img col-4">
                    <img src="../assets/images/review_4-compressor-2.jpg" class="card-img-top" alt="...">
                </div>
            <div class="card-body align-items-center col-4">
                <em class="card-text">"No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their costumers"</em>
                <p>- <b>Jeff Glum</b></p>
            </div>
                </div>
                
            </div>
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
        .card{
            background-color: $terzo;
            .card-img{
                width: 150px;
                img{
                    padding: 20px;
                    width: 150px;
                    height: 150px;
                }
            }
            .card-body{
                margin-top: 20px;
                width: 60%;
                font-size: 13px;
                padding: 0;
                padding-right: 40px;
                line-height: 25px;


            }
        }
    }
}
</style>

