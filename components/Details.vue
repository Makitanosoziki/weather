<template>
    <section>
        <ul class="details">
            <li class="info-date">{{ INFO_DATE }}</li>
            <li class="info-week"> {{ INFO_WEEK }}</li>
            <li class="info-weather"><img :src="WEATHER" alt="" class="info-weather-img"></li>
            <li class="info-temperature">{{ TEMPERATURE }}</li>
            <li></li>
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
        INFO_DATE: () => moment().format('M/D'),
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
        TEMPERATURE(){
            const tempMax = Math.floor(this.weatherItem && this.weatherItem.main.temp_max)
            const tempMin = Math.floor(this.weatherItem && this.weatherItem.main.temp_min)
            console.log(this.weatherItem)
            return `${ tempMax }°C / ${ tempMin }°C`
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
        top: 2%;
        right: 50%;
        margin-right: -3.5vw;
        font-size: 7vw;
        font-family: 'Bentham', serif;
        color: #3e1b28;
    }

    .info-week {
        position: absolute;
        top: calc(100%*220/1800);
        right: 37%;
        font-size: 3.2vw;
        font-family: 'Bentham', serif;
        color: #3e1b28;
    }

    .info-temperature {
        position: absolute;
        bottom: 6%;
        left: 12%;
        font-family: 'Bentham', serif;
        color: #3e1b28;
        font-size: 4vw;
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
        font-family: 'Bentham', serif;
        color: #3e1b28;
        font-size: 4.3vw;
            &::before {
                font-size: 3.9vw;
                position: absolute;
                left: -83%;
                bottom: 8%;
                content:'風速';
                font-family: 'Noto Serif JP', serif;
            }
    }

    .info-humidity {
        position: absolute;
        bottom: 5%;
        right: 10%;
        font-family: 'Bentham', serif;
        color: #3e1b28;
        font-size: 4.3vw;
            &::before {
                font-size: 3.9vw;
                position: absolute;
                left: -100%;
                bottom: 8%;
                content:'湿度';
                font-family: 'Noto Serif JP', serif;
            }
    }

</style>