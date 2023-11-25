const INITIAL_STATE = {
    counter: 0
}
// console.log(INITIAL_STATE.counter)

const CounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER_A':
            // console.log(state.counter + 1)
            return {
                counter: state.counter + 1
            }

        case 'DECREMENT_COUNTER_A':
            // console.log(state.counter + 1)
            return {
                counter: state.counter - 1
            }
        default:
            return {
                ...state
            }
    }
}

export {
    CounterReducer   
}