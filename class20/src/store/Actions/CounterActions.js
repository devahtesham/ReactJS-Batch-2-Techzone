import ACTION__TYPES from "../Constants/ActionType"

const incrementCounter = () => {
 
    return {
        type: ACTION__TYPES.INCREMENT_COUNTER
    }
}

const decrementCounter = () => {
  
    return {
        type: ACTION__TYPES.DECREMENT_COUNTER
    }
}

const resetCounter = () => {
  
    return {
        type: ACTION__TYPES.RESET_COUNTER
    }
}

export {
    incrementCounter,decrementCounter,resetCounter
}