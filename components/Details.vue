<template>
    <section>
        <ul class="details">
            <li class="info-date">{{ INFO_MONTH }}    <span class="info-date-slash">/</span>   {{INFO_DAY}}    <span class="info-date-week">{{ INFO_WEEK }}</span></li>
            <li class="info-weather"><img :src="WEATHER" alt="" class="info-weather-img"></li>
            <li class="info-tempMax">{{ TEMP_MAX }}<span class="info-tempMax-unit">℃</span></li>
            <li class="info-tempMin">{{ TEMP_MIN }}<span class="info-tempMin-unit">℃</span></li>
            <li class="info-windSpeed">{{ WIND_SPEED }}</li>
            <li></li>
            <li class="info-humidity">{{ HUMIDITY }}</li>
        </ul>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
    computed: {
        INFO_MONTH: () => moment().format('M'),
        INFO_DAY: () => moment().format('D'),
        INFO_WEEK: () => moment().format('ddd'),
        WEATHER(){
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return require('@/assets/sunny.png')
            } else if(main === 'Rain') {
                return require('@/assets/rain.png')
            } else if(main === 'Clouds') {
                return require('@/assets/cloud.png')
            }
        },
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
            return `${WindSpeed}m`
        },
        HUMIDITY(){
            const humidity = Math.floor(this.weatherItem && this.weatherItem.main.humidity)
            return `${humidity}%`

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
    .details {
        list-style: none;
        position: absolute;
        right: 15%;
        top: 10%;
        display: block;
        background-color: white;
        width: 70%;
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
        top: 20%;
        font-family: 'Montserrat', sans-serif;
        color: #e41964;
        font-size: 9vw;
    }

    .info-tempMin {
        position: absolute;
        right: 10%;
        top: 42%;
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

    .info-windSpeed {
        position: absolute;
        top: 50%;
        right: 10%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 4.3vw;
            &::before {
                font-size: 3vw;
                position: absolute;
                left: -83%;
                bottom: 0;
                font-family: 'M PLUS 1p', sans-serif;
                content:'風速';
            }
    }

    .info-humidity {
        position: absolute;
        bottom: 5%;
        right: 10%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 4.3vw;
            &::before {
                font-size: 3vw;
                position: absolute;
                left: -100%;
                bottom: 3%;
                content:'湿度';
                font-family: 'M PLUS 1p', sans-serif;
            }
    }

</style>