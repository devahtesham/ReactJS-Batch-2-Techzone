import { applyMiddleware, createStore } from "redux";
import combinedReducer from "./CombinedReducer/CombinedReducer";
import thunk from "redux-thunk";

const store = createStore(combinedReducer,applyMiddleware(thunk));

export default store