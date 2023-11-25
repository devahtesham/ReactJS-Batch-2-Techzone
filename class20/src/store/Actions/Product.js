import axios from "axios"
import ACTION__TYPES from "../Constants/ActionType";

const getProducts = () => {
    return async (dispatch) => {
        dispatch({
            type: ACTION__TYPES.GET_PRODUCTS,
        })
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            const data = response.data;
            // successfully data recieve
            dispatch({
                type: ACTION__TYPES.GET_PRODUCTS_SUCCESS,
                payload: data
            })
            
        } catch (error) {
            dispatch({
                type: ACTION__TYPES.GET_PRODUCTS_ERROR,
            })
        }



    }
}

const addToCart = (product) => {
    return (dispatch)=>{
        dispatch({
            type:ACTION__TYPES.ADD_TO_CART,
            payload:product
        })

    }
}

export {
    getProducts, addToCart
}