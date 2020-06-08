<template>
    <section>
        <div class="info-main"><img :src="INFO_WEATHER" alt="" class="info-main-img"></div>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        INFO_WEATHER() {
            const mainArray = []
            for (let i=0; i<7; i++) {
                const main = this.forecastItem && this.forecastItem.list[i].weather[0].main
                mainArray.push(main)
            }
            if (mainArray.every(value => value === value)) {
                const main = mainArray[0]
                if(main === 'Clear') {
                    return require('@/assets/sunny.png')
                } else if(main === 'Clouds') {
                    return require('@/assets/cloud.png')
                } else if(main === 'Rain') {
                    return require('@/assets/rain.png')
                } else if(main === 'Thunderstorm') {
                    return require('@/assets/thunder.png')
                } else if(main === 'Snow') {
                    return require('@/assets/snow.png')
                }
            } else {
                return require('@/assets/sunny.png')
            }
        },
        ...mapState({
            forecastItem: state => state.api.forecastItem
        }),
    },
    mounted() {
        this.getForecast()
    },
    methods: {
        ...mapActions({
            getForecast: 'api/getForecast'
        })
    }
}

</script>

<style>

.info-main-img {
    position: absolute;
    width: 33%;
    left: 20%;
    top: 30%;
}

</style>