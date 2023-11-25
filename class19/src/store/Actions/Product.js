import axios from "axios"
import ACTION__TYPES from "../Constants/ActionType";

const getProducts = () => {
    return async (dispatch) => {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;

        // successfully data recieve
        dispatch({
            type: ACTION__TYPES.GET_PRODUCTS_SUCCESS,
            payload: data
        })

    }
}

export {
    getProducts
}