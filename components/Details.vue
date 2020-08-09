<template>
    <section class="details" v-if="isVisible">
        <span class="batten" @click="close"></span>
        <ul class="details-list">
            <li class="info-date">{{ INFO_MONTH }}    <span class="info-date-slash">/</span>   {{INFO_DAY}}    <span class="info-date-week">{{ INFO_WEEK }}</span></li>
            <li class="info-tempMax">{{ TEMP_MAX }}<span class="info-temp-unit">℃</span></li>
            <li class="info-tempMin">{{ TEMP_MIN }}<span class="info-temp-unit">℃</span></li>
            <li class="info-rain"><fa class="info-subs-icon" :icon="faUmbrella" /> <span class="info-subs-title">降水確率</span> {{ HUMIDITY }} <span class="info-subs-unit">%</span></li>
            <li class="info-windSpeed"><fa class="info-subs-icon" :icon="faWind" /> <span class="info-subs-title">風速</span> {{ WIND_SPEED }} <span class="info-subs-unit">m/s</span></li>
            <li class="info-humidity"><fa class="info-subs-icon" :icon="faTint" /> <span class="info-subs-title">湿度</span> {{ HUMIDITY }} <span class="info-subs-unit">%</span></li>
            <li class="info-main"><img :src="INFO_MAINIMG" alt="" class="info-main-img"></li>
            <li class="info-mainDiscription">{{ INFO_MAINDISCRIPTION }}</li>
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
    props: {
        isVisible: Boolean  
    },
    computed: {
        DERTAILS() {
            return false
        },
        INFO_MONTH: () => moment().format('M'),
        INFO_DAY: () => moment().format('D'),
        INFO_WEEK: () => moment().format('ddd'),
        TEMP_MAX() {
            const tempMax = Math.floor(this.weatherItem && this.weatherItem.main.temp_max)
            return tempMax
        },
        TEMP_MIN() {
            const tempMin = Math.floor(this.weatherItem && this.weatherItem.main.temp_min)
            return tempMin
        },
        WIND_SPEED() {
            const WindSpeed = this.weatherItem && this.weatherItem.wind.speed
            return WindSpeed
        },
        HUMIDITY() {
            const humidity = Math.floor(this.weatherItem && this.weatherItem.main.humidity)
            return humidity
        },
        INFO_MAINIMG() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return require('@/assets/sunny.png')
            } else if(main === 'Clouds') {
                return require('@/assets/cloud.png')
            } else if(main === 'Rain') {
                return require('@/assets/rain.png')
            } else if(main === 'Snow') {
                return require('@/assets/snow.png')
            } else if(main === 'Thunderstorm') {
                return require('@/assets/thunder.png')
            } else {
                return require('@/assets/yume.png')
            }
        },
        INFO_MAINDISCRIPTION() {
            let main = this.weatherItem && this.weatherItem.weather[0].main
            if(main === 'Clear') {
                return 'はれ'
            } else if(main === 'Clouds') {
                return 'くもり'
            } else if(main === 'Rain') {
                return 'あめ'
            } else if(main === 'Snow') {
                return 'ゆき'
            } else if(main === 'Thunderstorm') {
                return 'かみなり'
            } else {
                return main
            }
        },
        faUmbrella: () => faUmbrella,
        faTint: () => faTint,
        faWind: () => faWind,
        ...mapState({
            weatherItem: state => state.api.weatherItem,
            battenClick: state => state.battenClick
        })
    },
    
    mounted() {
        this.getWeather()
    },
    methods: {
        close() {
            this.$emit('close')
        },
        ...mapActions({
            getWeather: 'api/getWeather'
        })
    }
}
</script>

<style>
    .details {
        &::before{
            opacity: 0.5;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #562835;
            display: block;
        }
    }

    .batten {
        cursor: pointer;
        cursor: hand;
        position: absolute;
        display: block;
        width: 10%;
        height: 10%;
        right: 0;
        top: 3%;
        /* ばってん */
        &::before {
            content: '';
            display: block;
            width: 5%;
            height: 100%;
            background-color: white;
            transform: rotate(-45deg);
            transform-origin: 50% 50%;
            position: absolute;
            right: 50%;
        }
        &::after {
            content: '';
            display: block;
            right: 50%;
            width: 5%;
            height: 100%;
            background-color: white;
            transform: rotate(45deg);
            transform-origin: 50% 50%;
            position: absolute;
        }
    }

    .details-list {
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
        top: 12%;
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
        top: 31%;
        font-family: 'Montserrat', sans-serif;
        color: #e41964;
        font-size: 8.5vw;
    }

    .info-tempMin {
        position: absolute;
        right: 10%;
        bottom: 31%;
        font-family: 'Montserrat', sans-serif;
        color: #3d50a6;
        font-size: 8.5vw;
    }

    .info-temp-unit {
        font-size: 5vw;
    }

    .info-weather-img {
        position: absolute;
        left: 6%;
        top: 22%;
        width: 45%;
    }

    .info-rain {
        position: absolute;
        bottom: 12%;
        left: 10%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 3.2vw;
    }

    .info-windSpeed {
        position: absolute;
        bottom: 12%;
        right: 37%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 3.2vw;
    }

    .info-humidity {
        position: absolute;
        bottom: 12%;
        right: 10%;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
        font-size: 3.2vw;
    }

    .info-main-img {
        position: absolute;
        width: 33%;
        left: 18%;
        top: 26%;
    }

    .info-mainDiscription {
        position: absolute;
        right: 10%;
        top: 14.5%;
        color: #3e1b28;
        font-size: 3vw;
        font-family: 'M PLUS 1p', sans-serif;
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