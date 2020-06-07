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
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return '晴れだね'
            } else if(main === 'Rain') {
                return '雨だね'
            } else {
                return 'その他だね'
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
        top: 10%;
        left: 8%;
        width: 92%;
        height: 90%;
        &::before {
            content: "";
            background:url(../assets/hukidashi.png) no-repeat;
            display: inline-block;
            top: -6%;
            left: -5%;
            width: 20%;
            height: calc(100%*250/898);
            position: absolute;
            background-size:contain;
        }
    }

</style>