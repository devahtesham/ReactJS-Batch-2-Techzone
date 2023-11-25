import { combineReducers } from "redux";
import { CounterReducer, ResetCounterReducer } from "../Reducers/CounterReducers";
import { ProductHandlerReducer } from "../Reducers/ProductReducer";

const combinedReducer = combineReducers({
    // CounterReducer:CounterReducer,
    // ResetCounterReducer:ResetCounterReducer,
    ProductHandlerReducer:ProductHandlerReducer,
});

export default combinedReducer