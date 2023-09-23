/*
    1. create context
    2. provider component
    3. consumer
*/

import axios from "axios";
import { createContext, useState } from "react";

// STEP:01
const CartItemsContext = createContext({})


// STEP: 02
const CartItemsProvider = ({ children }) => {
    // global states
    // global functions
    let [itemsQuantity, setItemsQuantity] = useState(0)
    let [allproducts, setAllProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false)
    const [cartItems,setCartItems] = useState([])

    // for quantity of items
    const incrementQuantity = () => {
        setItemsQuantity(++itemsQuantity)
    }

    // get products
    const fetchproducts = () => {
        setIsLoading(true)
        axios.get("https://fakestoreapi.com/products/")
            .then((response) => {
                setIsLoading(false)
                setAllProducts(response.data)
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err);
            })
    }

    let objToSend = {
        itemsQuantity,
        incrementQuantity,
        allproducts,
        isLoading,
        fetchproducts,
        cartItems,
        setCartItems
    }

    return <CartItemsContext.Provider value={objToSend}>{children}</CartItemsContext.Provider>
}

export { CartItemsContext, CartItemsProvider }
