<template>
    <section class="balloon">
        <figure :class="BALLOON.figure"><span :class="BALLOON.span"><img src="@/assets/baloon_heare.png" alt="" :class="BALLOON.img"></span></figure>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        BALLOON() {
            const WindSpeed = this.weatherItem && this.weatherItem.wind.speed
            const classList = {figure:'',span:'',img:''}
            if(WindSpeed === 0 ) {
                classList.img = 'balloon-img0'
            } if (0 > WindSpeed >= 3.4) {
                classList.img = 'balloon-img1'
            } if(3.4 > WindSpeed >= 5.5) {
                classList.figure = 'balloon2'
                classList.span = 'balloon-move2'
                classList.img = 'balloon-img2'
            } if(5.5 > WindSpeed >= 8.0) {
                classList.figure = 'balloon3'
                classList.span = 'balloon-move3'
                classList.img = 'balloon-img3'
            } if(8.0 > WindSpeed >= 10.8) {
                classList.figure = 'balloon4'
                classList.span = 'balloon-move4'
                classList.img = 'balloon-img4'
            } else {
                classList.figure = 'balloon5'
                classList.span = 'balloon-move5'
                classList.img = 'balloon-img5'
            }
            return classList
        },
        ...mapState({
            weatherItem: state => state.api.weatherItem
        })
    },
    mounted() {
        this.getWeather()
    },
    methods: {
        ...mapActions({
            getWeather: 'api/getWeather'
        })
    }
}

</script>

<style>
    /* 0 */
    .balloon-img0 {
        position: absolute;
        top: 21.5%;
        right: 33.2%;;
        z-index: -1;
        width: 12%;
    }

    /* 1 */
    .balloon-img1 {
        position: absolute;
        top: 21.5%;
        right: 33.2%;
        z-index: -1;
        width: 12%;
        animation: rotate1 5s infinite;
        transform-origin: 50% 100%; 
    }

    /* 2 */
    .balloon-img2 {
        width: 100%;
        transform-origin: 50% 100%; 
        animation: rotate3 3.0s infinite;
    }

    .balloon2 {
        width: 12%;
        z-index: -1;
        top: 20%;
        right: 33.2%;
        position: absolute;
        animation: translateX3 4.0s infinite;
    }

    .balloon-move2 {
        width: 100%;
        display: block;
        animation: translateY3 5.0s infinite;
    }

    /* 3 */
    .balloon-img3 {
        width: 100%;
        transform-origin: 50% 100%; 
        animation: rotate3 3.0s infinite;
    }

    .balloon3 {
        width: 12%;
        z-index: -1;
        top: 20%;
        right: 33.2%;
        position: absolute;
        animation: translateX3 3.8s infinite;
    }

    .balloon-move3 {
        width: 100%;
        display: block;
        animation: translateY3 5.0s infinite;
    }

    /* 4 */
    .balloon-img4 {
        width: 100%;
        transform-origin: 50% 100%; 
        animation: rotate4 1.0s infinite;
    }

    .balloon4 {
        width: 12%;
        z-index: -1;
        top: 20%;
        right: 33.2%;
        position: absolute;
        animation: translateX4 1.3s infinite;
    }

    .balloon-move4 {
        width: 100%;
        display: block;
        animation: translateY4 2.2s infinite;
    }

    /* 5 */
    .balloon-img5 {
        width: 100%;
        transform-origin: 50% 100%; 
        animation: rotate5 1.4s infinite;
    }

    .balloon5 {
        width: 12%;
        z-index: -1;
        top: 20%;
        right: 33.2%;
        position: absolute;
        animation: translateX5 1.0s infinite;
    }

    .balloon-move5 {
        width: 100%;
        display: block;
        animation: translateY5 1.6s infinite;
    }

    /* 6 */
    .balloon-img6 {
        width: 100%;
        transform-origin: 50% 100%; 
        animation: rotate6 0.8s infinite;
    }

    .balloon6 {
        width: 12%;
        z-index: -1;
        top: 20%;
        right: 33.2%;
        position: absolute;
        animation: translateX6 1.4s infinite;
    }

    .balloon-move6 {
        width: 100%;
        display: block;
        animation: translateY6 0.4s infinite;
    }

    /* 1 */
    @keyframes rotate {
        0% {
            transform:rotate(8deg);
        }

        50% {
            transform:rotate(-8deg);
        }

        100% {
            transform:rotate(8deg);
        }
    }

    /* 2 */
    @keyframes rotate1 {
        0% {
            transform:rotate(8deg)  scale(0.9);
        }

        50% {
            transform:rotate(-8deg) scale(1.0);
        }

        100% {
            transform:rotate(8deg) scale(0.9);
        }
    }

    @keyframes translateX2 {
        0% {
            transform:translateX(-10%);
        }

        50% {
            transform:translateX(10%);
        }

        100% {
            transform:translateX(-10%);
        }
    }

    @keyframes translateY2 {
        0% {
            transform:translateY(-7%);
        }

        50% {
            transform:translateY(7%);
        }

        100% {
            transform:translateY(-7%);
        }
    }

    /* 3 */
    @keyframes rotate3 {
        0% {
            transform:rotate(8deg)  scale(0.9);
        }

        50% {
            transform:rotate(-8deg) scale(1.0);
        }

        100% {
            transform:rotate(8deg) scale(0.9);
        }
    }

    @keyframes translateX3 {
        0% {
            transform:translateX(-18%);
        }

        50% {
            transform:translateX(18%);
        }

        100% {
            transform:translateX(-18%);
        }
    }

    @keyframes translateY3 {
        0% {
            transform:translateY(-9%);
        }

        50% {
            transform:translateY(9%);
        }

        100% {
            transform:translateY(-9%);
        }
    }

    /* 4 */
    @keyframes rotate4 {
        0% {
            transform:rotate(10deg)  scale(0.9);
        }

        50% {
            transform:rotate(-10deg) scale(1.0);
        }

        100% {
            transform:rotate(10deg) scale(0.9);
        }
    }

    @keyframes translateX4 {
        0% {
            transform:translateX(-20%);
        }

        50% {
            transform:translateX(20%);
        }

        100% {
            transform:translateX(-20%);
        }
    }

    @keyframes translateY4 {
        0% {
            transform:translateY(-14%);
        }

        50% {
            transform:translateY(14%);
        }

        100% {
            transform:translateY(-14%);
        }
    }

    /* 5 */
    @keyframes rotate5 {
        0% {
            transform:rotate(15deg)  scale(0.9);
        }

        50% {
            transform:rotate(-15deg) scale(1.1);
        }

        100% {
            transform:rotate(15deg) scale(0.9);
        }
    }

    @keyframes translateX5 {
        0% {
            transform:translateX(-90%);
        }

        50% {
            transform:translateX(90%);
        }

        100% {
            transform:translateX(-90%);
        }
    }

    @keyframes translateY5 {
        0% {
            transform:translateY(-80%);
        }

        50% {
            transform:translateY(80%);
        }

        100% {
            transform:translateY(-80%);
        }
    }

    /* 6 */
    @keyframes rotate6 {
        0% {
            transform:rotate(40deg)  scale(0.9);
        }

        50% {
            transform:rotate(-40deg) scale(1.1);
        }

        100% {
            transform:rotate(40deg) scale(0.9);
        }
    }

    @keyframes translateX6 {
        0% {
            transform:translateX(-200%);
        }

        50% {
            transform:translateX(200%);
        }

        100% {
            transform:translateX(-200%);
        }
    }

    @keyframes translateY6 {
        0% {
            transform:translateY(100%);
        }

        50% {
            transform:translateY(-100%);
        }

        100% {
            transform:translateY(100%);
        }
    }
</style>