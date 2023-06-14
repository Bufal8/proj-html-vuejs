<script>

export default {
    name : "PagePreFooter",
}
</script>

<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <p class="titolo">COME FIND US</p>
                <p class="testo">12345 North Main Street<br>New York, NY 555555<br>Phone: 1.800.555.6789<br>Email: info@your-domain.com</p>
            </div>
            <div class="col">
                <p class="titolo">RECENT POSTS</p>
                <p class="testo bordo">
                    <font-awesome-icon class="fa-chevron-right" icon="fa-solid fa-chevron-right" />Train with free whights or your body wheight?
                </p>
                <p class="testo bordo">
                    <font-awesome-icon class="fa-chevron-right" icon="fa-solid fa-chevron-right" />Nutritional advice that will keep your training
                </p>
            </div>
            <div class="col">
                <p class="titolo">OPENING TIMES</p>
                <p class="testo">Weekdays Monday - Friday<br><span class="orario">09:00 - 19:00</span></p>
                <p class="testo">Weekends Saturday - Sunday<br><span class="orario">09:00 - 21:00</span></p>
            </div>
            <div class="col">
                <img src="../assets/images/gym_ad-compressor.jpg" alt="">
            </div>
            

        </div>

    </div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';


.container-fluid{
    color: $secondo;
    background-color: $terzo;
    font-family: 'Montserrat', sans-serif;


    .row{
        width: 80%;
        margin: 0 auto;
        padding: 80px 0;
        .titolo{
            color: $sesto;
        }
        .testo{
            color: $quinto;
            font-size: 14px;
            .fa-chevron-right{
                margin-right: 5px;
            }
        }
        .bordo{
            border-bottom: 0.5px solid $quinto;
        }
        h5{
            font-weight: 600;
        }
        img{
            margin: 10px 0;
        }
        p{
            color: $sesto;
            font-size: 13px;
            line-height: 40px;
            .orario{
                color: $sesto;
            }
        }
    }
}

</style>