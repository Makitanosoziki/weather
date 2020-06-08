<template>
    <section>
        <p class="date">{{ MONTH }}<span class="date-slash">/</span>{{ DAY }}</p>
        <p class="week">{{ WEEK }}</p>
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
        top: 5%;
        right: 13%;
        font-size: 6.5vw;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
    }

    .week {
        position: absolute;
        top: 10.5%;
        right: 6%;
        font-size: 3.3vw;
        font-family: 'Montserrat', sans-serif;
        color: #3e1b28;
    }

    .date-slash {
        font-size: 6vw;
    }
</style>