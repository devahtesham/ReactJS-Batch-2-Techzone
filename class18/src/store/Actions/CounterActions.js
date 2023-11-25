const incrementCounter = () => {
 
    return {
        type: "INCREMENT_COUNTER_A"
    }
}

const decrementCounter = () => {
  
    return {
        type: "DECREMENT_COUNTER_A"
    }
}

export {
    incrementCounter,decrementCounter
}