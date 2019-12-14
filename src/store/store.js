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
                if (state.operand == "+") {
                    state.result = Number(state.leftSide) + Number(state.rightSide);
                } else if (state.operand == "/") {
                    state.result = Number(state.leftSide) / Number(state.rightSide);
                } else if (state.operand == "x") {
                    state.result = Number(state.leftSide) * Number(state.rightSide);
                } else if (state.operand == "-") {
                    state.result = Number(state.leftSide) - Number(state.rightSide);
                } else if (state.operand == "%") {
                    state.result = Number(state.leftSide) % Number(state.rightSide);
                }

                state.rightSide = state.result;
                state.operand = null;
                state.leftSide = "0";
            } else {
                state.operand = value;
                state.leftSide = state.rightSide;
                state.rightSide = "0";
            }
        },
        callFunctional(state, value) {
            if (value == "AC") {
                state.result = "0";
                state.leftSide = "0";
                state.rightSide = "0";
                state.operand = null;
            } else if (value == "+/-") {
                state.rightSide = (Number(state.rightSide) * -1).toString();
                state.result = state.rightSide;
            } else if (value == "%") {
                state.operand = "%";
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
