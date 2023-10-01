/*
    1. create context
    2. provider component
    3. consumer
*/

import axios from "axios";
import { createContext, useState } from "react";
import { db_collection, getDocs } from "../firebase/firebase"
// STEP:01
const CartItemsContext = createContext({})


// STEP: 02
const CartItemsProvider = ({ children }) => {
    // global states
    // global functions
    let [itemsQuantity, setItemsQuantity] = useState(0)
    let [allproducts, setAllProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false)
    const [cartItems, setCartItems] = useState([])

    // for quantity of items
    const incrementQuantity = () => {
        setItemsQuantity(++itemsQuantity)
    }

    const decrementQuantity = () => {
        setItemsQuantity(--itemsQuantity)
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

    // fetch all products from db
    const getAllCartItems = async () => {
        let arr = [];
        let objToSend = {}

        let response = await getDocs(db_collection);
        response.forEach((doc) => {
            objToSend = {
                ...doc.data(),
                docId: doc.id
            }
            arr.push(objToSend)
        })
        // console.log(arr);

        // update cart items
        setCartItems([...arr])

        // update cart quantity
        setItemsQuantity(arr.length)
    }

    let objToSend = {
        itemsQuantity,
        incrementQuantity,
        allproducts,
        isLoading,
        fetchproducts,
        cartItems,
        setCartItems,
        decrementQuantity,
        setItemsQuantity,
        getAllCartItems
    }

    return <CartItemsContext.Provider value={objToSend}>{children}</CartItemsContext.Provider>
}

export { CartItemsContext, CartItemsProvider }
