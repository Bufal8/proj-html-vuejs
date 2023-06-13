<script>

export default {
    name : "PageIcons",
}
</script>

<template>
    <div class="container-fluid">

        <div class="row">

            <div class="col text-center">
                <font-awesome-icon icon="link-slash" class="icona"/>
                <h5>Strenght & Conditioning</h5>
                <img src="../assets/images/divider-x-red.png" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusa tenetur deserunt, sed ullam.</p>
            </div>
            <div class="col text-center">
                <font-awesome-icon icon="bicycle" class="icona"/>
                <h5>Fitness & Cardio</h5>
                <img src="../assets/images/divider-x-red.png" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusa tenetur deserunt, sed ullam.</p>
            </div>
            <div class="col text-center">
                <font-awesome-icon icon="person" class="icona"/>
                <h5>Flexibility & Rest</h5>
                <img src="../assets/images/divider-x-red.png" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusa tenetur deserunt, sed ullam.</p>
            </div>
            <div class="col text-center">
                <font-awesome-icon icon="heart-pulse" class="icona" />
                <h5>Health & Diet</h5>
                <img src="../assets/images/divider-x-red.png" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, recusa tenetur deserunt, sed ullam.</p>
            </div>
            

        </div>

    </div>
    <!-- 
    
    
     -->
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';


// SISTEMARE BACKGROUND-IMAGE QUI!! NON DEVE RIPETERSI
.container-fluid{
    color: $quarto;
    background-image: url("../assets/images/gym_bkgd_bw-compressor.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    .row{
        width: 80%;
        margin: 0 auto;
        padding: 80px 0;
        .icona{
            margin: 10px 0;
            color: $primo;
            width: 50px;
            height: 50px;
            border: 1px solid $primo;
            padding: 15px;
            border-radius: 50%;
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
        }
    }
}

</style>