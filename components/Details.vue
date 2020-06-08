<template>
    <section>
        <ul class="details">
            <li class="info-date">{{ INFO_MONTH }}    <span class="info-date-slash">/</span>   {{INFO_DAY}}    <span class="info-date-week">{{ INFO_WEEK }}</span></li>
            <li class="info-tempMax">{{ TEMP_MAX }}<span class="info-tempMax-unit">℃</span></li>
            <li class="info-tempMin">{{ TEMP_MIN }}<span class="info-tempMin-unit">℃</span></li>
            <li class="info-rain"><fa class="info-subs-icon" :icon="faUmbrella" /> <span class="info-subs-title">降水確率</span> {{ HUMIDITY }} <span class="info-subs-unit">%</span></li>
            <li class="info-windSpeed"><fa class="info-subs-icon" :icon="faWind" /> <span class="info-subs-title">風速</span> {{ WIND_SPEED }} <span class="info-subs-unit">m/s</span></li>
            <li class="info-humidity"><fa class="info-subs-icon" :icon="faTint" /> <span class="info-subs-title">湿度</span> {{ HUMIDITY }} <span class="info-subs-unit">%</span></li>
        </ul>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'

export default {
    computed: {
        INFO_MONTH: () => moment().format('M'),
        INFO_DAY: () => moment().format('D'),
        INFO_WEEK: () => moment().format('ddd'),
        TEMP_MAX(){
            const tempMax = Math.floor(this.weatherItem && this.weatherItem.main.temp_max)
            return tempMax
        },
        TEMP_MIN(){
            const tempMin = Math.floor(this.weatherItem && this.weatherItem.main.temp_min)
            return tempMin
        },
        WIND_SPEED(){
            const WindSpeed = this.weatherItem && this.weatherItem.wind.speed
            return WindSpeed
        },
        HUMIDITY(){
            const humidity = Math.floor(this.weatherItem && this.weatherItem.main.humidity)
            return humidity
        },
        faUmbrella: () => faUmbrella,
        faTint: () => faTint,
        faWind: () => faWind,
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
    .details {
        -webkit-border-image: url("../assets/border_img.png") 33% / 5vw round;
        list-style: none;
        position: absolute;
        right: 10%;
        top: 10%;
        display: block;
        width: 80%;
        height: 80%;
    }

    .info-date {
        position: absolute;
        top: 8%;
        left: 10%;
        font-size: 5vw;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
    }

    .info-date-slash {
        font-size: 3vw;
    }

    .info-date-week {
        font-size: 3vw;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
    }

    .info-tempMax {
        position: absolute;
        right: 10%;
        top: 25%;
        font-family: 'Montserrat', sans-serif;
        color: #e41964;
        font-size: 9vw;
    }

    .info-tempMin {
        position: absolute;
        right: 10%;
        bottom: 25%;
        font-family: 'Montserrat', sans-serif;
        color: #3d50a6;
        font-size: 9vw;
    }

    .info-weather-img {
        position: absolute;
        left: 6%;
        top: 22%;
        width: 45%;
    }

    .info-rain {
        position: absolute;
        bottom: 10%;
        left: 10%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 3.2vw;
    }

    .info-windSpeed {
        position: absolute;
        bottom: 10%;
        right: 37%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 3.2vw;
    }

    .info-humidity {
        position: absolute;
        bottom: 10%;
        right: 10%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 3.2vw;
    }

    .info-subs-icon {
        font-size: 2.5vw;
    }

    .info-subs-title {
        color: #3e1b28;
        font-size: 1.7vw;
        font-family: 'M PLUS 1p', sans-serif;
    }

    .info-subs-unit {
        color: #3e1b28;
        font-size: 1.8vw;
    }
</style>