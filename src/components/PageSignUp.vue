<script>

export default {
    name : "PageSignUp",
}
</script>

<template>
    <section class=" container-fluid d-flex justify-content-around ">

        <!-- <div class="row justify-content-around"> -->

            <div class="img-sign-up col-5 offset-1">
                <img src="../assets/images/home_img-compressor-400x222.jpg" alt="">
            </div>
        
            <div class="form col-5 ">
                <form>
                    <h5>Sign Up For a Free Training Session!</h5>
                    <label for="name">Name*</label> <br>
                    <input id="name" name="name" required type="text"> <br>

                    <label for="email">Email</label> <br>
                    <input id="email" name="email" type="email"> <br>
                    <button>START NOW!</button>
                </form>

            </div>

        
        
    </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

section{
    background-color: $terzo;
    padding: 100px 0;
    .img-sign-up{
        img{
            width: 100%;
        }
    }

    .form{
        color: $quarto;
        form{
            width: 100%;
            h5{
                margin-bottom: 30px;
            }
            #name{
                margin-top: 10px;
                width: 70%;
                height: 50px;
                margin-bottom: 30px;
                background-color: $secondo;
                border: none;
                color: $quarto;
            }
            #email{
                margin-top: 10px;
                width: 70%;
                height: 50px;
                margin-bottom: 30px;
                background-color: $secondo;
                color: $quarto;
                border: none;
            }
            button{
                width: 70%;
                margin-top: 30px;
                height: 50px;
                color: $quarto;
                background-color: $primo;
                border: none;
            }
        }
    }
}
</style>