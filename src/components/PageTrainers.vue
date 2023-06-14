<script>

export default {
    name : "PageTrainer",
}
</script>

<template>
    <div class="container-fluid">
        <div class="title">
            <h2>MEET OUR TRAINERS</h2>
            <img src="../assets/images/divider-xx-red.png" alt="">
        </div>
        <div class="row riga row-cols-3 g-5">
        
            <div class="card col" style="width: 18rem;">
                <img src="../assets/images/trainer1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-text">
                        <b>Ann Baker<br>Personal Trainer</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.</p>
                    </div>
                    <div class="card-social">
                        <font-awesome-icon class="brand" icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon class="brand" icon="fa-brands fa-twitter" />                        
                        <font-awesome-icon class="brand" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
            <div class="card col " style="width: 18rem;">
                <img src="../assets/images/trainer3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-text">
                        <b>Anne Warren<br>Personal Trainer</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.</p>
                    </div>
                    <div class="card-social">
                        <font-awesome-icon class="brand" icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon class="brand" icon="fa-brands fa-twitter" />                        
                        <font-awesome-icon class="brand" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
            <div class="card col" style="width: 18rem;">
                <img src="../assets/images/trainer4.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-text">
                        <b>Peter Rice<br>Personal Trainer</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.</p>
                    </div>
                    <div class="card-social">
                        <font-awesome-icon class="brand" icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon class="brand" icon="fa-brands fa-twitter" />                        
                        <font-awesome-icon class="brand" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
        </div>
        <button>VIEW ALL TRAINERS</button>
    </div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

.container-fluid{
    background-color: $terzo;
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
        margin: 0 290px;
        .card-body{
            background-color: $secondo;
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
            }
            .brand{
                background-color: $terzo;
                padding: 10px;
                aspect-ratio: 1/1;
                margin-right: 8px;
                cursor: pointer;
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

