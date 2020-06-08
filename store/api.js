export const state = () => ({
    weatherItem: undefined,
    forecastItem: undefined
})

const appid = '7e5327dc967ee87497d613e06eb772a0'
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/'

export const actions = {
    async getWeather({ commit }){
        const { data } = await this.$axios.get(`${weatherApiUrl}weather?units=metric&q=Tokyo&appid=${appid}`)
        commit('GET_WEATHER', data)
    },
    async getForecast({ commit }) {
        const { data } = await this.$axios.get(`${weatherApiUrl}forecast?units=metric&q=Tokyo&cnt=7&appid=${appid}`)
        commit('GET_FORECAST', data)
    }
}

export const mutations = {
    GET_WEATHER(state, data){
        state.weatherItem = data
    },
    GET_FORECAST(state, data){
        state.forecastItem = data
    }
}