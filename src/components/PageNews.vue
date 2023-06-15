<script>

export default {
    name : "PageTrainer",
}
</script>

<template>
    <div class="container-fluid">
        <div class="title">
            <h2>PERFORMANCE NEWS</h2>
            <img src="../assets/images/divider-xx-red.png" alt="">
        </div>
        <div class="row riga row-cols-3 g-5">
        
            <div class="card flex-shrink-1 col" style="width: 18rem;">
                <img src="../assets/images/blog1-600x312.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-text">
                        <h5>Train with free wheights or your body wheight?</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat. Consectetur adipiscing elit, in augue nisl. <span class="read">[...]</span></p>
                    </div>
                </div>
            </div>
            <div class="card col bigger-card" style="width: 18rem;">
                <img src="../assets/images/blog6-800x800.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-text">
                        <h5>Nutrinional advice that will keep you training</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat. Consectetur adipiscing elit, in augue nisl. <span class="read">[...]</span></p>
                    </div>
                </div>
            </div>
            <div class="card col" style="width: 18rem;">
                <img src="../assets/images/trainer4.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-text">
                        <h5>Simple principles for your next workout</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat. Consectetur adipiscing elit, in augue nisl. <span class="read">[...]</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row riga row-cols-3 g-5">
        
        <div class="card col" style="width: 18rem;">
            <img src="../assets/images/blog4-600x433.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                    <div class="card-text">
                        <h5>To be number one, train like you're number two</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat. Consectetur adipiscing elit, in augue nisl. <span class="read">[...]</span></p>
                    </div>
                </div>
        </div>
        <div class="card col bigger-card" style="width: 18rem;">
            <img src="../assets/images/trainer3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                    <div class="card-text">
                        <h5>Top 5 mistakes every gym member makes</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat. Consectetur adipiscing elit, in augue nisl. <span class="read">[...]</span></p>
                    </div>
                </div>
        </div>
        <div class="card col" style="width: 18rem;">
            <img src="../assets/images/trainer1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                    <div class="card-text">
                        <h5>The myths of shedding body fat explored</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat. Consectetur adipiscing elit, in augue nisl. <span class="read">[...]</span></p>
                    </div>
                </div>
        </div>
    </div>
        <button>READ ALL ARTICLES</button>
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
        width: 70%;
        margin: 0 auto;
        // .bigger-card{
        //     height: 800px;
        // }
        .col{

            .card-body{
                background-color: $terzo;
                .card-text{
                    font-size: 14px;
                    b{
                        line-height: 30px ;
                    }
                    p{
                        margin-top: 20px;
                        line-height: 30px;
                        font-weight: 300;
                    }
                    .read{
                        cursor: pointer;
                    }
                }
            }
        }
    }
    button{
        display: block;
        text-align: center;
        font-weight: 200;
        color: $quarto;
        background-color: transparent;
        border: 1px solid $quarto;
        padding: 15px 30px;
        margin: 80px auto;
    }
}
</style>

