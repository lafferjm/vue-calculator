import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        result: "0",
        leftSide: "0"
    },
    mutations: {
        increment(state, value) {
            if (state.leftSide == 0) {
                state.leftSide = value.toString();
            } else {
                state.leftSide = state.leftSide + value.toString();
            }

            state.result = state.leftSide;
        }
    },
    getters: {
        result: state => state.result
    }
});

export default store;
