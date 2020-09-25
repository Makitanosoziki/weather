<template>
  <div class="container">
    <div v-if="weatherItem"></div>
    <div class="detail-button" @click="isVisible = true">詳細→</div>
    <Date />
    <Girl />
    <Serihu />
    <Window />
    <balloon />
    <Details :isVisible="isVisible" @close="isVisible = false" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Date from '~/components/Date.vue'
import Girl from '~/components/Girl.vue'
import Window from '~/components/Window.vue'
import balloon from '~/components/balloon.vue'
import Serihu from '~/components/Serihu.vue'
import Details from '~/components/Details.vue'

export default {
  components: {
    Date,
    Girl,
    Window,
    balloon,
    Serihu,
    Details
  },
  data() {
    return {
      isVisible: false
    }
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
.detail-button {
  border-radius: 1.0vw;
  position: absolute;
  top: 51%;
  right: 8%;
  padding:1.3% 2.5%;
  font-size: 2.5vw;
  color: #3e1b28;
  background-color: #fae2ec;
  border: 0.5vw solid #3e1b28;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  cursor: hand;
}

.container {
  background-image: url(/bg.png) ;
  padding-bottom: calc(100%*1200/1800);
  background-size: cover;
  background-repeat: no-repeat; 
  position: relative;
    /* &::before {
      content: '';
      background: url("../assets/bg_dots.png");
      width: 100vw;
      height: 100vh;
      margin-left: calc( ( ( 100% - 100vw ) / 2 ) );
      margin-right: calc( ( ( 100% - 100vw ) / 2 ) );
      position: absolute;
      z-index: -10;
    } */
}

</style>
