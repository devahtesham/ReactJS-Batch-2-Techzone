/*
    1. create context
    2. provider component
    3. consumer
*/

import axios from "axios";
import { createContext, useState } from "react";
import { db_collection, getDocs, getDoc, doc ,db} from "../firebase/firebase"
// STEP:01
const CartItemsContext = createContext({})


// STEP: 02
const CartItemsProvider = ({ children }) => {
    // global states
    // global functions
    let [itemsQuantity, setItemsQuantity] = useState(0)
    let [allproducts, setAllProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [userData,setUserData] = useState({})

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

    // get current user Details
    const getUserDetails = async() => {
        // getting current user id
        let userId = localStorage.getItem("user")

        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserData(docSnap.data())
        } else {
            console.log("No such document!");
        }
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
        getAllCartItems,
        getUserDetails,
        userData
    }

    return <CartItemsContext.Provider value={objToSend}>{children}</CartItemsContext.Provider>
}

export { CartItemsContext, CartItemsProvider }
