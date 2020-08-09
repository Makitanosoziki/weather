<template>
    <section>
        <p class="date">{{ MONTH }}<span class="date-slash">/</span>{{ DAY }}<span class="week">{{ WEEK }}</span></p>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
    computed: {
        MONTH: () => moment().format('M'),
        DAY: () => moment().format('D'),
        WEEK: () => moment().format('ddd'),
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
    .date {
        position: absolute;
        top: 6%;
        letter-spacing: 0.4vw;
        right: 9%;
        font-size: 6.5vw;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
    }

    .week {
        position: absolute;
        right: -6.5vw;
        letter-spacing: 0;
        bottom: 5%;
        font-size: 2.8vw;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
    }

    .date-slash {
        font-size: 6vw;
    }
</style>