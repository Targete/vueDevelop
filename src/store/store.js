import Vue from "vue"
import Vuex from "vuex"
// import getter from "./getter"

Vue.use(Vuex)
const state = {
    topStories: []
}
const mutations = {
    increment(state, options) {
        state.topStories = options
        console.log(state)
    }
}
const actions = {
    increment ({commit}, options) {
        commit('increment', options);
    }
}
const getters = {
    count: state => {
        return state.topStories;
    }  
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store