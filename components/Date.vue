<template>
    <section>
        <p class="date">{{ DATE }}</p>
        <p class="week">{{ WEEK }}</p>
    </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
    computed: {
        DATE: () => moment().format('M/D'),
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
        top: calc(100%*60/1800);
        right: 10%;
        font-size: 7vw;
        font-family: 'Bentham', serif;
        color: #3e1b28;
    }

    .week {
        position: absolute;
        top: calc(100%*240/1800);
        right: 4.5%;
        font-size: 3.5vw;
        font-family: 'Bentham', serif;
        color: #3e1b28;
    }
</style>