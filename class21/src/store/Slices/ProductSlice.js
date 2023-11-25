import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import STATUSES from "../Statuses"
import axios from "axios";

const INITIAL_STATE_PRODUCTS = {
    data:[],
    status:STATUSES
}
const getProducts = createSlice({
    name:"GET PRODUCTS",
    initialState:INITIAL_STATE_PRODUCTS,

    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            // console.log("pending block",action)
            state.status = STATUSES.ISLOADING
        }),

        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            // console.log("fulfilled block",action)
            state.status = STATUSES.ISLOADING_SUCCESS,
            state.data = [...action.payload]
        }),

        builder.addCase(fetchProducts.rejected,(state,action)=>{
            console.log("rejected block",action)
            state.status = STATUSES.ISLOADING_ERROR,
            state.data = []
        })
    }
})

const fetchProducts = createAsyncThunk("products/fetch",async ()=>{
    const response = await axios.get("https://fakestoreapi.com/products/");
    const data = response.data
    return data
})
const {reducer:GetProductsReducer} = getProducts

export {
    fetchProducts,GetProductsReducer
}

