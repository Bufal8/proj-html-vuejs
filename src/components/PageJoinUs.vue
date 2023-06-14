<script>

export default {
    name : "PageJoinUs",
}
</script>

<template>
    <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
            <div class="text col-7">
                <h2>Achieve Your Fitness Goals</h2>
                <br>
                <p>Flexible membership packages to suit all levels of athlete and achive your fitness goals</p>
            </div>
            <div class="button col-3 offset-2">
                <button>JOIN US</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';


.container-fluid{
    background-image: url(../assets/images/home-parallax.jpg);
    background-size: cover;
    height: 300px;
    color: $quarto;
  .row{  
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
        h2{
            margin: 0 auto;
            font-weight: 600;
        }
        p{
            font-size: 14px;
        }
        
        button{
        align-content: end;
        font-weight: 200;
        color: $quarto;
        background-color: transparent;
        border: 1px solid $quarto;
        padding: 15px 30px;

        }
    }
}


</style>