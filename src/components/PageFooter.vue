<script>

export default {
    name : "PageFooter",
}
</script>

<template>
    <div class="container-fluid">
        <div class="row align-items-center  d-flex justify-content-between">
            <div class="col-9 pt-3">
                <p>© Copyright 2012 - 2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by WordPress</p>
            </div>
            <div class="col-3 d-flex">
                <font-awesome-icon class="brand" icon="fa-brands fa-facebook-f" />
                <font-awesome-icon class="brand" icon="fa-brands fa-twitter" />                        
                <font-awesome-icon class="brand" icon="fa-brands fa-instagram" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';


.container-fluid{
    background-color: $terzo;
    .row{
        width: 70%;
        height: 50px;
        margin: 0 auto;
        .col-9{
            font-size: 11px;
            color: $quarto;
        }
        .col-3{
            align-content: end;
            .brand{
                background-color: $primo;
                color: $quarto;
                padding: 10px;
                aspect-ratio: 1/1;
                margin-right: 8px;
                cursor: pointer;
            }
        }
    }
}

</style>