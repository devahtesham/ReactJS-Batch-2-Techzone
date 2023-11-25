/*
    In REDUX CORE, States are immutable means it can not directly updated
*/
import ACTION__TYPES from "../Constants/ActionType"

const INITIAL__STATE_PRODUCTS = {
    isLoading:false,
    data:[],
}

const INITIAL__STATE_CART = {
    cartItems:[],
    quantity:0
}

const ProductHandlerReducer = (state = INITIAL__STATE_PRODUCTS, action)=>{
    switch(action.type){
        case ACTION__TYPES.GET_PRODUCTS:
            return{
                isLoading:true
            }
        case ACTION__TYPES.GET_PRODUCTS_SUCCESS :
            return{
                ...state,
                data:[...action.payload],
                isLoading:false
            }
        case ACTION__TYPES.GET_PRODUCTS_ERROR:
            return{
                isLoading:false
            }
        default:
            return {
                ...state
            }
    }
}

const AddToCartHandlerReducer = (state = INITIAL__STATE_CART,action)=>{
    switch(action.type){
        case ACTION__TYPES.ADD_TO_CART:
            return{
                ...state,
                quantity:state.quantity+1,
                cartItems:[...state.cartItems,action.payload]
            }
        default:
            return {
                ...state
            }
    }

}

export {
    ProductHandlerReducer,AddToCartHandlerReducer
}