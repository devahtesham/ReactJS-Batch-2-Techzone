import { combineReducers } from "redux";
import { CounterReducer, ResetCounterReducer } from "../Reducers/CounterReducers";
import { AddToCartHandlerReducer, ProductHandlerReducer } from "../Reducers/ProductReducer";

const combinedReducer = combineReducers({
    // CounterReducer:CounterReducer,
    // ResetCounterReducer:ResetCounterReducer,
    ProductHandlerReducer:ProductHandlerReducer,
    AddToCartHandlerReducer:AddToCartHandlerReducer,
});

export default combinedReducer