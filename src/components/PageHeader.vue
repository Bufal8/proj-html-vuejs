<script>
// import { store } from "../store.js"

export default {
    name : "PageHeader",
    data(){
    return{
      vociMenu: [
        {
            name: "HOME",
            active: true
        }, {
            name: "ABOUT US",
            active: false
        }, {
            name: "FACILITIES",
            active: false
        }, {
            name: "MEMBERSHIP",
            active: false
        }, {
            name: "TESTIMONIALS",
            active: false
        },
        {
            name: "BLOG",
            active: false
        }
    ]
    }
  }
}
</script>

<template>
    <header>
        <section class="container-fluid d-flex justify-content-between">
            <div class="row align-items-center justify-content-between">
                
                <div class="logo col">
                    <img src="../assets/images/gym_logo_2x.png" alt="">
                </div>
                <nav class="col-6">
                    <ul class="nav justify-content-end">
                        <li v-for="(voceMenu, id) in vociMenu" :key="id" :class="{ active : voceMenu.active }">
                            <a href="#" >
                                {{ voceMenu.name }}
                            </a></li>
                    </ul>
                </nav>
            </div>
            
        </section>
        <section class="jumbotron text-center">
            <h1 class="text-center mt-5">NO PAIN NO GAIN</h1>
            <p class="mt-3">Motivation is what gets you started. Habit is what keeps you going.</p>
            <button class="mt-3 py-3 px-5">JOIN US TODAY</button>
        </section>
    </header>


</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

header{
    background-image: url(../assets/images/home-banner.jpg) ;
    background-size: contain;
    height: 800px;
    .row{
        width: 100%;
    }
    .logo{
        img{
            width: 300px;
        }

    }
    li{
        margin-right: 15px;
        a{
            color: $quarto;
            font-size: 14px;
            text-decoration: none;
        }
        .active{
            color: $primo;
        }
    }
    .jumbotron{
        margin-top: 140px;
        color: $quarto;

        
        h1{
            font-size: 80px;
            font-weight: 700;
        }

        p{
            font-weight: 200;
        }

        button{
            font-weight: 200;
            color: $quarto;
            background-color: transparent;
            border: 1px solid $quarto;
        }
    }
}

</style>