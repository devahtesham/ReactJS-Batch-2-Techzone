/*
    1. create context
    2. provider component
    3. consumer
*/

import { createContext, useState } from "react";

// STEP:01
const CartItemsContext = createContext({})


// STEP: 02
const CartItemsProvider = ({children})=>{
    // global states
    // global functions
    let [itemsQuantity,setItemsQuantity] = useState(0)

    const incrementQuantity = ()=>{
        setItemsQuantity(++itemsQuantity)
    }

    let objToSend = {
        itemsQuantity,
        incrementQuantity,
    }

    return <CartItemsContext.Provider value={objToSend}>{children}</CartItemsContext.Provider>
}

export {CartItemsContext,CartItemsProvider}
