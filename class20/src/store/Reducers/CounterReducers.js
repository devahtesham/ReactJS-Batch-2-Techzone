import ACTION__TYPES from "../Constants/ActionType"

// const INITIAL_STATE = {
//     // counter: 0,
//     // reset:10
// }
// console.log(INITIAL_STATE.counter)

const CounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION__TYPES.INCREMENT_COUNTER:
            // console.log(state.counter + 1)
            return {
                ...state,
                counter: state.counter + 1
            }

        case ACTION__TYPES.DECREMENT_COUNTER:
            // console.log(state.counter + 1)
            return {
                ...state,
                counter: state.counter - 1
            }

        default:
            return {
                ...state
            }
    }
}

const ResetCounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION__TYPES.RESET_COUNTER:
            return {
                reset:0
            }
        default:
            return {
                ...state
            }

    }
}

export {
    CounterReducer, ResetCounterReducer
}