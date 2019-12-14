import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        result: "0",
        leftSide: "0",
        rightSide: "0",
        operand: null,
    },
    mutations: {
        setNumber(state, value) {
            if (state.rightSide == "0") {
                state.rightSide = value;
            } else {
                state.rightSide = state.rightSide + value;
            }

            state.result = state.rightSide;
        },
        setOperand(state, value) {
            if (value == "=") {
                console.log("Left: " + state.leftSide);
                console.log("Right: " + state.rightSide);
                if (state.operand == "+") {
                    state.result = Number(state.leftSide) + Number(state.rightSide);
                } else if (state.operand == "/") {
                    state.result = Number(state.leftSide) / Number(state.rightSide);
                } else if (state.operand == "x") {
                    state.result = Number(state.leftSide) * Number(state.rightSide);
                } else if (state.operand == "-") {
                    state.result = Number(state.leftSide) - Number(state.rightSide);
                }

                state.leftSide = "0";
                state.rightSide = "0";
            } else {
                state.operand = value;
                state.leftSide = state.rightSide;
                state.rightSide = "0";
            }
        }
    },
    getters: {
        result: state => state.result
    }
});

export default store;
