<template>
    <section>
        <figure class="sky"><img :src="WINDOW" alt="" class="sky-img"></figure>
    </section>
</template>
<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        WINDOW() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            console.log(main)
            if(main === 'Clear') {
                return require('@/assets/sora_hare.png')
            } else if(main === 'Rain') {
                return require('@/assets/sora_ame.png')
            } else {
                return require('@/assets/sora_kumori.png')
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
        z-index: -2;
        top: calc(100%*195/1800);
        right: calc(100%*570/1800);
        width: calc(100%*280/1800);
    }

</style>