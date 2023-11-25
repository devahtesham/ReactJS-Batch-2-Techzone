import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    counter: 0
}
const CounterSlice = createSlice({
    name: "COUNTER SLICE",
    initialState: INITIAL_STATE,
    reducers: {
        increment: (state, action) => {
            console.log(action)
            state.counter += 1
        },

        decrement: (state, action) => {
            state.counter -= 1
        },

        reset: (state, action) => {
            state.counter = 0
        }

    }
});
const { increment, decrement, reset } = CounterSlice.actions;
const { reducer: CounterReducer } = CounterSlice

export {
    increment, decrement, reset, CounterReducer
}
