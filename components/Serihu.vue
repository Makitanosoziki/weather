<template>
    <section>
        <p class="serihu">{{ SERIHU }}</p>
    </section>
</template>
<script>

import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        SERIHU() {
            const temp = Math.floor(this.weatherItem && this.weatherItem.main.temp)
            if(temp > 35) {
                return 'かき氷食べいこうね'
            } else if(temp  > 30) {
                return 'ガリガリ君梨味しか'
            } else　if(temp  > 25) {
                return 'そろそろチョコミントだね'
            } else if(temp > 20) {
                return '31ならジャモカコーヒー推し'
            } else if(temp > 15) {
                return 'MOWたべよ〜'
            }　else if(temp > 10) {
                return 'ちょこもなかじゃ〜んぼ'
            } else if(temp > 5) {
                return 'やわもちのミルクアイスがすき'
            } else if(temp > 0) {
                return 'いい加減ハーゲンダッツじゃん'
            } else {
                return 'お外でアイスつくろう！'
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
    .serihu {
        position: absolute;
        text-align: justify;
        color: #3e1b28;
        font-family: 'M PLUS 1p', sans-serif;
        top: 15.5%;
        left: 7%;
        width: 11%;
        font-size: 2vw;
    }

</style>