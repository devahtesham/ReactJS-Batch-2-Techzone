import ACTION__TYPES from "../Constants/ActionType"

const INITIAL__STATE = {
    isLoading:false,
    data:[],
    quantity:0
}

const ProductHandlerReducer = (state = INITIAL__STATE, action)=>{
    switch(action.type){
        case ACTION__TYPES.GET_PRODUCTS_SUCCESS :
            return{
                ...state,
                data:[...action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

export {
    ProductHandlerReducer
}