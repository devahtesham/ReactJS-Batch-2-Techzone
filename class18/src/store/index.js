import { createStore } from "redux";
import { CounterReducer } from "./Reducers/CounterReducers";

const store = createStore(CounterReducer);

export default store