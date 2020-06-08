<template>
  <div class="container">
    <div v-if="weatherItem"></div>
    <Date />
    <Girl />
    <Serihu />
    <Window />
    <Details />
    <InfoWeather />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Date from '~/components/Date.vue'
import Girl from '~/components/Girl.vue'
import Window from '~/components/Window.vue'
import Serihu from '~/components/Serihu.vue'
import Details from '~/components/Details.vue'
import InfoWeather from '~/components/InfoWeather.vue'

export default {
  components: {
    Date,
    Girl,
    Window,
    Serihu,
    Details,
    InfoWeather
  },
  computed: {
    ...mapState({
      weatherItem: state => state.api.weatherItem
    })
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

.container {
  background-image: url(/bg.png) ;
  padding-bottom: calc(100%*1200/1800);
  background-size: contain;
  background-repeat: no-repeat; 
  position: relative;
}

</style>
