import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./Slices/CounterSlice";
import { GetProductsReducer } from "./Slices/ProductSlice";

const store = configureStore({
    reducer:{
        CounterReducer,
        GetProductsReducer,
    }
})

export default store