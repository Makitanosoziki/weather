<template>
    <section>
        <figure id="girl"><img :src="GIRL" alt="" class="girl-img"></figure>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        GIRL(){
            const humidity = this.weatherItem && this.weatherItem.main.humidity
            if(humidity > 80) {
                return require('@/assets/girl4.png')
            } else if(humidity > 70) {
                return require('@/assets/girl3.png')
            } else if(humidity > 60) {
                return require('@/assets/girl2.png')
            } else {
                return require('@/assets/girl1.png')
            }
        },
        ...mapState({
            weatherItem: state => state.api.weatherItem
        }),
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
    .girl-img {
        height: 76%;
        position: absolute;
        left: 22%;
        bottom: 10%;
        z-index: 0;
    }

</style>