import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        result: 0
    },
    mutations: {
        increment(state, value) {
            state.result = state.result + value;
        }
    },
    getters: {
        result: state => state.result
    }
});

export default store;
