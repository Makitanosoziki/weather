<template>
    <section>
        <figure class="girl-face"><img :src="GIRL_FACE" alt="" class="girl-face-img"></figure>
        <figure class="girl-body"><img :src="GIRL_BODY" alt="" class="girl-body-img"></figure>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        GIRL_FACE(){
            const humidity = this.weatherItem && this.weatherItem.main.humidity
            if(humidity > 80) {
                return require('@/assets/girl_face4.png')
            } else if(humidity > 70) {
                return require('@/assets/girl_face3.png')
            } else if(humidity > 60) {
                return require('@/assets/girl_face2.png')
            } else {
                return require('@/assets/girl_face1.png')
            }
        },
        GIRL_BODY(){
            const temp = Math.floor(this.weatherItem && this.weatherItem.main.temp)
            if(temp > 26) {
                return require('@/assets/wear1.png')
            } else if(temp  > 21) {
                return require('@/assets/wear2.png')
            } else　if(temp  > 16) {
                return require('@/assets/wear3.png')
            } else if(temp > 12) {
                return require('@/assets/wear4.png')
            } else {
                return require('@/assets/wear5.png')
            }　
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
    .girl-face-img {
        width: 26%;
        position: absolute;
        left: 20.5%;
        bottom: 57.5%;
        z-index: 0;
    }

    .girl-body-img {
        position: absolute;
        width: 23%;
        left: 22%;
        bottom: 2%;
    }

</style>