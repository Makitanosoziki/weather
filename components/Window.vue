<template>
        <figure class="sky"><img :src="WINDOW" alt="" class="sky-img"></figure>
</template>
<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        WINDOW() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return require('@/assets/sora_hare.png')
            } else if(main === 'Rain') {
                return require('@/assets/sora_ame.png')
            } else if(main === 'Clouds') {
                return require('@/assets/sora_kumori.png')
            } else if(main === 'Thunderstorm') {
                return require('@/assets/sora_thunder.png')
            } else if(main === 'Snow') {
                return require('@/assets/sora_snow.png')
            } else {
                return require('@/assets/sora_yume.png')
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

<style scoped>
    .sky-img {
        position: absolute;
        z-index: -3;
        top: calc(100%*195/1800);
        right: calc(100%*570/1800);
        width: calc(100%*280/1800);
    }

</style>